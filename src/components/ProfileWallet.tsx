import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Wallet, CheckCircle, AlertCircle, Download, CreditCard, Building2 } from "lucide-react";

const ProfileWallet = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Profile & Wallet</h2>
          <p className="text-muted-foreground">Manage your account settings and track your earnings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">User ID</p>
                <p className="font-medium">PRO-2024-5891</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">Rajesh Kumar</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">rajesh.kumar@email.com</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91 98765 43210</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">KYC Status</p>
                <Badge variant="default" className="flex items-center w-fit">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Prosumer Type</p>
                <Badge variant="secondary">Residential Solar</Badge>
              </div>
              
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Wallet Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="h-5 w-5 mr-2" />
                Wallet Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">₹2,847</p>
                <p className="text-sm text-muted-foreground">Available Balance</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-lg font-semibold">₹156</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p className="text-lg font-semibold">₹1,428</p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Withdraw Funds
                </Button>
                <Button variant="outline" className="w-full">
                  Transaction History
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email Notifications</span>
                <Badge variant="default">Enabled</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">SMS Alerts</span>
                <Badge variant="default">Enabled</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Auto Pool Join</span>
                <Badge variant="secondary">Disabled</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Trading Limits</span>
                <Badge variant="outline">Set</Badge>
              </div>
              
              <Button variant="outline" className="w-full">
                Manage Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Withdrawal Options */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Withdrawal Options</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="bank" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                <TabsTrigger value="upi">UPI/Digital Wallet</TabsTrigger>
              </TabsList>

              <TabsContent value="bank" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Linked Bank Account</h4>
                    <div className="p-4 rounded-lg border bg-card">
                      <div className="flex items-center space-x-3">
                        <Building2 className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">HDFC Bank</p>
                          <p className="text-sm text-muted-foreground">**** **** **** 4589</p>
                          <Badge variant="secondary" className="mt-1">Primary</Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add Another Account
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Withdrawal Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Processing Time:</span>
                        <span className="text-sm font-medium">1-2 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Minimum Amount:</span>
                        <span className="text-sm font-medium">₹100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Transaction Fee:</span>
                        <span className="text-sm font-medium">₹0 (Free)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="upi" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">UPI ID</h4>
                    <div className="p-4 rounded-lg border bg-card">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-medium">rajesh@paytm</p>
                          <p className="text-sm text-muted-foreground">Paytm UPI</p>
                          <Badge variant="secondary" className="mt-1">Verified</Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Update UPI ID
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">UPI Withdrawal</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Processing Time:</span>
                        <span className="text-sm font-medium">Instant</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Minimum Amount:</span>
                        <span className="text-sm font-medium">₹10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Transaction Fee:</span>
                        <span className="text-sm font-medium">₹0 (Free)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProfileWallet;