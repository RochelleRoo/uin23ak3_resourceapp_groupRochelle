import React, { useState } from 'react';
import { resources } from '../resources';

function Navigation({ setSelectedCategory }) {
  const [selectedItem, setSelectedItem] = useState(resources[0].category);

  const handleClick = (category) => {
    setSelectedCategory(category);
    setSelectedItem(category);
    window.history.pushState(null, null, `/${category}`); // Change URL without reloading
  };

  return (
    <nav>
      <ul>
        {resources.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.category)}
            className={selectedItem === item.category ? 'active' : ''}
          >
            {item.category}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;