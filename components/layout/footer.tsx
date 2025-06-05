import { BriefcaseIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-8 md:px-32">
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
          <span className="font-semibold text-sm">CareerMatch AI</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CareerMatch AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}