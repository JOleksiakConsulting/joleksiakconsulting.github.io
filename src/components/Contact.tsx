import { Mail } from 'lucide-react';

const ENCODED_EMAIL = 'Y29udGFjdEBqb2xla3NpYWsucGw=';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/janol/',
    hoverBg: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/JOleksiakConsulting',
    hoverBg: 'hover:bg-slate-700 hover:border-slate-700',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-32 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight transition-colors duration-300">
          Let's Connect
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-14 max-w-prose mx-auto text-lg leading-relaxed transition-colors duration-300">
          I'm always interested in discussing engineering leadership, technology strategy,
          or potential collaboration opportunities. Feel free to reach out.
        </p>

        <div className="flex justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-14 h-14 border-2 border-slate-300 dark:border-slate-600 rounded-full transition-all duration-200 ${link.hoverBg} hover:text-white hover:scale-105 transform-gpu`}
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:' + atob(ENCODED_EMAIL);
            }}
            className="group flex items-center justify-center w-14 h-14 border-2 border-slate-300 dark:border-slate-600 rounded-full transition-all duration-200 hover:bg-accent-600 hover:border-accent-600 hover:text-white hover:scale-105 transform-gpu"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Based in Poland
          </p>
        </div>
      </div>
    </section>
  );
}
