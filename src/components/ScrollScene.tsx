'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ROOMS } from '@/lib/constants';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            const totalRooms = ROOMS.length;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalRooms * 100}%`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            ROOMS.forEach((room, i) => {
                if (i === 0) return;
                tl.to(textsRef.current[i - 1], {
                    y: -50,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.in"
                }, i - 0.75);

                tl.fromTo(`#bg-${room.id}`,
                    { opacity: 0, scale: 1.1 },
                    { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut" },
                    i - 1
                );

                tl.fromTo(textsRef.current[i],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                    i - 0.25
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                {ROOMS.map((room, i) => (
                    <div
                        key={room.id}
                        id={`bg-${room.id}`}
                        className={`absolute inset-0 h-full w-full ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        style={{ zIndex: i }}
                    >
                        <Image
                            src={room.imageUrl}
                            alt={room.title}
                            fill
                            className="object-cover"
                            priority={i === 0}
                            quality={90}
                        />
                        {/* Increased overlay opacity for better text contrast */}
                        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
                    </div>
                ))}
            </div>

            <div className="relative z-50 h-full w-full pointer-events-none">
                {ROOMS.map((room, i) => (
                    <div
                        key={room.id}
                        ref={(el) => { textsRef.current[i] = el; }}
                        className={`absolute inset-0 flex flex-col items-center justify-center p-6 ${i === 0 ? 'opacity-100' : 'opacity-0 translate-y-12'}`}
                    >
                        {/* High-contrast White text with strong shadow */}
                        <h2 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-6 text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transform will-change-transform">
                            {room.title}
                        </h2>
                        <p className="text-xl md:text-2xl font-lato text-stone-100 font-light text-center max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                            {room.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white">
                <span className="text-xs uppercase tracking-widest font-bold drop-shadow-md">Scroll to Explore</span>
            </div>
        </div>
    );
}