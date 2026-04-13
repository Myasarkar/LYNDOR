import React, { useEffect, useState } from 'react';

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<any[]>([]);

  useEffect(() => {
    const flakeCount = 50;
    const initialFlakes = Array.from({ length: flakeCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.7 + 0.3,
      fontSize: `${Math.random() * 10 + 10}px`,
      swayDuration: `${Math.random() * 4 + 4}s`,
    }));
    setSnowflakes(initialFlakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: `${flake.animationDuration}, ${flake.swayDuration}`,
            animationDelay: `${flake.animationDelay}, 0s`,
            opacity: flake.opacity,
            fontSize: flake.fontSize,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowfall;