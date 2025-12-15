import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-600/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <p className="text-accent-600 dark:text-accent-400 font-medium tracking-wide uppercase text-sm mb-4">
              Director of Engineering
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
              Jan Oleksiak
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-xl transition-colors duration-300">
              Engineering and product leader with 9+ years in IT. I care about how teams 
              work day to day - the technology, the processes, the communication, and most 
              importantly, the people. Outside of work, I'm probably lifting weights, listening to classic 
              rock, or rolling dice in an RPG session.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium rounded-lg transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-600/20 to-transparent rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-2xl transform-gpu transition-colors duration-300">
                <img
                  src="/profile.jpg"
                  alt="Jan Oleksiak - Director of Engineering"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
