import { Check, X, Minus } from "lucide-react";

export default function ComparisonGrid() {
    const models = [
        {
            name: "GPT-5",
            status: "Rumored",
            context: "1M+ Tokens",
            IQ: "~160",
            aesthetic: "Corporate Grey",
            isWinner: false,
        },
        {
            name: "GROK 4.20",
            status: "IMMINENT",
            context: "Infinite Context",
            IQ: "42069",
            aesthetic: "Cyberpunk Based",
            isWinner: true,
        },
        {
            name: "Claude 4",
            status: "Training",
            context: "200k Tokens",
            IQ: "~155",
            aesthetic: "Safe & Sterile",
            isWinner: false,
        },
    ];

    return (
        <section className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <h3 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white">
                    THE <span className="text-neon">REALITY CHECK</span>
                </h3>

                <div className="grid gap-8 md:grid-cols-3">
                    {models.map((model, i) => (
                        <div
                            key={i}
                            className={`relative flex flex-col rounded-xl border p-8 transition-all hover:-translate-y-2 ${model.isWinner
                                    ? "border-neon bg-neon/5 shadow-[0_0_30px_rgba(57,255,20,0.1)] z-10 scale-105"
                                    : "border-white/10 bg-neutral-900/50 hover:border-white/20"
                                }`}
                        >
                            {model.isWinner && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-neon px-4 py-1 text-xs font-black text-black shadow-[0_0_10px_#39FF14]">
                                    RECOMMENDED
                                </div>
                            )}

                            <h4 className={`text-2xl font-black mb-2 ${model.isWinner ? "text-neon" : "text-white"}`}>
                                {model.name}
                            </h4>
                            <p className="mb-6 text-sm text-neutral-400 font-mono">{model.status}</p>

                            <ul className="mb-8 space-y-4 flex-1">
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-neutral-500">Context</span>
                                    <span className="font-bold text-white">{model.context}</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-neutral-500">Est. IQ</span>
                                    <span className="font-bold text-white">{model.IQ}</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-neutral-500">Vibe</span>
                                    <span className="font-bold text-white">{model.aesthetic}</span>
                                </li>
                            </ul>

                            <button
                                className={`w-full rounded-lg py-3 font-bold transition-all ${model.isWinner
                                        ? "bg-neon text-black hover:shadow-[0_0_20px_#39FF14]"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                            >
                                {model.isWinner ? "JOIN WAITLIST" : "READ RUMORS"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
