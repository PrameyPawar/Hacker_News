import { Link } from 'react-router-dom';

export default function SideNavBar() {
  return (
    <aside className="hidden lg:flex flex-col p-4 h-screen w-64 border-r border-stone-200 dark:border-stone-800 sticky top-20 font-sans text-sm">
      <div className="mb-8">
        <h2 className="font-black text-orange-600 text-xl tracking-tighter">The Curator</h2>
        <p className="text-stone-500 text-xs">Hacker News Redefined</p>
      </div>
      <nav className="space-y-1 mb-8">
        <Link to="/" className="flex items-center gap-3 px-3 py-2 bg-stone-200 dark:bg-stone-800 text-orange-600 font-semibold rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined" data-icon="home">home</span> Home
        </Link>
        <Link to="/top" className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span> Top
        </Link>
        <Link to="/show" className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined" data-icon="visibility">visibility</span> Show
        </Link>
        <Link to="/ask" className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined" data-icon="help">help</span> Ask
        </Link>
        <Link to="/jobs" className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg transition-all duration-300">
          <span className="material-symbols-outlined" data-icon="work">work</span> Jobs
        </Link>
      </nav>
      <button className="mt-auto bg-gradient-to-br from-primary to-primary-container text-white py-3 rounded-xl font-bold tracking-tight shadow-md hover:shadow-lg transition-shadow active:scale-95 duration-200">
        Submit Story
      </button>
    </aside>
  );
}
