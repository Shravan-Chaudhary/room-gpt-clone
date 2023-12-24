import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: string;
  className?: string;
}

const BlacktoGrayTextGradient = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "text-4xl flex justify-center text-center md:px-20 pb-10 md:text-6xl bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text font-bold text-transparent",
        className
      )}
    >
      {children}
      <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
        Simple and transparent pricing plans for all businesses.
      </div>
    </div>
  );
};

export default BlacktoGrayTextGradient;
