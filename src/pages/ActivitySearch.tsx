import { useState } from 'react';
import { Search, Star, Clock, Tag, Plus, Filter, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivitySearch = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sightseeing', 'Adventure', 'Food', 'Nightlife', 'Shopping', 'Cultural'];

  const activities = [
    { id: 1, title: 'Morning Seine River Cruise', location: 'Paris, France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800', price: '$45', rating: 4.8, duration: '2h', category: 'Sightseeing' },
    { id: 2, title: 'Mount Batur Sunrise Trek', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', price: '$80', rating: 4.9, duration: '6h', category: 'Adventure' },
    { id: 3, title: 'Tokyo Food Tour', location: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800', price: '$120', rating: 4.9, duration: '4h', category: 'Food' },
    { id: 4, title: 'Gothic Quarter Night Walk', location: 'Barcelona, Spain', image: 'https://images.unsplash.com/photo-1583997051651-8518cf063e15?auto=format&fit=crop&q=80&w=800', price: '$35', rating: 4.7, duration: '3h', category: 'Cultural' },
    { id: 5, title: 'Rome Cooking Class', location: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800', price: '$95', rating: 4.8, duration: '3h', category: 'Food' },
    { id: 6, title: 'Safari Day Trip', location: 'Cape Town, South Africa', image: 'https://images.unsplash.com/photo-1516422317184-268d71010e4a?auto=format&fit=crop&q=80&w=800', price: '$250', rating: 4.9, duration: '10h', category: 'Adventure' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Explore Activities</h1>
          <p className="text-slate-500">Unforgettable experiences curated just for you.</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search experiences..." 
            className="input-field pl-12"
          />
        </div>
      </div>

      {/* Categories Scroller */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-slate-500 border border-slate-100 hover:border-primary/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, idx) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-card overflow-hidden border-none hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={activity.image} alt={activity.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {activity.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-2xl font-bold">{activity.price}</p>
                <p className="text-xs text-white/70 uppercase font-bold tracking-widest">per person</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">{activity.title}</h3>
                  <p className="text-slate-400 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {activity.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-accent-orange bg-accent-orange/10 px-2 py-1 rounded-lg">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-xs font-black">{activity.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {activity.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" /> Best Price
                  </div>
                </div>
                <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySearch;
