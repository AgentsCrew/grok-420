export default function DisclaimerPage() {
    return (
        <div className="container mx-auto max-w-2xl px-4 py-12">
            <h1 className="mb-8 text-3xl font-bold text-white">Disclaimer & Legal Notice</h1>

            <div className="space-y-6 text-neutral-400 text-sm leading-relaxed">
                <p>
                    <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
                </p>

                <section>
                    <h2 className="mb-2 text-lg font-bold text-white">1. Not Affiliated with xAI</h2>
                    <p>
                        Grok-420.com is an unofficial fan website and news aggregator. We are NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with xAI (X.AI Corp), Elon Musk, or any of their subsidiaries or affiliates. The official xAI website can be found at https://x.ai.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-lg font-bold text-white">2. Parody and Fair Use</h2>
                    <p>
                        This website is created for entertainment, parody, and informational purposes only. The name "Grok 4.20" is used here in a speculative and satirical context regarding internet culture and rumors surrounding AI release dates.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-lg font-bold text-white">3. No Financial Advice</h2>
                    <p>
                        The "Memecoins" section and any references to cryptocurrency are for entertainment purposes only. Nothing on this site constitutes financial advice, investment advice, or trading advice. We do not recommend buying any specific token. Cryptocurrency is highly volatile.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-lg font-bold text-white">4. Prediction Market Data</h2>
                    <p>
                        The odds displayed in the "Prediction Market" widgets are illustrative and loosely based on community sentiment or static placeholders. They do not reflect real money gambling odds.
                    </p>
                </section>

                <div className="mt-12 rounded bg-neutral-900 border border-white/10 p-4">
                    <p className="font-bold text-white">Contact Us</p>
                    <p>For DMCA takedowns or inquiries: legal@grok-420.com (Placeholder)</p>
                </div>
            </div>
        </div>
    );
}
