import React from 'react';
import Header from './app/Header';
import Home from './app/Home';
import Project from './app/Projects';
import Contact from './app/Contact';
import Footer from './app/Footer';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Home />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;