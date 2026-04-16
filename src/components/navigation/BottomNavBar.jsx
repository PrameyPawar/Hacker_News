import { Link } from 'react-router-dom';

export default function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-nav z-50 flex items-center justify-around py-4 px-2 border-t border-outline-variant/10">
      <Link to="/" className="flex flex-col items-center gap-1 text-primary">
        <span className="material-symbols-outlined" data-icon="home" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Feed</span>
      </Link>
      <Link to="/search" className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined" data-icon="search">search</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Search</span>
      </Link>
      <Link to="/alerts" className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Alerts</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined" data-icon="person">person</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
      </Link>
    </nav>
  );
}
