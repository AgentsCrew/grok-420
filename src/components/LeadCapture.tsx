"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function LeadCapture() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-12 border-y border-white/5 bg-neutral-900/30">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tighter text-white">
                    Don't rely on Twitter. Get notified first.
                </h2>

                <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 md:flex-row">
                    <input
                        type="email"
                        placeholder="elon@mars.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "success" || status === "loading"}
                        className="flex-1 rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-neutral-500 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={status === "success" || status === "loading"}
                        className="flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3 font-bold text-black transition-all hover:bg-neon/90 hover:shadow-[0_0_20px_#39FF14] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? "Joining..." : status === "success" ? "You're In!" : "Join Waitlist"}
                        {status !== "loading" && status !== "success" && <Send className="h-4 w-4" />}
                    </button>
                </form>
                {status === "success" && (
                    <p className="mt-4 text-sm text-neon animate-fade-in">
                        Success! You'll be the first to know when Grok 4.20 drops.
                    </p>
                )}
            </div>
        </section>
    );
}
