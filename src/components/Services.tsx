'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { SALON_SERVICES } from '@/lib/constants';

export default function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        // Clone the items for a seamless loop
        const items = gsap.utils.toArray(scrollContainer.children);
        
        // Calculate total width of one set of items
        const totalWidth = scrollContainer.scrollWidth;

        // Create the infinite horizontal animation
        const loop = gsap.to(items, {
            xPercent: -100 * (items.length / 2), // Adjust based on duplicates
            ease: "none",
            duration: 30, // Adjust speed (higher is slower)
            repeat: -1,
            // Use modifiers to wrap the items back to the start
            modifiers: {
                xPercent: gsap.utils.unitize(gsap.utils.wrap(-100 * (items.length / 2), 0))
            }
        });

        // Optional: Pause on hover
        scrollContainer.addEventListener("mouseenter", () => loop.pause());
        scrollContainer.addEventListener("mouseleave", () => loop.play());

        return () => {
            loop.kill();
        };
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden flex flex-col">
            {/* Fixed Heading */}
            <div className="px-10 md:px-20 mb-16">
                <h2 className="text-6xl md:text-8xl font-playfair text-stone-900 mb-4 tracking-tight">
                    Our Provisions
                </h2>
                <div className="w-32 h-[1px] bg-stone-900" />
            </div>

            {/* Automatic Scroll Track */}
            <div className="relative flex items-center overflow-hidden">
                <div 
                    ref={scrollRef} 
                    className="flex gap-20 w-max"
                >
                    {/* Render services twice to create a seamless loop */}
                    {[...SALON_SERVICES, ...SALON_SERVICES].map((service, i) => (
                        <div 
                            key={i} 
                            className="w-[300px] md:w-[450px] shrink-0 border-l border-stone-200 pl-10"
                        >
                            <span className="text-stone-400 font-mono text-sm tracking-widest block mb-6">
                                {(i % 10) + 1 < 10 ? `0${(i % 10) + 1}` : (i % 10) + 1}
                            </span>
                            <h3 className="text-4xl font-playfair text-stone-900 mb-6">
                                {service.title}
                            </h3>
                            <p className="text-stone-600 font-lato font-light leading-relaxed text-lg mb-8">
                                {service.details}
                            </p>
                            <span className="text-stone-900 font-bold tracking-[0.2em] text-xs uppercase">
                                {service.price}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}