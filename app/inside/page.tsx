import Footer from '@/components/footer/Footer';
import { Onboard } from '@/components/home';
import { Hero, PenPals, Featured, Passenger, Article, FootPrints } from '@/components/inside'
import React from 'react'

const Inside = () => {
  return (
    <div>
      <Hero />
      <PenPals />
      <Featured />
      <Passenger />
      <Article />
      <FootPrints />
      <Onboard />
      <Footer />
    </div>
  );
};

export default Inside