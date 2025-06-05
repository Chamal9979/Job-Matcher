"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfileSettings() {
  return (
    <Tabs defaultValue="account" className="space-y-6">
      <TabsList className="w-full max-w-md">
        <TabsTrigger value="account" className="flex-1">
          Account
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex-1">
          Notifications
        </TabsTrigger>
        <TabsTrigger value="privacy" className="flex-1">
          Privacy
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your account information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Alex Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="alex.johnson@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Change Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div />
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Choose what notifications you want to receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Job Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Receive personalized job recommendations based on your CV</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Application Updates</h3>
                  <p className="text-sm text-muted-foreground">Get notified about your job application status changes</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">CV Tips and Improvements</h3>
                  <p className="text-sm text-muted-foreground">Receive suggestions on how to improve your CV</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Marketing Emails</h3>
                  <p className="text-sm text-muted-foreground">Receive news, updates, and promotions</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="privacy">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>
              Control how your information is used and shared
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Profile Visibility</h3>
                  <p className="text-sm text-muted-foreground">Allow employers to view your profile and contact you</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Share CV Analytics</h3>
                  <p className="text-sm text-muted-foreground">Share anonymized CV data to improve our AI matching</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Third-Party Integrations</h3>
                  <p className="text-sm text-muted-foreground">Allow data sharing with trusted partners</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-medium">Data Management</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline">Download My Data</Button>
                <Button variant="outline" className="text-red-500 dark:text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}