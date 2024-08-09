import React from 'react';
import Header from './app/Header';
import Home from './app/Home';
import Project from './app/Projects/Projects';
import Contact from './app/Contact/Contact';
import Footer from './app/Footer';
import Aboutme from './app/About/Aboutme';

function App() {
  return (
    <div className='overflow-hidden select-none'>
      <Header />
      <Home />
      <Aboutme/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;