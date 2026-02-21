'use client';

import { useRef } from 'react';
import { ShoppingCart } from 'lucide-react';

import ScrollScene from "@/components/ScrollScene";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import BookNow from "@/components/BookNow";
import CartView from "@/components/CartView";

import { useCart } from "@/context/CartContext";

export default function Home() {

  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const { setIsCartOpen, cart } = useCart();

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative bg-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          px-4 sm:px-6 md:px-8
          py-3 sm:py-5 md:py-8
          flex justify-between items-center
          mix-blend-difference text-white
        "
      >

        {/* Logo */}
        <div
          className="
            text-lg sm:text-xl md:text-3xl
            font-playfair font-black
            tracking-[0.15em]
          "
        >
          SERENITY
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-12 items-center">

          {/* Links */}
          <div
            className="
              flex gap-6 lg:gap-10
              text-xs md:text-sm lg:text-lg
              uppercase tracking-[0.25em]
              font-bold
            "
          >
            <button
              onClick={() => scrollTo(aboutRef)}
              className="hover:text-stone-400 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => scrollTo(serviceRef)}
              className="hover:text-stone-400 transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => scrollTo(productRef)}
              className="hover:text-stone-400 transition-colors"
            >
              Curation
            </button>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 group hover:opacity-80 transition-all"
          >
            <div className="relative">

              <ShoppingCart
                size={20}
                className="md:w-6 md:h-6 group-hover:scale-110 transition-transform"
              />

              {cart.length > 0 && (
                <span
                  className="
                    absolute -top-2 -right-2
                    bg-red-600 text-white
                    text-[9px] md:text-[10px]
                    font-black
                    h-4 w-4 md:h-5 md:w-5
                    rounded-full
                    flex items-center justify-center
                    border-2 border-black
                  "
                >
                  {cart.length}
                </span>
              )}

            </div>

            <span
              className="
                hidden lg:block
                text-xs md:text-sm
                uppercase tracking-[0.25em]
                font-bold
              "
            >
              Cart
            </span>
          </button>

          {/* Book Button */}
          <button
            onClick={() => scrollTo(bookingRef)}
            className="
              bg-white text-black
              px-5 sm:px-7 md:px-10
              py-2 sm:py-3
              text-[10px] sm:text-xs md:text-sm
              uppercase tracking-[0.3em]
              font-black
              hover:bg-stone-200
              transition-all
              active:scale-95
              shadow-lg
            "
          >
            Book
          </button>

        </div>

      </nav>

      {/* ================= CONTENT ================= */}

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

      {/* ================= CART ================= */}
      <CartView />

    </main>
  );
}