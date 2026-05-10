import { useState } from 'react';
import { 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  ChevronDown,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import TripCard from '../components/TripCard';
import { Link } from 'react-router-dom';

const MyTrips = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'draft'>('all');

  const trips = [
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
    },
    {
      id: '4',
      title: 'California Road Trip',
      location: 'San Francisco, LA',
      dates: 'May 10 - May 20, 2023',
      travelers: 2,
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800',
      status: 'completed' as const
    },
  ];

  const filteredTrips = filter === 'all' ? trips : trips.filter(t => t.status === filter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Trips</h1>
          <p className="text-slate-500">Manage and explore all your planned journeys in one place.</p>
        </div>
        <Link to="/create-trip" className="btn-primary flex items-center justify-center gap-2 py-4 px-8">
          <Plus className="w-5 h-5" />
          Plan New Adventure
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-100 w-full md:w-auto shadow-sm">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search trips..." 
              className="w-full bg-transparent border-none focus:ring-0 text-sm pl-10"
            />
          </div>
          <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-500 border border-slate-100 md:border-none">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex items-center p-1 bg-white rounded-xl border border-slate-100 shadow-sm">
            {['all', 'upcoming', 'completed', 'draft'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${filter === f ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center p-1 bg-white rounded-xl border border-slate-100 shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-slate-100 text-primary' : 'text-slate-400'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-slate-100 text-primary' : 'text-slate-400'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredTrips.length > 0 ? (
        <div className={viewMode === 'grid' ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
          {filteredTrips.map((trip, idx) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {viewMode === 'grid' ? (
                <TripCard {...trip} />
              ) : (
                <Link to={`/trip/${trip.id}`} className="glass-card flex flex-col sm:flex-row overflow-hidden border-none hover:shadow-xl transition-all group">
                  <div className="w-full sm:w-48 h-32 flex-shrink-0">
                    <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{trip.title}</h3>
                        <p className="text-sm text-slate-500">{trip.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        trip.status === 'upcoming' ? 'bg-primary/10 text-primary' :
                        trip.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 mt-4 text-xs font-medium text-slate-400">
                      <span>{trip.dates}</span>
                      <span>{trip.travelers} Travelers</span>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-card p-20 flex flex-col items-center justify-center text-center border-none">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
            <Search className="w-8 h-8 text-slate-200" />
          </div>
          <h3 className="text-xl font-bold mb-2">No trips found</h3>
          <p className="text-slate-500 max-w-sm mb-8">We couldn't find any trips matching your filters. Try adjusting them or start a new plan.</p>
          <button onClick={() => setFilter('all')} className="btn-secondary">Clear All Filters</button>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
