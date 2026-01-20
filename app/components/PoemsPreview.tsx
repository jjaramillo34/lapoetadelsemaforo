'use client';

import Link from 'next/link';
import { BookOpen, ArrowRight, PenTool } from 'lucide-react';
import { useEffect, useRef } from 'react';

const poemPreview = {
  title: 'La muerte vive enamorada',
  excerpt: `La muerte vive enamorada eróticamente sueña... poseerte,
amarte, retenerte, llevarte entre sus brazos encadenarte a su cadalso, ha provisto aprovechar el infortunio haz puesto un pie en el infierno te ha besado el pulgar izquierdo...
Mèndiga cobarde, no puede retenerte...
Orgasmo haz vencido a la malévola muerdele la vida muerdele las tetas!
Maldita seas... reina de los duendes.
Orgasmo sueño de los inconformes tu voz no se apagará entre los rebeldes...`,
  author: 'Andrea Vaca Cifuentes'
};

export default function PoemsPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const { animate } = await import('animejs');
      
      if (sectionRef.current) {
        animate(sectionRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          easing: 'easeOutQuad',
        });
      }
    };

    initAnimation();
  }, []);

  return (
    <section ref={sectionRef} className="flex justify-center w-full py-12 lg:py-16 xl:py-20">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PenTool className="w-8 h-8 lg:w-10 lg:h-10 text-red-600 floating-icon" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">Poemas</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl">
            Versos que dan guerra, versos en rojo, en amarillo y en verde
          </p>
        </div>

        {/* Poem Preview Card */}
        <Link 
          href="/poemas" 
          className="group block bg-gradient-to-br from-red-600/10 to-black/50 border border-red-600/30 rounded-lg p-8 md:p-10 lg:p-12 hover:border-red-600/60 hover:from-red-600/20 transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 lg:w-7 lg:h-7 text-red-600 group-hover:text-red-500 transition-colors" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 group-hover:text-red-500 transition-colors">
                  {poemPreview.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base italic mb-6">
                — {poemPreview.author}
              </p>
            </div>
            <div className="flex items-center gap-2 text-red-600 group-hover:text-red-500 transition-colors">
              <span className="text-sm md:text-base font-medium hidden sm:inline">Leer más</span>
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Poem Excerpt */}
          <div className="prose prose-invert max-w-none">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed whitespace-pre-line font-serif line-clamp-4">
              {poemPreview.excerpt}
            </p>
          </div>

          {/* Click to read more hint */}
          <div className="mt-6 pt-6 border-t border-red-600/20">
            <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-400 transition-colors text-center">
              Haz clic para leer el poema completo y más versos →
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
