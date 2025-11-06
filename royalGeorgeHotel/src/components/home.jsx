import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import Barsgrid from "./Barsgrid";
import BookingBubble from "./Bookingbubble";
import HomepageHero from "./HomepageHero";
import Menucontent from "./Menucontent";
import { getHomeContent } from "../api/homeContentApi";
import ArtistsSection from "./ArtistsSection";
import ImageStripSlider from "./ImageStripSlider";
import LostAndFoundSection from "./LostAndFoundSection";

export default function Home() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await getHomeContent();
                setContent(data);
            } catch (err) {
                console.error("Failed to load home content", err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading || !content) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <p>Loading…</p>
            </div>
        );
    }

    return (
        <div className="bg-black font-sans min-h-screen" style={{ width: "100vw" }}>
            <Header />
            <BookingBubble />
            <HomepageHero hero={content.hero} />
            <Barsgrid bars={content.bars} />
            <Menucontent menuItems={content.menu} />
            <ArtistsSection></ArtistsSection>
            <ImageStripSlider></ImageStripSlider>
            <LostAndFoundSection></LostAndFoundSection>
            <Footer />
        </div>
    );
}
