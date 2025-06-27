
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const SkillsConstellation = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    // Technical Skills
    {
      name: "Python",
      position: { x: 15, y: 20 },
      color: "bg-blue-500",
      connections: ["JavaScript", "Data Analytics", "Problem-Solving"],
      tooltip: "Used Python for data analysis projects and automation scripts, integrating it with visualization tools to create comprehensive reporting solutions.",
      category: "technical"
    },
    {
      name: "JavaScript",
      position: { x: 35, y: 15 },
      color: "bg-yellow-500",
      connections: ["HTML", "CSS", "Python", "Project Management"],
      tooltip: "Built interactive web applications and enhanced user experiences through dynamic front-end development and API integrations.",
      category: "technical"
    },
    {
      name: "HTML",
      position: { x: 55, y: 10 },
      color: "bg-orange-500",
      connections: ["CSS", "JavaScript"],
      tooltip: "Created structured, semantic web content that serves as the foundation for responsive and accessible user interfaces.",
      category: "technical"
    },
    {
      name: "CSS",
      position: { x: 75, y: 20 },
      color: "bg-pink-500",
      connections: ["HTML", "JavaScript"],
      tooltip: "Designed visually appealing and responsive layouts that enhance user experience across different devices and platforms.",
      category: "technical"
    },
    {
      name: "Java",
      position: { x: 85, y: 40 },
      color: "bg-red-500",
      connections: ["C++", "Problem-Solving"],
      tooltip: "Developed robust applications and implemented object-oriented programming principles for scalable software solutions.",
      category: "technical"
    },
    {
      name: "C++",
      position: { x: 80, y: 65 },
      color: "bg-purple-500",
      connections: ["C", "Java", "Problem-Solving"],
      tooltip: "Applied systems programming concepts and algorithmic thinking to solve complex computational challenges efficiently.",
      category: "technical"
    },
    {
      name: "C",
      position: { x: 65, y: 80 },
      color: "bg-gray-500",
      connections: ["C++"],
      tooltip: "Built foundational programming skills and understanding of low-level system operations and memory management.",
      category: "technical"
    },
    {
      name: "Data Analytics",
      position: { x: 25, y: 45 },
      color: "bg-green-500",
      connections: ["Python", "Project Management", "Problem-Solving"],
      tooltip: "Transformed raw data into actionable insights through statistical analysis, visualization, and predictive modeling techniques.",
      category: "technical"
    },
    {
      name: "Project Management",
      position: { x: 45, y: 55 },
      color: "bg-indigo-500",
      connections: ["Leadership", "Data Analytics", "JavaScript", "Time Management"],
      tooltip: "Coordinated cross-functional teams and resources to deliver projects on time while maintaining quality standards and stakeholder satisfaction.",
      category: "technical"
    },
    
    // Professional Skills
    {
      name: "Leadership",
      position: { x: 20, y: 70 },
      color: "bg-cyan-500",
      connections: ["Communication", "Teamwork", "Project Management", "Confidence"],
      tooltip: "Guided teams through strategic initiatives, fostered collaborative environments, and mentored colleagues to achieve collective goals.",
      category: "professional"
    },
    {
      name: "Communication",
      position: { x: 35, y: 85 },
      color: "bg-teal-500",
      connections: ["Leadership", "Teamwork", "Empathy"],
      tooltip: "Facilitated clear dialogue between stakeholders, presented complex ideas effectively, and ensured alignment across diverse teams.",
      category: "professional"
    },
    {
      name: "Teamwork",
      position: { x: 50, y: 75 },
      color: "bg-emerald-500",
      connections: ["Leadership", "Communication", "Empathy", "Multitasking"],
      tooltip: "Collaborated effectively in diverse team environments, leveraging individual strengths to achieve shared objectives and deliverables.",
      category: "professional"
    },
    {
      name: "Problem-Solving",
      position: { x: 60, y: 50 },
      color: "bg-amber-500",
      connections: ["Python", "Java", "C++", "Data Analytics", "Confidence"],
      tooltip: "Applied analytical thinking and creative approaches to overcome technical challenges and optimize workflow processes.",
      category: "professional"
    },
    {
      name: "Confidence",
      position: { x: 40, y: 35 },
      color: "bg-rose-500",
      connections: ["Leadership", "Problem-Solving", "Time Management"],
      tooltip: "Maintained composure under pressure and made decisive decisions that drove project success and team morale.",
      category: "professional"
    },
    {
      name: "Empathy",
      position: { x: 15, y: 50 },
      color: "bg-violet-500",
      connections: ["Communication", "Teamwork"],
      tooltip: "Understanding team dynamics and user needs to create solutions that truly resonate with stakeholders and end-users.",
      category: "professional"
    },
    {
      name: "Multitasking",
      position: { x: 70, y: 45 },
      color: "bg-fuchsia-500",
      connections: ["Teamwork", "Time Management"],
      tooltip: "Efficiently managed multiple project streams simultaneously while maintaining quality and meeting deadlines consistently.",
      category: "professional"
    },
    {
      name: "Time Management",
      position: { x: 55, y: 30 },
      color: "bg-sky-500",
      connections: ["Project Management", "Confidence", "Multitasking"],
      tooltip: "Optimized workflows and prioritized tasks effectively to maximize productivity and ensure timely project delivery.",
      category: "professional"
    }
  ];

  const getConnectionPath = (skill1: any, skill2: any) => {
    return `M ${skill1.position.x} ${skill1.position.y} L ${skill2.position.x} ${skill2.position.y}`;
  };

  const renderConnections = () => {
    const connections: JSX.Element[] = [];
    
    skills.forEach((skill, index) => {
      skill.connections.forEach(connectionName => {
        const connectedSkill = skills.find(s => s.name === connectionName);
        if (connectedSkill) {
          const isHighlighted = hoveredSkill === skill.name || hoveredSkill === connectionName;
          connections.push(
            <path
              key={`${skill.name}-${connectionName}`}
              d={getConnectionPath(skill, connectedSkill)}
              stroke={isHighlighted ? "#8b5cf6" : "#d1d5db"}
              strokeWidth={isHighlighted ? "2" : "1"}
              opacity={isHighlighted ? 0.8 : 0.3}
              className="transition-all duration-300"
            />
          );
        }
      });
    });
    
    return connections;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-50/80 to-blue-50/50 rounded-lg overflow-hidden border border-gray-200/50">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Background constellation effect */}
        <defs>
          <radialGradient id="skillGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </radialGradient>
        </defs>
        
        {/* Connection lines */}
        <g className="connections">
          {renderConnections()}
        </g>
        
        {/* Skill nodes */}
        {skills.map((skill, index) => {
          const isHovered = hoveredSkill === skill.name;
          const isConnected = hoveredSkill && skill.connections.includes(hoveredSkill);
          const shouldHighlight = isHovered || isConnected;
          
          return (
            <g key={skill.name}>
              {/* Glow effect when hovered */}
              {shouldHighlight && (
                <circle
                  cx={skill.position.x}
                  cy={skill.position.y}
                  r="6"
                  fill="url(#skillGlow)"
                  className="animate-pulse"
                />
              )}
              
              {/* Main skill circle */}
              <HoverCard key={skill.name}>
                <HoverCardTrigger asChild>
                  <circle
                    cx={skill.position.x}
                    cy={skill.position.y}
                    r={shouldHighlight ? "3.5" : "2.5"}
                    className={`${skill.color.replace('bg-', 'fill-')} cursor-pointer transition-all duration-300 hover:scale-110`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-white/95 border-gray-200 text-gray-800 shadow-xl">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-700">{skill.name}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {skill.tooltip}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {skill.connections.map(connection => (
                        <span key={connection} className="text-xs bg-purple-100 px-2 py-1 rounded text-purple-700 font-medium">
                          {connection}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              {/* Skill label */}
              <text
                x={skill.position.x}
                y={skill.position.y - 4}
                textAnchor="middle"
                className={`text-xs fill-gray-700 font-medium transition-opacity duration-300 ${
                  shouldHighlight ? 'opacity-100' : 'opacity-70'
                }`}
                style={{ fontSize: '0.6rem' }}
              >
                {skill.name.split(' ').map((word, i) => (
                  <tspan key={i} x={skill.position.x} dy={i === 0 ? 0 : '0.7em'}>
                    {word}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500">
        Hover over skills to see connections and project applications
      </div>
    </div>
  );
};

export default SkillsConstellation;
