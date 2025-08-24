import Footer from '@/components/footer/Footer';
import { Onboard } from '@/components/home';
import { Hero, PenPals, Featured, Passenger, Article } from '@/components/inside'
import React from 'react'

const Inside = () => {
  return (
    <div>
      <Hero />
      <div id="penpals">
        <PenPals />
      </div>
      <div id="featured">
        <Featured />
      </div>
      <div id="passenger">
        <Passenger />
      </div>
      <div id="article">
        <Article />
      </div>
      {/* <div id="footprints">
        <FootPrints />
      </div> */}
      <div id="onboard">
        <Onboard />
      </div>
      <Footer />
    </div>
  );
};

export default Inside