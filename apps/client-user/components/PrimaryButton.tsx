import React from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: string;
  className?: string;
}

const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <button className={cn("bg-blue-500 text-white p-4 justify-center flex rounded-lg hover:bg-blue-600", className)}>
      {children}
    </button>
  );
};

export default PrimaryButton;
