import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Leadership", id: "leadership" },
    { label: "Social Service", id: "social-service" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-light text-gray-800">
            Tanvi Bokade
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              asChild
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
            >
              <a href="/Tanvi Bokade Resume.pdf" download>
                <Download className="mr-2" size={16} />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                asChild
                size="sm" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-fit"
              >
                <a href="/Tanvi Bokade Resume.pdf" download>
                  <Download className="mr-2" size={16} />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;