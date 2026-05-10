import { Link } from 'react-router-dom';
import { Plane, Search, Calendar, User, Bell, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeProvider';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-primary/30">
            <Plane className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-poppins bg-gradient-to-r from-primary to-accent-sky bg-clip-text text-transparent">
            Traveloop
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/dashboard" className="text-slate-600 hover:text-primary transition-colors font-medium">Dashboard</Link>
          <Link to="/my-trips" className="text-slate-600 hover:text-primary transition-colors font-medium">My Trips</Link>
          <Link to="/city-search" className="text-slate-600 hover:text-primary transition-colors font-medium">Explore</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="w-9 h-9 bg-accent-sky/10 text-accent-sky rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-slate-500">Welcome,</p>
              <p className="text-sm font-semibold">Om Kumar</p>
            </div>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
