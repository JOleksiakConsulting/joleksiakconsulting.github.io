import { Cookie } from 'lucide-react';

declare global {
  interface Window {
    ppms?: {
      cm?: {
        api: (method: string, ...args: unknown[]) => void;
      };
    };
  }
}

function openConsentForm() {
  window.ppms?.cm?.api('openConsentForm');
}

export default function ConsentSettingsButton() {
  return (
    <button
      type="button"
      onClick={openConsentForm}
      aria-label="Privacy settings"
      title="Privacy settings"
      className="fixed bottom-4 left-4 z-40 p-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 opacity-60 hover:opacity-100 focus-visible:opacity-100 shadow-sm transition-all"
    >
      <Cookie className="w-4 h-4" />
    </button>
  );
}
