import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";

const EnergyHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Trade Your <span className="text-primary">Clean Energy</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Pool your renewable energy with other prosumers and trade directly on IEX/PXIL for better rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-card border">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pool Your Energy</h3>
            <p className="text-muted-foreground">Combine your excess renewable energy with other prosumers to meet 1MW trading requirements</p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Market Trading</h3>
            <p className="text-muted-foreground">Trade directly on energy exchanges (IEX/PXIL) for better clearing prices</p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fair Compensation</h3>
            <p className="text-muted-foreground">Receive proportional earnings based on your energy contribution to the pool</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Start Trading Energy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            View Market Data
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnergyHero;