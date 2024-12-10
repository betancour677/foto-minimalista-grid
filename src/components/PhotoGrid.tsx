import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const PhotoGrid = () => {
  const images = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e'
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