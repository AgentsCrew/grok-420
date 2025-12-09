export default function TwitterFeed() {
    return (
        <div className="rounded-xl border border-white/10 bg-black min-h-[400px] p-4">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-bold text-white">#Grok420 Activity</h3>
                <div className="h-2 w-2 rounded-full bg-neon animate-pulse" />
            </div>

            {/* Skeleton UI for Tweets */}
            <div className="space-y-4 opacity-50">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 p-4 rounded bg-neutral-900/50">
                        <div className="h-10 w-10 rounded-full bg-neutral-700" />
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-1/3 bg-neutral-700 rounded" />
                            <div className="h-16 w-full bg-neutral-800 rounded" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-neutral-500 mb-4">Live feed loading...</p>
                <a
                    href="https://twitter.com/search?q=%23Grok420"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-[#1DA1F2] px-6 py-2 text-sm font-bold text-white hover:bg-[#1a94df]"
                >
                    View on X (Twitter)
                </a>
            </div>
        </div>
    );
}
