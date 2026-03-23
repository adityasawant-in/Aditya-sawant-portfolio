import { useEffect, useState } from 'react';

export function useCustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let followerX = 0;
    let followerY = 0;
    let raf;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setPosition(pos => {
        followerX += (pos.x - followerX) * 0.12;
        followerY += (pos.y - followerY) * 0.12;
        setFollowerPos({ x: followerX, y: followerY });
        return pos;
      });
      raf = requestAnimationFrame(animate);
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { position, followerPos, isHovering };
}
