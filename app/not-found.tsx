import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex h-[80vh] items-center justify-center">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            404 - Page Not Found
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}