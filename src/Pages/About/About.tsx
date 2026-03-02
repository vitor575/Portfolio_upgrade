import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

const About: React.FC = () => {
  const theme = useTheme();

  const primaryMain = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark ?? primaryMain;
  const secondaryMain = theme.palette.secondary.main;

  return (
    <Box
      id="sobre"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "transparent",
        color: "text.primary",
        position: "relative",
        overflow: "visible",
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "280px", md: "380px" },
                  height: { xs: "280px", md: "380px" },
                  mx: "auto",
                  mb: { xs: 4, md: 0 },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: { xs: -10, md: -20 },
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${alpha(primaryMain, 0.4)}, transparent 70%)`,
                    zIndex: -1,
                    animation: "pulse 4s infinite ease-in-out",
                  },
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 0.5, scale: 1 },
                    "50%": { opacity: 0.8, scale: 1.05 },
                  },
                }}
              >
                <Box
                  component="img"
                  src="/Foto_de_Perfil.png"
                  alt="Vitor Hugo"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `4px solid ${alpha(theme.palette.common.white, 0.1)}`,
                    boxShadow: theme.shadows[10],
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Typography
                variant="h2"
                component={motion.h2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", md: "3.5rem" },
                  mb: 3,
                  background: `linear-gradient(135deg, ${primaryMain}, ${secondaryMain})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Sobre Mim
              </Typography>

              <Typography
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{
                  fontSize: { xs: "1rem", md: "1.3rem" },
                  lineHeight: 1.8,
                  color: "text.primary",
                  mb: 2,
                  fontWeight: 500,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Olá, eu sou <strong>Vitor Hugo</strong>.
              </Typography>

              <Typography
                component={motion.p}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                sx={{
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  mb: 4,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Sou um desenvolvedor em constante evolução, sempre buscando
                aprender e me aprofundar nas tecnologias do mercado. Atualmente
                curso Análise e Desenvolvimento de Sistemas pela Universidade
                Cruzeiro do Sul e atuo como desenvolvedor freelancer, criando
                soluções práticas e funcionais.
              </Typography>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: alpha(theme.palette.background.paper, 0.4),
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                  mb: 5,
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "italic",
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    textAlign: "center",
                  }}
                >
                  ✨ Tente mover o mundo – o primeiro passo será mover a si
                  mesmo. ✨
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{
                    borderRadius: "30px",
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: `0 10px 20px ${alpha(primaryMain, 0.3)}`,
                    background: `linear-gradient(135deg, ${primaryMain}, ${primaryDark})`,
                    "&:hover": {
                      boxShadow: `0 15px 25px ${alpha(primaryMain, 0.4)}`,
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
