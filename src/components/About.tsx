import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const About = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="about" className="py-16 px-6 md:px-8 bg-gray-50">
      <div ref={scrollRef} className="max-w-3xl mx-auto opacity-0">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            As a professional photographer with over a decade of experience, I specialize in capturing the beauty of natural landscapes and urban environments. My work has been featured in various galleries and publications across the country.
          </p>
          <p>
            My approach to photography combines technical precision with artistic vision, always striving to capture the perfect moment that tells a compelling story. Whether I'm shooting majestic mountains or intimate city scenes, I bring the same level of dedication and attention to detail to every project.
          </p>
          <p>
            When I'm not behind the camera, I enjoy teaching photography workshops and sharing my knowledge with aspiring photographers. I believe that great photography has the power to move people and change perspectives.
          </p>
        </div>
      </div>
    </section>
  );
};