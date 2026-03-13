/* Design: Dark Cosmos — animated star field background with parallax */
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const parallax = scrollY * 0.05;

      for (const star of stars) {
        const y = ((star.y + parallax * star.speed) % canvas.height + canvas.height) % canvas.height;
        const twinkle = Math.sin(Date.now() * 0.001 * star.speed + star.x) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
