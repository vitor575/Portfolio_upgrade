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

    // Configuration
    const particleCount = 280;
    const colors = [
      primaryColor,
      "#7b1fa2", // Purple 700
      "#9c27b0", // Purple 500
      "#e1bee7", // Purple 100
      "#4a148c", // Purple 900
      "#ba68c8", // Purple 300
    ];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseSpeedY: number; // The natural upward speed
    }

    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const baseSpeedY = Math.random() * 0.5 + 0.2; // Slow upward drift

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
        // Physics Calculation
        // Vector from mouse to particle
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Interaction settings
        const interactionRadius = 250;
        const forceFactor = 2; // Strength of repulsion

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * forceFactor;
          const pushY = Math.sin(angle) * force * forceFactor;

          p.vx += pushX;
          p.vy += pushY;
        }

        // Apply Velocity
        p.x += p.vx;
        p.y += p.vy;

        // "Try to continue natural path" (Decay/Return to base state)
        // Friction for X (decay to 0)
        p.vx *= 0.95;

        // Friction/Return for Y (decay to -baseSpeedY)
        // Move vy gradually back towards -p.baseSpeedY
        p.vy = p.vy * 0.95 + -p.baseSpeedY * 0.05;

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.vx = 0; // Reset lateral velocity
          p.vy = -p.baseSpeedY; // Reset vertical velocity
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw
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
        // pointerEvents: "none", // REMOVED: Needs to capture mouse events if it's on top?
        // No, mousemove is on window, so pointerEvents: "none" is safer for underlying clicks?
        // But if Splash is covering everything, window events are fine.
        // The user said "mouse pass over the screen".
        // Splash usually covers the screen.
        // Keeping pointerEvents: "none" is better to let clicks pass through to buttons if any.
        // But interaction is via window listener.
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export default ParticleWave;
