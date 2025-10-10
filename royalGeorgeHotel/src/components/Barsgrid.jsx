import React from 'react';
import beer_garden from "../assets/beer_garden.jpeg"
import brisvegas_lounge from "../assets/brisvegas_lounge.jpeg"
import brisvegas_game from "../assets/brisvegas_game.jpeg"
import mirror_room from "../assets/mirror_room.jpeg"

const Barsgrid = () => {
    return (
        <div>
            {/* BARS GRID */}
      <main className="bg-neutral-900/40">
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-14">
          {[
            {
              title: "BrisVegas Gaming",
              image: brisvegas_game,
              desc: `Welcome to Bris Vegas Gaming Lounge! In the heart of Fortitude Valley and Brisbane,
              Bris Vegas Gaming boasts 43 pokie machines and 6 hyperlink jackpots including 3 × Dragon
              links, 2 × Lightning Link and 1 × Grand Star link. Your…`,
            },
            {
              title: "Beer Garden",
              image: beer_garden,
              desc: `Welcome to Bris Vegas Gaming Lounge! In the heart of Fortitude Valley and Brisbane,
              Bris Vegas Gaming boasts 43 pokie machines and 6 hyperlink jackpots including 3 × Dragon
              links, 2 × Lightning Link and 1 × Grand Star link. Your…`,
            },
            {
              title: "Mirror Room",
              image: mirror_room,
              desc: `Welcome to Bris Vegas Gaming Lounge! In the heart of Fortitude Valley and Brisbane,
              Bris Vegas Gaming boasts 43 pokie machines and 6 hyperlink jackpots including 3 × Dragon
              links, 2 × Lightning Link and 1 × Grand Star link. Your…`,
            },
            {
              title: "BrisVegas Lounge",
              image: brisvegas_lounge,
              desc: `Welcome to Bris Vegas Gaming Lounge! In the heart of Fortitude Valley and Brisbane,
              Bris Vegas Gaming boasts 43 pokie machines and 6 hyperlink jackpots including 3 × Dragon
              links, 2 × Lightning Link and 1 × Grand Star link. Your…`,
            },
          ].map((bar, i) => (
            <article
              key={i}
              className="relative rounded-[32px] overflow-hidden"
            >
              <img
                src={bar.image}
                alt={bar.title}
                className="w-full h-[260px] sm:h-[300px] md:h-[340px] object-cover"
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute left-8 right-8 top-6">
                <h3 className="text-2xl font-semibold drop-shadow">
                  {bar.title}
                </h3>
              </div>
              <div className="absolute left-8 right-8 bottom-6">
                <p className="text-white/95 leading-7">{bar.desc}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
        </div>
    );
};

export default Barsgrid;