// Hero.tsx (glow mais sutil)
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  IconButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

interface HeroProps {
  illustrationSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ illustrationSrc = "/Gif/gif_eu.gif" }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const primaryMain = theme.palette.primary.main;
  const primarySecondary = theme.palette.secondary.main;
  const primaryDark = theme.palette.primary.dark ?? primaryMain;

  return (
    <Box
      id="home"
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
        backgroundPosition: "center center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[
        { top: "5%", left: "5%", size: "450px", delay: 0, duration: 8 },
        { bottom: "5%", right: "5%", size: "550px", delay: 1.5, duration: 9 },
        { top: "30%", right: "15%", size: "400px", delay: 3, duration: 7 },
      ].map((blob, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5], // Increased visibility
            filter: ["blur(60px)", "blur(80px)", "blur(60px)"],
          }}
          transition={{
            duration: blob.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: i * 0.5,
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
              0.55,
            )} 0%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  mb: 2,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-12%",
                    pointerEvents: "none",
                    zIndex: 0,
                    background: `
    radial-gradient(35% 35% at 30% 40%, ${alpha(primarySecondary, 0.35)} 0%, transparent 50%),
    radial-gradient(40% 40% at 68% 65%, ${alpha(primarySecondary, 0.3)} 0%, transparent 55%)
  `,
                    filter: "blur(36px)",
                    opacity: 0.58,
                  },
                }}
              >
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "3rem", md: "5.4rem" },
                    fontWeight: 700,
                    lineHeight: 1,
                    mb: 1,
                    background: `linear-gradient(90deg, ${primarySecondary} 0%, ${primaryMain} 100%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    // sombra de texto suave, não neon
                    textShadow: `
                      0 2px 6px ${alpha("#000", 0.18)},
                      0 8px 20px ${alpha(primarySecondary, 0.12)}
                    `,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Full-stack
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "3rem", md: "5.4rem" },
                    fontWeight: 700,
                    lineHeight: 1,
                    background: `linear-gradient(90deg, ${primaryMain}, ${primaryDark})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    textShadow: `
                      0 2px 6px ${alpha("#000", 0.18)},
                      0 8px 22px ${alpha(primaryMain, 0.1)}
                    `,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Developer
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ color: "text.secondary", mb: 3 }}>
                Evoluindo a cada linha de código. Aprendendo a cada novo
                desafio.
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
                {["REACT", "JAVASCRIPT", "JAVA", "SPRING BOOT"].map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    sx={{
                      borderRadius: "50px",
                      background: alpha(primaryMain, 0.05),
                      border: `1px solid ${alpha(primaryMain, 0.4)}`, // Borda mais visível
                      color: alpha("#fff", 0.9), // Texto mais claro/visível
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      height: "32px",
                      px: 1,
                      backdropFilter: "blur(6px)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                      "&:hover": {
                        background: alpha(primaryMain, 0.25), // Fundo mais claro no hover
                        borderColor: alpha(primaryMain, 0.8),
                        boxShadow: `0 0 15px ${alpha(primaryMain, 0.3)}`,
                        transform: "translateY(-1px)",
                      },
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                {/* botão principal com brilho de fundo sutil */}
                <Button
                  variant="contained"
                  endIcon={<LaunchIcon />}
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    textTransform: "none",
                    borderRadius: 2,
                    px: 4,
                    boxShadow: `0 6px 18px ${alpha(primaryMain, 0.18)}`,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "-6%",
                      top: "-8%",
                      width: "112%",
                      height: "116%",
                      zIndex: 0,
                      borderRadius: 10,
                      background: `linear-gradient(90deg, ${alpha(primarySecondary, 0.6)}, ${alpha(primaryMain, 0.6)})`,
                      filter: "blur(12px)", // blur bem menor
                      opacity: 0.28, // opacity reduzida
                      pointerEvents: "none",
                    },
                    "&:hover::after": {
                      opacity: 0.36,
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  Projects
                </Button>

                {/* botão secundário com brilho ainda mais discreto */}
                <Button
                  variant="outlined"
                  startIcon={<MailOutlineIcon />}
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    textTransform: "none",
                    borderRadius: 2,
                    px: 3,
                    borderColor: alpha(theme.palette.primary.main, 0.18),
                    color: theme.palette.text.primary,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "-6%",
                      top: "-8%",
                      width: "112%",
                      height: "116%",
                      zIndex: 0,
                      borderRadius: 10,
                      background: `linear-gradient(90deg, ${alpha(primaryMain, 0.45)}, ${alpha(primarySecondary, 0.4)})`,
                      filter: "blur(10px)",
                      opacity: 0.18,
                      pointerEvents: "none",
                    },
                    "&:hover::after": {
                      opacity: 0.28,
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  Contact
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                {/* Ícones com brilho leve */}
                <IconButton
                  aria-label="github"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    width: 56, // Reduced from 64
                    height: 56,
                    borderRadius: 3,
                    border: `1px solid ${alpha(primaryMain, 0.2)}`,
                    boxShadow: `0 8px 20px ${alpha(primaryMain, 0.25)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.03),
                    transition: "all 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      zIndex: -1,
                      borderRadius: 3,
                      background: `radial-gradient(circle at center, ${alpha(primaryMain, 0.4)} 0%, transparent 70%)`,
                      filter: "blur(10px)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 12px 28px ${alpha(primaryMain, 0.4)}`,
                      borderColor: alpha(primaryMain, 0.5),
                    },
                    "&:hover::after": { opacity: 0.6 },
                  }}
                  href="https://github.com/vitor575"
                  target="_blank"
                >
                  <GitHubIcon sx={{ fontSize: 28 }} /> {/* Reduced from 32 */}
                </IconButton>

                <IconButton
                  aria-label="linkedin"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    border: `1px solid ${alpha(primarySecondary, 0.2)}`,
                    boxShadow: `0 8px 20px ${alpha(primarySecondary, 0.25)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.03),
                    transition: "all 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      zIndex: -1,
                      borderRadius: 3,
                      background: `radial-gradient(circle at center, ${alpha(primarySecondary, 0.4)} 0%, transparent 70%)`,
                      filter: "blur(10px)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 12px 28px ${alpha(primarySecondary, 0.4)}`,
                      borderColor: alpha(primarySecondary, 0.5),
                    },
                    "&:hover::after": { opacity: 0.6 },
                  }}
                  href="https://www.linkedin.com/in/dev-vitorhugo/"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ fontSize: 28 }} />
                </IconButton>

                <IconButton
                  aria-label="email"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    border: `1px solid ${alpha(primaryMain, 0.2)}`,
                    boxShadow: `0 8px 20px ${alpha(primaryMain, 0.25)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.03),
                    transition: "all 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      zIndex: -1,
                      borderRadius: 3,
                      background: `radial-gradient(circle at center, ${alpha(primaryMain, 0.4)} 0%, transparent 70%)`,
                      filter: "blur(10px)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 12px 28px ${alpha(primaryMain, 0.4)}`,
                      borderColor: alpha(primaryMain, 0.5),
                    },
                    "&:hover::after": { opacity: 0.6 },
                  }}
                  href="mailto:vitor95340@gmail.com"
                  target="_blank"
                >
                  <MailOutlineIcon sx={{ fontSize: 28 }} />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: isMdUp ? "flex-end" : "center",
                  alignItems: "center",
                  width: "100%",
                  minHeight: 360,
                  p: 3,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(
                    primaryMain,
                    0.06,
                  )}, ${alpha(primaryDark, 0.02)})`,
                  boxShadow: `inset 0 10px 40px ${alpha(primaryDark, 0.03)}`,
                }}
              >
                <Box
                  component="img"
                  src={illustrationSrc}
                  alt="illustration"
                  sx={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
