import React from 'react';
import { Calendar, MapPin, Users, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TripCardProps {
  id: string;
  title: string;
  location: string;
  dates: string;
  travelers: number;
  image: string;
  status: 'upcoming' | 'completed' | 'draft';
}

const TripCard: React.FC<TripCardProps> = ({ id, title, location, dates, travelers, image, status }) => {
  const statusColors = {
    upcoming: 'bg-primary/10 text-primary',
    completed: 'bg-emerald-100 text-emerald-600',
    draft: 'bg-slate-100 text-slate-500',
  };

  return (
    <Link to={`/trip/${id}`} className="group glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 block border-none">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>{dates}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Users className="w-4 h-4" />
            <span>{travelers} Travelers</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
