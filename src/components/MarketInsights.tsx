import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Clock } from "lucide-react";

const MarketInsights = () => {
  // Sample market data for charts
  const hourlyData = [
    { time: '09:00', price: 5.2, volume: 1200 },
    { time: '10:00', price: 5.4, volume: 1350 },
    { time: '11:00', price: 5.8, volume: 1100 },
    { time: '12:00', price: 6.1, volume: 1400 },
    { time: '13:00', price: 5.9, volume: 1250 },
    { time: '14:00', price: 5.7, volume: 1300 },
    { time: '15:00', price: 5.8, volume: 1150 },
    { time: '16:00', price: 6.0, volume: 1000 },
  ];

  const weeklyData = [
    { day: 'Mon', price: 5.6, discom: 2.8 },
    { day: 'Tue', price: 5.8, discom: 2.8 },
    { day: 'Wed', price: 5.4, discom: 2.7 },
    { day: 'Thu', price: 5.9, discom: 2.8 },
    { day: 'Fri', price: 6.2, discom: 2.9 },
    { day: 'Sat', price: 5.7, discom: 2.7 },
    { day: 'Sun', price: 5.5, discom: 2.6 },
  ];

  return (
    <section id="market" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Market Insights</h2>
          <p className="text-muted-foreground">Real-time energy exchange data and price analytics</p>
        </div>

        {/* Current Market Status */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current IEX Price</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹5.8/kWh</div>
              <p className="text-xs text-green-500">+₹0.2 (3.6%)</p>
              <Badge variant="secondary" className="mt-1">Live</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PXIL Price</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹5.6/kWh</div>
              <p className="text-xs text-red-500">-₹0.1 (1.8%)</p>
              <Badge variant="secondary" className="mt-1">Live</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DISCOM Rate</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.8/kWh</div>
              <p className="text-xs text-muted-foreground">Fixed rate</p>
              <Badge variant="outline" className="mt-1">Traditional</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Advantage</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">107%</div>
              <p className="text-xs text-muted-foreground">vs DISCOM</p>
              <Badge variant="default" className="mt-1">₹3.0 more</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Price Charts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Price Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="hourly" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="hourly">24H Price Movement</TabsTrigger>
                <TabsTrigger value="weekly">Weekly Comparison</TabsTrigger>
              </TabsList>

              <TabsContent value="hourly" className="space-y-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`₹${value}/kWh`, 'Price']}
                        labelFormatter={(label) => `Time: ${label}`}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary))" 
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="weekly" className="space-y-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        name="Exchange Price"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="discom" 
                        stroke="hsl(var(--muted-foreground))" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="DISCOM Rate"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-primary mr-2"></div>
                    <span>Exchange Price</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-muted-foreground border-dashed mr-2"></div>
                    <span>DISCOM Rate</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Market Summary */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Today's Market Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Day High:</span>
                  <span className="font-semibold">₹6.2/kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Day Low:</span>
                  <span className="font-semibold">₹5.2/kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Price:</span>
                  <span className="font-semibold">₹5.7/kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Volume:</span>
                  <span className="font-semibold">9,750 MWh</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-muted-foreground">Premium vs DISCOM:</span>
                  <span className="font-semibold text-green-600">+104%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trading Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800 dark:text-green-200">Peak Hour Trading</span>
                    <Badge variant="secondary" className="bg-green-100 dark:bg-green-900">Optimal</Badge>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-300 mt-1">
                    12:00-16:00 showing highest prices (₹5.9-6.2/kWh)
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Pool Formation</span>
                    <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900">Active</Badge>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                    Next pool closing in 25 minutes (847/1000 kWh)
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Weekend Rates</span>
                    <Badge variant="secondary" className="bg-yellow-100 dark:bg-yellow-900">Watch</Badge>
                  </div>
                  <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-1">
                    Lower demand expected, prices may drop to ₹5.0-5.5/kWh
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;