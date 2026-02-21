'use client';

import { useState } from 'react';
import { PRODUCTS } from '@/lib/constants';
import ProductDetail from './ProductDetail';

export default function Products() {

  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const displayedProducts = showAll
    ? PRODUCTS
    : PRODUCTS.slice(0, 8);

  return (
    <section
      className="
        py-12 sm:py-16 md:py-24
        bg-white
        px-4 sm:px-6 md:px-8
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div
          className="
            flex flex-col md:flex-row
            justify-between items-start md:items-baseline
            mb-12 sm:mb-16 md:mb-20
            border-b border-stone-200
            pb-6 sm:pb-8
            gap-4 md:gap-0
          "
        >

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-playfair
              text-stone-900
              font-bold
              uppercase
              tracking-tight
            "
          >
            Beauty Curations
          </h2>

          <p
            className="
              text-stone-600
              max-w-xs
              md:text-right
              text-xs sm:text-sm
              font-lato
              italic
              leading-relaxed
            "
          >
            Professional formulas selected by our master artisans.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-x-6 md:gap-x-8
            gap-y-10 sm:gap-y-12 md:gap-y-16
          "
        >

          {displayedProducts.map((p) => (

            <div
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className="
                group
                cursor-pointer
                animate-in fade-in
                slide-in-from-bottom-4
                duration-700
              "
            >

              {/* Image */}
              <div
                className="
                  relative
                  aspect-[3/4]
                  overflow-hidden
                  bg-stone-50
                  mb-4 sm:mb-6
                  border
                  border-stone-100
                  shadow-sm
                "
              >

                <img
                  src={p.img}
                  alt={p.name}
                  className="
                    w-full h-full
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Info */}
              <div className="space-y-1 sm:space-y-2">

                <h3
                  className="
                    font-playfair
                    text-lg sm:text-xl
                    text-stone-900
                    font-bold
                  "
                >
                  {p.name}
                </h3>

                <div
                  className="
                    flex
                    justify-between
                    items-center
                    border-t
                    border-stone-100
                    pt-2
                  "
                >

                  <span
                    className="
                      text-stone-500
                      text-[9px] sm:text-[10px]
                      uppercase
                      tracking-widest
                      font-bold
                    "
                  >
                    {p.category}
                  </span>

                  <span
                    className="
                      text-stone-900
                      font-bold
                      text-xs sm:text-sm
                    "
                  >
                    {p.price}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ================= VIEW MORE ================= */}
        {!showAll && (

          <div className="mt-16 sm:mt-20 md:mt-24 text-center">

            <button
              onClick={() => setShowAll(true)}
              className="
                px-6 sm:px-10 md:px-12
                py-3 md:py-4
                border border-stone-900
                text-stone-900
                uppercase
                tracking-[0.3em]
                text-[9px] sm:text-[10px]
                font-bold
                hover:bg-stone-900
                hover:text-white
                transition-all
                duration-500
              "
            >
              View Full Collection ({PRODUCTS.length} Items)
            </button>

          </div>

        )}

      </div>

      {/* ================= MODAL ================= */}
      {selectedProduct && (

        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

      )}

    </section>
  );
}