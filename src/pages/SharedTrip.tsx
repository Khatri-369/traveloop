import { Plane, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SharedTrip = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 animate-bounce-slow">
        <Plane className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-bold mb-4">View Shared Trip</h1>
      <p className="text-slate-500 max-w-md mb-8">
        This trip has been shared with you! Sign up or log in to copy this itinerary to your own collection.
      </p>
      <div className="flex gap-4">
        <Link to="/signup" className="btn-primary">Join Traveloop</Link>
        <Link to="/" className="btn-secondary flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Home
        </Link>
      </div>
    </div>
  );
};

export default SharedTrip;
