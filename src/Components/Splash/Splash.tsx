import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "motion/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import ParticleWave from "../ParticleWave";

type HeroSplashAnimatedProps = {
  playIntro?: boolean;
  playExit?: boolean;
};

export default function HeroSplashAnimated({
  playIntro = true,
  playExit = false,
}: HeroSplashAnimatedProps) {
  const theme = useTheme();

  const primaryMain = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark;
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={
        playExit
          ? { opacity: 0, y: -32 }
          : playIntro
            ? { opacity: 1, y: 0 }
            : {}
      }
      exit={{ opacity: 0, y: -32 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <ParticleWave />
      {[
        { top: "10%", left: "10%", size: "200px", delay: 0, duration: 5 },
        { top: "15%", right: "12%", size: "250px", delay: 1.2, duration: 6 },
        {
          bottom: "10%",
          left: "15%",
          size: "220px",
          delay: 2.4,
          duration: 4.5,
        },
        {
          bottom: "20%",
          right: "10%",
          size: "180px",
          delay: 0.8,
          duration: 5.5,
        },
        { top: "40%", left: "-50px", size: "300px", delay: 3, duration: 7 },
        {
          bottom: "30%",
          right: "-40px",
          size: "280px",
          delay: 1.8,
          duration: 4.8,
        },
      ].map((blob, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4], // Increased opacity
            filter: ["blur(40px)", "blur(60px)", "blur(40px)"],
          }}
          transition={{
            duration: blob.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: i * 0.2, // Deterministic delay
            delay: blob.delay,
          }}
          sx={{
            position: "absolute",
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              primaryMain,
              0.55, // Increased alpha
            )} 0%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      <Box sx={{ position: "relative", zIndex: 3, px: 2 }}>
        <Typography
          component={motion.h1}
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 140 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          sx={{
            fontSize: { xs: "3rem", md: "5rem" },
            fontWeight: 900,
            color: textPrimary,
            mb: 0,
          }}
        >
          Bem vindo ao meu
        </Typography>

        <Typography
          component={motion.h1}
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 140 }}
          transition={{ delay: 0.18, duration: 1.4, ease: "easeOut" }}
          sx={{
            fontSize: { xs: "3.4rem", md: "5.4rem" },
            fontWeight: 900,
            background: `linear-gradient(90deg, ${primaryDark}, ${primaryMain})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: `${alpha(primaryMain, 0.26)} 0px 5px 18px`,
            mb: 3,
          }}
        >
          Portfolio
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, x: 140 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -140 }}
          transition={{ delay: 0.36, duration: 1.4, ease: "easeOut" }}
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            color: textSecondary,
            maxWidth: "820px",
            mx: "auto",
            mb: 4,
          }}
        >
          Desenvolvedor full-stack em constante evolução
        </Typography>
        <Box
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.32,
              },
            },
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            mt: 3,
          }}
        >
          {[
            { key: "github", Icon: GitHubIcon },
            { key: "linkedin", Icon: LinkedInIcon },
            { key: "person", Icon: PersonIcon },
          ].map(({ key, Icon }, i) => (
            <Box
              key={key}
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 140 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    duration: 1.2,
                    delay: i * 0.18,
                  },
                },
              }}
              whileHover={{ scale: 1.22 }}
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: `3px solid ${primaryMain}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: `${alpha(primaryMain, 0.48)} 0px 8px 28px`,
              }}
            >
              <Box
                component={motion.div}
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3.4,
                  ease: "linear",
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `linear-gradient(90deg, ${primaryDark}, ${primaryMain})`,
                }}
              >
                <Icon sx={{ fontSize: 34, color: alpha("#fff", 0.92) }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
