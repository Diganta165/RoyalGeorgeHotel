// client/src/components/ArtistsSection.jsx
import React from "react";
import Artist1 from "../assets/Artist1.png";


const defaultArtists = [
    {
        id: 1,
        name: "DJ Vision",
        time: "06:00 pm",
        image: Artist1,
    },
    {
        id: 2,
        name: "DJ Shadow",
        time: "07:30 pm",
        image: Artist1,
    },
    {
        id: 3,
        name: "DJ Raven",
        time: "08:00 pm",
        image: Artist1,
    },
    {
        id: 4,
        name: "DJ Sonic",
        time: "08:30 pm",
        image: Artist1,
    },
    {
        id: 5,
        name: "DJ Fusion",
        time: "09:00 pm",
        image: Artist1,
    },
    {
        id: 6,
        name: "DJ Blaze",
        time: "09:30 pm",
        image: Artist1,
    },
    {
        id: 7,
        name: "DJ Shifty",
        time: "10:00 pm",
        image: Artist1,
    },
    {
        id: 8,
        name: "DJ Titan",
        time: "10:30 pm",
        image: Artist1,
    },
];

export default function ArtistsSection({
    title = "Artists",
    artists = defaultArtists,
}) {
    return (
        <section className="w-full bg-black py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
                    {title}
                </h2>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {artists.map((artist) => (
                        <article
                            key={artist.id}
                            className="relative rounded-3xl overflow-hidden bg-neutral-800 shadow-lg"
                        >
                            <img
                                src={artist.image}
                                alt={artist.name}
                                className="w-full h-56 object-cover"
                            />

                            {/* bottom gradient overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-end justify-between rounded-b-3xl">
                                <div className="text-sm font-medium truncate">
                                    {artist.name}
                                </div>
                                <div className="text-xs opacity-80">{artist.time}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
