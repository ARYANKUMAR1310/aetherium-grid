import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Info, 
  Download, 
  FileText, 
  Sheet, 
  Copy,
  Search,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const RealTimeMarket = () => {
  const [selectedInterval, setSelectedInterval] = useState("15-Min-Block");
  const [deliveryDateRange, setDeliveryDateRange] = useState("08/24/2025 - 08/24/2025");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Sample real-time market data
  const marketData = [
    {
      delivery: "24-08-2025",
      hour: 1,
      timeBlock: "00:00-00:15",
      purchaseBid: 145.2,
      sellBid: 142.8,
      mcv: 150.0,
      scheduledVolume: 148.5,
      mcp: 4850.00
    },
    {
      delivery: "24-08-2025",
      hour: 1,
      timeBlock: "00:15-00:30",
      purchaseBid: 138.5,
      sellBid: 135.2,
      mcv: 142.0,
      scheduledVolume: 140.1,
      mcp: 4820.00
    },
    {
      delivery: "24-08-2025",
      hour: 1,
      timeBlock: "00:30-00:45",
      purchaseBid: 125.8,
      sellBid: 122.4,
      mcv: 128.5,
      scheduledVolume: 126.2,
      mcp: 4780.00
    },
    {
      delivery: "24-08-2025",
      hour: 1,
      timeBlock: "00:45-01:00",
      purchaseBid: 118.2,
      sellBid: 115.6,
      mcv: 120.8,
      scheduledVolume: 119.1,
      mcp: 4750.00
    },
    {
      delivery: "24-08-2025",
      hour: 2,
      timeBlock: "01:00-01:15",
      purchaseBid: 165.4,
      sellBid: 162.1,
      mcv: 168.2,
      scheduledVolume: 166.8,
      mcp: 4920.00
    },
    {
      delivery: "24-08-2025",
      hour: 2,
      timeBlock: "01:15-01:30",
      purchaseBid: 172.6,
      sellBid: 169.3,
      mcv: 175.8,
      scheduledVolume: 174.2,
      mcp: 4980.00
    },
    {
      delivery: "24-08-2025",
      hour: 2,
      timeBlock: "01:30-01:45",
      purchaseBid: 158.9,
      sellBid: 155.7,
      mcv: 162.1,
      scheduledVolume: 160.4,
      mcp: 4890.00
    },
    {
      delivery: "24-08-2025",
      hour: 2,
      timeBlock: "01:45-02:00",
      purchaseBid: 144.3,
      sellBid: 141.8,
      mcv: 147.5,
      scheduledVolume: 145.9,
      mcp: 4830.00
    },
    {
      delivery: "24-08-2025",
      hour: 3,
      timeBlock: "02:00-02:15",
      purchaseBid: 132.7,
      sellBid: 129.4,
      mcv: 135.9,
      scheduledVolume: 134.1,
      mcp: 4800.00
    },
    {
      delivery: "24-08-2025",
      hour: 3,
      timeBlock: "02:15-02:30",
      purchaseBid: 128.5,
      sellBid: 125.2,
      mcv: 131.7,
      scheduledVolume: 130.1,
      mcp: 4770.00
    }
  ];

  const totalPages = Math.ceil(marketData.length / recordsPerPage);
  const paginatedData = marketData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const exportData = (format: string) => {
    console.log(`Exporting data in ${format} format`);
  };

  return (
    <section id="real-time-market" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-3xl font-bold text-primary">Real Time Market</h2>
            <Info className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground max-w-4xl">
            The Real Time Market framework provides buyers and sellers an organised platform for energy trade closer to real time. 
            The RTM shall be a half hourly market for delivery and there would be 48 market sessions of 15-minute duration each during even time blocks of each hour.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="market-snapshot" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="market-snapshot" className="bg-primary text-primary-foreground data-[state=active]:bg-primary">
                  MARKET SNAPSHOT
                </TabsTrigger>
                <TabsTrigger value="adas-curves" className="bg-muted text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  ADAS CURVES
                </TabsTrigger>
              </TabsList>

              <TabsContent value="market-snapshot" className="space-y-6">
                {/* Controls Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div>
                    <Label htmlFor="interval">Select Interval</Label>
                    <Select value={selectedInterval} onValueChange={setSelectedInterval}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15-Min-Block">15-Min-Block</SelectItem>
                        <SelectItem value="30-Min-Block">30-Min-Block</SelectItem>
                        <SelectItem value="1-Hour-Block">1-Hour-Block</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date-range">Delivery Date Range</Label>
                    <Input 
                      id="date-range"
                      value={deliveryDateRange}
                      onChange={(e) => setDeliveryDateRange(e.target.value)}
                    />
                  </div>

                  <Button variant="default" className="bg-primary hover:bg-primary/90">
                    Submit
                  </Button>
                </div>

                {/* Export Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => exportData('copy')}
                    className="flex items-center gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => exportData('excel')}
                    className="flex items-center gap-2"
                  >
                    <Sheet className="h-4 w-4" />
                    Excel
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => exportData('pdf')}
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => exportData('csv')}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    CSV
                  </Button>
                </div>

                {/* Table Controls */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Displaying</span>
                    <Select value="10" onValueChange={() => {}}>
                      <SelectTrigger className="w-20 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-muted-foreground">records per page</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Label htmlFor="search" className="text-sm text-muted-foreground">Search:</Label>
                    <Input
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 h-8"
                      placeholder="Search..."
                    />
                  </div>
                </div>

                {/* Data Table */}
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary hover:bg-primary">
                        <TableHead className="text-primary-foreground font-semibold">Delivery</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Hour</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Time Block</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Purchase Bid (MWh)</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Sell Bid (MWh)</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">MCV (MWh)</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">Scheduled Volume (MWh)</TableHead>
                        <TableHead className="text-primary-foreground font-semibold">MCP (Rs/MWh)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedData.map((row, index) => (
                        <TableRow key={index} className="hover:bg-muted/50">
                          <TableCell>{row.delivery}</TableCell>
                          <TableCell>{row.hour}</TableCell>
                          <TableCell>{row.timeBlock}</TableCell>
                          <TableCell>{row.purchaseBid.toFixed(1)}</TableCell>
                          <TableCell>{row.sellBid.toFixed(1)}</TableCell>
                          <TableCell>{row.mcv.toFixed(1)}</TableCell>
                          <TableCell>{row.scheduledVolume.toFixed(1)}</TableCell>
                          <TableCell>{row.mcp.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Showing page {currentPage} of {totalPages}
                  </span>
                  
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                      const pageNum = i + 1;
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className="w-8 h-8"
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                    
                    {totalPages > 5 && (
                      <>
                        <span className="text-muted-foreground">...</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(totalPages)}
                          className="w-8 h-8"
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="adas-curves" className="text-center py-12">
                <div className="text-muted-foreground">
                  ADAS Curves visualization will be implemented here
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RealTimeMarket;