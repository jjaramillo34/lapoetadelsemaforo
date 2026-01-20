'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Feather } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const poems = [
  {
    title: 'La muerte vive enamorada',
    content: `La muerte vive enamorada eróticamente sueña... poseerte,
amarte, retenerte, llevarte entre sus brazos encadenarte a su cadalso, ha provisto aprovechar el infortunio haz puesto un pie en el infierno te ha besado el pulgar izquierdo...
Mèndiga cobarde, no puede retenerte...
Orgasmo haz vencido a la malévola muerdele la vida muerdele las tetas!
Maldita seas... reina de los duendes.
Orgasmo sueño de los inconformes tu voz no se apagará entre los rebeldes todos estos locos que vibramos
al vibrar de tu guitarra en nuestras venas tu caminas
cierra los ojos
muérdele la vida,
muérdele las tetas a esa puta!!!`,
    author: 'Andrea Vaca Cifuentes'
  }
];

export default function PoemasPage() {
  return (
    <div className="min-h-screen bg-black text-white w-full flex flex-col relative">
      <AnimatedBackground />
      {/* Header */}
      <header className="relative border-b border-red-600/30 w-full bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-6">
          <div className="flex items-center justify-between w-full">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-white hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm md:text-base">Volver al inicio</span>
            </Link>
            <div className="flex items-center gap-3">
              <Feather className="w-7 h-7 lg:w-8 lg:h-8 text-red-600" />
              <h1 className="text-lg lg:text-xl font-bold">
                Andrea Kristina Vaca Cifuentes
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full py-12 lg:py-16 xl:py-20">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-12">
          {/* Page Title */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 lg:w-10 lg:h-10 text-red-600" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Poemas</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg md:text-xl">
              Versos que dan guerra, versos en rojo, en amarillo y en verde
            </p>
          </div>

          {/* Poems List */}
          <div className="space-y-12 lg:space-y-16">
            {poems.map((poem, index) => (
              <article
                key={index}
                className="bg-gradient-to-br from-red-600/10 to-black/50 border border-red-600/30 rounded-lg p-8 md:p-10 lg:p-12"
              >
                {/* Poem Title */}
                <div className="mb-8 pb-6 border-b border-red-600/20">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">
                    {poem.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base italic">
                    — {poem.author}
                  </p>
                </div>

                {/* Poem Content */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed whitespace-pre-line font-serif text-justify">
                    {poem.content}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Back to home link */}
          <div className="mt-16 lg:mt-20 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 border border-red-600/50 rounded-lg hover:bg-red-600/30 transition-colors text-white"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-600/30 py-8 lg:py-10 mt-12 lg:mt-16 xl:mt-20 w-full bg-black/50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} Andrea Kristina Vaca Cifuentes - La Poetisa del Semáforo
          </p>
        </div>
      </footer>
    </div>
  );
}
