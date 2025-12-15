import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-accent-500 dark:hover:border-accent-500 shadow-lg transition-all duration-200 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-slate-300 group-hover:text-accent-400 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 group-hover:text-accent-600 transition-colors" />
      )}
    </button>
  );
}
