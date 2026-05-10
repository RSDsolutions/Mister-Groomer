import { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react';

export default function HeroBubbles() {
  const [paws, setPaws] = useState<any[]>([]);

  useEffect(() => {
    const newPaws = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      size: Math.random() * 28 + 12,
      left: Math.random() * 88 + 4,
      top: Math.random() * 82 + 4,
      delay: Math.random() * -10,
      duration: Math.random() * 8 + 8,
      rotate: Math.random() * 360,
      opacity: Math.random() * 0.13 + 0.06,
    }));
    setPaws(newPaws);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {paws.map(p => (
        <div
          key={p.id}
          className="paw"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            opacity: p.opacity,
          }}
        >
          <PawPrint
            color="white"
            strokeWidth={1.2}
            style={{ width: `${p.size}px`, height: `${p.size}px` }}
          />
        </div>
      ))}
    </div>
  );
}
