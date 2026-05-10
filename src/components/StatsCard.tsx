import React from 'react';
import { cn } from '../utils/cn';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: IconComponent;
  trend?: {
    value: number;
    isUp: boolean;
  };
  className?: string;
  color?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon: Icon, trend, className, color = "bg-primary" }) => {
  return (
    <div className={cn("glass-card p-6 border-none", className)}>
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", color)}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold",
            trend.isUp ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
          )}>
            {trend.isUp ? '+' : '-'}{trend.value}%
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
