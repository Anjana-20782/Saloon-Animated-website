'use client';

import { useRef } from 'react';
import ScrollScene from "@/components/ScrollScene";
import About from "@/components/About"; // Import the new component
import Services from "@/components/Services";
import Products from "@/components/Products";
import BookNow from "@/components/BookNow";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative">
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-2xl font-playfair font-bold">SERENITY</div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <button onClick={() => scrollTo(aboutRef)}>About</button>
          <button onClick={() => scrollTo(serviceRef)}>Services</button>
          <button onClick={() => scrollTo(productRef)}>Curation</button>
          <button onClick={() => scrollTo(bookingRef)} className="bg-white text-black px-4 py-1">Book</button>
        </div>
      </nav>

      <ScrollScene />
      
      {/* New About Section */}
      <div ref={aboutRef}><About /></div>

      <div ref={serviceRef}><Services /></div>
      <div ref={productRef}><Products /></div>
      <div ref={bookingRef}><BookNow /></div>
    </main>
  );
}