'use client';

import Link from 'next/link';
import { PenTool, BookOpen, Heart, Feather } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative border-b border-red-600/30 w-full bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="relative">
              <Feather className="w-7 h-7 lg:w-8 lg:h-8 text-red-600 floating-icon transition-transform hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg lg:text-xl font-bold leading-tight">
                Andrea Kristina Vaca Cifuentes
              </h1>
              <p className="text-xs lg:text-sm text-gray-400 font-light hidden sm:block">
                La Poetisa del Semáforo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <div className="group relative p-2 rounded-lg hover:bg-red-600/10 transition-colors cursor-pointer">
                <PenTool className="w-5 h-5 lg:w-6 lg:h-6 text-red-600 floating-icon group-hover:text-red-500 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Escritura
                </span>
              </div>
              <Link href="/poemas" className="group relative p-2 rounded-lg hover:bg-red-600/10 transition-colors cursor-pointer">
                <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-red-600 floating-icon group-hover:text-red-500 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Poemas
                </span>
              </Link>
              <div className="group relative p-2 rounded-lg hover:bg-red-600/10 transition-colors cursor-pointer">
                <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-red-600 floating-icon group-hover:text-red-500 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Pasión
                </span>
              </div>
            </div>
            <div className="md:hidden">
              <div className="flex items-center gap-3">
                <PenTool className="w-5 h-5 text-red-600 floating-icon" />
                <Link href="/poemas">
                  <BookOpen className="w-5 h-5 text-red-600 floating-icon hover:text-red-500 transition-colors cursor-pointer" />
                </Link>
                <Heart className="w-5 h-5 text-red-600 floating-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
