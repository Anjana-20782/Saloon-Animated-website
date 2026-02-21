'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { SALON_SERVICES } from '@/lib/constants';

export default function Services() {

  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const items = gsap.utils.toArray(scrollContainer.children);

    const loop = gsap.to(items, {
      xPercent: -100 * (items.length / 2),
      ease: "none",
      duration: 30,
      repeat: -1,

      modifiers: {
        xPercent: gsap.utils.unitize(
          gsap.utils.wrap(-100 * (items.length / 2), 0)
        )
      }
    });

    scrollContainer.addEventListener("mouseenter", () => loop.pause());
    scrollContainer.addEventListener("mouseleave", () => loop.play());

    return () => {
      loop.kill();
    };

  }, []);

  return (
    <section
      className="
        py-12 sm:py-16 md:py-24
        bg-white
        overflow-hidden
        flex flex-col
      "
    >

      {/* ================= HEADER ================= */}
      <div
        className="
          px-4 sm:px-8 md:px-16 lg:px-20
          mb-10 sm:mb-12 md:mb-16
        "
      >

        <h2
          className="
            text-3xl sm:text-4xl md:text-6xl lg:text-8xl
            font-playfair
            text-stone-900
            mb-3 sm:mb-4
            tracking-tight
          "
        >
          Our Provisions
        </h2>

        <div className="w-20 sm:w-24 md:w-32 h-[1px] bg-stone-900" />

      </div>

      {/* ================= SCROLL TRACK ================= */}
      <div className="relative flex items-center overflow-hidden">

        <div
          ref={scrollRef}
          className="
            flex
            gap-10 sm:gap-14 md:gap-20
            w-max
          "
        >

          {/* Duplicate for infinite loop */}
          {[...SALON_SERVICES, ...SALON_SERVICES].map((service, i) => (

            <div
              key={i}
              className="
                w-[220px] sm:w-[280px] md:w-[380px] lg:w-[450px]
                shrink-0
                border-l
                border-stone-200
                pl-4 sm:pl-6 md:pl-10
              "
            >

              {/* Number */}
              <span
                className="
                  text-stone-400
                  font-mono
                  text-xs sm:text-sm
                  tracking-widest
                  block
                  mb-4 sm:mb-6
                "
              >
                {(i % 10) + 1 < 10
                  ? `0${(i % 10) + 1}`
                  : (i % 10) + 1}
              </span>

              {/* Title */}
              <h3
                className="
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl
                  font-playfair
                  text-stone-900
                  mb-4 sm:mb-6
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-stone-600
                  font-lato
                  font-light
                  leading-relaxed
                  text-sm sm:text-base md:text-lg
                  mb-6 sm:mb-8
                "
              >
                {service.details}
              </p>

              {/* Price */}
              <span
                className="
                  text-stone-900
                  font-bold
                  tracking-[0.2em]
                  text-[10px] sm:text-xs
                  uppercase
                "
              >
                {service.price}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}