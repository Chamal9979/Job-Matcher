import { Metadata } from "next";
import { ArrowRightIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";
import CvUploader from "@/components/cv/cv-uploader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HowItWorks from "@/components/home/how-it-works";
import FeaturedJobs from "@/components/home/featured-jobs";

export const metadata: Metadata = {
  title: "CareerMatch AI | Match Your CV to Perfect Jobs",
  description: "Upload your CV and let AI find the perfect job matches for your skills and experience.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container flex flex-col items-center text-center relative z-10">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            Powered by AI
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
            Find Your Perfect Career Match with AI
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10">
            Upload your CV and our AI will match you with job opportunities that
            align perfectly with your skills, experience, and career goals.
          </p>
          
          <div className="w-full max-w-xl">
            <CvUploader />
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/how-it-works">
              <Button variant="outline" className="gap-2">
                How it works
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_100%)]" />
      </section>

      {/* How it works section */}
      <HowItWorks />
      
      {/* Featured jobs section */}
      <FeaturedJobs />
      
      {/* Testimonials/Stats Section */}
      <section className="container py-12">
        <div className="rounded-2xl bg-muted/50 p-8 md:p-10 lg:p-12">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Job Seekers</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Join thousands of professionals who've found their ideal career path using CareerMatch AI.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-primary mb-2">93%</span>
              <p className="text-sm text-center text-muted-foreground">Match accuracy rate</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-primary mb-2">12K+</span>
              <p className="text-sm text-center text-muted-foreground">CVs processed</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-primary mb-2">54%</span>
              <p className="text-sm text-center text-muted-foreground">Faster job search</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl md:text-4xl font-bold text-primary mb-2">8K+</span>
              <p className="text-sm text-center text-muted-foreground">Job listings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}