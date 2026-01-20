'use client';

import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  onAnimationInit?: () => void;
}

export default function HeroSection({ onAnimationInit }: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const initAnimations = async () => {
      const { animate } = await import('animejs');
      
      if (titleRef.current) {
        animate(titleRef.current, {
          opacity: [0, 1],
          translateY: [-30, 0],
          duration: 1500,
          easing: 'easeOutExpo',
        });
      }

      if (subtitleRef.current) {
        animate(subtitleRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1500,
          delay: 300,
          easing: 'easeOutExpo',
        });
      }

      onAnimationInit?.();
    };

    initAnimations();
  }, [onAnimationInit]);

  return (
    <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-12 xl:pt-20 xl:pb-16 w-full">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 flex justify-center">
        <div className="text-center mb-10 lg:mb-12 xl:mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 lg:mb-5 opacity-0"
          >
            La Poetisa
            <span className="block text-red-600 mt-1 lg:mt-2">del Semáforo</span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 italic max-w-3xl mx-auto mt-3 lg:mt-4 opacity-0"
          >
            "Tengo LUZ VERDE para pasearme a través de mis letras..."
          </p>
        </div>
      </div>
    </section>
  );
}
