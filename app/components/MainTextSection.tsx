import { Lightbulb } from 'lucide-react';

export default function MainTextSection() {
  return (
    <section className="py-8 lg:py-10 xl:py-12 w-full">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 flex justify-center">
        <div className="bg-black/50 border border-white/10 rounded-lg py-6 px-6 md:py-8 md:px-8 lg:py-10 lg:px-10 space-y-4 lg:space-y-6 text-center">
          <p className="text-base md:text-lg leading-relaxed">
            <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-red-600 inline-block mb-1 mr-2 align-middle" />
            Servilletas, hojas de papel y mis propios párpados sirvieron de instrumento para que el trance aquel en el que me envuelvo cada vez que escribo, lleven lo que he sentido o siento ante la retina que en este momento entrará en mi mundo.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-red-600 leading-relaxed mt-3 lg:mt-4">
            Un mundo repleto de realidades infinitas apiladas, una sobre otra.
          </p>
        </div>
      </div>
    </section>
  );
}
