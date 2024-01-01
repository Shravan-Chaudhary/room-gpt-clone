import { cn } from "@/lib/utils";
import React from "react";

type tagOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const sizeOptions = {
  h1: "text-7xl",
  h2: "text-6xl",
  h3: "text-5xl",
  h4: "text-4xl",
  h5: "text-3xl",
  h6: "text-2xl",
} as const;

interface Props {
  tagType: tagOptions;
  size: keyof typeof sizeOptions;
  className?: string;
  bold?: "semi" | "full";
  children: string;
}

const Heading = ({ tagType, size, className, bold, children }: Props) => {
  const boldClass = bold === "full" ? "font-bold" : bold === "semi" ? "font-semibold" : "";
  const sizeClass = sizeOptions[size];
  return React.createElement(tagType, { className: cn("", sizeClass, boldClass, className) }, children);
};

export default Heading;
