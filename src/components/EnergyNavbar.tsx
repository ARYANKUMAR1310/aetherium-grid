import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Wallet } from "lucide-react";
import logo from "@/assets/aetherium-logo.png";

const EnergyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Aetherium" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-foreground">AETHERIUM</h1>
              <p className="text-xs text-muted-foreground">Energy Trading Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
            <a href="#pool" className="text-foreground hover:text-primary transition-colors">Pool</a>
            <a href="#trades" className="text-foreground hover:text-primary transition-colors">Trades</a>
            <a href="#market" className="text-foreground hover:text-primary transition-colors">Market</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              ₹2,847
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <a href="#dashboard" className="p-2 text-foreground hover:text-primary">Dashboard</a>
              <a href="#pool" className="p-2 text-foreground hover:text-primary">Pool</a>
              <a href="#trades" className="p-2 text-foreground hover:text-primary">Trades</a>
              <a href="#market" className="p-2 text-foreground hover:text-primary">Market</a>
              <div className="flex space-x-2 p-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Wallet className="h-4 w-4 mr-2" />
                  ₹2,847
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnergyNavbar;