import { Package, CheckCircle2, Plus } from 'lucide-react';

const Packing = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Packing Lists</h1>
          <p className="text-slate-500">Don't leave anything behind. Organize your essentials.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 py-4 px-8">
          <Plus className="w-5 h-5" /> New List
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="glass-card p-20 flex flex-col items-center justify-center text-center border-none lg:col-span-3">
          <Package className="w-16 h-16 text-slate-100 mb-6" />
          <h3 className="text-xl font-bold mb-2">No packing lists yet</h3>
          <p className="text-slate-500 max-w-sm mb-8">Create your first list for your upcoming European trip.</p>
          <button className="btn-secondary">Explore Templates</button>
        </div>
      </div>
    </div>
  );
};

export default Packing;
