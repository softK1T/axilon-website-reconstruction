import React, { useState } from 'react';
import AxilonReconstruction from './components/AxilonReconstruction';
import DesignVariants from './components/DesignVariants';
import { Eye, RotateCcw } from 'lucide-react';

function App() {
  const [mode, setMode] = useState('reconstruction'); // 'reconstruction' or 'design'

  return (
    <div className="relative">
      {/* Mode Switcher - Floating UI */}
      <div className="fixed top-24 right-4 z-[60] flex flex-col gap-2">
        <button
          onClick={() => setMode('reconstruction')}
          className={`p-3 rounded-full shadow-lg transition-all ${
            mode === 'reconstruction' 
              ? 'bg-blue-900 text-white scale-110' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
          title="Original Reconstruction"
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={() => setMode('design')}
          className={`p-3 rounded-full shadow-lg transition-all ${
            mode === 'design' 
              ? 'bg-black text-white scale-110' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
          title="Design Concepts"
        >
          <Eye size={20} />
        </button>
      </div>

      {mode === 'reconstruction' ? <AxilonReconstruction /> : <DesignVariants />}
    </div>
  );
}

export default App;
