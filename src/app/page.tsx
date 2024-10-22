import AiPowerHouse from "./components/aiPowerHouse";
import ChooseFunnel from "./components/chooseFunnel";
import CTA from "./components/cta";
import Faq from "./components/faq";
import Footer from "./components/footer";
import FunnelBuilder from "./components/funnelBuilder";
import FunnelFreedom from "./components/funnelFreedom";
import FunnelSteps from "./components/funnelSteps";
import Hero from "./components/hero";
import SuccessStories from "./components/successStories";
import TailoredSolutions from "./components/tailoredSolutions";

export default function Home() {
  return (
    <div>
      <Hero />
      <FunnelFreedom />
      <FunnelBuilder />
      <FunnelSteps />
      <AiPowerHouse />
      <TailoredSolutions />
      <SuccessStories />
      <ChooseFunnel />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}
