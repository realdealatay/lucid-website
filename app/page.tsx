import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { SocialProof } from "@/components/sections/social-proof";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-void">
      <main className="flex flex-col">
        <Hero />
        <FeatureGrid />
        <ProductShowcase />
        <SocialProof />
      </main>
      <SiteFooter />
    </div>
  );
}
