import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <div>
        <ImageList />
      </div>
    </div>
  );
}

export default App;
