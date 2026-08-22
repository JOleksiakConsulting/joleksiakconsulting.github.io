import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: 'He proactively takes on difficult topics and sees his work through from start to finish. He has a natural ability to spot bottlenecks in processes, diagnose them, and remove them. He consults with the team, but he never comes to a discussion empty-handed.',
    name: 'Konstanty Karagiorgis',
    role: 'Staff Engineer',
    company: 'Piwik PRO',
  },
  {
    quote: 'Something I appreciated was that he always felt free to share a different view with me, and he backed it with solid reasoning. Our decisions were better for it.\n\nI would gladly work with him again.',
    name: 'Kuba Bomba',
    role: 'CTO & CPO',
    company: 'Piwik PRO',
  },
  {
    quote: 'Janek builds strong relationships across the board - with senior leadership, fellow managers, and engineers alike - and people trust him because of it. Every conversation with him ended with a clear conclusion, and working through problems together was consistently fruitful.',
    name: 'Wiktor Lewandowski',
    role: 'Director of DevOps & Security',
    company: 'Piwik PRO',
  },
  {
    quote: 'Jan is one of those leaders who makes complex engineering organizations work without making it look complicated. Over the years, I\'ve seen him successfully balance technology strategy, people leadership, and effective delivery.',
    name: 'Piotr Słonina',
    role: 'Director of Customer Experience',
    company: 'Piwik PRO',
  },
];

const TABLET_MEDIA_QUERY = '(min-width: 768px)';
const DESKTOP_MEDIA_QUERY = '(min-width: 1024px)';
const SWIPE_MIN_DISTANCE = 40;
const CLICK_TOLERANCE = 5;

function getInitialPerView() {
  if (typeof window === 'undefined') {
    return 1;
  }

  const isDesktop = window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
  const isTablet = window.matchMedia(TABLET_MEDIA_QUERY).matches;

  return isDesktop ? 3 : isTablet ? 2 : 1;
}

function usePerView() {
  const [perView, setPerView] = useState(getInitialPerView);

  useEffect(() => {
    const tabletQuery = window.matchMedia(TABLET_MEDIA_QUERY);
    const desktopQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const updatePerView = () => {
      setPerView(desktopQuery.matches ? 3 : tabletQuery.matches ? 2 : 1);
    };

    updatePerView();
    tabletQuery.addEventListener('change', updatePerView);
    desktopQuery.addEventListener('change', updatePerView);

    return () => {
      tabletQuery.removeEventListener('change', updatePerView);
      desktopQuery.removeEventListener('change', updatePerView);
    };
  }, []);

  return perView;
}

export default function Testimonials() {
  const perView = usePerView();
  const maxIndex = Math.max(0, testimonials.length - perView);
  const [index, setIndex] = useState(0);
  const [dragDelta, setDragDelta] = useState<number | null>(null);
  const dragStartXRef = useRef<number | null>(null);
  const dragStartYRef = useRef<number | null>(null);
  const dragPointerIdRef = useRef<number | null>(null);
  const dragDeltaRef = useRef(0);
  const dragAxisRef = useRef<'horizontal' | 'vertical' | null>(null);
  const hasHorizontalDragRef = useRef(false);
  const suppressClickRef = useRef(false);
  const activeIndex = Math.min(index, maxIndex);
  const hasOverflow = testimonials.length > perView;
  const rangeStart = activeIndex + 1;
  const rangeEnd = Math.min(activeIndex + perView, testimonials.length);
  const trackOffset = activeIndex * (100 / perView);
  const trackTransform =
    dragDelta === null
      ? `translateX(-${trackOffset}%)`
      : `translateX(calc(-${trackOffset}% + ${dragDelta}px))`;
  const liveMessage =
    perView === 1
      ? `Testimonial ${rangeStart} of ${testimonials.length}`
      : `Testimonials ${rangeStart} to ${rangeEnd} of ${testimonials.length}`;

  useEffect(() => {
    setIndex((currentIndex) => Math.min(currentIndex, maxIndex));
  }, [maxIndex]);

  const goToIndex = (nextIndex: number) => {
    setIndex(Math.min(Math.max(nextIndex, 0), maxIndex));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasOverflow) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToIndex(activeIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToIndex(activeIndex + 1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasOverflow || event.button !== 0 || !event.isPrimary) {
      return;
    }

    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    dragPointerIdRef.current = event.pointerId;
    dragDeltaRef.current = 0;
    dragAxisRef.current = null;
    hasHorizontalDragRef.current = false;
    suppressClickRef.current = false;
    setDragDelta(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      dragStartXRef.current === null ||
      dragStartYRef.current === null ||
      dragPointerIdRef.current !== event.pointerId
    ) {
      return;
    }

    const deltaX = event.clientX - dragStartXRef.current;
    const deltaY = event.clientY - dragStartYRef.current;

    if (dragAxisRef.current === null) {
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) <= CLICK_TOLERANCE) {
        return;
      }

      dragAxisRef.current = Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical';
    }

    if (dragAxisRef.current !== 'horizontal') {
      return;
    }

    dragDeltaRef.current = deltaX;
    setDragDelta(deltaX);

    if (Math.abs(deltaX) > CLICK_TOLERANCE) {
      hasHorizontalDragRef.current = true;
      event.preventDefault();
    }
  };

  const finishPointer = (event: PointerEvent<HTMLDivElement>, shouldNavigate: boolean) => {
    if (dragPointerIdRef.current !== event.pointerId || dragStartXRef.current === null) {
      return;
    }

    const delta = dragDeltaRef.current;
    const hasDrag = hasHorizontalDragRef.current;
    let didSwipe = false;

    if (shouldNavigate && hasDrag) {
      const slideWidth = event.currentTarget.clientWidth / perView;
      const swipeThreshold = Math.max(SWIPE_MIN_DISTANCE, slideWidth * 0.15);

      didSwipe = Math.abs(delta) >= swipeThreshold;

      if (didSwipe) {
        goToIndex(activeIndex + (delta < 0 ? 1 : -1));
      }
    }

    if (didSwipe) {
      suppressClickRef.current = true;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragStartXRef.current = null;
    dragStartYRef.current = null;
    dragPointerIdRef.current = null;
    dragDeltaRef.current = 0;
    dragAxisRef.current = null;
    hasHorizontalDragRef.current = false;
    setDragDelta(null);
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="pb-28 md:pb-32 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight transition-colors duration-300"
          >
            In their words
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-prose mx-auto text-lg leading-relaxed transition-colors duration-300">
            People I've worked with, on what that was like.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-4 dark:focus-visible:ring-accent-400 dark:focus-visible:ring-offset-slate-900"
        >
          <div
            className={`-mx-3 overflow-hidden touch-pan-y ${
              dragDelta !== null ? 'select-none' : ''
            }`}
            onPointerDown={hasOverflow ? handlePointerDown : undefined}
            onPointerMove={hasOverflow ? handlePointerMove : undefined}
            onPointerUp={hasOverflow ? (event) => finishPointer(event, true) : undefined}
            onPointerCancel={hasOverflow ? (event) => finishPointer(event, false) : undefined}
            onClickCapture={hasOverflow ? handleClickCapture : undefined}
          >
            <div
              className={`flex w-full ${
                dragDelta === null ? 'transition-transform duration-300' : 'transition-none'
              } ${
                dragDelta !== null
                  ? 'cursor-grabbing'
                  : hasOverflow
                    ? 'cursor-grab'
                    : ''
              }`}
              style={{ transform: trackTransform }}
            >
              {testimonials.map((testimonial, testimonialIndex) => (
                <div
                  key={`${testimonial.name}-${testimonialIndex}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${testimonialIndex + 1} of ${testimonials.length}`}
                  className="shrink-0 flex px-3"
                  style={{ flexBasis: `${100 / perView}%` }}
                >
                  <figure
                    className="h-full flex flex-col p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl hover:border-accent-600/30 dark:hover:border-accent-400/30 hover:shadow-sm transition-all duration-200 transform-gpu"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span
                      aria-hidden="true"
                      className="select-none text-6xl leading-none text-accent-600/30 dark:text-accent-400/30 font-serif"
                    >
                      “
                    </span>
                    <blockquote className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line transition-colors duration-300">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-auto pt-6">
                      <p className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-accent-600 dark:text-accent-400 font-semibold mt-1 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300">
                        {testimonial.company}
                      </p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {hasOverflow && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonials"
                disabled={activeIndex === 0}
                onClick={() => goToIndex(activeIndex - 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-accent-600 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 dark:focus-visible:ring-accent-400 dark:focus-visible:ring-offset-slate-900"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                aria-label="Next testimonials"
                disabled={activeIndex === maxIndex}
                onClick={() => goToIndex(activeIndex + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-accent-600 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 dark:focus-visible:ring-accent-400 dark:focus-visible:ring-offset-slate-900"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}

          <span className="sr-only" aria-live="polite">
            {liveMessage}
          </span>
        </div>
      </div>
    </section>
  );
}
