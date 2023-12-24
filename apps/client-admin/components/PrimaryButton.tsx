import React from "react";

const PrimaryButton = ({ children }: { children: string }) => {
  return (
    <>
      <button className="bg-blue-500 text-white p-4 justify-center flex rounded-lg hover:bg-blue-600">
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
