
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const SkillsConstellation = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "Creative Problem Solving",
      position: { x: 20, y: 15 },
      color: "bg-pink-500",
      connections: ["Leadership", "Strategic Planning"],
      tooltip: "Applied creative thinking to design innovative solutions for complex project challenges, transforming abstract concepts into actionable strategies."
    },
    {
      name: "Leadership",  
      position: { x: 70, y: 25 },
      color: "bg-purple-500",
      connections: ["Team Collaboration", "Communication"],
      tooltip: "Led cross-functional teams through strategic initiatives, mentoring team members and driving collaborative decision-making processes."
    },
    {
      name: "Strategic Planning",
      position: { x: 25, y: 55 },
      color: "bg-blue-500", 
      connections: ["Creative Problem Solving", "Innovation"],
      tooltip: "Developed comprehensive project roadmaps that aligned team goals with organizational objectives, ensuring efficient resource allocation."
    },
    {
      name: "Team Collaboration",
      position: { x: 75, y: 60 },
      color: "bg-green-500",
      connections: ["Leadership", "Communication"],
      tooltip: "Facilitated productive team dynamics by fostering open communication and leveraging diverse perspectives to achieve common goals."
    },
    {
      name: "Communication",
      position: { x: 45, y: 35 },
      color: "bg-yellow-500",
      connections: ["Leadership", "Team Collaboration", "Innovation"],
      tooltip: "Delivered compelling presentations and facilitated stakeholder discussions that translated complex ideas into clear, actionable plans."
    },
    {
      name: "Innovation", 
      position: { x: 50, y: 75 },
      color: "bg-orange-500",
      connections: ["Strategic Planning", "Communication"],
      tooltip: "Pioneered new approaches to traditional challenges, integrating emerging technologies and methodologies to drive organizational growth."
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
              stroke={isHighlighted ? "#e879f9" : "#6b7280"}
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
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-lg overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Background constellation effect */}
        <defs>
          <radialGradient id="skillGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
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
                  r="8"
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
                    r={shouldHighlight ? "4" : "3"}
                    className={`${skill.color.replace('bg-', 'fill-')} cursor-pointer transition-all duration-300 hover:scale-110`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-gray-900/95 border-purple-500/30 text-white">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-300">{skill.name}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {skill.tooltip}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {skill.connections.map(connection => (
                        <span key={connection} className="text-xs bg-purple-600/30 px-2 py-1 rounded text-purple-200">
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
                y={skill.position.y + 6}
                textAnchor="middle"
                className={`text-xs fill-white font-medium transition-opacity duration-300 ${
                  shouldHighlight ? 'opacity-100' : 'opacity-70'
                }`}
                style={{ fontSize: '0.65rem' }}
              >
                {skill.name.split(' ').map((word, i) => (
                  <tspan key={i} x={skill.position.x} dy={i === 0 ? 0 : '0.8em'}>
                    {word}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-400">
        Hover over skills to see connections and real project applications
      </div>
    </div>
  );
};

export default SkillsConstellation;
