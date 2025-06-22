
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, FileText, Folder } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tanvi Bokade
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <User size={18} />
                About
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Briefcase size={18} />
                Portfolio
              </button>
              <a 
                href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Tanvi Bokade
            </h1>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 animate-pulse overflow-hidden">
              <img 
                src="/lovable-uploads/2125cfe2-857a-4e54-9dd9-5a40ae401762.png" 
                alt="Tanvi Bokade"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital portfolio. I'm passionate about creating meaningful solutions 
            and bringing ideas to life through innovative approaches and creative thinking.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">Creative Professional</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Problem Solver</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Innovation Driven</Badge>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              <Folder className="mr-2" size={20} />
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline" 
              size="lg"
              className="px-8 py-3 border-2 hover:bg-gray-50"
            >
              <User className="mr-2" size={20} />
              Learn More About Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm">
            © 2024 Tanvi Bokade. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
