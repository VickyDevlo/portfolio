import { usePageTitle } from "../hooks/usePageTitle";
import { HighlightStrip } from "../components/HighlightStrip";
import { FeaturedWork } from "../components/FeaturedWork";
import { ExploreMore } from "../components/ExploreMore";
import { HeroSection } from "../components/HeroSection";
import { useToast } from "../hooks/useToast";

export const Home = () => {
  usePageTitle("React & SAP UI5 Developer");
const toast = useToast()
  const handleClick = () =>{
    toast.success("hello")
  }

  return (
    <>
    <button onClick={handleClick}>Click me</button>
      <HeroSection />
      <HighlightStrip />
      <FeaturedWork />
      <ExploreMore />
    </>
  );
};
