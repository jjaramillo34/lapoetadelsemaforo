'use client';

import { useEffect, useState } from 'react';
import { PenTool } from 'lucide-react';

const fullText = `ANDARIEGOS
Versos en la calle, versos en la acera, versos en el parque,
versos que dan guerra, versos en rojo, en amarillo y en
verde, versos hechos besos y no son para poetas.
Andrea Vaca Cifuentes.
Ambato 2015`;

export default function TypewriterQuote() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout | null = null;
    let cursorInterval: NodeJS.Timeout;

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 50); // Speed of typing
      } else {
        setIsComplete(true);
        setShowCursor(false);
      }
    };

    // Cursor blink effect
    cursorInterval = setInterval(() => {
      setShowCursor(prev => {
        if (isComplete) {
          return false;
        }
        return !prev;
      });
    }, 530);

    // Start typing after a short delay
    const startDelay = setTimeout(() => {
      typeWriter();
    }, 500);

    return () => {
      clearTimeout(startDelay);
      if (timeoutId) clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="py-8 lg:py-10 xl:py-12 w-full">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-red-600/10 to-black/50 border border-red-600/30 rounded-lg p-8 md:p-10 lg:p-12">
          <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
            <PenTool className="w-6 h-6 lg:w-8 lg:h-8 text-red-600" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Poesía
            </h2>
          </div>

          <div className="text-center space-y-6">
            <div className="min-h-[200px] md:min-h-[250px] flex items-center justify-center">
              <div className="relative max-w-4xl w-full">
                <div className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed whitespace-pre-line">
                  {displayedText ? (
                    <>
                      <span className="text-red-600 font-bold text-xl md:text-2xl lg:text-3xl block mb-4">
                        {displayedText.split('\n')[0]}
                      </span>
                      <span className="block">
                        {displayedText.split('\n').slice(1).join('\n')}
                        {showCursor && !isComplete && (
                          <span className="inline-block w-0.5 h-6 md:h-8 bg-red-600 ml-1 animate-pulse align-middle">|</span>
                        )}
                      </span>
                    </>
                  ) : (
                    showCursor && (
                      <span className="inline-block w-0.5 h-6 md:h-8 bg-red-600 animate-pulse">|</span>
                    )
                  )}
                </div>
              </div>
            </div>

            {isComplete && (
              <div className="pt-4 border-t border-red-600/20 animate-in fade-in duration-500">
                <p className="text-sm md:text-base text-gray-400 italic">
                  — Andrea Vaca Cifuentes
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Ambato, 2015
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
