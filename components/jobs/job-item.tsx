"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  BookmarkIcon,
  MapPinIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  skills: string[];
  salary: string;
  matchPercentage: number;
  description: string;
  bookmarked: boolean;
}

interface JobItemProps {
  job: Job;
  onToggleBookmark: (id: number) => void;
}

export default function JobItem({ job, onToggleBookmark }: JobItemProps) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-semibold text-xl mb-1 hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-muted-foreground">{job.company}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge 
              className={cn(
                "transition-colors",
                job.matchPercentage >= 90 
                  ? "bg-green-500/10 text-green-700 dark:text-green-500 hover:bg-green-500/20" 
                  : job.matchPercentage >= 80
                  ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-500 hover:bg-emerald-500/20"
                  : "bg-amber-500/10 text-amber-700 dark:text-amber-500 hover:bg-amber-500/20"
              )}
            >
              {job.matchPercentage}% Match
            </Badge>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onToggleBookmark(job.id)}
              className={cn(
                "h-8 w-8",
                job.bookmarked && "text-yellow-500 dark:text-yellow-400"
              )}
            >
              <BookmarkIcon className="h-5 w-5" fill={job.bookmarked ? "currentColor" : "none"} />
              <span className="sr-only">Bookmark</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mt-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4 mr-2 shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <BriefcaseIcon className="h-4 w-4 mr-2 shrink-0" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4 mr-2 shrink-0" />
            <span>Posted {job.postedDate}</span>
          </div>
        </div>
        
        {expanded && (
          <>
            <Separator className="my-4" />
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{job.description}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Matching Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="transition-colors hover:bg-secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full flex items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
        >
          {expanded ? (
            <>
              <ChevronUpIcon className="h-4 w-4" />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <ChevronDownIcon className="h-4 w-4" />
              <span>Show More</span>
            </>
          )}
        </Button>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex justify-between items-center border-t">
        <div className="font-medium">{job.salary}</div>
        <div className="flex gap-3">
          <Button size="sm" variant="outline">Details</Button>
          <Button size="sm">Apply Now</Button>
        </div>
      </CardFooter>
    </Card>
  );
}