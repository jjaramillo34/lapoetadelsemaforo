'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/andre0.jpg',
  '/andre1.jpeg',
  '/andre2.jpeg',
  '/andre3.jpeg',
  '/andre4.jpeg',
  '/andre5.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft' && selectedImage > 0) {
        setSelectedImage(selectedImage - 1);
      } else if (e.key === 'ArrowRight' && selectedImage < images.length - 1) {
        setSelectedImage(selectedImage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <>
      <section className="py-8 lg:py-10 xl:py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              <span className="text-white">Galería</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Momentos y obras de la Poetisa del Semáforo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group border-2 border-transparent hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 transform hover:scale-[1.02]"
              >
                <Image
                  src={image}
                  alt={`Galería ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">
                    Ver imagen {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 lg:top-8 lg:right-8 text-white hover:text-red-600 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 lg:left-8 text-white hover:text-red-600 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          )}

          {selectedImage < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 lg:right-8 text-white hover:text-red-600 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          )}

          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage]}
              alt={`Galería ${selectedImage + 1}`}
              width={1200}
              height={1200}
              className="object-contain max-w-full max-h-full rounded-lg"
              priority
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full">
              <p className="text-white text-sm">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
