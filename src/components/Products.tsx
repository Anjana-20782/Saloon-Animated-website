'use client';

import { useState } from 'react';
import { PRODUCTS } from '@/lib/constants';

export default function Products() {
  const [showAll, setShowAll] = useState(false);

  // Show only first 8 initially, show all 20 on click
  const displayedProducts = showAll ? PRODUCTS : PRODUCTS.slice(0, 8);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-stone-200 pb-8">
          <h2 className="text-5xl font-playfair text-stone-900 font-bold uppercase tracking-tight">
            Beauty Curations
          </h2>
          <p className="text-stone-600 max-w-xs md:text-right text-sm font-lato italic mt-4 md:mt-0 leading-relaxed">
            Our full collection of 20 professional beauty formulas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {displayedProducts.map((p) => (
            <div key={p.id} className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-50 mb-6 border border-stone-100 shadow-sm">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-playfair text-xl text-stone-900 font-bold group-hover:text-stone-700 transition-colors">
                  {p.name}
                </h3>
                <div className="flex justify-between items-center border-t border-stone-100 pt-2">
                  <span className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">{p.category}</span>
                  <span className="text-stone-900 font-bold text-sm">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-24 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="px-12 py-4 border border-stone-900 text-stone-900 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-stone-900 hover:text-white transition-all duration-500"
            >
              View Full Collection ({PRODUCTS.length} Items)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}