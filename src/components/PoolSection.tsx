import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Battery, Clock, CheckCircle } from "lucide-react";

const PoolSection = () => {
  const currentPool = 847;
  const targetPool = 1000;
  const progressPercentage = (currentPool / targetPool) * 100;

  return (
    <section id="pool" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Energy Pool & Collective Trading</h2>
          <p className="text-muted-foreground">Join forces with other prosumers to meet minimum trading requirements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Pool Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Battery className="h-5 w-5 mr-2 text-primary" />
                Current Pool Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Energy Pooled</span>
                    <span className="text-sm text-muted-foreground">{currentPool} / {targetPool} kWh</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {targetPool - currentPool} kWh needed to reach 1 MW threshold
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Prosumers</p>
                    <p className="text-2xl font-bold">127</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Forecasted Pool Value</p>
                    <p className="text-2xl font-bold">₹4,912</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Pooling Ongoing
                  </Badge>
                  <span className="text-sm text-muted-foreground">Next trade: 15:00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pool Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Recent Pool Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Pool #247 Settled</p>
                      <p className="text-xs text-muted-foreground">982 kWh • ₹5.9/kWh</p>
                    </div>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Pool #248 Trading</p>
                      <p className="text-xs text-muted-foreground">1,156 kWh • In progress</p>
                    </div>
                  </div>
                  <Clock className="h-4 w-4 text-blue-500" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Pool #249 Pooling</p>
                      <p className="text-xs text-muted-foreground">847 kWh • 85% complete</p>
                    </div>
                  </div>
                  <Battery className="h-4 w-4 text-yellow-500" />
                </div>
              </div>

              <Button className="w-full mt-4" variant="outline">
                View All Pool History
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Your Pool Contribution */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Your Pool Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24.7 kWh</p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">847 kWh</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Pools Joined</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">₹4,921</p>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PoolSection;