import React from "react";
import { Box, Container, Typography, Grid, useMediaQuery } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const primaryMain = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark ?? primaryMain;
  const secondaryMain = theme.palette.secondary.main;

  return (
    <Box
      id="sobre"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
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
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Photo Section - Left */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: isMdUp ? "flex-start" : "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 280, sm: 350, md: 400 },
                    height: { xs: 280, sm: 350, md: 400 },
                  }}
                >
                  {/* Glassmorphism Border Ring */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: -8,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${alpha(
                        primaryMain,
                        0.3,
                      )}, ${alpha(secondaryMain, 0.3)})`,
                      filter: "blur(20px)",
                      zIndex: 0,
                    }}
                  />

                  {/* Photo Placeholder */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${alpha(
                        primaryMain,
                        0.2,
                      )}, ${alpha(primaryDark, 0.1)})`,
                      border: `3px solid ${alpha(theme.palette.common.white, 0.1)}`,
                      boxShadow: `0 20px 60px ${alpha(primaryMain, 0.3)}`,
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      zIndex: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: alpha(theme.palette.text.secondary, 0.5),
                        fontStyle: "italic",
                      }}
                    >
                      Photo
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Content Section - Right */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box>
                {/* Heading */}
                <Typography
                  component={motion.div}
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${primaryMain}, ${secondaryMain})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                  }}
                >
                  About Me
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  ✨ Transforming ideas into digital experiences ✨
                </Typography>

                {/* Name */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 1,
                  }}
                >
                  Hello, I'm
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: 800,
                    color: theme.palette.common.white,
                    mb: 3,
                  }}
                >
                  Vitor Hugo
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: "text.secondary",
                    mb: 4,
                    textAlign: "justify",
                  }}
                >
                  Desenvolvedor full-stack apaixonado por criar experiências
                  digitais envolventes e funcionais. Especializado em
                  desenvolvimento front-end e back-end, com foco em entregar
                  soluções modernas e escaláveis que atendam às necessidades dos
                  usuários e dos negócios.
                </Typography>

                {/* Quote */}
                <Box
                  sx={{
                    p: 3,
                    borderLeft: `4px solid ${primaryMain}`,
                    background: `linear-gradient(135deg, ${alpha(
                      primaryMain,
                      0.05,
                    )}, ${alpha(primaryDark, 0.02)})`,
                    borderRadius: 2,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      color: "text.secondary",
                      fontSize: "0.95rem",
                    }}
                  >
                    "Leveraging AI as a professional tool, not a replacement"
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
