import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  Briefcase, 
  Search, 
  Wallet, 
  Package, 
  StickyNote, 
  Settings,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils/cn';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Map, label: 'My Trips', path: '/my-trips' },
    { icon: Briefcase, label: 'Create Trip', path: '/create-trip' },
    { icon: Search, label: 'Explore Cities', path: '/city-search' },
    { icon: Wallet, label: 'Budget', path: '/budget' },
    { icon: Package, label: 'Packing List', path: '/packing' },
    { icon: StickyNote, label: 'Travel Notes', path: '/notes' },
    { icon: Settings, label: 'Profile', path: '/profile' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-64px)] bg-white/70 backdrop-blur-md border-r border-slate-200 sticky top-16 transition-all duration-300">
      <div className="flex-1 py-6 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600")} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-slate-200">
        <div className="bg-gradient-to-br from-primary to-accent-sky p-4 rounded-2xl text-white">
          <p className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">Upgrade to Pro</p>
          <p className="text-sm font-semibold mb-3">Get AI Travel Insights</p>
          <button className="w-full py-2 bg-white text-primary rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
