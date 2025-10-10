import React from 'react';
import Header from './header';
import Footer from './Footer';
import heroBanner from "../assets/contact_hero_background.jpg";

import Barsgrid from './Barsgrid';


const Bars = () => {
    return (
        <div>
            <Header></Header>
            {/* Hero Banner */}
                  <section className="relative">
                    <img
                      src={heroBanner}
                      alt="Hotel Banner"
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
                      <h1 className="text-4xl font-bold mb-2">Bars</h1>
                      <p className="text-sm max-w-2xl">
                        The Royal George is home to four uniquely different bars, so you're guaranteed to find the perfect spot for your next night out, or cheeky mid-day thirst quencher.

Try your luck in our brand new BrisVegas gaming Lounge, sip on a cocktail in our BrisVegas Lounge, or dance the night away in the Lounge Bar with a game-changing 360˚ DJ booth and dance floor to match; and the Valley's largest outdoor Beer Garden with both smoking and dining areas.    
                     </p>
                    </div>
                  </section>
            <Barsgrid></Barsgrid>

            <Footer></Footer>
        </div>
    );
};

export default Bars;