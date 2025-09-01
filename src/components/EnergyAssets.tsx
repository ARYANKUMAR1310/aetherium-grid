import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Battery, 
  TrendingUp, 
  ArrowUpDown, 
  CheckCircle,
  Calendar,
  Activity
} from "lucide-react";

const EnergyAssets = () => {
  const energyAssets = [
    {
      id: "EA-2024-001",
      amount: "150.5 kWh",
      source: "Solar Generation",
      status: "Available",
      timestamp: "2024-01-15 14:30",
      pricePerKwh: "0.48",
      totalValue: "72.24",
      verified: true
    },
    {
      id: "EA-2024-002",
      amount: "89.2 kWh",
      source: "Wind Energy",
      status: "Sold",
      timestamp: "2024-01-10 09:15",
      pricePerKwh: "0.42",
      totalValue: "37.46",
      verified: true
    },
    {
      id: "EA-2024-003",
      amount: "203.8 kWh",
      source: "Battery Storage",
      status: "Available",
      timestamp: "2024-01-20 16:45",
      pricePerKwh: "0.55",
      totalValue: "112.09",
      verified: true
    }
  ];

  return (
    <section id="energy-assets" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Energy Assets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your energy generation, storage, and trading portfolio with real-time asset tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Energy Assets Overview */}
          <Card className="lg:col-span-2 bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                Your Energy Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary mb-1">1,250 kWh</div>
                  <div className="text-sm text-muted-foreground">Total Generated</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">354 kWh</div>
                  <div className="text-sm text-muted-foreground">Available to Sell</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-1">896 kWh</div>
                  <div className="text-sm text-muted-foreground">Already Sold</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Monthly Trading Goal</span>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">1,440 / 2,000 kWh target</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Battery className="h-5 w-5 text-secondary" />
                Energy Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="energy" className="w-full justify-start">
                <Zap className="mr-2 h-4 w-4" />
                List Energy for Sale
              </Button>
              <Button variant="glass" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trade Energy
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Transfer Assets
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Energy Assets List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Your Energy Assets</h3>
          {energyAssets.map((asset) => (
            <Card key={asset.id} className="bg-gradient-glass backdrop-blur-md border-glass-border hover:shadow-glow-secondary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{asset.id}</span>
                        {asset.verified && (
                          <CheckCircle className="h-4 w-4 text-secondary" />
                        )}
                        <Badge 
                          variant={asset.status === 'Available' ? 'default' : 'secondary'}
                          className={asset.status === 'Available' ? 'bg-secondary text-secondary-foreground' : ''}
                        >
                          {asset.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{asset.source}</div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Generated: {asset.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-secondary">{asset.amount}</div>
                      <div className="text-sm text-muted-foreground">{asset.pricePerKwh} ETH/kWh</div>
                      <div className="text-xs text-muted-foreground">Total: {asset.totalValue} ETH</div>
                    </div>
                    <div className="flex gap-2">
                      {asset.status === 'Available' && (
                        <>
                          <Button variant="outline" size="sm">
                            List for Sale
                          </Button>
                          <Button variant="secondary" size="sm">
                            Trade Now
                          </Button>
                        </>
                      )}
                      {asset.status === 'Sold' && (
                        <Button variant="ghost" size="sm" disabled>
                          Sold
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-secondary" />
                Trading Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Energy Sold</span>
                <span className="font-semibold text-secondary">896 kWh</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Revenue</span>
                <span className="font-semibold text-secondary">421.52 ETH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Listings</span>
                <span className="font-semibold text-secondary">3 assets</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Average Price</span>
                <span className="font-semibold text-secondary">0.47 ETH/kWh</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Energy Price Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">0.47 ETH</div>
                <div className="text-sm text-muted-foreground">Current Market Price/kWh</div>
                <div className="text-xs text-secondary">+8.2% this month</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">30-day avg</span>
                  <span className="text-sm">0.44 ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">90-day avg</span>
                  <span className="text-sm">0.42 ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">All-time high</span>
                  <span className="text-sm">0.58 ETH</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnergyAssets;