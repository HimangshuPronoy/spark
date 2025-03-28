
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className,
  children,
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-visible">
      <div
        className={cn(
          'fixed inset-0 bg-gradient-to-br from-black via-[#121212] to-black',
          className
        )}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[10%] left-[15%] w-[40%] h-[30%] rounded-full bg-spark-pink/20 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[5%] w-[35%] h-[50%] rounded-full bg-spark-teal/20 blur-[120px] animate-pulse-slow" />
          <div className="absolute top-[40%] right-[25%] w-[30%] h-[30%] rounded-full bg-spark-purple/10 blur-[100px] animate-pulse-slow" />
        </div>
      </div>
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default GradientBackground;
