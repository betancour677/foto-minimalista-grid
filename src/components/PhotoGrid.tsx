import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Skeleton } from "@/components/ui/skeleton";

export const PhotoGrid = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
  const images = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    'https://images.unsplash.com/photo-1473091534298-04dcbce3278c',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  ].map(url => `${url}?auto=format&fit=crop&w=800&q=80`);

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

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
                    {!loadedImages[image] && (
                      <Skeleton className="w-full h-[300px] rounded-lg" />
                    )}
                    <img
                      src={image}
                      alt={`Portfolio item ${index + 1}`}
                      className={`w-full h-auto transition-opacity duration-300 ${
                        loadedImages[image] ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(image)}
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