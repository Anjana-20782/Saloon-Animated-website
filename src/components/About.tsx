'use client';

import { ABOUT_CONTENT } from '@/lib/constants';

export default function About() {
  return (
    <section
      className="
        py-12 sm:py-16 md:py-24
        bg-stone-50
        px-4 sm:px-6 md:px-8
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10 sm:gap-12 md:gap-16
            items-center
          "
        >

          {/* Left: Image */}
          <div className="relative aspect-[4/5] overflow-hidden group">

            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
              alt="Salon Craft"
              className="
                w-full h-full object-cover
                transition-transform duration-1000
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 border-[12px] sm:border-[16px] md:border-[20px] border-white/20 pointer-events-none" />

          </div>

          {/* Right: Content */}
          <div className="space-y-6 sm:space-y-8">

            {/* Heading */}
            <div className="space-y-2">

              <span
                className="
                  text-stone-400
                  uppercase
                  tracking-[0.3em]
                  text-[9px] sm:text-[10px]
                  font-bold
                "
              >
                {ABOUT_CONTENT.subtitle}
              </span>

              <h2
                className="
                  text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                  font-playfair
                  text-stone-900
                  leading-tight
                "
              >
                {ABOUT_CONTENT.title}
              </h2>

            </div>

            {/* Description */}
            <p
              className="
                text-stone-600
                font-lato
                text-sm sm:text-base md:text-lg
                leading-relaxed
                font-light
              "
            >
              {ABOUT_CONTENT.description}
            </p>

            {/* Quote */}
            <blockquote
              className="
                border-l-2 border-stone-900
                pl-4 sm:pl-6
                py-2
                italic
                text-stone-900
                font-playfair
                text-base sm:text-lg md:text-xl
              "
            >
              "{ABOUT_CONTENT.philosophy}"
            </blockquote>

            {/* Stats */}
            <div
              className="
                grid
                grid-cols-3
                gap-4 sm:gap-6 md:gap-8
                pt-6 sm:pt-8
                border-t border-stone-200
              "
            >

              {ABOUT_CONTENT.stats.map((stat, i) => (

                <div key={i} className="space-y-1">

                  <div
                    className="
                      text-lg sm:text-xl md:text-2xl
                      font-playfair
                      text-stone-900
                      font-bold
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      text-[9px] sm:text-[10px]
                      uppercase
                      tracking-widest
                      text-stone-400
                      font-bold
                      leading-tight
                    "
                  >
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