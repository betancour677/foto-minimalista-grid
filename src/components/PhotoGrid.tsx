import React from 'react';

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
  return (
    <div className="px-6 md:px-8 py-8">
      <div className="masonry-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="masonry-item">
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
  );
};