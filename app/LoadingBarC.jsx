// LoadingBar.js
"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const ProgressBar = ({ progress }) => {
  return (
    <LoadingBar
      color="#FFEA00" // Set the color to green
      progress={progress}
      onLoaderFinished={() => {}} // You can add a callback if needed
    />
  );
};

const LoadingBarC = () => {
  const [progress, setProgress] = useState(0);
  const path = usePathname()

  useEffect(() => {
    const simulateProgress = () => {
      setProgress(30);

      // Simulate additional progress at 50%
      setTimeout(() => {
        setProgress(80);
      }, 1000);

      // Simulate additional progress at 100%
      setTimeout(() => {
        setProgress(100);
      }, 2000);
    };

    simulateProgress();
  }, [path]); // Update progress when route changes

  return <ProgressBar progress={progress} />;
};

export default LoadingBarC;
