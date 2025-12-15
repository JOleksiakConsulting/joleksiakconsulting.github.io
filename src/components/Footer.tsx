import { ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Jan Oleksiak. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            className="flex items-center gap-2 text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 text-sm transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
