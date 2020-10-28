import React from 'react';
import './App.css';
import Header from './Header.js';
import FilterList from './FilterList.js'
import images from './data.js';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <div className="filter-div"><FilterList images={images} /></div>
    </div>
  );
}

export default App;
