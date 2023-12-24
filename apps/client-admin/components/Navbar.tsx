import React from "react";
import ActionButtons from "./ActionButtons";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-40 mb-5 h-14 w-full border-b border-gray-200 bg-white/30 backdrop-blur-lg transition-all">
      <ActionButtons />
    </div>
  );
};

export default Navbar;
