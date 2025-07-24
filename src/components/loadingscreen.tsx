import React from 'react';

interface LoadingScreenProps {
  logoSrc?: string;
  loadingText?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  logoSrc = "images/logo.png",
  loadingText = "Loading..."
}) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-500 z-[9999] overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-red-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Rotating Logo (logo as it is, no bg, no border) */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
        {/* Clean Logo (no shape, no border, no background) */}
        <img
          src={logoSrc}
          alt="Loading..."
          className="relative w-full h-full object-contain"
          style={{
            animation: "spin 2.5s linear infinite",
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
            background: "none"
          }}
        />
      </div>

      {/* Loading text with enhanced animation */}
      <div className="mt-8 text-center">
        <div className="text-2xl font-black text-black tracking-wide">
          {loadingText.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        {/* Loading dots */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-black/20 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 to-yellow-400 rounded-full animate-pulse w-full"></div>
      </div>

      {/* Inline style for custom spin animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
