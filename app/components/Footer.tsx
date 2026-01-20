import { Feather, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-red-600/30 py-8 lg:py-10 mt-12 lg:mt-16 xl:mt-20 w-full bg-black/50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Decorative element */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-600/50"></div>
            <Feather className="w-5 h-5 text-red-600" />
            <div className="h-px w-12 bg-red-600/50"></div>
          </div>

          {/* Main content */}
          <div className="text-center space-y-3">
            <p className="text-sm md:text-base text-gray-300 font-medium">

              © {new Date().getFullYear()} <span className="text-red-600">Andrea Kristina Vaca Cifuentes</span>
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              La Poetisa del Semáforo
            </p>
            <p className="text-xs md:text-sm text-gray-500 italic">
              Nacida en Ambato, Ecuador - 4 de Enero de 1978
            </p>
          </div>

          {/* Quote */}
          <div className="pt-4 border-t border-red-600/20 w-full max-w-2xl">
            <p className="text-center text-xs md:text-sm text-gray-400 italic">
              "Tengo LUZ VERDE para pasearme a través de mis letras..."
            </p>
          </div>

          {/* Bottom decoration */}
          <div className="flex items-center gap-2 text-gray-600 pt-4">
            <span className="text-xs">Hecho con</span>
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            <span className="text-xs">por la Poetisa del Semáforo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
