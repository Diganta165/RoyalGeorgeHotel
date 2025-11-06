import React from 'react';

const bars = [
  { src: 'https://images.unsplash.com/photo-elysian-bar.jpg', title: 'Elysian Bar' },
  { src: 'https://images.unsplash.com/photo-bar.jpg', title: 'Bar' },
  { src: 'https://images.unsplash.com/photo-cafe-menu.jpg', title: 'Cafe Menu' },
  { src: 'https://images.unsplash.com/photo-snug-lounge.jpg', title: 'Snug Lounge' }
];

function BarsSection() {
  return (
    <section className="bars">
      <h2>Bars</h2>
      <div className="cards">
        {bars.map((bar, i) => (
          <div className="card" key={i}>
            <img src={bar.src} alt={bar.title} />
            <p>{bar.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BarsSection;
