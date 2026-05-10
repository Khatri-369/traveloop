import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Globe, Compass, ShieldCheck, ArrowRight, Star, Sparkles } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-light/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-accent-violet/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass-morphism border-t-0 border-l-0 border-r-0 rounded-none bg-white/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-violet rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <Plane className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-outfit tracking-tight text-slate-800">Traveloop</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-slate-600 font-semibold hover:text-primary transition-colors">Login</Link>
          <Link to="/signup" className="btn-primary py-2 px-6">Sign Up Free</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 border border-white/50"
            >
              <Sparkles className="w-4 h-4 text-accent-orange" />
              <span className="text-sm font-semibold text-slate-700">Next-Gen Travel Intelligence</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-[5rem] font-bold leading-[1.1] mb-6">
              Design Your <br />
              <span className="text-gradient">Dream Journey.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Experience the world with AI-powered personalized travel planning. We handle the complex logistics, you enjoy the adventure.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="btn-primary flex items-center gap-2 group text-lg px-8 py-4">
                Start Planning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/city-search" className="btn-secondary text-lg px-8 py-4">
                Explore Destinations
              </Link>
            </div>
            
            <div className="mt-14 flex items-center gap-5">
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 transition-transform cursor-pointer relative z-[1]">
                    <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-accent-orange mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Loved by <span className="text-slate-900 font-bold">10,000+</span> explorers
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image with Glow */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] ring-1 ring-white/50 animate-float">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200" 
                alt="Beautiful Tropical Beach"
                className="w-full h-[600px] object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider mb-1 opacity-90">Trending Destination</p>
                <p className="text-2xl font-bold font-outfit">Amalfi Coast, Italy</p>
              </div>
            </div>

            {/* Glass Cards Overlay */}
            <motion.div 
              className="absolute -top-6 -right-12 glass-card p-5 w-64 hidden lg:block z-20 animate-float-delayed"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-red-400 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Route Gen</p>
                  <p className="text-sm font-bold text-slate-800">Perfect 7-day loop</p>
                </div>
              </div>
              <div className="h-2.5 w-full bg-slate-200/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-accent-orange to-red-400 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-16 -left-16 glass-card p-5 w-72 hidden lg:block z-20 animate-float"
              style={{ animationDelay: '1.5s' }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-sky to-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Smart Booking</p>
                  <p className="text-sm font-bold text-slate-800">Flight + Hotel matches</p>
                  <p className="text-xs text-green-600 font-bold mt-1">Saved $240 on average</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 font-outfit">Intelligent Features for <br/>Modern Travelers</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Leave the spreadsheets behind. Our platform intelligently pieces together your perfect itinerary.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Compass, title: 'AI Itinerary Builder', desc: 'Custom routes generated instantly based on your unique interests, pace, and budget.', color: 'from-primary to-accent-violet' },
              { icon: ShieldCheck, title: 'Travel Safety First', desc: 'Real-time alerts, neighborhood safety scores, and essential emergency contacts.', color: 'from-accent to-orange-400' },
              { icon: Globe, title: 'Local Experiences', desc: 'Discover hidden gems and authentic activities curated by verified local experts.', color: 'from-accent-sky to-blue-600' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-10 glass-card bg-white/60 hover:bg-white/90 transition-all duration-300 group cursor-default"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-[20px] flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-outfit">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200/50 bg-white/50 relative z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-violet rounded-xl flex items-center justify-center">
              <Plane className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold font-outfit text-slate-800">Traveloop</span>
          </div>
          <p className="text-slate-500 font-medium">© 2026 Traveloop Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium">Terms</a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

