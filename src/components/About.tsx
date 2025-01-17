import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const About = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="about" className="py-16 px-6 md:px-8 bg-gray-50">
      <div ref={scrollRef} className="max-w-3xl mx-auto opacity-0">
        <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Como fotógrafo profesional con más de una década de experiencia, me especializo en capturar la belleza de los paisajes naturales y entornos urbanos. Mi trabajo ha sido presentado en diversas galerías y publicaciones en todo el país.
          </p>
          <p>
            Mi enfoque en la fotografía combina la precisión técnica con la visión artística, siempre buscando capturar el momento perfecto que cuente una historia cautivadora. Ya sea fotografiando majestuosas montañas o escenas íntimas de la ciudad, aporto el mismo nivel de dedicación y atención al detalle en cada proyecto.
          </p>
          <p>
            Cuando no estoy detrás de la cámara, disfruto impartiendo talleres de fotografía y compartiendo mis conocimientos con fotógrafos aspirantes. Creo que la gran fotografía tiene el poder de conmover a las personas y cambiar perspectivas.
          </p>
        </div>
      </div>
    </section>
  );
};