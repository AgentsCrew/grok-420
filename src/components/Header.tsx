import Link from 'next/link';
import { ExternalLink, Terminal } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Terminal className="h-6 w-6 text-neon group-hover:shadow-[0_0_10px_#39FF14] transition-all" />
                    <span className="text-xl font-bold tracking-tighter text-neon drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">
                        GROK 4.20 TRACKER
                    </span>
                </Link>

                {/* Center: Badge (Hidden on small mobile) */}
                <div className="hidden md:flex items-center justify-center">
                    <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-500">
                        UNOFFICIAL FAN SITE • NOT AFFILIATED WITH xAI
                    </span>
                </div>

                {/* Right: CTA */}
                <a
                    href="mailto:contact@example.com?subject=Inquiry%20about%20grok-420.com"
                    className="flex items-center gap-2 rounded-md bg-neon px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105 hover:shadow-[0_0_15px_#39FF14]"
                >
                    <span>BUY DOMAIN</span>
                    <ExternalLink className="h-4 w-4" />
                </a>
            </div>
        </header>
    );
}
