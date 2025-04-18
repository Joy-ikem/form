import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import curtain from './Animation/curtain.json';

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1000); // adjust based on the real animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      <Lottie
        animationData={curtain}
        className="w-screen h-screen object-cover"
      />
    </div>
  );
};

export default Intro;
