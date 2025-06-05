import { CheckIcon, FileTextIcon, SearchIcon, BriefcaseIcon, ThumbsUpIcon } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: FileTextIcon,
      title: "Upload your CV",
      description: "Simply upload your CV in PDF or Word format.",
    },
    {
      icon: SearchIcon,
      title: "AI Analysis",
      description: "Our AI extracts your skills, experience, and qualifications.",
    },
    {
      icon: BriefcaseIcon,
      title: "Job Matching",
      description: "We match your profile with relevant job opportunities.",
    },
    {
      icon: ThumbsUpIcon,
      title: "Apply with Confidence",
      description: "Apply to jobs that are the best fit for your profile.",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Our AI-powered platform simplifies your job search by matching your CV with the most relevant opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8">
              <div className="relative mb-8">
                <div className="rounded-full bg-primary/10 p-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full h-px w-12 transform -translate-y-1/2 translate-x-2 bg-border">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <CheckIcon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}