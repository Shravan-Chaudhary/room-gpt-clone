import { cn } from "@/lib/utils";

interface BlueToGreenTextGradientProps {
  children: string;
  className?: string;
}

const BlueToGreenTextGradient = ({ children, className }: BlueToGreenTextGradientProps) => {
  return (
    <div
      className={cn(
        "text-4xl flex justify-center text-center md:px-20 pb-10 md:text-6xl bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text font-bold text-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlueToGreenTextGradient;
