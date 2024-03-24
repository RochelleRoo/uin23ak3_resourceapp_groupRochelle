import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('HTML');

  return (
    <div>
      <Navigation setSelectedCategory={setSelectedCategory} />
      <MainContent selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;