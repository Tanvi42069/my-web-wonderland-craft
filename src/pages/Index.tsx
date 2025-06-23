

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, FileText, Folder } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-red-500/30 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Tanvi Bokade
            </div>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('about')} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-white">
                <User size={18} />
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-white">
                <Briefcase size={18} />
                Portfolio
              </button>
              <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
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
          <div className="relative flex flex-col items-center mb-8">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/9fd95d39-52bf-4a70-a19d-307ddf3034cb.png" 
                alt="Tanvi Bokade" 
                className="w-48 h-48 rounded-full object-cover border-4 border-red-500 shadow-2xl"
              />
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Tanvi Bokade
            </h1>
          </div>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Creative professional passionate about building innovative solutions and bringing ideas to life. 
            I transform concepts into reality through strategic thinking, creative problem-solving, and collaborative teamwork.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700">Innovation</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-orange-600 text-white hover:bg-orange-700">Creative Solutions</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-700 text-white hover:bg-red-800">Leadership</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-orange-700 text-white hover:bg-orange-800">Strategic Thinking</Badge>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button onClick={() => scrollToSection('portfolio')} size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 font-bold">
              <Folder className="mr-2" size={20} />
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="px-8 py-3 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold">
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
      <footer className="bg-black text-white py-12 border-t border-red-500/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-red-400">Let's Create Something Amazing</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm excited about opportunities where I can contribute my skills, 
            lead impactful projects, and create solutions that make a difference.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors font-bold">
              Connect With Me
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

