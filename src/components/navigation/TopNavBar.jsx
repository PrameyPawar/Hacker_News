import { Link } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-sm dark:shadow-none font-sans antialiased tracking-tight">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-bold tracking-tighter text-orange-600 dark:text-orange-500">The Digital Curator</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/top" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Top</Link>
            <Link to="/comments" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Comments</Link>
            <Link to="/ask" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Ask</Link>
            <Link to="/show" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Show</Link>
            <Link to="/jobs" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Jobs</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined text-stone-600" data-icon="dark_mode">dark_mode</span>
          </button>
          <Link to="/profile">
            <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/15" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcdxDjqVtmUa1zxQRzZN_U6i4Zx48CN6BfBynS06q_pw6yCrGv0OoTLa0Np5SBlNztCy_VEBCGrbbx_CZ7mceqUVw37S3yzSPmPZhPtkXpUlrO8rReWwAiYNB1FResJ6r6AjJyp2ud6eSlNCiNB30PKIPULnKeNy89Xr1PRI35M3-fWoWzYUhXNOlwnmw-nRmoaUyE7w0msOD4hK4jrgpllEo9Ln5vEGS4vE8LJds7VgkJyQ_ZDlG2foaeo46jyS4tIgOyeN3H7r0"/>
          </Link>
        </div>
      </div>
    </header>
  );
}
