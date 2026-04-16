import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  
  // Local state for mock toggles
  const [notifications, setNotifications] = useState({
    replies: true,
    dm: true,
    digest: false
  });
  
  const [privacy, setPrivacy] = useState({
    public: true,
    indexing: false
  });

  return (
    <div className="max-w-2xl mx-auto space-y-10 animate-fade-in pb-12">
      <header className="border-b border-outline-variant/10 pb-6">
        <h1 className="text-3xl font-black text-on-surface tracking-tight">Settings</h1>
        <p className="text-sm text-on-surface-variant mt-1">Manage your curated experience</p>
      </header>

      {/* Account Details */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Account Details</h2>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface pl-1">Username</label>
            <input 
              type="text" 
              defaultValue="curator_max"
              className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium text-on-surface" 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface pl-1">Email</label>
            <input 
              type="email" 
              defaultValue="max@digitalcurator.io"
              className="w-full bg-surface-container-low border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium text-on-surface" 
            />
          </div>
          <button className="text-sm font-bold text-primary flex items-center gap-2 hover:translate-x-1 transition-transform duration-200 mt-2">
            Change Password <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Appearance Section */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Appearance/Theme</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <button 
            onClick={() => theme === 'dark' && toggleTheme()}
            className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme !== 'dark' ? 'border-primary bg-surface-container-lowest shadow-sm scale-[1.02]' : 'border-transparent bg-surface-container-low hover:border-outline-variant/30'}`}
          >
            <span className={`material-symbols-outlined ${theme !== 'dark' ? 'text-primary' : 'text-on-surface-variant'}`}>light_mode</span>
            <span className={`text-xs font-bold ${theme !== 'dark' ? 'text-primary' : 'text-on-surface-variant'}`}>Light</span>
          </button>
          
          <button 
            onClick={() => theme !== 'dark' && toggleTheme()}
            className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'dark' ? 'border-primary bg-surface-container-lowest shadow-sm scale-[1.02]' : 'border-transparent bg-surface-container-low hover:border-outline-variant/30'}`}
          >
            <span className={`material-symbols-outlined ${theme === 'dark' ? 'text-primary' : 'text-on-surface-variant'}`}>dark_mode</span>
            <span className={`text-xs font-bold ${theme === 'dark' ? 'text-primary' : 'text-on-surface-variant'}`}>Dark</span>
          </button>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Notification Preferences</h2>
        <div className="space-y-2 bg-surface-container-low rounded-xl p-2 select-none">
          {Object.entries(notifications).map(([key, val]) => (
            <label key={key} className="flex items-center justify-between p-3 hover:bg-surface-container-lowest rounded-lg transition-colors cursor-pointer group">
              <span className="text-sm font-medium text-on-surface capitalize">{key === 'dm' ? 'Direct Messages' : key + ' Notifications'}</span>
              <div className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only" 
                  checked={val} 
                  onChange={() => setNotifications({ ...notifications, [key]: !val })} 
                />
                <div className={`w-11 h-6 rounded-full transition-all flex items-center px-0.5 ${val ? 'bg-primary justify-end' : 'bg-surface-container-highest justify-start'}`}>
                  <div className="w-5 h-5 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* Privacy Section */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Privacy</h2>
        <div className="space-y-3">
          <label className="flex items-start gap-4 p-4 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors group">
            <input 
              type="checkbox" 
              checked={privacy.public}
              onChange={() => setPrivacy({ ...privacy, public: !privacy.public })}
              className="mt-1 w-5 h-5 rounded border-0 text-primary focus:ring-primary focus:ring-offset-0 bg-surface-container-highest" 
            />
            <div>
              <span className="block text-sm font-semibold text-on-surface">Public Profile Visibility</span>
              <span className="block text-xs text-on-surface-variant opacity-70 mt-1">Allow other curators to see your reading history.</span>
            </div>
          </label>
          <label className="flex items-start gap-4 p-4 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors group">
            <input 
              type="checkbox" 
              checked={privacy.indexing}
              onChange={() => setPrivacy({ ...privacy, indexing: !privacy.indexing })}
              className="mt-1 w-5 h-5 rounded border-0 text-primary focus:ring-primary focus:ring-offset-0 bg-surface-container-highest" 
            />
            <div>
              <span className="block text-sm font-semibold text-on-surface">Search Engine Indexing</span>
              <span className="block text-xs text-on-surface-variant opacity-70 mt-1">Make your curated lists available on Google.</span>
            </div>
          </label>
        </div>
      </section>

      {/* Sticky Save area Mock */}
      <div className="pt-8 flex flex-col gap-3 max-w-sm">
        <button className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg hover:shadow-primary-container/30 transition-all active:scale-[0.98]">
          Save Changes
        </button>
        <div className="flex gap-6 mt-4 opacity-50 hover:opacity-100 transition-opacity">
          <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-on-surface hover:text-error transition-colors">
            <span className="material-symbols-outlined text-[16px]">logout</span> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
