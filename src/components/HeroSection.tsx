import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, User, Briefcase } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/9fd95d39-52bf-4a70-a19d-307ddf3034cb.png" 
            alt="Tanvi Bokade" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl mx-auto mb-6 hover:scale-105 transition-transform duration-300" 
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800 animate-slide-up">
          Tanvi Bokade
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-600 animate-slide-up delay-200">
          Computer Science Engineering Student & Creative Problem Solver
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up delay-300">
          <Badge variant="secondary" className="px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors">
            Innovation
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors">
            Leadership
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
            Problem Solving
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
            Team Collaboration
          </Badge>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-400">
          <Button 
            onClick={() => scrollToSection('projects')} 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Briefcase className="mr-2" size={20} />
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('about')} 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-300"
          >
            <User className="mr-2" size={20} />
            About Me
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="px-8 py-3 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full transition-all duration-300"
          >
            <a href="/Tanvi Bokade Resume.pdf" download>
              <Download className="mr-2" size={20} />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;