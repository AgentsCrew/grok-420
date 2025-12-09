import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function MemecoinsPage() {
    const tokens = [
        { name: "$GROK420", chain: "SOL", price: "$0.000420", change: "+69%", isUp: true },
        { name: "$ELONAI", chain: "ETH", price: "$1.24", change: "+12%", isUp: true },
        { name: "$XAI", chain: "BSC", price: "$0.05", change: "-4%", isUp: false },
        { name: "$OPTIMUS", chain: "SOL", price: "$0.002", change: "+1400%", isUp: true },
        { name: "$TWITTER", chain: "ETH", price: "$0.00001", change: "-20%", isUp: false },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="mb-8 text-4xl font-black tracking-tighter text-white">
                TOP AI MEME TOKENS
                <span className="ml-4 text-xs font-normal text-neon border border-neon px-2 py-0.5 rounded-full">
                    HIGH RISK / HIGH REWARD
                </span>
            </h1>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm">
                <table className="w-full text-left text-white">
                    <thead className="bg-white/5 uppercase text-neutral-500 text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Token Name</th>
                            <th className="px-6 py-4">Chain</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4 text-right">24h Change</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {tokens.map((token, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 font-bold text-lg group-hover:text-neon transition-colors">
                                    {token.name}
                                </td>
                                <td className="px-6 py-4 text-neutral-400 font-mono text-sm">{token.chain}</td>
                                <td className="px-6 py-4 font-mono">{token.price}</td>
                                <td className={`px-6 py-4 text-right font-bold flex items-center justify-end gap-1 ${token.isUp ? "text-neon" : "text-red-500"}`}>
                                    {token.isUp ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                    {token.change}
                                </td>
                                <td className="px-6 py-4 text-right action-cell">
                                    <button className="bg-neon/10 text-neon hover:bg-neon hover:text-black px-4 py-1 rounded text-xs font-bold transition-all border border-neon/30">
                                        DEGEN APE
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-8 text-xs text-neutral-500 text-center max-w-2xl mx-auto">
                Disclaimer: This is not financial advice. Most meme coins go to zero. We are just indexing what people are aping into. Do your own research.
            </p>
        </div>
    );
}
