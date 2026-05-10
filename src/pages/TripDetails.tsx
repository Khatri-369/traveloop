import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Share2, 
  Edit3, 
  Clock,
  MoreHorizontal,
  Plane,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const TripDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'budget' | 'packing' | 'notes'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'budget', label: 'Budget' },
    { id: 'packing', label: 'Packing' },
    { id: 'notes', label: 'Notes' },
  ];

  const trip = {
    title: 'European Summer Quest',
    location: 'Paris, Rome, Barcelona',
    dates: 'Aug 15 - Aug 30',
    duration: '15 Days',
    travelers: 2,
    budget: '$5,000',
    spent: '$1,200',
    image: 'https://images.unsplash.com/photo-1493336058163-9588c606bb5a?auto=format&fit=crop&q=80&w=1200',
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 rounded-[40px] overflow-hidden shadow-2xl">
        <img src={trip.image} className="w-full h-full object-cover" alt="Banner" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
          <div>
            <div className="flex items-center gap-2 text-primary-light mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-widest">{trip.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{trip.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
            <Link to={`/trip/${id}/edit`} className="p-3 bg-white text-primary rounded-2xl hover:bg-opacity-90 transition-all">
              <Edit3 className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats Overlay */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-16 relative z-10 px-4">
        {[
          { label: 'Dates', value: trip.dates, icon: Calendar },
          { label: 'Duration', value: trip.duration, icon: Clock },
          { label: 'Travelers', value: trip.travelers, icon: Users },
          { label: 'Total Budget', value: trip.budget, icon: WalletIcon },
        ].map(stat => (
          <div key={stat.label} className="glass-card p-4 flex items-center gap-4 border-none shadow-xl">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
              <p className="text-sm font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 p-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "px-8 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
              activeTab === tab.id ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && <TripOverview />}
            {activeTab === 'itinerary' && <TripItinerary />}
            {activeTab === 'budget' && <TripBudget />}
            {activeTab === 'packing' && <TripPacking />}
            {activeTab === 'notes' && <TripNotes />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Sub-components for Tabs
const TripOverview = () => (
  <div className="grid lg:grid-cols-3 gap-10">
    <div className="lg:col-span-2 space-y-8">
      <div className="glass-card p-8 border-none space-y-4">
        <h3 className="text-xl font-bold">About this trip</h3>
        <p className="text-slate-500 leading-relaxed">
          Exploring the best of Europe this summer! Starting from the romantic streets of Paris, 
          moving through the historical wonders of Rome, and finishing with the vibrant culture 
          and beaches of Barcelona.
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Highlights</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'Eiffel Tower Picnic',
            'Colosseum Tour',
            'Sagrada Familia Visit',
            'Italian Pasta Workshop',
          ].map(item => (
            <div key={item} className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="glass-card p-6 border-none bg-primary text-white">
        <h3 className="font-bold mb-4">Travel Progress</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold uppercase">
            <span>Planning</span>
            <span>65%</span>
          </div>
          <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-white rounded-full"></div>
          </div>
        </div>
        <p className="text-xs text-white/70 mt-4">Almost ready! Just need to finalize packing and a few bookings.</p>
      </div>
      
      <div className="glass-card p-6 border-none space-y-4">
        <h3 className="font-bold">Next Stop</h3>
        <div className="p-4 bg-slate-50 rounded-2xl flex gap-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
            <Plane className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase">Paris Arrival</p>
            <p className="text-sm font-bold">Aug 15, 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TripItinerary = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">Daily Plan</h3>
      <button className="btn-primary py-2 px-4 flex items-center gap-2 text-sm">
        <Plus className="w-4 h-4" /> Add Activity
      </button>
    </div>
    <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
      {[1, 2, 3].map(day => (
        <div key={day} className="relative pl-16">
          <div className="absolute left-0 top-0 w-12 h-12 bg-white border-4 border-slate-50 rounded-2xl flex flex-col items-center justify-center shadow-sm z-10">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Day</span>
            <span className="text-lg font-bold text-primary leading-none">{day}</span>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-6 border-none hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold">Explore Montmartre</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> 09:00 AM - 12:00 PM
                  </p>
                </div>
                <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-5 h-5" /></button>
              </div>
              <p className="text-sm text-slate-500">Visit the Sacré-Cœur Basilica and explore the artist-filled streets of Place du Tertre.</p>
            </div>
            <div className="glass-card p-6 border-none hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold">Lunch at Le Consulat</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" /> 12:30 PM - 02:00 PM
                  </p>
                </div>
                <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-5 h-5" /></button>
              </div>
              <p className="text-sm text-slate-500">Classic Parisian lunch in one of the most iconic cafes in Montmartre.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TripBudget = () => (
  <div className="grid lg:grid-cols-2 gap-10">
    <div className="glass-card p-8 border-none space-y-6">
      <h3 className="text-xl font-bold">Spending Overview</h3>
      <div className="h-64 flex items-center justify-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
        <p className="text-slate-400 font-medium">Recharts Visualization Placeholder</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Transport', value: '$800', color: 'bg-primary' },
          { label: 'Food', value: '$1,200', color: 'bg-accent' },
          { label: 'Hotels', value: '$2,500', color: 'bg-accent-orange' },
          { label: 'Activities', value: '$500', color: 'bg-accent-sky' },
        ].map(item => (
          <div key={item.label} className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
            <div className={cn("w-3 h-3 rounded-full", item.color)}></div>
            <div className="flex-1">
              <p className="text-xs text-slate-400 font-bold uppercase">{item.label}</p>
              <p className="font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Recent Expenses</h3>
      <div className="space-y-3">
        {[
          { title: 'Flight Tickets', amount: '-$850.00', date: 'Jul 20', category: 'Transport' },
          { title: 'Hotel Booking', amount: '-$1,200.00', date: 'Jul 22', category: 'Accommodation' },
          { title: 'Paris Museum Pass', amount: '-$120.00', date: 'Jul 25', category: 'Activities' },
        ].map((ex, i) => (
          <div key={i} className="glass-card p-4 border-none flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                <WalletIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">{ex.title}</p>
                <p className="text-xs text-slate-400">{ex.category} • {ex.date}</p>
              </div>
            </div>
            <p className="font-bold text-rose-500">{ex.amount}</p>
          </div>
        ))}
        <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:border-primary hover:text-primary transition-all">
          + Add New Expense
        </button>
      </div>
    </div>
  </div>
);

const TripPacking = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { title: 'Documents', items: ['Passport', 'Travel Insurance', 'Flight Tickets', 'Hotel Vouchers'] },
      { title: 'Electronics', items: ['Phone Charger', 'Power Bank', 'Camera', 'Universal Adapter'] },
      { title: 'Clothing', items: ['Summer Shirts', 'Swimwear', 'Comfortable Shoes', 'Light Jacket'] },
    ].map(cat => (
      <div key={cat.title} className="glass-card p-6 border-none space-y-4">
        <h4 className="font-bold flex items-center justify-between">
          {cat.title}
          <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-full text-slate-500">2/4</span>
        </h4>
        <div className="space-y-2">
          {cat.items.map((item, i) => (
            <label key={item} className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl cursor-pointer group hover:bg-white transition-colors">
              <input type="checkbox" defaultChecked={i < 2} className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">{item}</span>
            </label>
          ))}
          <button className="w-full py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-xl transition-all">
            + Add Item
          </button>
        </div>
      </div>
    ))}
  </div>
);

const TripNotes = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <button className="glass-card p-6 border-2 border-dashed border-slate-200 bg-transparent flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 group transition-all h-[240px]">
      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary shadow-sm">
        <Plus className="w-6 h-6" />
      </div>
      <p className="font-bold text-slate-400 group-hover:text-primary">Add Travel Note</p>
    </button>
    
    {[
      { title: 'Restaurant Recommendations', content: 'In Paris, try Le Comptoir du Relais. In Rome, Da Enzo al 29 is a must...', date: 'Jul 28' },
      { title: 'Emergency Contacts', content: 'Embassy: +33 1 43 12 22 22. Insurance: ID-129481...', date: 'Jul 29' },
    ].map((note, i) => (
      <div key={i} className="glass-card p-6 border-none space-y-3 flex flex-col h-[240px]">
        <div className="flex justify-between items-start">
          <h4 className="font-bold">{note.title}</h4>
          <span className="text-[10px] font-bold text-slate-400 uppercase">{note.date}</span>
        </div>
        <p className="text-sm text-slate-500 line-clamp-4 flex-1">{note.content}</p>
        <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
          <button className="text-xs font-bold text-primary">Edit</button>
          <button className="text-xs font-bold text-slate-400">Delete</button>
        </div>
      </div>
    ))}
  </div>
);

// Internal Icons for local use
const WalletIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>;

export default TripDetails;
