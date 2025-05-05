import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="text-6xl mb-4">😢</div>
      <h2 className="text-2xl font-bold mb-4 text-center">Anime Not Found</h2>
      <p className="text-center mb-6 max-w-md text-muted-foreground">
        We couldn't find the anime you're looking for. It may have been removed
        or the ID is incorrect.
      </p>
      <Button onClick={handleClick}>Return to Home</Button>
    </div>
  );
};

export default NotFound;
