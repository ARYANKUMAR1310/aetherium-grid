import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EnergyDashboard from "@/components/EnergyDashboard";
import EnergyMarketplace from "@/components/EnergyMarketplace";
import RealTimeMarket from "@/components/RealTimeMarket";
import CarbonCredits from "@/components/CarbonCredits";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <EnergyDashboard />
        <EnergyMarketplace />
        <RealTimeMarket />
        <CarbonCredits />
      </main>
    </div>
  );
};

export default Index;
