import React from 'react';
import { resources } from '../resources';

function Navigation({ setSelectedCategory }) {
  return (
    <nav>
      <ul>
        {resources.map((item, index) => (
          <li key={index} onClick={() => setSelectedCategory(item.category)}>
            {item.category}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;