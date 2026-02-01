// Hero.tsx
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

const Hero: React.FC<HeroProps> = ({
  illustrationSrc = "/assets/illustration.png",
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const primaryMain = theme.palette.primary.main;
  const primarySecondary = theme.palette.secondary.main;
  const primaryDark = theme.palette.primary.dark ?? primaryMain;

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{
        // ocupa toda a viewport e centraliza verticalmente
        minHeight: "100vh",
        display: "flex",
        alignItems: "center", // <<-- centraliza verticalmente
        bgcolor: "background.default",
        color: "text.primary",
        // subtle grid background (mantive)
        backgroundImage: `
          radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px, 120px 120px",
        backgroundPosition: "0 0, 60px 60px",
      }}
    >
      {/* Removi padding vertical do Container para não empurrar verticalmente */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* left: content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "3rem", md: "5.4rem" },
                    fontWeight: 700,
                    lineHeight: 1,
                    mb: 2,
                    background: `linear-gradient(90deg, ${primarySecondary} 0% 10%, ${primaryMain})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    textShadow: `0 8px 30px ${alpha(primaryMain, 0.16)}`,
                  }}
                >
                  Full-stack
                  <br />
                  <Typography sx={{
                    fontSize: { xs: "3rem", md: "5.4rem" },
                    fontWeight: 700,
                    lineHeight: 1,
                    mb: 2,
                    background: `linear-gradient(90deg,${primaryMain}, ${primaryDark})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    textShadow: `0 8px 30px ${alpha(primaryMain, 0.16)}`,
                  }}>
                    Developer
                  </Typography>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Evoluindo a cada linha de código. Aprendendo a cada novo
                  desafio.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
                {["React", "Javascript", "Java", "Spring Boot"].map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    variant="outlined"
                    sx={{
                      borderRadius: 6,
                      borderColor: alpha(theme.palette.common.white, 0.06),
                      color: theme.palette.text.primary,
                      px: 2,
                      py: 0.5,
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  endIcon={<LaunchIcon />}
                  sx={{
                    textTransform: "none",
                    boxShadow: `0 8px 30px ${alpha(primaryMain, 0.28)}`,
                    borderRadius: 2,
                    px: 4,
                  }}
                >
                  Projects
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<MailOutlineIcon />}
                  sx={{ textTransform: "none", borderRadius: 2 }}
                >
                  Contact
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  aria-label="github"
                  sx={{
                    boxShadow: `0 6px 18px ${alpha(primaryMain, 0.18)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.02),
                  }}
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  aria-label="linkedin"
                  sx={{
                    boxShadow: `0 6px 18px ${alpha(primaryMain, 0.18)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.02),
                  }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  aria-label="email"
                  sx={{
                    boxShadow: `0 6px 18px ${alpha(primaryMain, 0.18)}`,
                    bgcolor: alpha(theme.palette.common.white, 0.02),
                  }}
                >
                  <MailOutlineIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          {/* right: illustration */}
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
                  background: `linear-gradient(135deg, ${alpha(primaryMain, 0.06)}, ${alpha(primaryDark, 0.02)})`,
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
