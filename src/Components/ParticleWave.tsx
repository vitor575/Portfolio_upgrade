import { useTheme } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const ParticleWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  // We use the theme for the base color, but we'll also use the requested spectrum
  const primaryColor = theme.palette.primary.main;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuration
    const particleCount = 280; // "200-300 small circular dots"
    const colors = [
      primaryColor, // Theme integration
      "#7b1fa2", // Purple 700
      "#9c27b0", // Purple 500
      "#e1bee7", // Purple 100
      "#4a148c", // Purple 900
      "#ba68c8", // Purple 300
    ];

    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedY: number; // For "liftoff"
      baseX: number; // To maintain some structure if needed, or just specific drift
      driftOffset: number;
    }

    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 1; // 1px to 3px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speedY = Math.random() * 0.5 + 0.2; // Slow upward drift
        const driftOffset = Math.random() * Math.PI * 2;

        particles.push({
          x,
          y,
          size,
          color,
          speedY,
          baseX: x,
          driftOffset,
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

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      // Clear with transparency for trail effect? User said "clean weightless space", so maybe clear fully.
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // 1. Idle Physics: Liftoff
        p.y -= p.speedY;
        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width; // Respawn randomly x
        }

        // Draw
        ctx.fillStyle = p.color;

        // Apply positions
        const drawX = p.x;
        const drawY = p.y;
        const drawSize = p.size;

        ctx.beginPath();
        ctx.arc(drawX, drawY, Math.max(0, drawSize), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
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
        zIndex: 1, // Behind main content
      }}
    />
  );
};

export default ParticleWave;
