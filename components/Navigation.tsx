import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import logoImage from 'figma:asset/484cb006e6721962e5838cc530957797be426c0e.png';

interface NavigationProps {
  isDark: boolean;
  onToggleDark: () => void;
}

// EverBranch Logo Component
const EverBranchLogo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
      aria-label="Return to top of page"
    >
      <img 
        src={logoImage} 
        alt="EverBranch Logo" 
        className="w-10 h-10 rounded-[0px]"
      />
      <span className="text-xl font-semibold text-foreground">EverBranch</span>
    </button>
  );
};

export default function Navigation({ isDark, onToggleDark }: NavigationProps) {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <EverBranchLogo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
            <Button variant="outline" className="hidden sm:inline-flex">
              Get Quote
            </Button>
            <Button style={{ backgroundColor: '#2E7D32' }} className="text-white hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}