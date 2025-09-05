import EnergyNavbar from "@/components/EnergyNavbar";
import EnergyHero from "@/components/EnergyHero";
import ProsumerDashboard from "@/components/ProsumerDashboard";
import PoolSection from "@/components/PoolSection";
import TradesSection from "@/components/TradesSection";
import MarketInsights from "@/components/MarketInsights";
import ProfileWallet from "@/components/ProfileWallet";
import RealTimeMarket from "@/components/RealTimeMarket";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnergyNavbar />
      <main>
        <EnergyHero />
        <ProsumerDashboard />
        <PoolSection />
        <TradesSection />
        <MarketInsights />
        <RealTimeMarket />
        <ProfileWallet />
      </main>
    </div>
  );
};

export default Index;
