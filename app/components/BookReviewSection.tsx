'use client';

import { useEffect, useRef } from 'react';
import { BookOpen, Quote, PenTool } from 'lucide-react';

const review = {
  title: 'Reseña de La Luz Verde',
  subtitle: 'Por Verónica Chávez Gómez',
  subtitleRole: 'Periodista - Gestora Cultural, Ecuador',
  content: `La Luz Verde es un poemario que no pide permiso: avanza con una voz firme, contestataria y provocadora, decidida a incomodar los silencios impuestos.
Andrea Vaca construye una poesía que se atreve a decir lo que suele ocultarse, no por escándalo gratuito, sino como gesto de resistencia. La procacidad aquí funciona como estrategia poética: un lenguaje directo, a veces áspero, que desmonta hipocresías y expone las fisuras del orden social.
La fuerza del libro radica en su capacidad de convertir la irreverencia en lucidez.
Vaca no romantiza la rebeldía; la trabaja con imágenes tensas y un ritmo que empuja al lector a mantenerse alerta. Cada poema parece una señal en verde: avanzar, cruzar, no retroceder ante lo incómodo. Esa urgencia se traduce en versos que cuestionan normas, cuerpos vigilados y discursos moralizantes, siempre desde una conciencia crítica que privilegia la honestidad por encima del ornamento.
Además, La Luz Verde destaca por su coherencia estética. La provocación no es un adorno, sino el hilo que articula el libro y le da identidad. La voz poética se sostiene con convicción, logrando que la lectura sea intensa y memorable. No es un poemario para el consumo rápido: exige participación, diálogo y, sobre todo, valentia para dejarse interpelar.
Recomendado para lectores que buscan poesía viva, incómoda y necesaria, La Luz Verde confirma a Andrea Vaca como una autora que entiende la poesía como acto politico y como espacio de libertad. Un libro que enciende preguntas y nos invita a cruzar, sin miedo, hacia una mirada más crítica del mundo.`,
  author: 'Verónica Chávez Gómez',
  date: 'Ambato, diciembre 22 de 2025.'
};

export default function BookReviewSection() {
  const reviewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const { animate, stagger } = await import('animejs');
      
      if (reviewRef.current) {
        animate(reviewRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutQuad',
        });
        
        const children = Array.from(reviewRef.current.querySelectorAll('.review-content > *'));
        if (children.length > 0) {
          animate(children, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            delay: stagger(200),
            easing: 'easeOutQuad',
          });
        }
      }
    };

    initAnimation();
  }, []);

  return (
    <section ref={reviewRef} className="flex justify-center w-full py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-black to-red-950/10">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PenTool className="w-8 h-8 lg:w-10 lg:h-10 text-red-600 floating-icon" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">Reseña</span>
            </h2>
          </div>
        </div>

        {/* Review Card */}
        <div className="bg-gradient-to-br from-red-600/10 to-black/50 border border-red-600/30 rounded-lg p-8 md:p-10 lg:p-12">
          {/* Review Title and Author */}
          <div className="mb-8 pb-6 border-b border-red-600/20">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-7 h-7 lg:w-8 lg:h-8 text-red-600" />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">
                {review.title}
              </h3>
            </div>
            <div className="ml-10 md:ml-12">
              <p className="text-lg md:text-xl font-semibold text-white mb-1">
                {review.subtitle}
              </p>
              <p className="text-sm md:text-base text-gray-400 italic">
                {review.subtitleRole}
              </p>
            </div>
          </div>

          {/* Review Content */}
          <div className="review-content">
            <div className="mb-6">
              <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-red-600/50 mb-4" />
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed whitespace-pre-line text-justify font-serif">
                {review.content}
              </p>
            </div>

            {/* Review Footer */}
            <div className="mt-8 pt-6 border-t border-red-600/20">
              <div className="flex flex-col items-end gap-2">
                <p className="text-base md:text-lg font-semibold text-white">
                  — {review.author}
                </p>
                <p className="text-sm md:text-base text-gray-400 italic">
                  {review.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
