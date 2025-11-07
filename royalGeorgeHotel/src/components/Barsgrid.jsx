import React, { useEffect, useState } from "react";
import { getHomeContent } from "../api/homeContentApi";
import beer_garden from "../assets/beer_garden.jpeg";
import brisvegas_lounge from "../assets/brisvegas_lounge.jpeg";
import brisvegas_game from "../assets/brisvegas_game.jpeg";
import mirror_room from "../assets/mirror_room.jpeg"; // make sure this function fetches the HomeContent

const Barsgrid = () => {
    const [bars, setBars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await getHomeContent();
                setBars(data.bars || []); // only get bars from the content
            } catch (err) {
                console.error("Failed to load bars content", err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <main className="bg-neutral-900/40">
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-14">
                {bars.map((bar, idx) => (
                    <article
                        key={idx}
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-xl min-h-[260px]"
                    >
                        <img
                            src={beer_garden} // use image from backend
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
                            <p className="text-white/95 leading-7">{bar.description}</p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Barsgrid;
