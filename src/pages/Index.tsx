import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import SocialServiceSection from "@/components/SocialServiceSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    // Add smooth scroll behavior and fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <EducationSection />
      <ProjectsSection />
      <LeadershipSection />
      <SocialServiceSection />
      <Footer />
    </div>
  );
};

export default Index;