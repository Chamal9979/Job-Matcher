"use client";

import { useState } from "react";
import { FileUpIcon, FileTextIcon, LoaderIcon, CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

enum UploadState {
  IDLE,
  UPLOADING,
  PROCESSING,
  COMPLETE,
}

export default function CvUploader() {
  const [uploadState, setUploadState] = useState<UploadState>(UploadState.IDLE);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Simulate file upload and processing
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Check file type
    const validTypes = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB",
        variant: "destructive",
      });
      return;
    }
    
    setFileName(file.name);
    setUploadState(UploadState.UPLOADING);
    
    // Simulate upload progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setUploadState(UploadState.PROCESSING);
        
        // Simulate processing
        setTimeout(() => {
          setUploadState(UploadState.COMPLETE);
          toast({
            title: "CV uploaded successfully",
            description: "We're matching you with relevant jobs now",
          });
          
          // Redirect to matches page after 1.5 seconds
          setTimeout(() => {
            window.location.href = "/matches";
          }, 1500);
        }, 2000);
      }
    }, 100);
  };
  
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-lg w-full">
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 transition-all",
            "flex flex-col items-center justify-center gap-4 text-center",
            uploadState === UploadState.IDLE 
              ? "hover:border-primary/50 cursor-pointer border-muted"
              : "border-primary/20"
          )}
          onClick={() => {
            if (uploadState === UploadState.IDLE) {
              document.getElementById("cv-upload")?.click();
            }
          }}
        >
          {uploadState === UploadState.IDLE ? (
            <>
              <div className="rounded-full bg-primary/10 p-4">
                <FileUpIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Upload your CV</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Drop your CV here or click to browse (PDF or Word, max 5MB)
                </p>
              </div>
              <input
                id="cv-upload"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </>
          ) : uploadState === UploadState.UPLOADING ? (
            <>
              <div className="rounded-full bg-primary/10 p-4">
                <FileTextIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Uploading CV</h3>
                <p className="text-sm text-muted-foreground">{fileName}</p>
              </div>
              <Progress value={progress} className="w-full max-w-xs" />
            </>
          ) : uploadState === UploadState.PROCESSING ? (
            <>
              <div className="rounded-full bg-primary/10 p-4">
                <LoaderIcon className="h-8 w-8 text-primary animate-spin" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Analyzing CV</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI is extracting key information from your CV
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">CV Processed Successfully</h3>
                <p className="text-sm text-muted-foreground">
                  Redirecting to your job matches...
                </p>
              </div>
            </>
          )}
        </div>
        
        {uploadState === UploadState.IDLE && (
          <p className="mt-2 text-xs text-muted-foreground text-center">
            By uploading, you agree to our{" "}
            <a href="/terms" className="underline underline-offset-2 hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-primary">
              Privacy Policy
            </a>
          </p>
        )}
      </div>
    </div>
  );
}