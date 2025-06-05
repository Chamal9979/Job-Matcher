"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/theme-toggle";
import { FileTextIcon, BriefcaseIcon, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  
  const routes = [
    {
      href: "/",
      label: "Upload CV",
      icon: FileTextIcon,
      active: pathname === "/",
    },
    {
      href: "/matches",
      label: "Job Matches",
      icon: BriefcaseIcon,
      active: pathname === "/matches",
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User2Icon,
      active: pathname === "/profile",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-8 md:px-32">
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden md:inline-block">CareerMatch AI</span>
        </div>
        
        <nav className="flex items-center gap-6">
          <div className="hidden md:flex space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground"
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button size="sm" className="hidden md:flex">Sign In</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}