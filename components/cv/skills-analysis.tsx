"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  BriefcaseIcon, 
  GraduationCapIcon, 
  CodeIcon, 
  BarChartIcon, 
  PuzzleIcon
} from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for CV analysis
const mockSkillsData = {
  technical: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Next.js", level: 85 },
    { name: "CSS/Tailwind", level: 92 },
    { name: "UI/UX Design", level: 80 },
  ],
  soft: [
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 88 },
    { name: "Problem Solving", level: 94 },
    { name: "Time Management", level: 85 },
  ],
};

const mockExperience = [
  {
    title: "Senior Frontend Developer",
    company: "TechCo Inc.",
    duration: "2020 - Present",
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    duration: "2018 - 2020",
  },
  {
    title: "Junior Developer",
    company: "Startup Ltd",
    duration: "2016 - 2018",
  },
];

const mockEducation = [
  {
    degree: "BSc Computer Science",
    institution: "Tech University",
    year: "2012 - 2016",
  },
];

export default function SkillsAnalysis() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <PuzzleIcon className="h-5 w-5 text-primary" />
          <span>Your CV Analysis</span>
        </CardTitle>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-6">
          <TabsList className="w-full">
            <TabsTrigger value="skills" className="flex-1">Skills</TabsTrigger>
            <TabsTrigger value="experience" className="flex-1">Experience</TabsTrigger>
            <TabsTrigger value="education" className="flex-1">Education</TabsTrigger>
          </TabsList>
        </div>
        
        <CardContent className="pt-4">
          <TabsContent value="skills" className="space-y-6 mt-0">
            <div className="space-y-4">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CodeIcon className="h-4 w-4" />
                Technical Skills
              </h4>
              <div className="space-y-3">
                {mockSkillsData.technical.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <BarChartIcon className="h-4 w-4" />
                Soft Skills
              </h4>
              <div className="space-y-3">
                {mockSkillsData.soft.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-4 mt-0">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <BriefcaseIcon className="h-4 w-4" />
              Work Experience
            </h4>
            
            <div className="space-y-4">
              {mockExperience.map((job, index) => (
                <div key={index} className="space-y-1">
                  <h5 className="font-medium">{job.title}</h5>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <p className="text-xs text-muted-foreground">{job.duration}</p>
                  
                  {index < mockExperience.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="space-y-4 mt-0">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <GraduationCapIcon className="h-4 w-4" />
              Education
            </h4>
            
            <div className="space-y-4">
              {mockEducation.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h5 className="font-medium">{edu.degree}</h5>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}