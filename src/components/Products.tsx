'use client';
import { PRODUCTS } from '@/lib/constants';

export default function Products() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-stone-200 pb-8">
          <h2 className="text-5xl font-playfair text-stone-900">Beauty Curations</h2>
          <p className="text-stone-600 max-w-xs md:text-right text-sm font-lato italic mt-4 md:mt-0">
            Ten essential formulas selected by our master stylists for home care.
          </p>
        </div>
        
        {/* Responsive Grid for 10 products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-50 mb-6">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-playfair text-xl text-stone-900 group-hover:text-stone-700 transition-colors">
                  {p.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                    {p.category}
                  </span>
                  <span className="text-stone-900 font-bold text-sm">
                    {p.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for more products */}
        <div className="mt-24 text-center">
          <button className="px-12 py-4 border border-stone-900 text-stone-900 uppercase tracking-widest text-[10px] hover:bg-stone-900 hover:text-white transition-all duration-300">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}