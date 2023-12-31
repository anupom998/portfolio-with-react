import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
// import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
// canvas
import MouseParticleTrail from './components/MouseParticleTrail';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <MouseParticleTrail />
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Services /> */}
      <Work />
      <Contact />
      <div className='h-[200px]'></div>
    </div>
  );
};

export default App;


