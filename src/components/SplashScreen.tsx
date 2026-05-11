import { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setHiding(true), 1700);
    const done = setTimeout(() => onDone(), 2100);
    return () => {
      clearTimeout(show);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#1d3a4f] via-brand-dark-teal to-brand-teal transition-opacity duration-400 ${
        hiding ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Paw prints decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { t: '8%',  l: '6%',  s: 32, op: 0.07, r: -20 },
          { t: '15%', l: '82%', s: 24, op: 0.06, r: 30  },
          { t: '72%', l: '4%',  s: 28, op: 0.06, r: 15  },
          { t: '78%', l: '88%', s: 36, op: 0.07, r: -10 },
          { t: '45%', l: '92%', s: 20, op: 0.05, r: 40  },
          { t: '50%', l: '1%',  s: 22, op: 0.05, r: -35 },
        ].map((p, i) => (
          <PawPrint
            key={i}
            color="white"
            strokeWidth={1.2}
            style={{
              position: 'absolute',
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              opacity: p.op,
              transform: `rotate(${p.r}deg)`,
            }}
          />
        ))}
      </div>

      {/* Logo / contenido central */}
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        {/* Ícono animado */}
        <div className="relative flex items-center justify-center">
          <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-brand-orange/20 animate-ping" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
            <span className="text-5xl sm:text-6xl">🐾</span>
          </div>
        </div>

        {/* Nombre */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
            Mr. <span className="text-brand-orange">Groomer</span>
          </h1>
          <p className="mt-2 text-brand-light-teal text-sm sm:text-base font-medium tracking-widest uppercase">
            Peluquería Canina & Felina
          </p>
        </div>

        {/* Barra de progreso */}
        <div className="w-48 sm:w-64 h-1 rounded-full bg-white/20 overflow-hidden mt-2">
          <div className="h-full bg-brand-orange rounded-full animate-[progress_1.7s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
}
