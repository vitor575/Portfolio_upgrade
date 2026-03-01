import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  alpha,
  useTheme,
  Breadcrumbs,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { projects } from "../../data/projects";

const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const project = projects.find((p) => p.slug === slug);

  const primaryMain = theme.palette.primary.main;
  const secondaryMain = theme.palette.secondary.main;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <Box sx={{ py: 20, textAlign: "center" }}>
        <Typography variant="h4">Projeto não encontrado</Typography>
        <Button component={Link} to="/" sx={{ mt: 2 }}>
          Voltar para Home
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Navigation */}
        <Box
          sx={{
            mb: { xs: 4, md: 8 },
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              bgcolor: alpha(theme.palette.background.paper, 0.3),
              backdropFilter: "blur(10px)",
              border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
              borderRadius: "12px",
              px: 3,
              py: 1,
              color: "text.primary",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                bgcolor: alpha(primaryMain, 0.1),
                borderColor: alpha(primaryMain, 0.2),
              },
            }}
          >
            Back
          </Button>
          <Breadcrumbs
            separator={
              <Typography sx={{ color: "text.secondary", mx: 0.5 }}>
                {">"}
              </Typography>
            }
            sx={{ color: "text.secondary", fontWeight: 500 }}
          >
            <Typography sx={{ color: "text.secondary" }}>Projects</Typography>
            <Typography sx={{ color: "text.primary", fontWeight: 600 }}>
              {project.title}
            </Typography>
          </Breadcrumbs>
        </Box>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Side - Visuals */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                  boxShadow: `0 40px 80px ${alpha(theme.palette.common.black, 0.6)}`,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to bottom, transparent 0%, ${alpha(theme.palette.background.default, 0.3)} 100%)`,
                  },
                }}
              >
                <motion.img
                  src={project.image}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </Box>

              {/* Stats & Actions - Moved from right side */}
              <Box sx={{ mt: 4, mb: 2 }}>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={motion.div}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: alpha(primaryMain, 0.05),
                      }}
                      sx={{
                        p: 2.5,
                        borderRadius: "20px",
                        bgcolor: alpha(theme.palette.background.paper, 0.3),
                        border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          bgcolor: alpha(primaryMain, 0.1),
                          color: primaryMain,
                        }}
                      >
                        <CodeIcon />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 800, lineHeight: 1 }}
                        >
                          {project.stats?.techCount || 0}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            display: "block",
                            mt: 0.5,
                          }}
                        >
                          Tecnologias
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      component={motion.div}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: alpha(secondaryMain, 0.05),
                      }}
                      sx={{
                        p: 2.5,
                        borderRadius: "20px",
                        bgcolor: alpha(theme.palette.background.paper, 0.3),
                        border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          bgcolor: alpha(secondaryMain, 0.1),
                          color: secondaryMain,
                        }}
                      >
                        <LayersIcon />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 800, lineHeight: 1 }}
                        >
                          {project.stats?.featuresCount || 0}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            display: "block",
                            mt: 0.5,
                          }}
                        >
                          Funcionalidades
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Button
                    href={project.live}
                    target="_blank"
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    sx={{
                      flex: { xs: 1, sm: "initial" },
                      borderRadius: "16px",
                      px: 4,
                      py: 2,
                      background: `linear-gradient(135deg, ${primaryMain}, ${secondaryMain})`,
                      boxShadow: `0 10px 25px ${alpha(primaryMain, 0.4)}`,
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 700,
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: `0 15px 30px ${alpha(primaryMain, 0.5)}`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    href={project.github}
                    target="_blank"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    sx={{
                      flex: { xs: 1, sm: "initial" },
                      borderRadius: "16px",
                      px: 4,
                      py: 2,
                      borderColor: alpha(theme.palette.common.white, 0.1),
                      color: "text.primary",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      bgcolor: alpha(theme.palette.background.paper, 0.2),
                      "&:hover": {
                        borderColor: primaryMain,
                        bgcolor: alpha(primaryMain, 0.05),
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Github
                  </Button>
                </Box>
              </Box>

              {/* Technologies - More dynamic layout */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CodeIcon fontSize="small" sx={{ color: primaryMain }} />
                  Technologies Used
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {project.tech.map((tech, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      sx={{
                        px: 2.5,
                        py: 1.2,
                        borderRadius: "14px",
                        bgcolor: alpha(theme.palette.background.paper, 0.3),
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        color: "text.primary",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: primaryMain,
                          borderColor: alpha(primaryMain, 0.3),
                          bgcolor: alpha(primaryMain, 0.08),
                          boxShadow: `0 10px 20px ${alpha(primaryMain, 0.1)}`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: primaryMain,
                          boxShadow: `0 0 10px ${primaryMain}`,
                        }}
                      />
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Info with Glass Effect */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ position: { md: "sticky" }, top: 100 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Box
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: "32px",
                  bgcolor: alpha(theme.palette.background.paper, 0.4),
                  backdropFilter: "blur(30px)",
                  border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                  boxShadow: `0 25px 50px ${alpha(theme.palette.common.black, 0.3)}`,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.common.white, 0.2)}, transparent)`,
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.8rem", md: "3.5rem" },
                      fontWeight: 900,
                      mb: 2,
                      lineHeight: 1.1,
                      background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${alpha(theme.palette.text.primary, 0.6)} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Box
                    sx={{
                      width: "100px",
                      height: "4px",
                      background: `linear-gradient(90deg, ${primaryMain}, ${secondaryMain})`,
                      borderRadius: "2px",
                      mb: 4,
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontSize: "1.15rem",
                      lineHeight: 1.8,
                      mb: 6,
                    }}
                  >
                    {project.extendedDescription || project.description}
                  </Typography>

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 3,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                        }}
                      >
                        <LayersIcon
                          fontSize="small"
                          sx={{ color: secondaryMain }}
                        />
                        Principais Funcionalidades
                      </Typography>
                      <Grid container spacing={2}>
                        {project.features.map((feature, index) => (
                          <Grid size={{ xs: 12 }} key={index}>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index + 0.6 }}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 2,
                                p: 2,
                                borderRadius: "16px",
                                bgcolor: alpha(
                                  theme.palette.common.white,
                                  0.03,
                                ),
                                border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  bgcolor: alpha(secondaryMain, 0.05),
                                  borderColor: alpha(secondaryMain, 0.2),
                                  transform: "translateX(8px)",
                                },
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  fontSize: "1.2rem",
                                  color: secondaryMain,
                                  mt: 0.3,
                                }}
                              />
                              <Typography
                                sx={{
                                  color: "text.primary",
                                  fontWeight: 500,
                                  fontSize: "1rem",
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
