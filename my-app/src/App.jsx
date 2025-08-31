import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhatWeTake from './components/WhatWeTake';
import Pricing from './components/Pricing';
import BookRemoval from './components/BookRemoval';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatWeTake />
      <Pricing />
      <BookRemoval />
      <Reviews />
      <footer className="bg-blue-800 text-white p-4 text-center">
        <ul className="flex justify-center space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#what-we-take" className="hover:underline">What We Take</a></li>
          <li><a href="#pricing" className="hover:underline">Pricing</a></li>
          <li><a href="#reviews" className="hover:underline">Reviews</a></li>
          <li><a href="#top" className="hover:underline">Back to Top</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default App;