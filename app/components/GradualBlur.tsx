import React from 'react';

interface GradualBlurProps {
  target?: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  height: string;
  strength: number;
  divCount: number;
  curve?: string;
  exponential?: boolean;
  opacity: number;
}

const GradualBlur: React.FC<GradualBlurProps> = ({
  position,
  height,
  strength,
  divCount,
  exponential = false,
  opacity,
}) => {
  const getPositionStyle = () => {
    switch (position) {
      case 'top':
        return { top: 0, left: 0, right: 0, height };
      case 'bottom':
        return { bottom: 0, left: 0, right: 0, height };
      case 'left':
        return { top: 0, left: 0, bottom: 0, width: height };
      case 'right':
        return { top: 0, right: 0, bottom: 0, width: height };
      default:
        return { bottom: 0, left: 0, right: 0, height };
    }
  };

  const getBlurValue = (index: number) => {
    if (exponential) {
      return strength * Math.pow(2, index);
    }
    return strength * (index + 1);
  };

  const getOpacity = (index: number) => {
    return opacity * (1 - index / divCount);
  };

  return (
    <div
      style={{
        position: 'absolute',
        ...getPositionStyle(),
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      {Array.from({ length: divCount }, (_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: position === 'top' ? `${(i / divCount) * 100}%` : position === 'bottom' ? `${100 - ((i + 1) / divCount) * 100}%` : 0,
            left: position === 'left' ? `${(i / divCount) * 100}%` : position === 'right' ? `${100 - ((i + 1) / divCount) * 100}%` : 0,
            width: position === 'left' || position === 'right' ? `${100 / divCount}%` : '100%',
            height: position === 'top' || position === 'bottom' ? `${100 / divCount}%` : '100%',
            backdropFilter: `blur(${getBlurValue(i)}px)`,
            opacity: getOpacity(i),
            background: `linear-gradient(to ${position === 'top' ? 'bottom' : position === 'bottom' ? 'top' : position === 'left' ? 'right' : 'left'}, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)`,
          }}
        />
      ))}
    </div>
  );
};

export default GradualBlur;