import React, { useRef, useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  magneticStrength = 0.3,
  className = "",
  onMouseMove,
  onMouseLeave,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = x * magneticStrength;
    const moveY = y * magneticStrength;

    button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    
    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    button.style.transform = 'translate(0px, 0px) scale(1)';
    setIsHovered(false);
    
    if (onMouseLeave) onMouseLeave(e);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <Button
      ref={buttonRef}
      className={`transition-all duration-300 ease-out relative overflow-hidden ${className} ${
        isHovered ? 'shadow-glow-primary' : ''
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
      )}
    </Button>
  );
};

export default MagneticButton;