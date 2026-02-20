'use client';

import { useRef } from 'react';
import ScrollScene from "@/components/ScrollScene";
import Services from "@/components/Services";
import Products from "@/components/Products";
import BookNow from "@/components/BookNow";

export default function Home() {
  const serviceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative selection:bg-stone-900 selection:text-white">
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
  <div className="text-2xl font-playfair font-bold tracking-widest">SERENITY</div>
  <div className="flex gap-8 items-center font-bold text-[11px] uppercase tracking-[0.2em]">
    <button onClick={() => scrollTo(serviceRef)} className="hover:text-stone-400">Services</button>
    <button onClick={() => scrollTo(productRef)} className="hover:text-stone-400">Curation</button>
    {/* Solid Button for high visibility */}
    <button 
      onClick={() => scrollTo(bookingRef)} 
      className="bg-white text-black px-6 py-2 hover:bg-stone-200 transition-colors"
    >
      Book
    </button>
  </div>
</nav>
      <ScrollScene />

      <div ref={serviceRef}><Services /></div>
      <div ref={productRef}><Products /></div>
      <div ref={bookingRef}><BookNow /></div>

      <footer className="bg-stone-900 text-stone-500 py-16 px-6 text-center">
        <div className="text-xl font-playfair text-white mb-8">SERENITY</div>
        <div className="text-[10px] uppercase tracking-[0.5em]">
          Est. 2026 • Luxury Beauty Group
        </div>
      </footer>
    </main>
  );
}