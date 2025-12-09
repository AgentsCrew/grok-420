export default function PredictionMarket() {
    const odds = 78;

    return (
        <div className="rounded-xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-white">
                    <span className="mr-2 text-neon">●</span>
                    Prediction Market Odds
                </h3>
                <span className="text-xs text-neutral-500">Updated: 2m ago</span>
            </div>

            <div className="mb-2 flex items-end justify-between">
                <span className="text-sm text-neutral-400">Will Grok 4.20 release in {new Date().toLocaleString('default', { month: 'long' })}?</span>
                <span className="text-2xl font-black text-neon">{odds}% YES</span>
            </div>

            <div className="h-4 w-full overflow-hidden rounded-full bg-white/5">
                <div
                    className="h-full bg-neon shadow-[0_0_10px_#39FF14]"
                    style={{ width: `${odds}%` }}
                />
            </div>

            <div className="mt-4 flex gap-2">
                <div className="flex-1 rounded bg-neon/10 py-2 text-center text-sm font-bold text-neon cursor-pointer hover:bg-neon/20 border border-neon/30">
                    BET YES
                </div>
                <div className="flex-1 rounded bg-red-500/10 py-2 text-center text-sm font-bold text-red-400 cursor-pointer hover:bg-red-500/20 border border-red-500/30">
                    BET NO
                </div>
            </div>
        </div>
    );
}
