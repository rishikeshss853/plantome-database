import { Link, Outlet, useLocation } from 'react-router-dom';
import { Leaf, Moon, Sun, Info, Dna, Sparkles, FolderTree, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(true);
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
    <div className="min-h-screen w-full flex flex-col font-sans bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300">
      
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 dark:from-emerald-900 dark:via-teal-900 dark:to-emerald-950 text-emerald-100 dark:text-emerald-200 text-xs py-2 px-4 text-center font-medium tracking-wide shadow-inner flex items-center justify-center space-x-2 border-b border-emerald-700/30 dark:border-emerald-800/30">
        <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse shrink-0" />
        <span>Hindustan Institute of Technology and Science — Department of Biotechnology</span>
      </div>

      {/* Sticky Glassmorphic Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-sm transition-colors">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                  Plantome
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 font-semibold border border-emerald-300 dark:border-emerald-700">
                  DB v2.0
                </span>
              </div>
              <p className="text-[10px] text-stone-500 dark:text-stone-400">Campus Flora Phytochemical Database</p>
            </div>
          </Link>

          {/* Navigation Bar & Theme Control */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <nav className="flex items-center bg-stone-200/80 dark:bg-stone-800/80 p-1 rounded-xl border border-stone-300 dark:border-stone-700/60 text-xs sm:text-sm font-medium transition-colors">
              <Link 
                to="/" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/') 
                    ? 'bg-white text-emerald-700 dark:bg-stone-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                }`}
              >
                <Leaf className="h-3.5 w-3.5 inline" />
                <span>Plants</span>
              </Link>

              <Link 
                to="/families" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/families') 
                    ? 'bg-white text-emerald-700 dark:bg-stone-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                }`}
              >
                <FolderTree className="h-3.5 w-3.5 inline" />
                <span>Families</span>
              </Link>

              <Link 
                to="/compounds" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/compounds') 
                    ? 'bg-white text-emerald-700 dark:bg-stone-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                }`}
              >
                <Dna className="h-3.5 w-3.5 inline" />
                <span>Compounds</span>
              </Link>

              <Link 
                to="/about" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/about') 
                    ? 'bg-white text-emerald-700 dark:bg-stone-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                }`}
              >
                <Info className="h-3.5 w-3.5 inline" />
                <span>About</span>
              </Link>

              <Link 
                to="/contact" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/contact') 
                    ? 'bg-white text-emerald-700 dark:bg-stone-700 dark:text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                }`}
              >
                <Mail className="h-3.5 w-3.5 inline" />
                <span>Contact</span>
              </Link>
            </nav>

            {/* Dark/Light Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-stone-200 text-stone-700 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 transition-colors border border-stone-300 dark:border-stone-700"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-emerald-600" />}
            </button>
          </div>

        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-grow w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 py-8 mt-16 transition-colors">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
              Plantome Database Initiative
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Hindustan Institute of Technology and Science — Department of Biotechnology
            </p>
          </div>

<div className="flex flex-wrap justify-center gap-2 text-xs">
  {/* Faculty Coordinators */}
  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-semibold">
    Ms. LAKSHMI SUNDEEP (Assistant Professor)
  </span>
  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-semibold">
    Dr. J SANDHYA (Assistant Professor)
  </span>

  {/* Student Team */}
  <span className="px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-emerald-800 dark:text-emerald-300 font-semibold">
    VARSHINI S
  </span>
  <span className="px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-emerald-800 dark:text-emerald-300 font-semibold">
    RISHIKESH S S
  </span>
  <span className="px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-emerald-800 dark:text-emerald-300 font-semibold">
    PRADESH K
  </span>
  <span className="px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-emerald-800 dark:text-emerald-300 font-semibold">
    ROHIT
  </span>
</div>

          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}