import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPinIcon, CalendarIcon, BriefcaseIcon, ArrowRightIcon } from "lucide-react";

// Mock data for featured jobs
const featuredJobs = [
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
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Jobs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore some of our top job opportunities matching typical career profiles.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 gap-2 self-start md:self-auto">
            View all jobs
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="group overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors line-clamp-1">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-500 hover:bg-green-500/20 transition-colors">
                    {job.matchPercentage}% Match
                  </Badge>
                </div>
                
                <div className="space-y-3 mb-6">
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
                
                <div>
                  <p className="text-sm font-medium mb-3">Key Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-8 pt-0 flex justify-between items-center border-t mt-6">
                <div className="font-medium">{job.salary}</div>
                <Button size="sm">View Job</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}