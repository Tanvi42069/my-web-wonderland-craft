import { useState, useEffect, useRef } from 'react';
import { Scene } from './3D/Scene';
import { Button } from '@/components/ui/button';
import { Menu, ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

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
      setMousePosition({ x: x * 0.3, y: y * 0.3 });
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
            className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-6"
          >
            <Menu className="w-4 h-4 mr-2" />
            MENU
          </Button>
        </nav>

        {/* Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 pointer-events-auto">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <div className="text-center space-y-6">
                <button
                  onClick={() => scrollToSection('intro')}
                  className="block text-white text-2xl font-light hover:text-indigo-300 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-white text-2xl font-light hover:text-indigo-300 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block text-white text-2xl font-light hover:text-indigo-300 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('leadership')}
                  className="block text-white text-2xl font-light hover:text-indigo-300 transition-colors"
                >
                  Leadership
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-white text-2xl font-light hover:text-indigo-300 transition-colors"
                >
                  Contact
                </button>
              </div>
              
              <div className="flex space-x-6 mt-8">
                <a
                  href="https://github.com/Tanvi42069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanvi-bokade-3817681b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:tanvi.bokade@gmail.com"
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-white/10 mt-8 border border-white/20 rounded-full"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section id="intro" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pointer-events-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/9fd95d39-52bf-4a70-a19d-307ddf3034cb.png" 
                alt="Tanvi Bokade" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl mx-auto mb-8 backdrop-blur-sm" 
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider leading-tight">
              TANVI
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                BOKADE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-6 font-light">
              Computer Science Engineer & Creative Technologist
            </p>
            
            <p className="text-lg text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting innovative solutions through AI, machine learning, and strategic product thinking. 
              Passionate about creating technology that makes a meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 rounded-full px-8"
              >
                Explore My Journey
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8"
              >
                <a href="/Tanvi Bokade Resume.pdf" download>
                  <Download className="mr-2 w-5 h-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 pointer-events-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-12 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-white/80">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light mb-4 text-white">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg font-medium">MIT Art, Design and Technology University, Pune</p>
                      <p className="text-white/60">B.Tech Computer Science Engineering • CGPA: 8.97</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-4 text-white">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Product Analysis', 'Leadership', 'Community Service'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light mb-4 text-white">Mission</h3>
                  <p className="leading-relaxed">
                    I believe in leveraging technology to solve real-world problems and create meaningful impact. 
                    From AI-powered accessibility solutions to community-driven social initiatives, 
                    I'm passionate about building bridges between innovation and human needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-4 text-white">Recognition</h3>
                  <p className="text-white/60">
                    Outstanding Orator - PERSONA 2025 • NSS Secretary • Founding Member of JAVA BREWERS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 pointer-events-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-12 text-center">
              Featured Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sign Language AI System",
                  description: "Machine learning system for real-time sign language recognition and translation, enhancing accessibility for the hearing-impaired community.",
                  link: "https://github.com/Tanvi42069/Sign-Language-Translator",
                  tags: ["AI/ML", "Computer Vision", "Accessibility"]
                },
                {
                  title: "Netflix UX Case Study",
                  description: "Comprehensive product analysis examining content discoverability challenges and proposing user-centric solutions.",
                  link: "https://github.com/Tanvi42069/Product-Case-Study-Netflix-Discoverability-Issue",
                  tags: ["Product Management", "UX Research", "Strategy"]
                },
                {
                  title: "Fraud Detection System",
                  description: "Advanced machine learning algorithms for real-time financial fraud prevention and risk assessment.",
                  link: "https://github.com/Tanvi42069/Fraud-Detection",
                  tags: ["Machine Learning", "FinTech", "Security"]
                },
                {
                  title: "Women Safety Monitoring",
                  description: "Real-time monitoring system designed to enhance women's safety through innovative technology solutions.",
                  link: "https://drive.google.com/file/d/1I9KDq2Fb49kz7_em_F-TWl73auOmayqu/view",
                  tags: ["IoT", "Safety Tech", "Research"]
                },
                {
                  title: "Gesture Volume Control",
                  description: "Computer vision system enabling hands-free volume control through sign language gestures.",
                  link: "https://github.com/Tanvi42069/Sign-Language-Model-to-Control-System-Volume",
                  tags: ["Computer Vision", "HCI", "Accessibility"]
                },
                {
                  title: "Spotify Product Teardown",
                  description: "In-depth analysis of Spotify's personalized playlist algorithms and user experience design patterns.",
                  link: "https://github.com/Tanvi42069/Product-Teardown-Spotify-Personalized-Playlist",
                  tags: ["Product Analysis", "Music Tech", "Algorithms"]
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 cursor-pointer hover:-translate-y-2"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50 group-hover:text-indigo-300 transition-colors">
                      Click to explore
                    </span>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-indigo-300 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8"
              >
                <a href="https://github.com/Tanvi42069?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-5 h-5" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="min-h-screen flex items-center justify-center px-6 pointer-events-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-12">
              Leadership & Impact
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { number: "10+", label: "Projects Led" },
                { number: "30+", label: "Team Members" },
                { number: "5+", label: "Organizations" },
                { number: "100+", label: "Events Organized" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-light text-white mb-2">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto text-white/80 leading-relaxed">
              <p className="text-lg mb-6">
                As a dynamic student leader, I've spearheaded initiatives across multiple organizations, 
                from founding JAVA BREWERS to serving as NSS Secretary of MIT IMPACT. My leadership philosophy 
                centers on collaborative innovation and community impact.
              </p>
              <p className="text-white/60">
                Through cross-functional work with GeeksforGeeks, ACES, and the Cyber Security & Blockchain Club, 
                I've demonstrated versatility in driving technical and social initiatives that create lasting value.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 pointer-events-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
              Let's Create Together
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on innovative projects? Let's build technology that makes a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 rounded-full px-8"
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
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8"
              >
                <a href="https://www.linkedin.com/in/tanvi-bokade-3817681b0" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Tanvi42069"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tanvi-bokade-3817681b0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:tanvi.bokade@gmail.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center pointer-events-auto">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Experience the Future of Digital Portfolios
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Immersive 3D experiences that showcase creativity and technical excellence
            </p>
            <Button
              onClick={() => scrollToSection('intro')}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8"
            >
              Start Exploring
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