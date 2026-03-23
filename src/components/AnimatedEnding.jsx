import { motion } from 'framer-motion';

function Star({ x, y, size, delay }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill="white"
      animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
      transition={{ duration: 2 + Math.random() * 3, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

function MeteorLine({ startX, startY, delay }) {
  return (
    <motion.line
      x1={startX}
      y1={startY}
      x2={startX + 80}
      y2={startY + 40}
      stroke="white"
      strokeWidth="1"
      strokeOpacity="0.6"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: [0, 1, 1], opacity: [0, 0.7, 0] }}
      transition={{ duration: 1.5, delay, repeat: Infinity, repeatDelay: 8 + Math.random() * 5 }}
    />
  );
}

export default function AnimatedEnding() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    x: Math.random() * 1400,
    y: Math.random() * 250,
    size: Math.random() * 1.5 + 0.3,
    delay: Math.random() * 4,
  }));

  const meteors = [
    { startX: 200, startY: 30, delay: 2 },
    { startX: 800, startY: 60, delay: 7 },
    { startX: 1100, startY: 20, delay: 14 },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-bg-primary">
      {/* The scene */}
      <div className="relative w-full" style={{ height: '420px' }}>
        <svg
          viewBox="0 0 1400 420"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Night sky gradient */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#010118" />
              <stop offset="60%" stopColor="#050530" />
              <stop offset="100%" stopColor="#0a0a4a" />
            </linearGradient>
            <linearGradient id="moonGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8f0ff" />
              <stop offset="100%" stopColor="#b8c8f0" />
            </linearGradient>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4466ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4466ff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d1b4a" />
              <stop offset="100%" stopColor="#050818" />
            </linearGradient>
            <linearGradient id="mountainLeft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f1a3a" />
              <stop offset="100%" stopColor="#050a20" />
            </linearGradient>
            <linearGradient id="mountainRight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c1530" />
              <stop offset="100%" stopColor="#030810" />
            </linearGradient>
            <linearGradient id="waterfall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3a8a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0d2060" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <clipPath id="sceneClip">
              <rect width="1400" height="420" />
            </clipPath>
          </defs>

          <g clipPath="url(#sceneClip)">
            {/* Sky */}
            <rect width="1400" height="420" fill="url(#skyGrad)" />

            {/* Stars */}
            {stars.map((s, i) => (
              <Star key={i} {...s} />
            ))}

            {/* Meteors */}
            {meteors.map((m, i) => (
              <MeteorLine key={i} {...m} />
            ))}

            {/* Moon glow */}
            <circle cx="700" cy="110" r="90" fill="url(#moonGlow)" />

            {/* Moon */}
            <motion.circle
              cx="700"
              cy="110"
              r="55"
              fill="url(#moonGrad)"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 0 20px rgba(100,130,255,0.5))' }}
            />

            {/* Moon craters */}
            <circle cx="680" cy="95" r="8" fill="#c8d8f0" opacity="0.4" />
            <circle cx="720" cy="120" r="5" fill="#c8d8f0" opacity="0.3" />
            <circle cx="695" cy="130" r="4" fill="#c8d8f0" opacity="0.25" />

            {/* Mountains - back layer */}
            <path
              d="M0 320 L180 180 L320 260 L480 140 L640 240 L750 160 L900 230 L1050 140 L1200 210 L1400 130 L1400 420 L0 420 Z"
              fill="url(#mountainLeft)"
              opacity="0.7"
            />

            {/* Mountains - front layer */}
            <path
              d="M0 360 L100 280 L220 340 L350 240 L500 310 L650 220 L800 300 L950 210 L1100 290 L1250 220 L1400 280 L1400 420 L0 420 Z"
              fill="url(#mountainRight)"
            />

            {/* Waterfall - left mountain */}
            <motion.rect
              x="178"
              y="180"
              width="12"
              height="140"
              fill="url(#waterfall)"
              rx="4"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* <motion.ellipse
              cx="184"
              cy="325"
              rx="24"
              ry="8"
              fill="#1a3a8a"
              opacity="0.6"
              animate={{ rx: [22, 28, 22] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            /> */}
            <motion.ellipse
              cx="184"
              cy="325"
              rx={24}
              ry={8}
              fill="#1a3a8a"
              opacity={0.6}
              initial={{ rx: 24 }}
              animate={{ rx: [22, 28, 22] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Waterfall - right area */}
            <motion.rect
              x="1050"
              y="140"
              width="10"
              height="150"
              fill="url(#waterfall)"
              rx="3"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            />

            {/* Water/lake surface */}
            <rect x="0" y="360" width="1400" height="60" fill="url(#waterGrad)" />

            {/* Moon reflection */}
            {/* <motion.ellipse
              cx="700"
              cy="385"
              rx="30"
              ry="8"
              fill="#4466ff"
              opacity="0.25"
              animate={{ rx: [28, 35, 28], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            /> */}
            <motion.ellipse
              cx="700"
              cy="385"
              rx={30}
              ry={8}
              fill="#4466ff"
              opacity={0.25}
              initial={{ rx: 30 }}
              animate={{ rx: [28, 35, 28], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Water ripples */}
            {[650, 720, 680, 760].map((x, i) => (
              <motion.ellipse
                key={i}
                cx={x}
                cy={375 + i * 5}
                rx={10 + i * 4}
                initial={{ rx: 10 + i * 4 }}
                ry={2}
                fill="none"
                stroke="#4466ff"
                strokeOpacity="0.15"
                strokeWidth="1"
                animate={{ rx: [10 + i * 4, 20 + i * 6, 10 + i * 4], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}

            {/* Pine trees silhouette */}
            {[50, 100, 150, 1250, 1300, 1350].map((x, i) => (
              <g key={i}>
                <path
                  d={`M${x} 360 L${x - 12} 340 L${x + 12} 340 Z`}
                  fill="#030810"
                />
                <path
                  d={`M${x} 345 L${x - 9} 330 L${x + 9} 330 Z`}
                  fill="#030810"
                />
                <rect x={x - 2} y="360" width="4" height="8" fill="#030810" />
              </g>
            ))}
          </g>
        </svg>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-accent-cyan/70 text-sm tracking-widest uppercase mb-3">
              Thanks for visiting
            </p>
            <h2
              className="font-display font-bold text-4xl md:text-5xl text-white mb-4"
              style={{ textShadow: '0 0 40px rgba(100,150,255,0.5)' }}
            >
              Let's Build Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-text-secondary/70 max-w-md mx-auto mb-8">
              Open to exciting opportunities and collaborations.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Conversation</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-text-muted">
            <span className="text-accent-cyan">&lt;</span>
            <span className="text-text-secondary">Aditya Sawant</span>
            <span className="text-accent-cyan">/&gt;</span>
          </div>
          <p className="text-text-muted text-sm font-mono">
            Designed & Built with{' '}
            <span className="text-accent-pink">♥</span>{' '}
            using React + Tailwind + Framer Motion
          </p>
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
