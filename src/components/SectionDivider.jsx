import { motion } from 'framer-motion';

export default function SectionDivider({ flip = false }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '80px' }}>
      <svg
        viewBox="0 0 1400 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`divGrad${flip}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(0,212,255,0)" />
            <stop offset="30%" stopColor="rgba(0,212,255,0.15)" />
            <stop offset="70%" stopColor="rgba(124,58,237,0.15)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d={flip
            ? "M0 0 C350 80, 1050 0, 1400 80 L1400 80 L0 80 Z"
            : "M0 80 C350 0, 1050 80, 1400 0 L1400 80 L0 80 Z"
          }
          fill={`url(#divGrad${flip})`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d={flip
            ? "M0 0 C350 80, 1050 0, 1400 80"
            : "M0 80 C350 0, 1050 80, 1400 0"
          }
          fill="none"
          stroke="url(#divGrad_line)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="divGrad_line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(0,212,255,0)" />
            <stop offset="50%" stopColor="rgba(0,212,255,0.4)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
