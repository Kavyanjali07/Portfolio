import React from 'react';

interface DarkVeilProps {
  hueShift: number;
  noiseIntensity: number;
  scanlineIntensity: number;
  speed: number;
  scanlineFrequency: number;
  warpAmount: number;
}

const DarkVeil: React.FC<DarkVeilProps> = ({
  hueShift,
  noiseIntensity,
  scanlineIntensity,
  speed,
  scanlineFrequency,
  warpAmount,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(45deg, rgba(0,0,0,0.8), rgba(20,20,20,0.9))`,
        filter: `hue-rotate(${hueShift}deg)`,
        animation: `warp ${speed}s infinite linear`,
      }}
    >
      {/* Noise overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${noiseIntensity}'/%3E%3C/svg%3E")`,
          opacity: noiseIntensity,
        }}
      />
      {/* Scanlines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent ${100 / scanlineFrequency}px, rgba(255,255,255,${scanlineIntensity}) ${100 / scanlineFrequency}px, rgba(255,255,255,${scanlineIntensity}) ${100 / scanlineFrequency + 1}px)`,
          animation: `scan ${speed}s infinite linear`,
        }}
      />
    </div>
  );
};

export default DarkVeil;