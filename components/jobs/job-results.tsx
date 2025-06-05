"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { 
  BookmarkIcon, 
  MapPinIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  SearchIcon,
  FilterIcon,
  XIcon,
  CheckIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import JobItem from "@/components/jobs/job-item";

// Mock data for job listings
const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    postedDate: "2 days ago",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    salary: "$120,000 - $150,000",
    matchPercentage: 98,
    description: "We're looking for a senior frontend developer experienced in React and TypeScript to join our product team...",
    bookmarked: false,
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Full-time",
    postedDate: "1 week ago",
    skills: ["Figma", "UI Design", "User Research", "Prototyping"],
    salary: "$90,000 - $115,000",
    matchPercentage: 92,
    description: "Join our design team to create beautiful and functional user interfaces for our web and mobile products...",
    bookmarked: true,
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataWorks Analytics",
    location: "New York, NY",
    type: "Full-time",
    postedDate: "3 days ago",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    salary: "$110,000 - $140,000",
    matchPercentage: 85,
    description: "We're seeking a talented data scientist to help us build predictive models and derive insights from large datasets...",
    bookmarked: false,
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Innovate Solutions",
    location: "Chicago, IL",
    type: "Full-time",
    postedDate: "1 day ago",
    skills: ["JavaScript", "Node.js", "React", "MongoDB"],
    salary: "$100,000 - $130,000",
    matchPercentage: 88,
    description: "Looking for a full stack developer to help build and maintain our web applications using modern JavaScript technologies...",
    bookmarked: false,
  },
  {
    id: 5,
    title: "Product Manager",
    company: "ProductLabs",
    location: "Remote",
    type: "Full-time",
    postedDate: "5 days ago",
    skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],
    salary: "$115,000 - $145,000",
    matchPercentage: 80,
    description: "Join our team as a product manager to help define and execute our product strategy and roadmap...",
    bookmarked: false,
  },
];

export default function JobResults() {
  const [jobs, setJobs] = useState(jobListings);
  const [searchTerm, setSearchTerm] = useState("");
  const [minMatchPercentage, setMinMatchPercentage] = useState(75);
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleBookmark = (id: number) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, bookmarked: !job.bookmarked } : job
    ));
  };

  return (
    <div className="space-y-6">
      {/* Search and filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title, skill or company..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FilterIcon className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {showFilters && (
            <div className="mt-4 space-y-4 pt-4 border-t">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Minimum Match Percentage: {minMatchPercentage}%
                  </label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2"
                    onClick={() => setShowFilters(false)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Slider
                  value={[minMatchPercentage]}
                  onValueChange={(value) => setMinMatchPercentage(value[0])}
                  min={50}
                  max={100}
                  step={5}
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {["Remote", "Full-time", "Part-time", "Contract"].map((filter) => (
                  <Button key={filter} variant="outline" size="sm" className="justify-start">
                    <div className="h-4 w-4 mr-2 rounded border flex items-center justify-center">
                      {/* <CheckIcon className="h-3 w-3" /> */}
                    </div>
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Job listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} onToggleBookmark={toggleBookmark} />
        ))}
      </div>
    </div>
  );
}