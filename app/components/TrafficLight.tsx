'use client';

import { useEffect, useState } from 'react';

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState<'red' | 'yellow' | 'green'>('red');

  useEffect(() => {
    const sequence: Array<{ color: 'red' | 'yellow' | 'green'; duration: number }> = [
      { color: 'red', duration: 3000 },
      { color: 'yellow', duration: 2000 },
      { color: 'green', duration: 3000 },
      { color: 'yellow', duration: 2000 },
    ];

    let currentIndex = 0;
    
    const animate = () => {
      setActiveLight(sequence[currentIndex].color);
      
      const timeout = setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        animate();
      }, sequence[currentIndex].duration);
      
      return timeout;
    };

    let timeout = animate();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="py-8 lg:py-10 xl:py-12 w-full">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 flex justify-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-60 md:w-28 md:h-80 bg-gray-900 rounded-lg border-4 border-gray-700 flex flex-col items-center justify-around py-4 md:py-6">
              {/* Red Light */}
              <div 
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-500 ${
                  activeLight === 'red' 
                    ? 'bg-red-600 shadow-lg shadow-red-600/50 animate-pulse' 
                    : 'bg-gray-700'
                }`}
              />
              
              {/* Yellow Light */}
              <div 
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-500 ${
                  activeLight === 'yellow' 
                    ? 'bg-yellow-500 shadow-lg shadow-yellow-500/50 animate-pulse' 
                    : 'bg-gray-700'
                }`}
              />
              
              {/* Green Light */}
              <div 
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-500 ${
                  activeLight === 'green' 
                    ? 'bg-green-500 shadow-lg shadow-green-500/50 animate-pulse' 
                    : 'bg-gray-700'
                }`}
              />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 md:-translate-y-4 w-32 md:w-40 h-3 md:h-5 bg-gray-800 rounded-t-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
