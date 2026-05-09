import { useEffect, useState } from 'react';

export default function HeroBubbles() {
  const [bubbles, setBubbles] = useState<any[]>([]);
  
  useEffect(() => {
    // Generate different bubbles with random positions and animation attributes
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20, // 20px to 80px
      left: Math.random() * 100, // 0% to 100%
      top: Math.random() * 100,
      delay: Math.random() * -10, // Start somewhere in animation
      duration: Math.random() * 8 + 8, // 8s to 16s
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map(b => (
        <div
          key={b.id}
          className="bubble opacity-60"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            top: `${b.top}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
