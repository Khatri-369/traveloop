import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Globe, Compass, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Plane className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-poppins">Traveloop</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-slate-600 font-medium hover:text-primary transition-colors">Login</Link>
          <Link to="/signup" className="btn-primary py-2 px-6">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">Voted #1 Travel Planner 2024</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Plan Smarter. <br />
              <span className="text-primary">Travel Better.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Experience AI-powered personalized travel planning. From itinerary building to budget tracking, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="btn-primary flex items-center gap-2 group">
                Start Planning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/city-search" className="btn-secondary">
                Explore Destinations
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold">10k+</span> travelers already joined
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
                alt="Travel Destination"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Glass Cards Overlay */}
            <div className="absolute -top-10 -right-10 glass-card p-6 w-64 hidden lg:block animate-bounce-slow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-orange/20 text-accent-orange rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Route Discovery</p>
                  <p className="text-sm font-bold">Bali - Thailand</p>
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-accent-orange"></div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 glass-card p-6 w-64 hidden lg:block animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-accent-sky/20 text-accent-sky rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Global Search</p>
                  <p className="text-sm font-bold">150+ Countries</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Explore</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our all-in-one platform makes travel planning a breeze. Focus on the adventure, we'll handle the logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Compass, title: 'AI Itinerary Builder', desc: 'Custom routes generated based on your interests and budget.', color: 'bg-primary' },
              { icon: ShieldCheck, title: 'Travel Safety First', desc: 'Real-time alerts and insurance integration for peace of mind.', color: 'bg-accent' },
              { icon: Globe, title: 'Local Experiences', desc: 'Hidden gems and authentic activities curated by locals.', color: 'bg-accent-sky' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 glass-card border-none bg-slate-50 hover:bg-white transition-colors cursor-default"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Plane className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold font-poppins">Traveloop</span>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Traveloop Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

