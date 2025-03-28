
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassMorphismProps {
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

const GlassMorphism: React.FC<GlassMorphismProps> = ({
  children,
  className,
  darker = false,
}) => {
  return (
    <div
      className={cn(
        darker ? 'glass-darker' : 'glass',
        'rounded-2xl transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassMorphism;
