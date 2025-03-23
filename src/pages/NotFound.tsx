
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 dark:bg-secondary/10 page-transition pt-20">
      <div className="glass-card p-10 rounded-lg text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button size="lg" asChild className="rounded-full">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            <span>Return Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
