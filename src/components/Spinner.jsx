import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
