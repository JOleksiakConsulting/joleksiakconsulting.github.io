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
];

export default function Testimonials() {
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={`${testimonial.name}-${index}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
