import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import ArrowUp from './Components/ArrowUp';
import Cards from './Components/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <ArrowUp />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
