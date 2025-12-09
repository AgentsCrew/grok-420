"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Placeholder date: Jan 1st next year
        const targetDate = new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00`).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -ml-[50%] h-[500px] w-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon/10 via-background to-transparent opacity-50 blur-3xl" />

            <div className="container relative mx-auto px-4 text-center">
                <div className="mb-6 inline-flex items-center rounded-full border border-neon/30 bg-neon/10 px-3 py-1 text-sm text-neon animate-pulse">
                    <span className="mr-2 h-2 w-2 rounded-full bg-neon shadow-[0_0_10px_#39FF14]" />
                    Waiting for Release
                </div>

                <h1 className="mb-6 text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 md:text-8xl lg:text-9xl">
                    GROK 4.20 <br />
                    <span className="text-neon drop-shadow-[0_0_20px_rgba(57,255,20,0.3)]">IS COMING.</span>
                </h1>

                <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-400">
                    The singularity is near. Join the unofficial watchlist for the most anticipated AI drop in history.
                </p>

                {/* Countdown */}
                <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 py-8 transition-colors hover:border-neon/50 hover:bg-white/10"
                        >
                            <div className="text-5xl font-mono font-bold text-white group-hover:text-neon group-hover:shadow-[0_0_10px_#39FF14] transition-all duration-300">
                                {String(item.value).padStart(2, "0")}
                            </div>
                            <div className="mt-2 text-sm text-neutral-500 uppercase tracking-widest">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
