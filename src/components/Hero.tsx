import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Leaf, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-energy-grid.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-muted/20" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Aetherium
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Decentralized Energy Marketplace
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Transform from energy consumer to prosumer. Trade renewable energy directly, 
            earn carbon credits, and build a sustainable future through blockchain-powered peer-to-peer energy trading.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6">
            <Zap className="mr-2 h-5 w-5" />
            Start Trading Energy
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">P2P Trading</h3>
            <p className="text-muted-foreground text-sm">
              Sell excess energy directly to neighbors and earn more
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Carbon Credits</h3>
            <p className="text-muted-foreground text-sm">
              Earn tokenized carbon credits for renewable energy
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">ZK Privacy</h3>
            <p className="text-muted-foreground text-sm">
              Private transactions with zero-knowledge proofs
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Grid</h3>
            <p className="text-muted-foreground text-sm">
              Automated trading with smart contracts
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;