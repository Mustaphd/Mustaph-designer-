
import React from 'react';

interface AdBannerProps {
  width: number;
  height: number;
  className?: string;
  label?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ width, height, className = '', label = 'Advertisement' }) => {
  return (
    <div className={`mx-auto bg-zinc-800 border border-zinc-700 flex items-center justify-center ${className}`} style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}>
      <div className="text-center">
        <p className="text-zinc-400 text-sm font-semibold">{label}</p>
        <p className="text-zinc-500 text-xs">{width} x {height}</p>
      </div>
    </div>
  );
};

export default AdBanner;
