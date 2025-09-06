import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, Battery, Wallet, TrendingUp, Sun, Wind } from "lucide-react";

const ProsumerDashboard = () => {
  return (
    <section id="dashboard" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Prosumer Dashboard</h2>
          <p className="text-muted-foreground">Track your energy generation, contributions, and earnings in real-time</p>
        </div>

        {/* Live Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Live Energy Generated</CardTitle>
              <Zap className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.4 kWh</div>
              <p className="text-xs text-muted-foreground">Today</p>
              <div className="flex items-center mt-2">
                <Sun className="h-3 w-3 text-yellow-500 mr-1" />
                <span className="text-xs">Solar: 8.2 kWh</span>

              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Energy Contributed</CardTitle>
              <Battery className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.7 kWh</div>
              <p className="text-xs text-muted-foreground">To pool today</p>
              <div className="text-sm text-muted-foreground mt-1">
                Monthly: 247 kWh
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <Wallet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,847</div>
              <p className="text-xs text-green-600">+₹42 today</p>
              <div className="text-sm text-muted-foreground mt-1">
                Pending: ₹156
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Status</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹5.8/kWh</div>
              <p className="text-xs text-muted-foreground">Current IEX price</p>
              <Badge variant="secondary" className="mt-1">
                Range: ₹5.2-6.4
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Energy Trading Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-primary" />
              Real-Time Energy Trading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Current Trading Session</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Time Block:</span>
                    <span className="text-sm font-medium">14:15-14:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Delivery Date:</span>
                    <span className="text-sm font-medium">24-08-2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Market Status:</span>
                    <Badge variant="default">Live Trading</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Your Contribution Status</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Energy Contributed:</span>
                    <span className="text-sm font-medium">8.7 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Expected Price:</span>
                    <span className="text-sm font-medium">₹5.8/kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Estimated Earning:</span>
                    <span className="text-sm font-medium text-green-600">₹50.46</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProsumerDashboard;