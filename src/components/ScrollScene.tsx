'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ROOMS } from '@/lib/constants';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    // Using refs for direct GSAP access
    const textsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            const totalRooms = ROOMS.length;

            // Master timeline that scrubs through all changes
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalRooms * 100}%`, // Scroll distance: 100% of viewport height per room
                    scrub: 1, // Smooth scrubbing
                    pin: true,
                    anticipatePin: 1,
                }
            });

            ROOMS.forEach((room, i) => {
                // Skip the first room's setup as it is the initial state
                if (i === 0) return;

                // Position in the timeline
                // 0 -> 1 is transition from Room 0 to Room 1
                const position = i - 0.25; // Start slightly before the integer mark for overlap

                // 1. Fade out previous text
                tl.to(textsRef.current[i - 1], {
                    y: -50,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.in"
                }, i - 0.75); // Start exiting early

                // 2. Fade in new background
                // We select by ID for stable targeting or we could use another ref array
                tl.fromTo(`#bg-${room.id}`,
                    { opacity: 0, scale: 1.1 }, // Slight zoom effect
                    { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut" },
                    i - 1 // Start exactly when previous room 'ends' in terms of scroll index
                );

                // 3. Fade in new text
                tl.fromTo(textsRef.current[i],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                    i - 0.25 // Arrive towards the end of the transition
                );
            });

            // Ensure the last text fades out if needed, or stays.
            // Usually we want the last scene to hold.

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {ROOMS.map((room, i) => (
                    <div
                        key={room.id}
                        id={`bg-${room.id}`}
                        className={`absolute inset-0 h-full w-full ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        style={{ zIndex: i }} // Ensure stacking order
                    >
                        <Image
                            src={room.imageUrl}
                            alt={room.title}
                            fill
                            className="object-cover"
                            priority={i === 0}
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                    </div>
                ))}
            </div>

            {/* Foreground Content Layer */}
            <div className="relative z-50 h-full w-full pointer-events-none">
                {ROOMS.map((room, i) => (
                    <div
                        key={room.id}
                        ref={(el) => { textsRef.current[i] = el; }}
                        className={`absolute inset-0 flex flex-col items-center justify-center p-6 ${i === 0 ? 'opacity-100' : 'opacity-0 translate-y-12'}`}
                    >
                        <h2 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-6 text-center drop-shadow-lg transform will-change-transform">
                            {room.title}
                        </h2>
                        <p className="text-xl md:text-2xl font-lato text-stone-200 font-light text-center max-w-2xl drop-shadow-md">
                            {room.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Optional: Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white/50">
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
            </div>
        </div>
    );
}
