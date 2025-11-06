import React from 'react';
import menu1 from "../../util/images/menu1.jpg";
import menu2 from "../../util/images/menu2.jpg";
import menu3 from "../../util/images/menu3.jpg";
import menu4 from "../../util/images/menu4.jpg";

const menuItems = [
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

function MenuSection() {
  return (
    <section className="menu">
      <h2>Menu</h2>
      <div className="cards">
        {menuItems.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
