import { Compass, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="text-9xl font-black text-slate-100 absolute z-0 select-none">404</div>
      <div className="relative z-10">
        <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mx-auto mb-8">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Lost in Translation?</h1>
        <p className="text-slate-500 max-w-md mb-8 mx-auto">
          We couldn't find the page you're looking for. Maybe it took a wrong turn at the airport?
        </p>
        <Link to="/dashboard" className="btn-primary inline-flex items-center gap-2">
          <Home className="w-5 h-5" /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
