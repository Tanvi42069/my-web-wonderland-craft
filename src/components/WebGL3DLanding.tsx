import { useState, useEffect, useRef } from 'react';
import { Scene } from './3D/Scene';
import { Button } from '@/components/ui/button';
import { Menu, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const WebGL3DLanding = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x: x * 0.5, y: y * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* 3D Scene */}
      <Scene scrollProgress={scrollProgress} mousePosition={mousePosition} />

      {/* UI Overlay */}
      <div className="relative z-10 pointer-events-none">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center pointer-events-auto">
          <div className="text-white font-light text-xl tracking-wider">
            TANVI BOKADE
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <Menu className="w-5 h-5" />
            MENU
          </Button>
        </nav>

        {/* Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 pointer-events-auto">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={() => scrollToSection('intro')}
                className="text-white text-2xl font-light hover:text-purple-300 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white text-2xl font-light hover:text-purple-300 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white text-2xl font-light hover:text-purple-300 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white text-2xl font-light hover:text-purple-300 transition-colors"
              >
                Contact
              </button>
              
              <div className="flex space-x-6 mt-8">
                <a
                  href="https://github.com/Tanvi42069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanvi-bokade-3817681b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:tanvi.bokade@gmail.com"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-white/10 mt-8"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="intro" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pointer-events-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wider">
              TANVI
              <br />
              BOKADE
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-light">
              Creative Technologist & Problem Solver
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting innovative solutions through code, design, and strategic thinking
            </p>
            
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Explore My Journey
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 pointer-events-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-white/80">
              <div>
                <h3 className="text-2xl font-light mb-4">Education</h3>
                <p className="mb-4">
                  Computer Science Engineering Student at MIT Art, Design and Technology University, Pune
                </p>
                <p className="text-white/60">CGPA: 8.97</p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Passion</h3>
                <p className="mb-4">
                  I believe in the power of technology to solve real-world problems and create meaningful impact.
                </p>
                <p className="text-white/60">
                  From AI-powered accessibility solutions to community-driven social initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 pointer-events-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-12 text-center">
              Featured Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sign Language AI",
                  description: "Machine learning system for sign language recognition and translation",
                  link: "https://github.com/Tanvi42069/Sign-Language-Translator"
                },
                {
                  title: "Netflix UX Analysis",
                  description: "Product case study on content discoverability challenges",
                  link: "https://github.com/Tanvi42069/Product-Case-Study-Netflix-Discoverability-Issue"
                },
                {
                  title: "Fraud Detection",
                  description: "Advanced ML algorithms for financial fraud prevention",
                  link: "https://github.com/Tanvi42069/Fraud-Detection"
                },
                {
                  title: "Women Safety System",
                  description: "Real-time monitoring system for enhanced safety",
                  link: "https://drive.google.com/file/d/1I9KDq2Fb49kz7_em_F-TWl73auOmayqu/view"
                },
                {
                  title: "Volume Control AI",
                  description: "Gesture-based system volume control using computer vision",
                  link: "https://github.com/Tanvi42069/Sign-Language-Model-to-Control-System-Volume"
                },
                {
                  title: "Spotify Analysis",
                  description: "Product teardown of personalized playlist algorithms",
                  link: "https://github.com/Tanvi42069/Product-Teardown-Spotify-Personalized-Playlist"
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <h3 className="text-xl font-light text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 pointer-events-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
              Let's Connect
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects? Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              >
                <a href="mailto:tanvi.bokade@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Get In Touch
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <a href="/Tanvi Bokade Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center pointer-events-auto">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Design your first 3D website today
            </h3>
            <p className="text-white/60 mb-8">
              Experience the future of web design with immersive 3D environments
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Start Creating
            </Button>
          </div>
        </section>

        {/* Spacer for scroll */}
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default WebGL3DLanding;