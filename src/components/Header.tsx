import { Button } from "./ui/button";
import { Menu, X} from "lucide-react";
import { useState } from "react";
import { AppearanceMenu } from "./AppearanceMenu";
// This line now correctly resolves to a React component due to bundler configuration (SVGR)
import CamwoodLogo from "@/assets/images/camwoodlogo.svg?react"; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <a href=""><div className="flex items-center space-x-2">
            <CamwoodLogo className="h-8 w-8 text-primary" /> 
            <span className="text-xl font-semibold">Camwood Inc.</span>
          </div></a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Services</a>
            <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">Products</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
            <AppearanceMenu />
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen} 
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-menu" className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={closeMenu} className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
              <a href="#services" onClick={closeMenu} className="text-foreground/80 hover:text-foreground transition-colors">Services</a>
              <a href="#products" onClick={closeMenu} className="text-foreground/80 hover:text-foreground transition-colors">Products</a>
              <a href="#about" onClick={closeMenu} className="text-foreground/80 hover:text-foreground transition-colors">About</a>
              <a href="#contact" onClick={closeMenu} className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
              <div className="pt-2">
                <AppearanceMenu />
              </div>
              <div className="pt-4">
                <Button className="w-full" onClick={closeMenu}>Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}