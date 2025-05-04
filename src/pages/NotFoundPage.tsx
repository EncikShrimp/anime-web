import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundAnimation from "@/assets/lottie/404.json";
import { Button } from "@/components/ui/button";

const NotFoundPage: React.FC = () => (
  <div className="bg-background flex flex-col items-center justify-center p-4 text-center">
    <div className="max-w-md w-full mx-auto">
      <Lottie animationData={notFoundAnimation} loop className="w-l h-l" />
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6"
      >
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  </div>
);

export default NotFoundPage;
