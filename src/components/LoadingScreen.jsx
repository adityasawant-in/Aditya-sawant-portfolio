import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BOOT_LINES = [
  '> Initializing portfolio.exe...',
  '> Loading React modules...',
  '> Compiling components...',
  '> Mounting Framer Motion...',
  '> Building interface...',
  '> Ready.',
];

export default function LoadingScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        const line = BOOT_LINES[i];
        if (line !== undefined) {
          setLines((prev) => [...prev, line]);
          setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
        }
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 600);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 w-full max-w-lg px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="font-mono text-5xl font-bold mb-2">
            <span className="text-accent-cyan">&lt;</span>
            <span className="gradient-text">AS</span>
            <span className="text-accent-cyan">/&gt;</span>
          </div>
          <p className="text-text-muted font-mono text-sm tracking-widest">ADITYA SAWANT · PORTFOLIO</p>
        </motion.div>

        {/* Terminal window */}
        <div className="glass-card rounded-xl overflow-hidden border border-white/8">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="font-mono text-xs text-text-muted ml-2">boot.sh</span>
          </div>

          {/* Terminal output */}
          <div className="p-5 font-mono text-sm min-h-[200px]">
            {lines.filter(Boolean).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-1 ${
                  typeof line === 'string' && line.includes('Ready')
                    ? 'text-accent-green font-semibold'
                    : 'text-text-secondary'
                }`}
              >
                {line}
              </motion.div>
            ))}
            {lines.length < BOOT_LINES.length && (
              <span className="text-accent-cyan animate-blink">▋</span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex justify-between text-xs font-mono text-text-muted mb-2">
            <span>Loading assets</span>
            <span className="text-accent-cyan">{progress}%</span>
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
