'use client';

import { BookOpen, Quote } from 'lucide-react';

export default function PrologueSection() {
  const prologue = `Es la búsqueda interior, una manera de comunicar
vivencias pasadas o cuotidianas según vayan aflorando
a su memoria, un grito desesperado a alguien que está
en su interior y no responde llenándola de soledad,
una soledad terrible que la va llenando con pedazos de
recuerdos, buenos o malos, que a ella ya no le importan.
Andrea Vaca es una poetisa a la cual las experiencias
no le valen sino para evocar un pasado confuso, lleno
de misterio y adversidades que fueron formando su
personalidad en un mundo cruel, despiadado, sin noches
ni días, sin tiempo, entre gente conocida que no reconoce
en sitios desconocidos que si existen.
Se podría decir de ella que es irreverente, pero así la
formó nuestra sociedad, así entró en un mundo creado
por su desgracia en el que se incorpora, permanece y sale
sin querer salir sintiendo pánico de reencontrarse con el
mundo real de sus sueños.
Es el deseo de vivir muriendo, de morir viviendo de a
poco hasta ver desde lo alto si su cadáver aún tiene vida.
En sus páginas a veces irreverentes te encontrarás
frente a una realidad delirante en la que sin proponerse
desnuda su alma, es un auto retrato que quizá no quiso
mostrar, lleno de pensamientos nostálgicos de un pasado
presente, en busca de un amor que se fue sin apenas
despedirse dejando cenizas en sus entrañas, para vivir
rodeada de la nada, evocando fantasmas que realmente
existen, aferrándose a la ilusión que los pude gritar en
sus escritos.
Así es Andrea, una mujer que lucha por vivir y ve en
el semáforo de su vida, la oportunidad de ser ella misma.`;

  return (
    <section className="py-8 lg:py-10 xl:py-12 w-full">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 lg:w-8 lg:h-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">Prólogo</span>
              <span className="block text-red-600 text-2xl md:text-3xl lg:text-4xl mt-2">
                "La Luz Verde"
              </span>
            </h2>
          </div>
        </div>

        <div className="bg-black/50 border border-white/10 rounded-lg p-6 md:p-8 lg:p-10 xl:p-12 space-y-6 lg:space-y-8">
          {/* Opening quote */}
          <div className="flex items-start gap-4">
            <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed whitespace-pre-line text-justify">
                {prologue}
              </p>
            </div>
            <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-red-600 flex-shrink-0 mt-1 rotate-180" />
          </div>

          {/* Author signature */}
          <div className="pt-6 lg:pt-8 border-t border-red-600/20">
            <div className="text-right">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">
                Dr. Luis Noé Mayorga
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-400">
                Ambato, 5 de Noviembre 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
