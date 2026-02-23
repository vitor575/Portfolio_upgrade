import { useTheme } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const ParticleWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = -1000;
    let mouseY = -1000;

    const particleCount = 280;
    const colors = [
      primaryColor,
      "#7b1fa2", 
      "#9c27b0",
      "#e1bee7", 
      "#4a148c", 
      "#ba68c8", 
    ];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseSpeedY: number; 
    }

    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const baseSpeedY = Math.random() * 0.5 + 0.2; 

        particles.push({
          x,
          y,
          vx: 0,
          vy: -baseSpeedY,
          size,
          color,
          baseSpeedY,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const interactionRadius = 150;
        const forceFactor = 2; 

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * forceFactor;
          const pushY = Math.sin(angle) * force * forceFactor;

          p.vx += pushX;
          p.vy += pushY;
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.95;

        p.vy = p.vy * 0.95 + -p.baseSpeedY * 0.05;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.vx = 0; 
          p.vy = -p.baseSpeedY; 
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0, p.size), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [primaryColor]);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export default ParticleWave;
