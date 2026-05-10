import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import { useAuthStore } from '../store/authStore';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);
    setTimeout(() => {
      setAuth({ id: '1', email, name: 'Om Kumar' });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Ready for your next adventure? Log in to continue your travel journey."
      image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="mb-10 text-center lg:text-left">
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>Log In</h1>
        <p style={{ color: '#64748b' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#2563EB', fontWeight: 600 }}>Sign Up</Link>
        </p>
      </div>

      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>Email Address</label>
          <div style={{ position: 'relative' }}>
            <Mail style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#94a3b8' }} />
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              style={{ paddingLeft: '48px', borderColor: errors.email ? '#ef4444' : undefined }}
            />
          </div>
          {errors.email && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#ef4444' }}>{errors.email}</p>}
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>Password</label>
          <div style={{ position: 'relative' }}>
            <Lock style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#94a3b8' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              style={{ paddingLeft: '48px', paddingRight: '48px', borderColor: errors.password ? '#ef4444' : undefined }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {showPassword ? <EyeOff style={{ width: '20px', height: '20px' }} /> : <Eye style={{ width: '20px', height: '20px' }} />}
            </button>
          </div>
          {errors.password && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#ef4444' }}>{errors.password}</p>}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: '#2563EB' }} />
            <span style={{ fontSize: '0.875rem', color: '#475569' }}>Remember me</span>
          </label>
          <Link to="#" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2563EB' }}>Forgot password?</Link>
        </div>

        <button disabled={isLoading} type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', justifyContent: 'center' }}>
          {isLoading ? (
            <div style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
          ) : 'Log In'}
        </button>

        <div style={{ position: 'relative', padding: '16px 0', textAlign: 'center' }}>
          <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', borderTop: '1px solid #e2e8f0' }}></div>
          </div>
          <span style={{ position: 'relative', background: '#F8FAFC', padding: '0 8px', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Or continue with</span>
        </div>

        <button type="button" className="btn-secondary" style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.532 24.552c0-1.636-.138-3.218-.396-4.744H24v9.02h13.204c-.57 3.048-2.298 5.63-4.896 7.364v6.12h7.928C44.07 38.044 47.532 31.868 47.532 24.552z" fill="#4285F4"/>
            <path d="M24 48c6.48 0 11.916-2.148 15.888-5.816l-7.928-6.12c-2.2 1.476-5.012 2.352-7.96 2.352-6.116 0-11.296-4.132-13.148-9.684H2.636v6.32C6.58 42.848 14.724 48 24 48z" fill="#34A853"/>
            <path d="M10.852 28.732A14.96 14.96 0 0 1 9.96 24c0-1.652.284-3.252.892-4.732V12.948H2.636A23.98 23.98 0 0 0 0 24c0 3.88.936 7.544 2.636 10.748l8.216-6.016z" fill="#FBBC05"/>
            <path d="M24 9.548c3.444 0 6.532 1.184 8.964 3.508l6.716-6.716C35.908 2.42 30.48 0 24 0 14.724 0 6.58 5.152 2.636 12.948l8.216 6.32C12.704 13.68 17.884 9.548 24 9.548z" fill="#EA4335"/>
          </svg>
          Google
        </button>
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </AuthLayout>
  );
};

export default LoginPage;
