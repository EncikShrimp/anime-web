import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

interface Props {
  message: string;
  showHomeButton?: boolean;
}

const ErrorDisplay: React.FC<Props> = ({ message, showHomeButton = false }) => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg max-w-4xl mx-auto my-6">
      <p className="text-red-500 mb-4">{message}</p>
      <div className="flex justify-center space-x-3">
        <Button onClick={() => window.location.reload()} variant="outline">
          Retry
        </Button>
        {showHomeButton && (
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;
