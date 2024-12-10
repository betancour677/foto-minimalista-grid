import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Skeleton } from "@/components/ui/skeleton";

export const PhotoGrid = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8',
    'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e',
    'https://images.unsplash.com/photo-1439853949127-fa647821eba0',
    'https://images.unsplash.com/photo-1455218873509-8097305ee378',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    'https://images.unsplash.com/photo-1510797215324-95aa89f43c33'
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