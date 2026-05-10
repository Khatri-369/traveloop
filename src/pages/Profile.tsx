import { User, Settings, Shield, Bell, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary">
          <User className="w-12 h-12" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{user?.name || 'Om Kumar'}</h1>
          <p className="text-slate-500">{user?.email || 'om.kumar@example.com'}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: Settings, label: 'Account Settings', desc: 'Manage your personal information and preferences.' },
          { icon: Shield, label: 'Security', desc: 'Update your password and secure your account.' },
          { icon: Bell, label: 'Notifications', desc: 'Choose what alerts you want to receive.' },
          { icon: LogOut, label: 'Log Out', desc: 'Sign out of your account on this device.', onClick: handleLogout, danger: true },
        ].map(item => (
          <button 
            key={item.label}
            onClick={item.onClick}
            className="glass-card p-6 border-none text-left hover:shadow-lg transition-all group"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.danger ? 'bg-rose-50 text-rose-500' : 'bg-slate-50 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-1">{item.label}</h3>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;
