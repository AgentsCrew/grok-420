import HeroSection from "@/components/HeroSection";
import LeadCapture from "@/components/LeadCapture";
import ComparisonGrid from "@/components/ComparisonGrid";
import PredictionMarket from "@/components/PredictionMarket";
import RumorFeed from "@/components/RumorFeed";
import TwitterFeed from "@/components/TwitterFeed";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />

      <LeadCapture />

      <ComparisonGrid />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Feed Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">
                Live Intel
                <span className="ml-2 text-xs font-normal text-neon border border-neon px-2 py-0.5 rounded-full animate-pulse">
                  LIVE UPDATING
                </span>
              </h2>
            </div>
            <RumorFeed />

            {/* Ad Slot */}
            <div className="flex h-[250px] w-full items-center justify-center border border-dashed border-white/20 bg-white/5 text-neutral-500">
              Ad Slot (Native)
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <PredictionMarket />

            <div className="flex justify-center my-4">
              <div className="flex h-[250px] w-[300px] items-center justify-center border border-dashed border-white/20 bg-white/5 text-neutral-500">
                300x250 Ad Slot
              </div>
            </div>

            <TwitterFeed />
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Grok 4.20 Release Date & Rumors",
            "datePublished": new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Grok 4.20 Tracker"
            }
          }),
        }}
      />
    </div>
  );
}
