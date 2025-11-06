// import React from 'react';
import slide1 from "../../util/images/slide1.jpg"
import slide2 from "../../util/images/slide2.jpg"
import slide3 from "../../util/images/slide3.jpg"
import slide4 from "../../util/images/slide4.jpg"

const galleryImages = [
//   'https://images.unsplash.com/photo-party-1.jpg',
//   'https://images.unsplash.com/photo-party-2.jpg',
//   'https://images.unsplash.com/photo-party-3.jpg'
    slide1, slide2, slide3, slide4
    
];

function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery-grid">
        {galleryImages.map((src, i) => (
          <img src={src} alt={`Event ${i+1}`} key={i} />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
