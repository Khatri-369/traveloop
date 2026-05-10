import { StickyNote, Plus } from 'lucide-react';

const Notes = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Travel Notes</h1>
          <p className="text-slate-500">Capture memories, tips, and important info on the go.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 py-4 px-8">
          <Plus className="w-5 h-5" /> New Note
        </button>
      </div>

      <div className="glass-card p-20 flex flex-col items-center justify-center text-center border-none">
        <StickyNote className="w-16 h-16 text-slate-100 mb-6" />
        <h3 className="text-xl font-bold mb-2">Your journal is empty</h3>
        <p className="text-slate-500 max-w-sm mb-8">Start writing down your travel plans or memories here.</p>
        <button className="btn-secondary">Create Quick Note</button>
      </div>
    </div>
  );
};

export default Notes;
