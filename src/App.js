import './App.css';
import React, { useState } from 'react';
import Header from './header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [displayedContent, setDisplayedContent] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Sidebar setDisplayedContent={setDisplayedContent} />
        <MainContent displayedContent={displayedContent} />
      </div>
    </div>
  );
}

export default App;
