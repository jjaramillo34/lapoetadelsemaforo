import { PenTool, BookOpen, Heart } from 'lucide-react';

export default function FeatureCards() {
  const features = [
    {
      icon: PenTool,
      title: 'Poetisa Pragmática',
      description: 'De carácter nostálgico, amante del humor negro y autodidacta'
    },
    {
      icon: BookOpen,
      title: '30 Años de Escritura',
      description: 'Escribo desde los 17 años, inicialmente en forma anónima hasta hoy'
    },
    {
      icon: Heart,
      title: 'Autodidacta',
      description: 'Aprendiendo y creando a través de la experiencia'
    }
  ];

  return (
    <section className="py-8 lg:py-10 xl:py-12 w-full">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 flex justify-center">
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 border border-red-600/20 rounded-lg py-6 px-5 lg:py-8 lg:px-6 hover:bg-white/10 transition-colors"
              >
                <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-red-600 mx-auto mb-3 lg:mb-4" />
                <h3 className="font-semibold mb-2 lg:mb-3 text-center text-base lg:text-lg">{feature.title}</h3>
                <p className="text-sm lg:text-base text-gray-400 text-center leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
