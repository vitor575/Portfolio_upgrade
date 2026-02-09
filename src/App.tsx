import { useEffect, useState } from "react";
import { ColorModeContext, useMode } from "./tema";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "motion/react";
import Splash from "./Components/Splash/Splash";
import Welcome from "./Pages/Welcome/Welcome";
import NavBar from "./Components/NavBar/NavBar";

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
            <>
              <NavBar />
              <Welcome />
            </>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
