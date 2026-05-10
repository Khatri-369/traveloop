import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import { useAuthStore } from '../store/authStore';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const signUp = useAuthStore((state) => state.signUp);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name || form.name.length < 2) e.name = 'Name must be at least 2 characters';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords don't match";
    return e;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setServerError(null);
    setSuccessMsg(null);
    setIsLoading(true);
    try {
      await signUp(form.email, form.password, form.name);
      setSuccessMsg('Account created! Please check your email to confirm your account, then log in.');
    } catch (err: any) {
      setServerError(err.message || 'Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const fieldStyle = (hasError: boolean): React.CSSProperties => ({
    paddingLeft: '48px',
    borderColor: hasError ? '#ef4444' : undefined,
  });

  return (
    <AuthLayout
      title="Start your journey!"
      subtitle="Join thousands of travelers planning their dream trips with Traveloop."
      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="mb-10 text-center lg:text-left">
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>Create Account</h1>
        <p style={{ color: '#64748b' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#2563EB', fontWeight: 600 }}>Log In</Link>
        </p>
      </div>

      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Full Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>Full Name</label>
          <div style={{ position: 'relative' }}>
            <User style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#94a3b8' }} />
            <input type="text" placeholder="John Doe" value={form.name} onChange={update('name')} className="input-field" style={fieldStyle(!!errors.name)} />
          </div>
          {errors.name && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#ef4444' }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>Email Address</label>
          <div style={{ position: 'relative' }}>
            <Mail style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#94a3b8' }} />
            <input type="email" placeholder="name@example.com" value={form.email} onChange={update('email')} className="input-field" style={fieldStyle(!!errors.email)} />
          </div>
          {errors.email && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#ef4444' }}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>Password</label>
          <div style={{ position: 'relative' }}>
            <Lock style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#94a3b8' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={form.password}
              onChange={update('password')}
              className="input-field"
              style={{ paddingLeft: '48px', paddingRight: '48px', borderColor: errors.password ? '#ef4444' : undefined }}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
              {showPassword ? <EyeOff style={{ width: '20px', height: '20px' }} /> : <Eye style={{ width: '20px', height: '20px' }} />}
            </button>
          </div>
          {errors.password && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#ef4444' }}>{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>Confirm Password</label>
          <div style={{ position: 'relative' }}>
            <ShieldCheck style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#94a3b8' }} />
            <input type="password" placeholder="••••••••" value={form.confirmPassword} onChange={update('confirmPassword')} className="input-field" style={fieldStyle(!!errors.confirmPassword)} />
          </div>
          {errors.confirmPassword && <p style={{ marginTop: '4px', fontSize: '0.75rem', color: '#ef4444' }}>{errors.confirmPassword}</p>}
        </div>

        {serverError && (
          <p style={{ padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', fontSize: '0.875rem', color: '#dc2626', marginTop: '8px' }}>
            {serverError}
          </p>
        )}
        {successMsg && (
          <p style={{ padding: '12px 16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', fontSize: '0.875rem', color: '#16a34a', marginTop: '8px' }}>
            {successMsg} <Link to="/login" style={{ fontWeight: 600, color: '#15803d' }}>Go to Login →</Link>
          </p>
        )}

        <button disabled={isLoading} type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', marginTop: '8px', justifyContent: 'center' }}>
          {isLoading ? (
            <div style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
          ) : 'Create Account'}
        </button>

        <button type="button" className="btn-secondary" style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.532 24.552c0-1.636-.138-3.218-.396-4.744H24v9.02h13.204c-.57 3.048-2.298 5.63-4.896 7.364v6.12h7.928C44.07 38.044 47.532 31.868 47.532 24.552z" fill="#4285F4"/>
            <path d="M24 48c6.48 0 11.916-2.148 15.888-5.816l-7.928-6.12c-2.2 1.476-5.012 2.352-7.96 2.352-6.116 0-11.296-4.132-13.148-9.684H2.636v6.32C6.58 42.848 14.724 48 24 48z" fill="#34A853"/>
            <path d="M10.852 28.732A14.96 14.96 0 0 1 9.96 24c0-1.652.284-3.252.892-4.732V12.948H2.636A23.98 23.98 0 0 0 0 24c0 3.88.936 7.544 2.636 10.748l8.216-6.016z" fill="#FBBC05"/>
            <path d="M24 9.548c3.444 0 6.532 1.184 8.964 3.508l6.716-6.716C35.908 2.42 30.48 0 24 0 14.724 0 6.58 5.152 2.636 12.948l8.216 6.32C12.704 13.68 17.884 9.548 24 9.548z" fill="#EA4335"/>
          </svg>
          Sign up with Google
        </button>
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </AuthLayout>
  );
};

export default SignupPage;
