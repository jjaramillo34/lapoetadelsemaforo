'use client';

import { useEffect, useRef } from 'react';

export default function BiographySection() {
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { animate, stagger } = await import('animejs');
      
      if (bioRef.current && bioRef.current.children.length > 0) {
        animate(Array.from(bioRef.current.children), {
          opacity: [0, 1],
          translateX: [-50, 0],
          duration: 1000,
          delay: stagger(200),
          easing: 'easeOutExpo',
        });
      }
    };

    initAnimations();
  }, []);

  return (
    <section className="py-8 lg:py-10 xl:py-12 w-full">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 flex justify-center">
        <div 
          ref={bioRef}
          className="space-y-6 flex flex-col items-center w-full"
        >
          <div className="bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-600 py-6 px-6 md:py-8 md:px-8 lg:py-10 lg:px-10 rounded-r-lg w-full text-center">
            <p className="text-base md:text-lg leading-relaxed">
              Mi nombre es <span className="text-red-600 font-semibold">Andrea Cristina Vaca Cifuentes</span>, nací en la ciudad de <span className="text-red-600">Ambato, Ecuador</span>, el <span className="text-red-600">4 de enero de 1978</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
