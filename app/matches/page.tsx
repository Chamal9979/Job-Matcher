import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobResults from "@/components/jobs/job-results";
import SkillsAnalysis from "@/components/cv/skills-analysis";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ShareIcon, RefreshCwIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Job Matches | CareerMatch AI",
  description: "View jobs that match your CV profile and skills",
};

export default function MatchesPage() {
  return (
    <div className="container py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Job Matches</h1>
          <p className="text-muted-foreground">
            We found 28 jobs that match your skills and experience
          </p>
        </div>
        <div className="flex gap-3 self-start md:self-auto">
          <Button variant="outline" size="sm" className="gap-2">
            <DownloadIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Download Report</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ShareIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Share Results</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCwIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Update CV</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - CV Analysis */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <SkillsAnalysis />
          </div>
        </div>
        
        {/* Right column - Job Results */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="best-matches">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="best-matches">Best Matches</TabsTrigger>
                <TabsTrigger value="recent">Recent Jobs</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="best-matches">
              <JobResults />
            </TabsContent>
            <TabsContent value="recent">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground mb-4">
                  View the most recently posted jobs that match your profile
                </p>
                <Button>Show Recent Jobs</Button>
              </div>
            </TabsContent>
            <TabsContent value="saved">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground mb-4">
                  You haven't saved any jobs yet
                </p>
                <Button>Browse Jobs</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}