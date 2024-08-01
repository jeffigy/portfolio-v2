import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

const GridPatternDashed = () => {
  return (
    <div className="fixed flex h-full w-full items-center justify-center">
      <GridPattern
        width={30}
        height={30}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default GridPatternDashed;
