import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-black/20 text-white">
      <div className="h-32 w-32 animate-spin rounded-full border-4 border-cyan-600 border-y-transparent"></div>
    </div>
  );
};

export default Loader;
