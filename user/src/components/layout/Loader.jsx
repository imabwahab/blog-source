import React, { useEffect, useState } from "react";

const Loader = () => {
  const loadingTexts = [ 'Loading.', 'Loading..', 'Loading...'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 500); // Change every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)] w-full">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />

        {/* Animated Loading Text */}
        <p className="text-lg font-medium text-gray-700 transition-all duration-300">
          {loadingTexts[index]}
        </p>
      </div>
    </div>
  );
};

export default Loader;
