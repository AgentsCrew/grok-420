import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-black py-12">
            {/* Ad Space */}
            <div className="container mx-auto mb-12 flex justify-center px-4">
                <div className="flex h-[90px] w-full max-w-[728px] items-center justify-center border border-dashed border-white/20 bg-white/5 text-sm text-neutral-500">
                    728x90 Ad Banner Placehonlder
                </div>
            </div>

            <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
                <div className="col-span-1 md:col-span-2">
                    <h4 className="mb-4 text-lg font-bold text-white">
                        GROK 4.20 <span className="text-neon">TRACKER</span>
                    </h4>
                    <p className="max-w-xs text-sm text-neutral-500">
                        The #1 unofficial community hub for xAI's upcoming Grok 4.20 release.
                        Tracking rumors, leaks, and memecoins.
                    </p>
                </div>

                <div>
                    <h5 className="mb-4 font-bold text-white">Explore</h5>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li><Link href="/" className="hover:text-neon">Home</Link></li>
                        <li><Link href="/memecoins" className="hover:text-neon">Meme Coins</Link></li>
                        <li><Link href="/merch" className="hover:text-neon">Merch</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="mb-4 font-bold text-white">Legal</h5>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li><Link href="/disclaimer" className="hover:text-neon">Disclaimer</Link></li>
                        <li><Link href="#" className="hover:text-neon">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-neon">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-12 px-4 text-center text-xs text-neutral-600">
                &copy; {new Date().getFullYear()} Grok 4.20 Tracker. Unofficial Fan Site. Not affiliated with xAI.
            </div>
        </footer>
    );
}
