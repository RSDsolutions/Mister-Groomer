import { useEffect, useState, useRef } from 'react';
import { PawPrint } from 'lucide-react';

interface Paw {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  rotate: number;
  opacity: number;
  depth: number;
}

export default function HeroBubbles() {
  const [paws, setPaws] = useState<Paw[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newPaws: Paw[] = Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      size: Math.random() * 28 + 10,
      left: Math.random() * 90 + 2,
      top: Math.random() * 86 + 2,
      delay: Math.random() * -12,
      duration: Math.random() * 8 + 8,
      rotate: Math.random() * 360,
      opacity: Math.random() * 0.12 + 0.05,
      depth: Math.random() * 0.04 + 0.01,
    }));
    setPaws(newPaws);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Morphing blobs */}
      <div
        className="blob w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-brand-orange/8 top-[-10%] left-[-8%]"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="blob w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-brand-teal/10 bottom-[-15%] right-[-5%]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="blob w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] bg-white/5 top-[30%] right-[10%]"
        style={{ animationDelay: '-3s' }}
      />

      {/* Paws with mouse parallax */}
      {paws.map((p) => (
        <div
          key={p.id}
          className="paw"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg) translate(${mouse.x * p.depth * 60}px, ${mouse.y * p.depth * 60}px)`,
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
