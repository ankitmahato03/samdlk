import Banner from "@/components/banner";
import { FeaturesSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ImportantLinks } from "@/components/important-link";
import { NavigationBar } from "@/components/navbar";
import { PhotoGallery } from "@/components/photo-gallery";
import { PrincipalMessage } from "@/components/principle-massage";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="m-2">
        <NavigationBar />
        <HeroSection />
        <FeaturesSection />
        <PrincipalMessage />
        <PhotoGallery />
        <ImportantLinks/>
        <Footer />
      </div>
    </div>
  );
}
