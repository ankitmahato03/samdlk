import { FeaturesSection } from '@/components/feature-section';
import { HeroSection } from '@/components/hero-section';
import { NavigationBar } from '@/components/navbar';
import { PhotoGallery } from '@/components/photo-gallery';

export default function Home() {
  return (
    <div className="m-2">
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
      <PhotoGallery />
    </div>
  );
}
