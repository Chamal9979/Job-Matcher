import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  UserIcon, 
  FileTextIcon, 
  BriefcaseIcon, 
  BookmarkIcon,
  SettingsIcon,
  DownloadIcon,
  PencilIcon
} from "lucide-react";
import ProfileSettings from "@/components/profile/profile-settings";
import SavedJobs from "@/components/profile/saved-jobs";

export const metadata: Metadata = {
  title: "Profile | CareerMatch AI",
  description: "Manage your profile, CV, and job preferences",
};

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground">
            Manage your profile, CV, and job preferences
          </p>
        </div>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="w-full max-w-md mb-8">
          <TabsTrigger value="profile" className="flex-1">
            <UserIcon className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="cv" className="flex-1">
            <FileTextIcon className="h-4 w-4 mr-2" />
            CV
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex-1">
            <BookmarkIcon className="h-4 w-4 mr-2" />
            Saved Jobs
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex-1">
            <SettingsIcon className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        <div className="space-y-8">
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="text-xl">Profile Summary</CardTitle>
                  <CardDescription>Your personal and contact information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <UserIcon className="h-12 w-12" />
                    </div>
                    <h2 className="text-xl font-semibold">Alex Johnson</h2>
                    <p className="text-muted-foreground">Senior Frontend Developer</p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                      <p>alex.johnson@example.com</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                      <p>San Francisco, CA</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 gap-2">
                    <PencilIcon className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Professional Information</CardTitle>
                  <CardDescription>Your experience, skills and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Work Experience</h3>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Senior Frontend Developer</h4>
                          <span className="text-sm text-muted-foreground">2020 - Present</span>
                        </div>
                        <p className="text-muted-foreground">TechCorp Inc.</p>
                        <p className="text-sm">
                          Led the frontend development team in building and maintaining React applications.
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Web Developer</h4>
                          <span className="text-sm text-muted-foreground">2018 - 2020</span>
                        </div>
                        <p className="text-muted-foreground">Digital Agency</p>
                        <p className="text-sm">
                          Developed responsive websites and web applications for various clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "JavaScript", "Next.js", "CSS/Tailwind", "UI/UX Design", 
                        "Node.js", "Git", "API Integration", "Responsive Design"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">Job Preferences</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Desired Role</h4>
                        <p>Senior Frontend Developer</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Employment Type</h4>
                        <p>Full-time</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Location Preference</h4>
                        <p>Remote, San Francisco</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Salary Expectation</h4>
                        <p>$120,000 - $150,000</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="cv">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Your CV</CardTitle>
                  <CardDescription>Upload and manage your CV</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <DownloadIcon className="h-4 w-4" />
                    Download
                  </Button>
                  <Button size="sm">Upload New</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md p-6 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center">
                      <FileTextIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Alex_Johnson_CV.pdf</h3>
                      <p className="text-sm text-muted-foreground">Uploaded on June 10, 2025</p>
                      <p className="text-xs text-muted-foreground mt-1">Last analyzed: 2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved">
            <SavedJobs />
          </TabsContent>
          
          <TabsContent value="settings">
            <ProfileSettings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}