import { cn } from "@/lib/utils";

interface YellowToBlueTextGradientProps {
  children: string;
  className?: string;
}

const BlueToYellowTextGradient = ({ children, className }: YellowToBlueTextGradientProps) => {
  return (
    <div
      className={cn(
        "text-4xl flex justify-center text-center md:px-20 pb-10 md:text-6xl bg-gradient-to-l from-yellow-300 to-blue-300 bg-clip-text font-bold text-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlueToYellowTextGradient;
