'use client';
import { ABOUT_CONTENT } from '@/lib/constants';

export default function About() {
  return (
    <section className="py-24 bg-stone-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Imagery */}
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80" 
              alt="Salon Craft"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none" />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-stone-400 uppercase tracking-[0.3em] text-[10px] font-bold">
                {ABOUT_CONTENT.subtitle}
              </span>
              <h2 className="text-5xl md:text-7xl font-playfair text-stone-900 leading-tight">
                {ABOUT_CONTENT.title}
              </h2>
            </div>

            <p className="text-stone-600 font-lato text-lg leading-relaxed font-light">
              {ABOUT_CONTENT.description}
            </p>

            <blockquote className="border-l-2 border-stone-900 pl-6 py-2 italic text-stone-900 font-playfair text-xl">
              "{ABOUT_CONTENT.philosophy}"
            </blockquote>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
              {ABOUT_CONTENT.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-playfair text-stone-900 font-bold">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}