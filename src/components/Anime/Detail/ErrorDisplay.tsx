import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

interface Props {
  error: string;
}

const ErrorDisplay: React.FC<Props> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg max-w-4xl mx-auto my-12">
      <p className="text-red-500 mb-4">Failed to load anime details: {error}</p>
      <Button
        onClick={() => window.location.reload()}
        variant="outline"
        className="mr-2"
      >
        Retry
      </Button>
      <Button onClick={() => navigate("/")}>Return to Home</Button>
    </div>
  );
};

export default ErrorDisplay;
