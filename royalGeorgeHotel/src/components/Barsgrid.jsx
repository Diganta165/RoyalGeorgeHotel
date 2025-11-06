import React from "react";
import beer_garden from "../assets/beer_garden.jpeg";
import brisvegas_lounge from "../assets/brisvegas_lounge.jpeg";
import brisvegas_game from "../assets/brisvegas_game.jpeg";
import mirror_room from "../assets/mirror_room.jpeg";

const defaultBars = [
    {
        title: "BrisVegas Gaming",
        image: brisvegas_game,
        tags: ["Gaming Lounge", "TAB", "Keno"],
        description:
            "Enjoy a premium gaming experience with the latest machines in a relaxed, comfortable environment.",
    },
    {
        title: "BrisVegas Lounge",
        image: brisvegas_lounge,
        tags: ["Cocktails", "Live Music"],
        description:
            "Unwind with cocktails, live entertainment, and a warm atmosphere perfect for catch-ups.",
    },
    {
        title: "Beer Garden",
        image: beer_garden,
        tags: ["Outdoor", "Casual Drinks"],
        description:
            "Open-air vibes, cold drinks, and casual bites – ideal for afternoons that roll into evenings.",
    },
    {
        title: "Mirror Room",
        image: mirror_room,
        tags: ["Private", "Functions"],
        description:
            "A stylish indoor space for private events, celebrations, and special gatherings.",
    },
];

const Barsgrid = ({ bars }) => {
    const items =
        bars && bars.length > 0
            ? bars.map((bar, index) => ({
                ...bar,
                image: defaultBars[index]?.image || beer_garden,
            }))
            : defaultBars;

    return (
        <main className="bg-black">
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-14">
                {items.map((bar, idx) => (
                    <article
                        key={idx}
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-xl min-h-[260px]"
                    >
                        <img
                            src={bar.image}
                            alt={bar.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                        />
                        <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {(bar.tags || []).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-semibold text-black"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {bar.title}
                                </h3>
                            </div>
                            <p className="text-white/95 leading-7">
                                {bar.description || bar.desc}
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Barsgrid;
