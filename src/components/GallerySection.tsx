import React from 'react';

const galleryImages = [
  '/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg',
  '/images/gallery-4.jpg', '/images/gallery-5.jpg', '/images/gallery-6.jpg',
  '/images/gallery-7.jpg', '/images/gallery-8.jpg',
];

const GallerySection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-contain bg-white p-2"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
