import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

const AnimatedGrid = () => {
  return (
    <div className="fixed flex h-screen w-full items-center justify-center overflow-hidden">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.5}
        duration={1}
        repeatDelay={1}
        className={cn(
          "fill-base-100",
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};
export default AnimatedGrid;
