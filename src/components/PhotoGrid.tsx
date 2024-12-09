import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const PhotoGrid = () => {
  const images = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  return (
    <section id="portfolio" className="py-16 px-6 md:px-8">
      <div className="masonry-grid">
        {images.map((image, index) => {
          const ScrollRef = useScrollAnimation();
          return (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div ref={ScrollRef} className="masonry-item opacity-0">
                  <div className="image-container">
                    <img
                      src={image}
                      alt={`Portfolio item ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
                <img
                  src={image}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </section>
  );
};