import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import GetStartedSection from "@/components/GetStartedSection";
import FeaturesSection from "@/components/FeaturesSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="tabular-nums">
      <Header />
      <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
        <HeroSection />
        <StatsSection />
        <GetStartedSection />
        <FeaturesSection />
        <AnnouncementsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;