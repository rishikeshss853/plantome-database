import { Link, Outlet, useLocation } from 'react-router-dom';
import { Leaf, Moon, Sun, Info, Dna, Sparkles, FolderTree, QrCode } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  // Default to Dark Mode so the background is always dark stone
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
    <div className="min-h-screen w-full flex flex-col font-sans bg-stone-950 text-stone-100 transition-colors duration-300">
      
      {/* Top Announcement / Department Banner */}
      <div className="w-full bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-emerald-200 text-xs py-2 px-4 text-center font-medium tracking-wide shadow-inner flex items-center justify-center space-x-2 border-b border-emerald-800/30">
        <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse shrink-0" />
        <span>Hindustan Institute of Technology and Science — Department of Biotechnology</span>
      </div>

      {/* Sticky Glassmorphic Navbar (Full Bleed Width) */}
      <header className="sticky top-0 z-50 w-full bg-stone-900/90 backdrop-blur-md border-b border-stone-800 shadow-md">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Plantome
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 font-semibold border border-emerald-700">
                  DB v2.0
                </span>
              </div>
              <p className="text-[10px] text-stone-400">Campus Flora Phytochemical Database</p>
            </div>
          </Link>

          {/* Nav Links & Theme Control */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <nav className="flex items-center bg-stone-800/80 p-1 rounded-xl border border-stone-700/60 text-xs sm:text-sm font-medium">
              <Link 
                to="/" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/') 
                    ? 'bg-stone-700 text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Leaf className="h-3.5 w-3.5 inline" />
                <span>Plants</span>
              </Link>

              <Link 
                to="/families" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/families') 
                    ? 'bg-stone-700 text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <FolderTree className="h-3.5 w-3.5 inline" />
                <span>Families</span>
              </Link>

              <Link 
                to="/compounds" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/compounds') 
                    ? 'bg-stone-700 text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Dna className="h-3.5 w-3.5 inline" />
                <span>Compounds</span>
              </Link>
              <Link 
  to="/qr-codes" 
  className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
    isActive('/qr-codes') 
      ? 'bg-stone-700 text-emerald-300 shadow-sm font-semibold' 
      : 'text-stone-400 hover:text-stone-200'
  }`}
>
  <QrCode className="h-3.5 w-3.5 inline" />
  <span>QR / AR Tags</span>
</Link>
              <Link 
                to="/about" 
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 ${
                  isActive('/about') 
                    ? 'bg-stone-700 text-emerald-300 shadow-sm font-semibold' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Info className="h-3.5 w-3.5 inline" />
                <span>About</span>
              </Link>
            </nav>

            {/* Dark/Light Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:bg-stone-700 transition-colors border border-stone-700"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-emerald-400" />}
            </button>
          </div>

        </div>
      </header>

      {/* Main Page Content (Full Screen Expanded Width) */}
      <main className="flex-grow w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-8">
        <Outlet />
      </main>

      {/* Footer (Full Bleed Width) */}
      <footer className="w-full bg-stone-900 border-t border-stone-800 py-8 mt-16 transition-colors">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Plantome Database Initiative
            </p>
            <p className="text-xs text-stone-400 mt-0.5">
              Hindustan Institute of Technology and Science — Department of Biotechnology
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-emerald-300 font-semibold">
              VARSHINI S
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-emerald-300 font-semibold">
              PRADESH K
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-emerald-300 font-semibold">
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