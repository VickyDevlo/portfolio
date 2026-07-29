import { usePageTitle } from "../hooks/usePageTitle";
import { HighlightStrip } from "../components/HighlightStrip";
import { FeaturedWork } from "../components/FeaturedWork";
import { ExploreMore } from "../components/ExploreMore";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
  usePageTitle("React & SAP UI5 Developer");

  return (
    <>
      <HeroSection />
      <HighlightStrip />
      <FeaturedWork />
      <ExploreMore />
    </>
  );
};
