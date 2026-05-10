import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Dashboard from '../pages/Dashboard';
import CreateTrip from '../pages/CreateTrip';
import MyTrips from '../pages/MyTrips';
import TripDetails from '../pages/TripDetails';
import CitySearch from '../pages/CitySearch';
import ActivitySearch from '../pages/ActivitySearch';
import Budget from '../pages/Budget';
import Packing from '../pages/Packing';
import Notes from '../pages/Notes';
import Profile from '../pages/Profile';
import SharedTrip from '../pages/SharedTrip';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/* Protected Routes (Placeholder for now) */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-trip" element={<CreateTrip />} />
      <Route path="/my-trips" element={<MyTrips />} />
      <Route path="/trip/:id" element={<TripDetails />} />
      <Route path="/trip/:id/edit" element={<CreateTrip />} />
      
      <Route path="/city-search" element={<CitySearch />} />
      <Route path="/activity-search" element={<ActivitySearch />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/packing" element={<Packing />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shared/:tripId" element={<SharedTrip />} />
      
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
