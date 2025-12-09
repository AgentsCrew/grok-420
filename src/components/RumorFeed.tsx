import { AlertTriangle, MessageSquare } from "lucide-react";

export default function RumorFeed() {
    const rumors = [
        {
            id: 1,
            title: "Elon posts cryptic '420' meme on X",
            source: "X (Twitter)",
            time: "2h ago",
            tag: "CONFIRMED",
            color: "text-neon",
        },
        {
            id: 2,
            title: "Benchmark leaked: 99.9% coding accuracy",
            source: "Reddit /r/LocalLLaMA",
            time: "5h ago",
            tag: "RUMOR",
            color: "text-orange-400",
        },
        {
            id: 3,
            title: "xAI buys 100,000 H100 GPUs",
            source: "Bloomberg",
            time: "1d ago",
            tag: "NEWS",
            color: "text-blue-400",
        },
        {
            id: 4,
            title: "Grok 4.20 will voice chat with optional sarcasm mode",
            source: "Insider Leak",
            time: "2d ago",
            tag: "LEAK",
            color: "text-red-400",
        },
    ];

    return (
        <div className="rounded-xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-sm h-full">
            <div className="mb-6 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-neon" />
                <h3 className="font-bold text-white text-lg">Latest Leaks</h3>
            </div>

            <div className="space-y-6">
                {rumors.map((leak) => (
                    <div key={leak.id} className="group relative pl-4 border-l-2 border-white/10 hover:border-neon transition-colors">
                        <div className="mb-1 flex items-center justify-between">
                            <span className={`text-[10px] font-bold tracking-wider ${leak.color} border border-current px-1.5 rounded-sm opacity-80`}>
                                {leak.tag}
                            </span>
                            <span className="text-xs text-neutral-500">{leak.time}</span>
                        </div>
                        <p className="font-medium text-neutral-200 group-hover:text-white transition-colors cursor-pointer">
                            {leak.title}
                        </p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                            <MessageSquare className="h-3 w-3" />
                            <span>{leak.source}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-6 w-full py-2 text-xs font-mono text-neon hover:underline text-center opacity-70 hover:opacity-100">
                VIEW ARCHIVE_
            </button>
        </div>
    );
}
