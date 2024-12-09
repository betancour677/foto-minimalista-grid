import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Landscape photo 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    alt: "Landscape photo 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Landscape photo 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Landscape photo 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    alt: "Landscape photo 5",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Landscape photo 6",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Landscape photo 7",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Landscape photo 8",
  },
];

export const PhotoGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="portfolio" className="mb-16">
      <div className="px-6 md:px-8 py-8">
        <div className="masonry-grid">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="masonry-item cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="image-container">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <ScrollArea className="h-full max-h-[85vh] w-full">
            {selectedPhoto && (
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto"
              />
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};