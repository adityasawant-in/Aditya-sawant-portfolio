import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let fx = -100, fy = -100;
    let mx = -100, my = -100;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      setPos({ x: mx, y: my });
    };

    const animate = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      setFollower({ x: fx, y: fy });
      raf = requestAnimationFrame(animate);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    raf = requestAnimationFrame(animate);
    setTimeout(addHover, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
      >
        <div
          className="w-3 h-3 rounded-full bg-accent-cyan"
          style={{ boxShadow: '0 0 10px rgba(0,212,255,0.8)' }}
        />
      </motion.div>

      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: follower.x - (hovering ? 24 : 18),
          y: follower.y - (hovering ? 24 : 18),
          scale: hovering ? 1.3 : clicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.5 }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            hovering
              ? 'w-12 h-12 border-accent-cyan/60 bg-accent-cyan/5'
              : 'w-9 h-9 border-accent-cyan/30'
          }`}
        />
      </motion.div>
    </>
  );
}
