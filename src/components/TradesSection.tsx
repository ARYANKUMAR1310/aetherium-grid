import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Calendar, Users, IndianRupee } from "lucide-react";

const TradesSection = () => {
  const pastTrades = [
    {
      id: "TXN-247",
      timestamp: "2025-01-05 14:30",
      poolSize: "982 kWh",
      clearingPrice: "₹5.9/kWh",
      settlement: "₹5,794",
      yourShare: "8.2 kWh",
      yourEarning: "₹48.38",
      status: "Settled"
    },
    {
      id: "TXN-246",
      timestamp: "2025-01-05 13:45",
      poolSize: "1,156 kWh",
      clearingPrice: "₹6.1/kWh",
      settlement: "₹7,052",
      yourShare: "12.4 kWh",
      yourEarning: "₹75.64",
      status: "Settled"
    },
    {
      id: "TXN-245",
      timestamp: "2025-01-05 12:15",
      poolSize: "934 kWh",
      clearingPrice: "₹5.8/kWh",
      settlement: "₹5,417",
      yourShare: "6.7 kWh",
      yourEarning: "₹38.86",
      status: "Settled"
    }
  ];

  return (
    <section id="trades" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Deals & Trades</h2>
          <p className="text-muted-foreground">Track your trading history and earnings distribution</p>
        </div>

        <Tabs defaultValue="past-trades" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="past-trades">Past Trades</TabsTrigger>
            <TabsTrigger value="distribution">Distribution Summary</TabsTrigger>
          </TabsList>

          <TabsContent value="past-trades" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total Trades</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total Earnings</p>
                      <p className="text-2xl font-bold">₹1,428</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Price</p>
                      <p className="text-2xl font-bold">₹5.9</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Energy Traded</p>
                      <p className="text-2xl font-bold">242 kWh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trades Table */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastTrades.map((trade) => (
                    <div key={trade.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-semibold">{trade.id}</p>
                            <p className="text-sm text-muted-foreground">{trade.timestamp}</p>
                          </div>
                          <div>
                            <p className="text-sm">Pool: {trade.poolSize}</p>
                            <p className="text-sm">Price: {trade.clearingPrice}</p>
                          </div>
                          <div>
                            <p className="text-sm">Your Share: {trade.yourShare}</p>
                            <p className="text-sm font-medium text-green-600">Earned: {trade.yourEarning}</p>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{trade.status}</Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Load More Trades
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Latest Distribution Summary</CardTitle>
                <p className="text-sm text-muted-foreground">Trade TXN-247 • Pool Executed!</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Trade Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pool Size:</span>
                        <span className="font-medium">982 kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Clearing Price:</span>
                        <span className="font-medium">₹5.9/kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Settlement:</span>
                        <span className="font-medium">₹5,794</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Grid Charges:</span>
                        <span className="font-medium">₹294 (0.3/kWh)</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <span>Net Distribution:</span>
                        <span>₹5,500</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Your Contribution</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Your Contribution:</span>
                        <span className="font-medium">8.2 kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Share Percentage:</span>
                        <span className="font-medium">0.84%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Gross Earning:</span>
                        <span className="font-medium">₹48.38</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Platform Fee (2%):</span>
                        <span className="font-medium">₹0.97</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t text-green-600">
                        <span>Your Net Earning:</span>
                        <span>₹47.41</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200 text-center">
                    🎉 Congratulations! You earned ₹47.41 from this trade - that's 93% more than DISCOM rates!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TradesSection;