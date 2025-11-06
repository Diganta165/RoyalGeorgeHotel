// import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import menu1 from "../../util/images/menu1.jpg";
import menu2 from "../../util/images/menu2.jpg";
import menu3 from "../../util/images/menu3.jpg";
import menu4 from "../../util/images/menu4.jpg";

const blogItems = [
  {
    src: menu1,
    title: 'Cocktail'
  },
  {
    src: menu2,
    title: 'Cocktail List'
  },
  {
    src: menu3,
    title: 'Always Open'
  },
  {
    src: menu4,
    title: 'Cafe Menu'
  }
];


const Blogs = () => {

    
    return (
        <>
            <Header />
            <h1 className=''>Blogs</h1>

            <div className="cards">
                {blogItems.map((item, i) => (
                <div className="card" key={i}>
                    <img src={item.src} alt={item.title} />
                    <p>{item.title}</p>
                </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Blogs;