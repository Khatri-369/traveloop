import { 
  Plus, 
  Map as MapIcon, 
  Globe, 
  Wallet, 
  History,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import StatsCard from '../components/StatsCard';
import TripCard from '../components/TripCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const stats = [
    { label: 'Total Trips', value: 12, icon: MapIcon, trend: { value: 10, isUp: true }, color: 'bg-primary' },
    { label: 'Cities Visited', value: 34, icon: Globe, trend: { value: 4, isUp: true }, color: 'bg-accent' },
    { label: 'Total Budget', value: '$12,450', icon: Wallet, color: 'bg-accent-orange' },
    { label: 'Saved Spots', value: 89, icon: History, color: 'bg-accent-sky' },
  ];

  const recentTrips = [
    {
      id: '1',
      title: 'European Summer Quest',
      location: 'Paris, Rome, Barcelona',
      dates: 'Aug 15 - Aug 30',
      travelers: 2,
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800',
      status: 'upcoming' as const
    },
    {
      id: '2',
      title: 'Bali Relaxation',
      location: 'Ubud, Canggu',
      dates: 'Oct 10 - Oct 20',
      travelers: 1,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      status: 'draft' as const
    },
    {
      id: '3',
      title: 'Japan Winter Wonderland',
      location: 'Tokyo, Kyoto, Osaka',
      dates: 'Dec 22 - Jan 05',
      travelers: 4,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
      status: 'upcoming' as const
    }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-2"
          >
            Welcome back, Om! 👋
          </motion.h1>
          <p className="text-slate-500">You have 2 upcoming trips this month. Ready to explore?</p>
        </div>
        <Link to="/create-trip" className="btn-primary flex items-center justify-center gap-2 py-4 px-8">
          <Plus className="w-5 h-5" />
          Create New Trip
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Recent Trips Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Trips</h2>
            <Link to="/my-trips" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {recentTrips.map((trip, idx) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
              >
                <TripCard {...trip} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Travel Inspiration / Activity Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Inspiration</h2>
          <div className="glass-card p-6 border-none bg-slate-900 text-white relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
              alt="Inspiration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-accent-sky" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent-sky">Trending Now</span>
              </div>
              <h3 className="text-xl font-bold mb-2 leading-snug">The Best Hidden Beaches in South East Asia</h3>
              <p className="text-slate-400 text-sm mb-6">Discover crystal clear waters and white sands that nobody knows about yet.</p>
              <button className="flex items-center gap-2 text-sm font-bold group">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="glass-card p-6 border-none space-y-4">
            <h3 className="font-bold">Travel Activity</h3>
            <div className="space-y-4">
              {[
                { label: 'Added 5 items to Packing List', time: '2 hours ago', icon: Plus },
                { label: 'Changed budget for Bali Trip', time: 'Yesterday', icon: Wallet },
                { label: 'Saved Kyoto to Bucket List', time: '2 days ago', icon: History },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.label}</p>
                    <p className="text-xs text-slate-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
