import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import MenuSection from '../../components/MenuSection/MenuSection';
import ArtistsSection from '../../components/ArtistsSection/ArtistsSection';
import GallerySection from '../../components/GallerySection/GallerySection';
import LostSomething from '../../components/LostSomething/LostSomething';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <MenuSection />
            <ArtistsSection />
            <GallerySection />
            <LostSomething />
            <Footer />
        </>
    );
};

export default Home;