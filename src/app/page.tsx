"use client"

import Brands from '@/components/brands';
import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Team from '@/components/team';
export default function Home() {
  return (
    <>
      <Nav hero={true} />
      <Carousel />
      <Hero />
      <Team />
      <Brands />
      <Footer />
    </>
  );
}
