import React from 'react';
import artist1 from "../../util/images/artist1.jpg";
import artist2 from "../../util/images/artist2.jpg";
import artist3 from "../../util/images/artist3.jpg";
import artist4 from "../../util/images/artist4.jpg";
import artist5 from "../../util/images/artist5.jpg";
import artist6 from "../../util/images/artist6.jpg";
import artist7 from "../../util/images/artist7.jpg";
import artist8 from "../../util/images/artist8.jpg";

const artists = [
  { src: artist1, title: 'BandName' },
  { src: artist2, title: 'DJName' },
  { src: artist3, title: 'Artist 3' },
  { src: artist4, title: 'Artist 4' },
  { src: artist5, title: 'Artist 5' },
  { src: artist6, title: 'Artist 6' },
  { src: artist7, title: 'Artist 7' },
  { src: artist8, title: 'Artist 8' },
];

function ArtistsSection() {
  return (
    <section className="artists">
      <h2>Artists</h2>
      <div className="cards">
        {artists.map((artist, i) => (
          <div className="card" key={i}>
            <img src={artist.src} alt={artist.title} />
            <p>{artist.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtistsSection;
