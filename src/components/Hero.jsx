import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowRight, ChevronDown } from 'lucide-react';

const ROLES = ['MERN-Stack Developer', 'React Developer', 'UI Engineer', 'Web Developer'];

function TypingText({ texts, speed = 80, pause = 1800 }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (phase === 'typing') {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause);
      }
    } else if (phase === 'pausing') {
      setPhase('deleting');
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
      } else {
        setIndex((index + 1) % texts.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, index, texts, speed, pause]);

  return (
    <span>
      <span className="text-accent-cyan">{display}</span>
      <span className="animate-blink text-accent-cyan">|</span>
    </span>
  );
}

function FloatingParticle({ x, y, size, delay, duration }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent-cyan/20"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [-20, 20, -20],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function Hero() {
  const terminalLines = [
    { text: '$ whoami', delay: 0.2 },
    { text: 'aditya_sawant', delay: 0.6, green: true },
    { text: '$ cat skills.txt', delay: 1.0 },
    { text: 'React | Python | Node.js | MongoDB', delay: 1.4, cyan: true },
    { text: '$ ./Hello_World.exe', delay: 1.8 },
  ];

  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 4,
  }));

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="orb w-[600px] h-[600px] bg-accent-cyan/8 top-0 -left-40" />
      <div className="orb w-[500px] h-[500px] bg-accent-purple/10 bottom-20 -right-20" />
      <div className="orb w-[300px] h-[300px] bg-accent-pink/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent pointer-events-none"
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          {/* Terminal block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-4 mb-8 max-w-sm font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-text-muted text-xs ml-2">terminal</span>
            </div>
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: line.delay, duration: 0.4 }}
                className={`mb-1 ${line.green ? 'text-accent-green' :
                  line.cyan ? 'text-accent-cyan' :
                    'text-text-secondary'
                  }`}
              >
                {line.text}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-accent-green mt-1"
            >
              Hello, World! Ready to build something amazing?<span className="animate-blink">_</span>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest uppercase">
              Hi, I'm
            </p>
            <h1 className="section-heading text-text-primary mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Aditya Sawant
            </h1>
            <div className="text-2xl md:text-3xl font-display font-semibold mb-6 text-text-secondary min-h-[2.5rem]">
              <TypingText texts={ROLES} />
            </div>
            <p className="text-text-secondary leading-relaxed text-lg max-w-lg mb-8">
              Crafting modern web experiences with clean code, thoughtful design,
              and a relentless eye for performance.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button onClick={handleScrollToProjects} className="btn-primary">
              <span className="flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </span>
            </button>
            <a
              href="/aditya-sawant-resume.pdf"
              download="Aditya-Sawant-Resume.pdf"
              className="btn-outline flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4"
          >
            <span className="text-text-muted text-xs font-mono tracking-wider">FIND ME ON</span>
            <div className="h-px w-8 bg-white/10" />
            {[
              { icon: <Github size={20} />, href: 'https://github.com/adityasawant-in', label: 'GitHub' },
              { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/adityasawant208', label: 'LinkedIn' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-accent-cyan/10"
              style={{
                width: `${ring * 120 + 200}px`,
                height: `${ring * 120 + 200}px`,
              }}
              animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{ duration: ring * 15 + 20, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {/* Avatar placeholder */}
          <motion.div
            className="relative w-72 h-72 rounded-full glass-card border-2 border-accent-cyan/20 flex items-center justify-center overflow-hidden"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(124,58,237,0.1)' }}
          >
            <div className="text-center">
              <div className="text-8xl mb-3">👨‍💻</div>
              <div className="font-mono text-accent-cyan text-sm">@adityasawant</div>
            </div>

            {/* Glowing overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/30" />
          </motion.div>

          {/* Floating skill badges */}
          {[
            { label: 'React', color: '#61dafb', pos: 'top-8 right-4', emoji: '⚛️' },
            { label: 'Node.js', color: '#339933', pos: 'bottom-16 -left-4', emoji: '🟢' },
            { label: 'MongoDB', color: '#47a248', pos: 'top-1/2 -right-8', emoji: '🍃' },
          ].map((badge) => (
            <motion.div
              key={badge.label}
              className={`absolute ${badge.pos} glass-card px-3 py-2 rounded-lg text-sm font-mono border border-white/10`}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
            >
              {badge.emoji} <span style={{ color: badge.color }}>{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
