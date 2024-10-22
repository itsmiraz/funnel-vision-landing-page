import FunnelBuilder from "./components/funnelBuilder";
import FunnelFreedom from "./components/funnelFreedom";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FunnelFreedom />

      <FunnelBuilder />
    </div>
  );
}
