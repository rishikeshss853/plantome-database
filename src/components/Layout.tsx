import { Link, Outlet, useLocation } from 'react-router-dom';
import { Leaf, Moon, Sun, BookOpen, Info, Dna, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300">
      {/* Top Announcement / Department Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-emerald-100 text-xs py-1.5 px-4 text-center font-medium tracking-wide shadow-inner flex items-center justify-center space-x-2">
        <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
        <span>Hindustan Institute of Technology and Science — Department of Biotechnology</span>
      </div>

      {/* Sticky Glassmorphic Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-emerald-100/60 dark:border-stone-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                  Plantome
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-700">
                  DB v2.0
                </span>
              </div>
              <p className="text-[10px] text-stone-500 dark:text-stone-400">Campus Flora Phytochemical Database</p>
            </div>
          </Link>

          {/* Nav Links & Controls */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <nav className="flex items-center bg-stone-100 dark:bg-stone-800/80 p-1 rounded-xl border border-stone-200/80 dark:border-stone-700/60 text-xs sm:text-sm font-medium">
              <Link 
                to="/" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/') 
                    ? 'bg-white dark:bg-stone-700 text-emerald-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <Leaf className="h-3.5 w-3.5 inline" />
                <span>Plants</span>
              </Link>
              
              <Link 
                to="/compounds" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/compounds') 
                    ? 'bg-white dark:bg-stone-700 text-emerald-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <Dna className="h-3.5 w-3.5 inline" />
                <span>Compounds</span>
              </Link>

              <Link 
                to="/about" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/about') 
                    ? 'bg-white dark:bg-stone-700 text-emerald-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <Info className="h-3.5 w-3.5 inline" />
                <span>About</span>
              </Link>
            </nav>

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-emerald-50 dark:hover:bg-stone-700 transition-colors border border-stone-200 dark:border-stone-700"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-emerald-700" />}
            </button>
          </div>

        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 py-8 mt-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-bold bg-gradient-to-r from-emerald-800 to-teal-700 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
              Plantome Database Initiative
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Hindustan Institute of Technology and Science — Department of Biotechnology
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-stone-800 border border-emerald-200 dark:border-stone-700 text-emerald-800 dark:text-emerald-300 font-semibold">
              VARSHINI S
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-stone-800 border border-emerald-200 dark:border-stone-700 text-emerald-800 dark:text-emerald-300 font-semibold">
              PRADESH K
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-stone-800 border border-emerald-200 dark:border-stone-700 text-emerald-800 dark:text-emerald-300 font-semibold">
              ROHIT
            </span>
          </div>

          <p className="text-xs text-stone-400 dark:text-stone-500">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}