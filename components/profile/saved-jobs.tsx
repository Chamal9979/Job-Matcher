"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, TrashIcon, BriefcaseIcon } from "lucide-react";
import JobItem from "@/components/jobs/job-item";

// Mock data for saved jobs
const savedJobsData = [
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
    bookmarked: true,
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
];

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState(savedJobsData);
  
  const toggleBookmark = (id: number) => {
    setSavedJobs(savedJobs.filter(job => job.id !== id));
  };
  
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <BookmarkIcon className="h-5 w-5" />
              Saved Jobs
            </CardTitle>
            <CardDescription>Jobs you've bookmarked for later</CardDescription>
          </div>
          
          {savedJobs.length > 0 && (
            <Button variant="outline" size="sm" className="self-start">
              Compare Jobs
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {savedJobs.length > 0 ? (
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <JobItem key={job.id} job={job} onToggleBookmark={toggleBookmark} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">No saved jobs yet</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Bookmark jobs you're interested in to compare and apply later
            </p>
            <Button>Browse Jobs</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}