import { useEffect, useState } from "react";
import { ColorModeContext, useMode } from "./tema";
import { CssBaseline, ThemeProvider, Box, alpha } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Splash from "./Components/Splash/Splash";
import Welcome from "./Pages/Welcome/Welcome";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ProjectsStack from "./Pages/ProjectsStack/ProjectsStack";

function App() {
  const [theme, colorMode] = useMode();
  const [playExit, setPlayExit] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setPlayExit(true);
    }, 3200);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (playExit) {
      const exitTimer = setTimeout(() => {
        setShowSplash(false);
      }, 650);

      return () => clearTimeout(exitTimer);
    }
  }, [playExit]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence mode="wait">
          {showSplash ? (
            <Splash key="splash" />
          ) : (
            <Box
              sx={{
                bgcolor: "background.default",
                minHeight: "100vh",
                position: "relative",
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: "100px 100px",
                backgroundPosition: "center center",
                overflow: "hidden",
              }}
            >
              <GlobalBackground />
              <NavBar />
              <Welcome />
              <About />
              <ProjectsStack />
              <Contact />
            </Box>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

interface BlobConfig {
  color: string;
  size: string;
  initialPos: { top?: string; bottom?: string; left?: string; right?: string };
  moveX: (string | number)[];
  moveY: (string | number)[];
  delay?: number;
}

const BlobItem = ({
  blob,
  smoothProgress,
}: {
  blob: BlobConfig;
  smoothProgress: MotionValue<number>;
}) => {
  const x = useTransform(smoothProgress, [0, 0.5, 1], blob.moveX);
  const y = useTransform(smoothProgress, [0, 0.5, 1], blob.moveY);

  return (
    <motion.div
      style={{
        position: "absolute",
        ...blob.initialPos,
        width: blob.size,
        height: blob.size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(
          blob.color,
          0.4,
        )} 0%, transparent 70%)`,
        filter: "blur(80px)",
        x,
        y,
        willChange: "transform",
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: blob.delay || 0,
      }}
    />
  );
};

const GlobalBackground = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const blobs: BlobConfig[] = [
    {
      color: "#6366f1",
      size: "600px",
      initialPos: { top: "10%", left: "-10%" },
      moveX: ["0vw", "110vw", "20vw"],
      moveY: ["0vh", "30vh", "80vh"],
      delay: 0,
    },
    {
      color: "#a855f7",
      size: "750px",
      initialPos: { top: "50%", right: "-15%" },
      moveX: ["0vw", "-120vw", "-40vw"],
      moveY: ["0vh", "-40vh", "20vh"],
      delay: 2,
    },
    {
      color: "#ec4899",
      size: "500px",
      initialPos: { top: "80%", left: "10%" },
      moveX: ["0vw", "80vw", "-20vw"],
      moveY: ["0vh", "-70vh", "-30vh"],
      delay: 4,
    },
    {
      color: "#3b82f6",
      size: "650px",
      initialPos: { top: "-10%", left: "30%" },
      moveX: ["0vw", "40vw", "-50vw"],
      moveY: ["0vh", "110vh", "50vh"],
      delay: 1,
    },
    {
      color: "#8b5cf6",
      size: "700px",
      initialPos: { bottom: "-10%", right: "10%" },
      moveX: ["0vw", "-90vw", "30vw"],
      moveY: ["0vh", "-110vh", "-50vh"],
      delay: 3,
    },
    {
      color: "#d946ef",
      size: "550px",
      initialPos: { top: "20%", left: "20%" },
      moveX: ["0vw", "-40vw", "90vw"],
      moveY: ["0vh", "80vh", "-20vh"],
      delay: 5,
    },
    {
      color: "#6366f1",
      size: "600px",
      initialPos: { top: "40%", right: "40%" },
      moveX: ["0vw", "60vw", "-80vw"],
      moveY: ["0vh", "-50vh", "90vh"],
      delay: 2,
    },
    {
      color: "#ec4899",
      size: "450px",
      initialPos: { top: "90%", right: "10%" },
      moveX: ["0vw", "-110vw", "20vw"],
      moveY: ["0vh", "-90vh", "10vh"],
      delay: 4,
    },
  ];

  return (
    <Box sx={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {blobs.map((blob, i) => (
        <BlobItem key={i} blob={blob} smoothProgress={smoothProgress} />
      ))}
    </Box>
  );
};

export default App;
