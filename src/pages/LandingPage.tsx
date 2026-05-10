import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Globe, Compass, ShieldCheck, ArrowRight, Star, MapPin, Zap, Heart } from 'lucide-react';

const HERO_IMG = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=900';
const DEST_IMGS = [
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400', city: 'Maldives' },
  { src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=400', city: 'Santorini' },
  { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=400', city: 'Tokyo' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const LandingPage = () => (
  <div style={{ minHeight: '100vh', background: '#F1F5F9', overflowX: 'hidden' }}>

    {/* ── Navbar ────────────────────────────────────────────── */}
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(79,70,229,0.08)',
      boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#4F46E5,#6366F1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(79,70,229,0.35)' }}>
          <Plane style={{ color: 'white', width: 20, height: 20 }} />
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Poppins,sans-serif', background: 'linear-gradient(135deg,#4F46E5,#6366F1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Traveloop</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <Link to="/login" style={{ color: '#475569', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Login</Link>
        <Link to="/signup" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>Get Started Free →</Link>
      </div>
    </nav>

    {/* ── Hero ──────────────────────────────────────────────── */}
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 35%, #1E3A5F 70%, #0C4A6E 100%)',
      paddingTop: 100, paddingBottom: 80,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Animated background blobs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        {/* Left text */}
        <motion.div {...fadeUp(0.1)}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', background: 'rgba(99,102,241,0.2)', borderRadius: 100, border: '1px solid rgba(99,102,241,0.3)', marginBottom: 28 }}>
            <Star style={{ width: 14, height: 14, color: '#FCD34D', fill: '#FCD34D' }} />
            <span style={{ color: '#A5B4FC', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>VOTED #1 TRAVEL PLANNER 2024</span>
          </div>

          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: 'white', fontFamily: 'Poppins,sans-serif' }}>
            Plan Smarter.<br />
            <span style={{ background: 'linear-gradient(135deg,#818CF8,#38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Travel Better.</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#94A3B8', marginBottom: 40, lineHeight: 1.7, maxWidth: 460 }}>
            AI-powered travel planning that turns your dream trip into a perfectly curated itinerary — with budget tracking, packing lists, and local gems.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
            <Link to="/signup" className="btn-primary" style={{ padding: '15px 32px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              Start Planning Free <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
            <Link to="/city-search" style={{ padding: '14px 28px', border: '2px solid rgba(255,255,255,0.2)', borderRadius: 16, color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.3s' }}>
              Explore Destinations
            </Link>
          </div>

          {/* Social proof */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex' }}>
              {[12,13,14,15].map(i => (
                <div key={i} style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', overflow: 'hidden', marginLeft: i === 12 ? 0 : -10, background: '#312E81' }}>
                  <img src={`https://i.pravatar.cc/80?img=${i}`} alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', marginBottom: 2 }}>
                {[1,2,3,4,5].map(s => <Star key={s} style={{ width: 14, height: 14, color: '#FCD34D', fill: '#FCD34D' }} />)}
              </div>
              <p style={{ color: '#94A3B8', fontSize: '0.8rem' }}><span style={{ color: 'white', fontWeight: 700 }}>10,000+</span> travelers already joined</p>
            </div>
          </div>
        </motion.div>

        {/* Right image card */}
        <motion.div {...fadeUp(0.3)} className="animate-float" style={{ position: 'relative' }}>
          <div style={{ borderRadius: 32, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', position: 'relative' }}>
            <img
              src={HERO_IMG}
              alt="Beautiful travel destination"
              style={{ width: '100%', height: 420, objectFit: 'cover' }}
              onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=900'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: '8px 14px' }}>
                <MapPin style={{ width: 16, height: 16, color: '#FB7185' }} />
                <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 600 }}>Lake Braies, Italy</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: '8px 14px' }}>
                <span style={{ color: '#FCD34D', fontSize: '0.85rem', fontWeight: 700 }}>★ 4.9</span>
              </div>
            </div>
          </div>

          {/* Floating badge - Route */}
          <div style={{ position: 'absolute', top: -20, right: -20, background: 'white', borderRadius: 20, padding: '14px 18px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#F59E0B,#FCD34D)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass style={{ width: 20, height: 20, color: 'white' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>AI Route</p>
              <p style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 800 }}>Bali → Thailand</p>
            </div>
          </div>

          {/* Floating badge - Countries */}
          <div style={{ position: 'absolute', bottom: -20, left: -20, background: 'white', borderRadius: 20, padding: '14px 18px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#06B6D4,#38BDF8)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe style={{ width: 20, height: 20, color: 'white' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>Available in</p>
              <p style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 800 }}>150+ Countries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Destination Highlights ─────────────────────────────── */}
    <section style={{ padding: '80px 32px', background: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12, fontFamily: 'Poppins,sans-serif' }}>
            <span style={{ background: 'linear-gradient(135deg,#4F46E5,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Popular Destinations</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto' }}>Handpicked destinations loved by our community of global travellers</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {DEST_IMGS.map(({ src, city }, i) => (
            <motion.div key={city} {...fadeUp(i * 0.1)} style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', cursor: 'pointer', boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
              whileHover={{ y: -6, scale: 1.01 }}>
              <img
                src={src}
                alt={city}
                style={{ width: '100%', height: 280, objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=400'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem', marginBottom: 2 }}>{city}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin style={{ width: 12, height: 12, color: '#FB7185' }} />
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>Trending</span>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '6px 12px' }}>
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '0.8rem' }}>Explore →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Features ──────────────────────────────────────────── */}
    <section style={{ padding: '80px 32px', background: 'linear-gradient(135deg,#F1F5F9,#EEF2FF)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12, fontFamily: 'Poppins,sans-serif' }}>Everything You Need</h2>
          <p style={{ color: '#64748B', maxWidth: 500, margin: '0 auto', fontSize: '1.05rem' }}>One platform, infinite adventures. We handle the logistics so you focus on memories.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          {[
            { icon: Zap, title: 'AI Itinerary Builder', desc: 'Custom routes generated based on your interests, pace, and budget. Ready in seconds.', gradient: 'linear-gradient(135deg,#4F46E5,#7C3AED)', light: 'rgba(79,70,229,0.08)' },
            { icon: ShieldCheck, title: 'Travel Safety First', desc: 'Real-time alerts, embassy info, and travel insurance integration for full peace of mind.', gradient: 'linear-gradient(135deg,#0891B2,#06B6D4)', light: 'rgba(8,145,178,0.08)' },
            { icon: Heart, title: 'Local Experiences', desc: 'Hidden gems and authentic activities curated by locals — not tourist traps.', gradient: 'linear-gradient(135deg,#E11D48,#FB7185)', light: 'rgba(225,29,72,0.08)' },
          ].map(({ icon: Icon, title, desc, gradient, light }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.1)}
              whileHover={{ y: -8 }}
              style={{ background: 'white', borderRadius: 28, padding: 36, boxShadow: '0 8px 32px rgba(0,0,0,0.06)', cursor: 'default', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ width: 60, height: 60, background: gradient, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: `0 8px 20px ${light.replace('0.08', '0.4')}` }}>
                <Icon style={{ width: 28, height: 28, color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 12, fontFamily: 'Poppins,sans-serif' }}>{title}</h3>
              <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA Banner ────────────────────────────────────────── */}
    <section style={{ padding: '80px 32px', background: 'linear-gradient(135deg,#1E1B4B,#312E81,#1E3A5F)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: 'white', marginBottom: 20, fontFamily: 'Poppins,sans-serif', lineHeight: 1.2 }}>
            Your Next Adventure<br />
            <span style={{ background: 'linear-gradient(135deg,#818CF8,#38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Starts Here</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: 40, lineHeight: 1.7 }}>Join 10,000+ travellers planning smarter trips with Traveloop. Free forever, no credit card required.</p>
          <Link to="/signup" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Start Planning Free <ArrowRight style={{ width: 18, height: 18 }} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ── Footer ────────────────────────────────────────────── */}
    <footer style={{ padding: '40px 32px', background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#4F46E5,#6366F1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Plane style={{ color: 'white', width: 18, height: 18 }} />
          </div>
          <span style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800, fontFamily: 'Poppins,sans-serif' }}>Traveloop</span>
        </div>
        <p style={{ color: '#475569', fontSize: '0.85rem' }}>© 2024 Traveloop Inc. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 28 }}>
          {['Privacy', 'Terms', 'Support'].map(link => (
            <a key={link} href="#" style={{ color: '#475569', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#818CF8'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = '#475569'}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  </div>
);

export default LandingPage;
