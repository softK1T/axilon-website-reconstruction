import React, { useState } from 'react';
import AxilonPixelPerfect from './components/AxilonPixelPerfect';
import DesignVariants from './components/DesignVariants';
import { Eye, Target } from 'lucide-react';

function App() {
  const [mode, setMode] = useState('pixel-perfect'); // 'pixel-perfect' or 'design'

  return (
    <div className="relative">
      {/* Mode Switcher - Floating UI */}
      <div className="fixed top-24 right-4 z-[60] flex flex-col gap-2">
        <button
          onClick={() => setMode('pixel-perfect')}
          className={`p-3 rounded-full shadow-lg transition-all ${
            mode === 'pixel-perfect' 
              ? 'bg-[#FFB600] text-white scale-110' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
          title="Pixel Perfect Original"
        >
          <Target size={20} />
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

      {mode === 'pixel-perfect' ? <AxilonPixelPerfect /> : <DesignVariants />}
    </div>
  );
}

export default App;
