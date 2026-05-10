import { useState } from 'react';
import { Search, MapPin, Star, Filter, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const CitySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const cities = [
    { id: 1, name: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800', budget: '$$$', rating: 4.9, tags: ['Culture', 'Food', 'Tech'] },
    { id: 2, name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800', budget: '$$$$', rating: 4.8, tags: ['Art', 'Romantic', 'History'] },
    { id: 3, name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', budget: '$$', rating: 4.7, tags: ['Beach', 'Nature', 'Wellness'] },
    { id: 4, name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800', budget: '$$$', rating: 4.9, tags: ['History', 'Food', 'Architecture'] },
    { id: 5, name: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800', budget: '$$$$', rating: 4.6, tags: ['Urban', 'Shopping', 'Diverse'] },
    { id: 6, name: 'Cape Town', country: 'South Africa', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800', budget: '$$', rating: 4.8, tags: ['Nature', 'Adventure', 'Wine'] },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold">Discover Your Next Destination</h1>
        <p className="text-slate-500">Explore over 5,000+ cities around the world with AI-powered recommendations.</p>
        
        <div className="relative mt-8 group">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative glass-card p-2 border-none shadow-2xl flex items-center gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Where do you want to go?" 
                className="w-full bg-transparent border-none focus:ring-0 py-4 pl-12 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn-primary py-4 px-8 hidden sm:block">Search Cities</button>
          </div>
        </div>
      </div>

      {/* Filters & Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 space-y-8">
          <div className="glass-card p-6 border-none space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Filters</h3>
              <button className="text-xs text-primary font-bold">Reset</button>
            </div>
            
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Region</p>
              {['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'].map(reg => (
                <label key={reg} className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{reg}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Budget Range</p>
              <div className="flex gap-2">
                {['$', '$$', '$$$', '$$$$'].map(b => (
                  <button key={b} className="flex-1 py-2 bg-slate-50 rounded-xl text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all">
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Cities Grid */}
        <div className="flex-1 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cities.map((city, idx) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group glass-card overflow-hidden border-none hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={city.image} alt={city.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-rose-500 hover:text-white transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {city.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{city.name}</h3>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {city.country}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-accent-orange">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">{city.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
                  <span className="text-sm font-bold text-slate-400">Budget: <span className="text-slate-900">{city.budget}</span></span>
                  <button className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySearch;
