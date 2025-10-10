import React from 'react';
import Header from './header';
import Footer from './Footer';

const Menu = () => {
    return (
        <div className="bg-black text-white font-sans relative" style={{ width: '100vw', height: '100vh' }}>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
};

export default Menu;