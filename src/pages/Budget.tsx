import { Wallet, PieChart, TrendingUp, ArrowDown, ArrowUp } from 'lucide-react';
import StatsCard from '../components/StatsCard';

const Budget = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Budget Dashboard</h1>
        <p className="text-slate-500">Track your travel expenses and savings across all trips.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard label="Total Budget" value="$15,000" icon={Wallet} color="bg-primary" />
        <StatsCard label="Total Spent" value="$4,200" icon={ArrowDown} color="bg-rose-500" />
        <StatsCard label="Remaining" value="$10,800" icon={ArrowUp} color="bg-emerald-500" />
        <StatsCard label="Daily Avg" value="$280" icon={TrendingUp} color="bg-accent-sky" />
      </div>

      <div className="glass-card p-12 border-none flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <PieChart className="w-10 h-10 text-slate-200" />
        </div>
        <h3 className="text-xl font-bold mb-2">Detailed Analytics Coming Soon</h3>
        <p className="text-slate-500 max-w-sm">We're building a powerful finance tracking engine for your travels.</p>
      </div>
    </div>
  );
};

export default Budget;
