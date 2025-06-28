
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, FileText, Folder, Github } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden" style={{backgroundColor: '#FDF6E3'}}>
      {/* Decorative Doodles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Custom doodles/scribbles */}
        <svg className="absolute top-20 left-10 w-16 h-16 text-orange-300" viewBox="0 0 64 64">
          <path d="M10 30 Q20 10 30 30 Q40 50 50 30" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="25" r="2" fill="currentColor"/>
          <circle cx="45" cy="35" r="1.5" fill="currentColor"/>
        </svg>
        
        <svg className="absolute top-40 right-20 w-20 h-20 text-pink-200" viewBox="0 0 80 80">
          <path d="M20 40 Q40 20 60 40 Q40 60 20 40" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M30 30 L50 50 M50 30 L30 50" stroke="currentColor" strokeWidth="2"/>
        </svg>
        
        <svg className="absolute bottom-40 left-20 w-24 h-24 text-purple-200" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M30 30 Q48 10 66 30 Q48 50 30 30" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
        
        {/* More scattered doodles */}
        <div className="absolute top-60 right-40 w-8 h-8 border-4 border-yellow-200 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-60 right-20 w-6 h-6 bg-pink-200 transform rotate-45"></div>
        <div className="absolute top-80 left-40 w-10 h-2 bg-orange-200 rounded-full"></div>
        
        {/* Squiggly lines */}
        <svg className="absolute top-32 right-32 w-20 h-12 text-purple-200" viewBox="0 0 80 48">
          <path d="M5 24 Q20 5 35 24 T65 24" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
        <svg className="absolute bottom-32 left-32 w-24 h-16 text-pink-200" viewBox="0 0 96 64">
          <path d="M5 32 Q25 10 45 32 T85 32" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
        
        {/* Dots pattern */}
        <div className="absolute top-96 left-40">
          <div className="grid grid-cols-3 gap-2">
            <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-orange-200/50 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Tanvi Bokade
            </div>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('about')} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-100/50 transition-colors text-gray-700">
                <User size={18} />
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-100/50 transition-colors text-gray-700">
                <Briefcase size={18} />
                Portfolio
              </button>
              <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <FileText size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative flex flex-col items-center mb-8">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/9fd95d39-52bf-4a70-a19d-307ddf3034cb.png" 
                alt="Tanvi Bokade" 
                className="w-48 h-48 rounded-full object-cover border-4 border-pink-400 shadow-2xl"
              />
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-700 bg-clip-text text-transparent leading-tight">
              Tanvi Bokade
            </h1>
          </div>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Creative professional passionate about building innovative solutions and bringing ideas to life. 
            I transform concepts into reality through strategic thinking, creative problem-solving, and collaborative teamwork.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-pink-600 text-white hover:bg-pink-700">Innovation</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-600 text-white hover:bg-purple-700">Creative Solutions</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">Leadership</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-600 text-white hover:bg-green-700">Strategic Thinking</Badge>
          </div>
          
          <div className="flex justify-center gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 font-bold">
                <Github className="mr-2" size={20} />
                View My Work
              </Button>
            </a>
            <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="px-8 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold">
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
      <footer className="bg-white/80 backdrop-blur-sm text-gray-800 py-12 border-t border-purple-200/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Let's Build Something Extraordinary Together</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to collaborate on your next big idea? I'm always excited to work with passionate teams 
            and individuals who want to create meaningful impact through innovative solutions.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:your.email@example.com" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg transition-colors font-bold text-white">
              Start a Conversation
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-gray-500 text-sm">
            © 2024 Tanvi Bokade. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
