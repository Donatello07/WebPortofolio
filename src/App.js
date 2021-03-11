import React from 'react';
import AboutMe from './AboutMe';
import './App.css';
import Header from './Header';
import Navigation from './Navigation.js';

function App() {
  return (
    <div>
      <Navigation/>        
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
