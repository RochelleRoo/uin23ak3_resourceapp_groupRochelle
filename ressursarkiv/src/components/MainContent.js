import React from 'react';
import { resources } from '../resources';

function MainContent({ selectedCategory }) {
  const selectedResources = resources.find(
    (item) => item.category === selectedCategory
  );

  if (!selectedResources) {
    return <div>No content available for this category</div>;
  }

  return (
    <div>
      <h1>{selectedResources.category}</h1>
      <p>{selectedResources.text}</p>
      <ul>
        {selectedResources.sources.map((source, index) => (
          <li key={index}>
            <a href={source.url}>{source.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainContent;
