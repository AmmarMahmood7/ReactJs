import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    } else {
      const newItems = items.filter((item) => {
        return item.category === category;
      });
      setMenuItems(newItems);
    }
  }
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            {categories.map((category, index) => {
              return (
                <Categories
                  key={index}
                  category={category}
                  filterItems={filterItems}
                />
              );
            })}
          </div>
          <div className="section-center">
            {menuItems.map((item) => {
              return (
                <Menu
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  image={item.img}
                  desc={item.desc}
                  price={item.price}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
