import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  Award, 
  TrendingUp, 
  Recycle, 
  CheckCircle,
  Calendar,
  Globe
} from "lucide-react";

const CarbonCredits = () => {
  const carbonCredits = [
    {
      id: "CC-2024-001",
      amount: "2.5 tCO2",
      source: "Solar Generation",
      status: "Active",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-15",
      price: "45.00",
      verified: true
    },
    {
      id: "CC-2024-002",
      amount: "1.8 tCO2",
      source: "Wind Energy",
      status: "Retired",
      issueDate: "2024-01-10",
      expiryDate: "2025-01-10",
      price: "42.50",
      verified: true
    },
    {
      id: "CC-2024-003",
      amount: "3.2 tCO2",
      source: "Hydro Power",
      status: "Active",
      issueDate: "2024-01-20",
      expiryDate: "2025-01-20",
      price: "48.75",
      verified: true
    }
  ];

  return (
    <section id="carbon-credits" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Carbon Credits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Earn, trade, and retire transparent blockchain-based carbon credits from your renewable energy generation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Carbon Credits Overview */}
          <Card className="lg:col-span-2 bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-secondary" />
                Your Carbon Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary mb-1">12.7 tCO2</div>
                  <div className="text-sm text-muted-foreground">Total Earned</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">8.5 tCO2</div>
                  <div className="text-sm text-muted-foreground">Active Credits</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-1">4.2 tCO2</div>
                  <div className="text-sm text-muted-foreground">Retired</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">2024 Generation Goal</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">13.2 / 20.0 tCO2 target</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Carbon Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="energy" className="w-full justify-start">
                <Leaf className="mr-2 h-4 w-4" />
                Mint New Credits
              </Button>
              <Button variant="glass" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trade Credits
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Recycle className="mr-2 h-4 w-4" />
                Retire Credits
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="mr-2 h-4 w-4" />
                View Registry
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Carbon Credits List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Your Carbon Credits</h3>
          {carbonCredits.map((credit) => (
            <Card key={credit.id} className="bg-gradient-glass backdrop-blur-md border-glass-border hover:shadow-glow-secondary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{credit.id}</span>
                        {credit.verified && (
                          <CheckCircle className="h-4 w-4 text-secondary" />
                        )}
                        <Badge 
                          variant={credit.status === 'Active' ? 'default' : 'secondary'}
                          className={credit.status === 'Active' ? 'bg-secondary text-secondary-foreground' : ''}
                        >
                          {credit.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{credit.source}</div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Issued: {credit.issueDate}
                        </span>
                        <span>Expires: {credit.expiryDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-secondary">{credit.amount}</div>
                      <div className="text-sm text-muted-foreground">${credit.price}/tCO2</div>
                    </div>
                    <div className="flex gap-2">
                      {credit.status === 'Active' && (
                        <>
                          <Button variant="outline" size="sm">
                            Trade
                          </Button>
                          <Button variant="secondary" size="sm">
                            Retire
                          </Button>
                        </>
                      )}
                      {credit.status === 'Retired' && (
                        <Button variant="ghost" size="sm" disabled>
                          Retired
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-secondary" />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">CO2 Avoided</span>
                <span className="font-semibold text-secondary">12.7 tons</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Equivalent Trees Planted</span>
                <span className="font-semibold text-secondary">165 trees</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Car Miles Offset</span>
                <span className="font-semibold text-secondary">28,350 miles</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Homes Powered</span>
                <span className="font-semibold text-secondary">2.3 homes/year</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-glass backdrop-blur-md border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Credit Value Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">$45.75</div>
                <div className="text-sm text-muted-foreground">Current Market Price/tCO2</div>
                <div className="text-xs text-secondary">+12.5% this month</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">30-day avg</span>
                  <span className="text-sm">$43.20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">90-day avg</span>
                  <span className="text-sm">$41.85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">All-time high</span>
                  <span className="text-sm">$52.30</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CarbonCredits;