import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  image: string;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, image, title, subtitle }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Left Side: Image & Branding */}
      <div className="hidden lg:relative lg:flex flex-col p-12 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="Auth Background" 
            className="w-full h-full object-cover opacity-50 transition-transform duration-10000 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        </div>

        <div className="relative z-10 flex items-center gap-2 mb-auto">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Plane className="text-white w-6 h-6" />
          </div>
          <Link to="/" className="text-xl font-bold font-poppins text-white">Traveloop</Link>
        </div>

        <div className="relative z-10 mt-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-md"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-background/30">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
