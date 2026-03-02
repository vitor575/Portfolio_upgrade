import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  alpha,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Coffee as CoffeeIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { projects } from "../../data/projects";

const ProjectsStack: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<"projects" | "stack">("projects");

  const primaryMain = theme.palette.primary.main;
  const secondaryMain = theme.palette.secondary.main;

  const stack = [
    {
      name: "JavaScript",
      icon: "JS",
      color: "#F7DF1E",
      shadow: "rgba(247, 223, 30, 0.2)",
    },
    {
      name: "React",
      icon: "React",
      color: "#61DAFB",
      shadow: "rgba(97, 218, 251, 0.2)",
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "#3178C6",
      shadow: "rgba(49, 120, 198, 0.2)",
    },
    {
      name: "Material UI",
      icon: "MUI",
      color: "#007FFF",
      shadow: "rgba(0, 127, 255, 0.2)",
    },
    {
      name: "Java",
      icon: "Java",
      color: "#ED8B00",
      shadow: "rgba(237, 139, 0, 0.2)",
    },
    {
      name: "Spring Boot",
      icon: "Spring",
      color: "#6DB33F",
      shadow: "rgba(109, 179, 63, 0.2)",
    },
  ];

  return (
    <Box
      id="projetos"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      sx={{
        py: 12,
        minHeight: "100vh",
        bgcolor: "transparent",
        position: "relative",
        overflow: "visible",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              p: 0.6,
              borderRadius: "16px",
              bgcolor: alpha(theme.palette.background.paper, 0.3),
              backdropFilter: "blur(20px)",
              border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
              gap: 0.5,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {[
              { id: "projects", label: "Projetos", icon: CodeIcon },
              { id: "stack", label: "Tech Stack", icon: StorageIcon },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <Box
                  key={tab.id}
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id as "projects" | "stack")}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    flex: { xs: 1, sm: "initial" },
                    px: { xs: 2, sm: 4 },
                    py: 1.2,
                    borderRadius: "12px",
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.3s ease",
                    bgcolor:
                      activeTab === tab.id
                        ? alpha(primaryMain, 0.1)
                        : "transparent",
                    color:
                      activeTab === tab.id ? primaryMain : "text.secondary",
                    position: "relative",
                    "&::before":
                      activeTab === tab.id
                        ? {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(135deg, ${alpha(primaryMain, 0.1)}, ${alpha(secondaryMain, 0.05)})`,
                            zIndex: -1,
                            borderRadius: "12px",
                          }
                        : {},
                  }}
                >
                  <Icon sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }} />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.95rem", md: "1.1rem" },
                    }}
                  >
                    {tab.label}
                  </Typography>
                  {activeTab === tab.id && (
                    <Box
                      component={motion.div}
                      layoutId="activeTab"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: "10%",
                        right: "10%",
                        height: "2px",
                        background: `linear-gradient(90deg, ${primaryMain}, ${secondaryMain})`,
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>

        <AnimatePresence mode="wait">
          {activeTab === "projects" ? (
            <Grid
              key="projects"
              container
              spacing={4}
              component={motion.div}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {projects.map((project, index) => (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 4,
                      bgcolor: alpha(theme.palette.background.paper, 0.3),
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: `0 20px 40px ${alpha(primaryMain, 0.15)}`,
                        borderColor: alpha(primaryMain, 0.2),
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: "200px", md: "240px" },
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          "&:hover": { transform: "scale(1.1)" },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        p: 3,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          mb: 4,
                          flex: 1,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: "auto",
                          pt: 2,
                          borderTop: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                        }}
                      >
                        <Button
                          href={project.live}
                          target="_blank"
                          endIcon={<LaunchIcon />}
                          sx={{
                            color: primaryMain,
                            fontWeight: 700,
                            textTransform: "none",
                            px: 2,
                            borderRadius: "10px",
                            "&:hover": {
                              bgcolor: alpha(primaryMain, 0.08),
                              transform: "translateX(5px)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Live Demo
                        </Button>
                        <Button
                          component={Link}
                          to={`/project/${project.slug}`}
                          variant="contained"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            borderRadius: "12px",
                            background: `linear-gradient(90deg, ${primaryMain} 0%, ${secondaryMain} 50%, ${primaryMain} 100%)`,
                            backgroundSize: "200% 100%",
                            backgroundPosition: "0% 0%",
                            color: "white",
                            textTransform: "none",
                            fontWeight: 700,
                            px: 3,
                            py: 1,
                            boxShadow: `0 4px 15px ${alpha(primaryMain, 0.3)}`,
                            animation: "slideLeftExit 0.5s forwards ease-out",
                            "&:hover": {
                              animation:
                                "slideLeftHover 0.5s forwards ease-out",
                              boxShadow: `0 8px 25px ${alpha(primaryMain, 0.4)}`,
                              transform: "translateY(-2px)",
                            },
                            "@keyframes slideLeftHover": {
                              from: { backgroundPosition: "0% 0%" },
                              to: { backgroundPosition: "100% 0%" },
                            },
                            "@keyframes slideLeftExit": {
                              from: { backgroundPosition: "100% 0%" },
                              to: { backgroundPosition: "200% 0%" },
                            },
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                          }}
                        >
                          Detalhes
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid
              key="stack"
              container
              spacing={3}
              component={motion.div}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {stack.map((item, index) => (
                <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                  <Box
                    component={motion.div}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      boxShadow: `0 15px 30px ${item.shadow}`,
                    }}
                    sx={{
                      p: { xs: 2, md: 4 },
                      borderRadius: 4,
                      bgcolor: alpha(theme.palette.background.paper, 0.3),
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      height: "100%",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px",
                        background: `linear-gradient(135deg, ${alpha(item.color, 0.1)}, ${alpha(item.color, 0.05)})`,
                        border: `1px solid ${alpha(item.color, 0.2)}`,
                        color: item.color,
                        fontSize: "2rem",
                        fontWeight: 800,
                      }}
                    >
                      {item.icon === "JS" && (
                        <Typography
                          sx={{ fontWeight: 900, fontSize: "1.8rem" }}
                        >
                          JS
                        </Typography>
                      )}
                      {item.icon === "React" && (
                        <CodeIcon sx={{ fontSize: "2.5rem" }} />
                      )}
                      {item.icon === "TS" && (
                        <Typography
                          sx={{ fontWeight: 900, fontSize: "1.8rem" }}
                        >
                          TS
                        </Typography>
                      )}
                      {item.icon === "MUI" && (
                        <StorageIcon sx={{ fontSize: "2.5rem" }} />
                      )}
                      {item.icon === "Java" && (
                        <CoffeeIcon sx={{ fontSize: "2.5rem" }} />
                      )}
                      {item.icon === "Spring" && (
                        <Typography
                          sx={{ fontWeight: 900, fontSize: "1.2rem" }}
                        >
                          Spring
                        </Typography>
                      )}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        color: "text.primary",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ProjectsStack;
