'use client';

import { useRef, useState } from 'react';
import { ShoppingCart, Menu, X as CloseIcon } from 'lucide-react';
import ScrollScene from "@/components/ScrollScene";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import BookNow from "@/components/BookNow";
import CartView from "@/components/CartView";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const { setIsCartOpen, cart } = useCart();

  /**
   * FIXED: Added '| null' to the RefObject type to prevent the 
   * TypeScript "Type 'null' is not assignable" error during build.
   */
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <main className="relative bg-white overflow-x-hidden">
      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-10 md:py-8 flex justify-between items-center mix-blend-difference text-white">
        
        {/* Brand Logo */}
        <div className="text-2xl md:text-3xl font-playfair font-black tracking-[0.15em]">
          SERENITY
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden lg:flex gap-10 items-center">
          <div className="flex gap-8 text-sm uppercase tracking-[0.2em] font-bold">
            <button onClick={() => scrollTo(aboutRef)} className="hover:opacity-50 transition-opacity">About</button>
            <button onClick={() => scrollTo(serviceRef)} className="hover:opacity-50 transition-opacity">Services</button>
            <button onClick={() => scrollTo(productRef)} className="hover:opacity-50 transition-opacity">Curation</button>
          </div>
          
          {/* Cart Button with Badge */}
          <button onClick={() => setIsCartOpen(true)} className="relative flex items-center gap-3 group">
            <div className="relative">
              <ShoppingCart size={22} strokeWidth={2.5} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black h-4 w-4 rounded-full flex items-center justify-center border border-black animate-in zoom-in">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Cart</span>
          </button>

          {/* Book Now Button */}
          <button 
            onClick={() => scrollTo(bookingRef)} 
            className="bg-white text-black px-8 py-3 text-sm font-black uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors shadow-lg"
          >
            Book
          </button>
        </div>

        {/* Mobile Controls - Visible on Mobile and Tablet */}
        <div className="lg:hidden flex items-center gap-6">
           <button onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingCart size={26} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
           </button>
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-[60]">
             {isMenuOpen ? <CloseIcon size={30} /> : <Menu size={30} />}
           </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-stone-900 text-white flex flex-col items-center justify-center gap-10 text-3xl font-playfair uppercase tracking-widest animate-in slide-in-from-top duration-500">
           <button onClick={() => scrollTo(aboutRef)}>About</button>
           <button onClick={() => scrollTo(serviceRef)}>Services</button>
           <button onClick={() => scrollTo(productRef)}>Curation</button>
           <button 
              onClick={() => scrollTo(bookingRef)} 
              className="bg-white text-black px-12 py-5 text-xl font-black shadow-2xl"
           >
              Book Now
           </button>
        </div>
      )}

      {/* ================= PAGE SECTIONS ================= */}
      
      <ScrollScene />
      
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={serviceRef}>
        <Services />
      </div>

      <div ref={productRef}>
        <Products />
      </div>

      <div ref={bookingRef}>
        <BookNow />
      </div>

      {/* ================= GLOBAL OVERLAYS ================= */}
      
      <CartView />

    </main>
  );
}