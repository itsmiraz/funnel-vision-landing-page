import FunnelBuilder from "./components/funnelBuilder";
import FunnelFreedom from "./components/funnelFreedom";
import FunnelSteps from "./components/funnelSteps";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FunnelFreedom />
      <FunnelBuilder />
      <FunnelSteps/>

    </div>
  );
}
