import Lottie from "lottie-react";
import loadingAnimation from "@/assets/lottie/loading.json";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] py-8">
      <div className="relative">
        <div className="w-2xl h-2xl relative z-10">
          <Lottie animationData={loadingAnimation} loop autoplay />
        </div>
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
