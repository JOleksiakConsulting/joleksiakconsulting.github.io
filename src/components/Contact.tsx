import { Linkedin, Mail, Github } from 'lucide-react';

const ENCODED_EMAIL = 'Y29udGFjdEBqb2xla3NpYWsucGw=';

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/janol/',
    hoverBg: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/JOleksiakConsulting',
    hoverBg: 'hover:bg-slate-700 hover:border-slate-700',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
          Let's Connect
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto transition-colors duration-300">
          I'm always interested in discussing engineering leadership, technology strategy,
          or potential collaboration opportunities. Feel free to reach out.
        </p>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-14 h-14 border-2 border-slate-300 dark:border-slate-600 rounded-full transition-all duration-200 ${link.hoverBg} hover:text-white transform-gpu`}
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
            className="group flex items-center justify-center w-14 h-14 border-2 border-slate-300 dark:border-slate-600 rounded-full transition-all duration-200 hover:bg-accent-600 hover:border-accent-600 hover:text-white transform-gpu"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Based in Poland
          </p>
        </div>
      </div>
    </section>
  );
}
