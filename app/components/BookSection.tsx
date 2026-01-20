'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BookOpen, X } from 'lucide-react';

export default function BookSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const bookImages = {
    cover: '/portada.jpg',
    back: '/trasera.jpg',
  };

  return (
    <>
      <section className="py-8 lg:py-10 xl:py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8 lg:mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 lg:w-10 lg:h-10 text-red-600" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-white">Mi Libro</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              "La Luz Verde" - Una colección de poemas
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Portada */}
            <div
              onClick={() => setSelectedImage(bookImages.cover)}
              className="relative group cursor-pointer flex-shrink-0 w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-transparent hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20 transform hover:scale-105 hover:-rotate-2 bg-gray-900">
                <Image
                  src={bookImages.cover}
                  alt="Portada del libro - La Luz Verde"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                <div className="absolute top-2 right-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Portada
                </div>
              </div>
            </div>

            {/* Divider - solo visible en desktop */}
            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-red-600/30 to-transparent" />

            {/* Contraportada */}
            <div
              onClick={() => setSelectedImage(bookImages.back)}
              className="relative group cursor-pointer flex-shrink-0 w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-transparent hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20 transform hover:scale-105 hover:rotate-2 bg-gray-900">
                <Image
                  src={bookImages.back}
                  alt="Contraportada del libro - La Luz Verde"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                <div className="absolute top-2 right-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Contraportada
                </div>
              </div>
            </div>
          </div>

          {/* Book info */}
          <div className="mt-8 lg:mt-10 text-center">
            <p className="text-base md:text-lg text-gray-300 mb-4">
              Descubre las obras y pensamientos de la Poetisa del Semáforo
            </p>
            <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-lg px-6 py-3">
              <p className="text-sm md:text-base text-gray-400">
                Colección disponible en formato físico y digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
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

          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={selectedImage === bookImages.cover ? 'Portada del libro' : 'Contraportada del libro'}
              width={800}
              height={1200}
              className="object-contain max-w-full max-h-full rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
