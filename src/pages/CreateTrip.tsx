import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Plane, 
  Calendar, 
  Wallet, 
  Settings, 
  CheckCircle,
  Users,
  Image as ImageIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  { title: 'Basic Info', icon: Plane },
  { title: 'Dates', icon: Calendar },
  { title: 'Budget', icon: Wallet },
  { title: 'Preferences', icon: Settings },
  { title: 'Review', icon: CheckCircle },
];

const CreateTrip = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'solo',
    startDate: '',
    endDate: '',
    budget: '',
    currency: 'USD',
    travelers: 1,
    preferences: [] as string[],
  });
  const navigate = useNavigate();

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleComplete = () => {
    // Mock save
    navigate('/my-trips');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="glass-card p-6 border-none">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step, idx) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                ${idx <= currentStep ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-white text-slate-400 border-2 border-slate-100'}
              `}>
                <step.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${idx <= currentStep ? 'text-primary' : 'text-slate-400'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="glass-card p-8 md:p-12 border-none min-h-[500px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1"
          >
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Tell us about your trip</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Trip Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Summer in Tokyo" 
                      className="input-field"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea 
                      rows={4} 
                      placeholder="What's the vibe of this trip?" 
                      className="input-field resize-none"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Trip Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Solo', 'Family', 'Couple', 'Friends', 'Business'].map(type => (
                        <button 
                          key={type}
                          onClick={() => setFormData({...formData, type: type.toLowerCase()})}
                          className={`px-4 py-3 rounded-2xl text-sm font-bold border-2 transition-all ${
                            formData.type === type.toLowerCase() 
                              ? 'border-primary bg-primary/5 text-primary' 
                              : 'border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">When are you going?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Start Date</label>
                    <input 
                      type="date" 
                      className="input-field"
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">End Date</label>
                    <input 
                      type="date" 
                      className="input-field"
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                    />
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                  <Calendar className="w-10 h-10 text-slate-300 mb-2" />
                  <p className="text-slate-500 font-medium">Estimated duration: <span className="text-primary font-bold">7 Days</span></p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Set your budget</h2>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Total Budget</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                        <input 
                          type="number" 
                          placeholder="0.00" 
                          className="input-field pl-8"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Currency</label>
                      <select className="input-field">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                        <option>JPY (¥)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-4">Number of Travelers</label>
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => setFormData({...formData, travelers: Math.max(1, formData.travelers - 1)})}
                        className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                      >-</button>
                      <div className="flex items-center gap-2">
                        <Users className="w-6 h-6 text-primary" />
                        <span className="text-2xl font-bold">{formData.travelers}</span>
                      </div>
                      <button 
                        onClick={() => setFormData({...formData, travelers: formData.travelers + 1})}
                        className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Travel Preferences</h2>
                <p className="text-slate-500">Select what you're most excited about for this trip.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Adventure', 'Food & Dining', 'Nightlife', 'Luxury', 'Budget Friendly', 'Nature', 'Culture', 'Shopping', 'History'].map(pref => (
                    <button 
                      key={pref}
                      onClick={() => {
                        const newPrefs = formData.preferences.includes(pref)
                          ? formData.preferences.filter(p => p !== pref)
                          : [...formData.preferences, pref];
                        setFormData({...formData, preferences: newPrefs});
                      }}
                      className={`p-4 rounded-3xl text-sm font-bold border-2 transition-all text-center ${
                        formData.preferences.includes(pref) 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Review your trip</h2>
                <div className="bg-slate-50 p-6 rounded-[32px] space-y-6 border border-slate-100">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-200 rounded-2xl flex-shrink-0 flex items-center justify-center">
                      <ImageIcon className="text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{formData.name || 'Untitled Trip'}</h3>
                      <p className="text-slate-500 text-sm">{formData.type} • {formData.travelers} Traveler(s)</p>
                      <p className="text-slate-500 text-sm mt-1">{formData.startDate || 'No date'} - {formData.endDate || 'No date'}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-2xl">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Budget</p>
                      <p className="font-bold">${formData.budget || '0'}</p>
                    </div>
                    <div className="p-4 bg-white rounded-2xl">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Currency</p>
                      <p className="font-bold">{formData.currency}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Preferences</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.preferences.map(p => (
                        <span key={p} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between pt-8 mt-auto border-t border-slate-100">
          <button 
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 font-bold transition-all ${currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
          
          {currentStep === steps.length - 1 ? (
            <button 
              onClick={handleComplete}
              className="btn-primary px-10 py-4 flex items-center gap-2"
            >
              Finish & Create
              <CheckCircle className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={nextStep}
              className="btn-primary px-10 py-4 flex items-center gap-2"
            >
              Next Step
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
