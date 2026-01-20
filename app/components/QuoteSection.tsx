'use client';

import { useEffect, useRef } from 'react';

export default function QuoteSection() {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { animate } = await import('animejs');
      
      if (quoteRef.current) {
        animate(quoteRef.current, {
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 1500,
          delay: 1000,
          easing: 'easeOutElastic(1, .6)',
        });
      }
    };

    initAnimations();
  }, []);

  return (
    <section className="py-8 lg:py-10 xl:py-12 w-full">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 flex justify-center">
        <div 
          ref={quoteRef}
          className="opacity-0"
        >
          <div className="bg-gradient-to-br from-red-600/20 to-black border-2 border-red-600 rounded-lg py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-10 text-center space-y-4 lg:space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 leading-relaxed">
              "Tengo LUZ VERDE para pasearme a través de mis letras..."
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-3 lg:mt-4">GRACIAS!!!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
