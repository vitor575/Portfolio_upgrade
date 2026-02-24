import React from "react";
import { Box, Container, Typography, alpha, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

interface ExperienceItem {
  id: number;
  year: string;
  status: string;
  title: string;
  company?: string;
  description: string;
  type: "work" | "education";
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    year: "2025",
    status: "Atualmente",
    title: "Desenvolvedor Full Stack",
    company: "Codium System",
    description:
      "Desenvolvimento de aplicação web para administração têxtil com Java, Spring Boot e React. Foco em arquitetura de APIs REST e interfaces responsivas.",
    type: "work",
  },
  {
    id: 2,
    year: "06/2025",
    status: "08/2025",
    title: "Desenvolvedor Web Freelancer",
    company: "Freelance",
    description:
      "Criação de soluções web com Next.js e Chakra UI no front-end, e APIs robustas utilizando Java e Spring Boot no back-end.",
    type: "work",
  },
];

const TimelineCard: React.FC<{ item: ExperienceItem; index: number }> = ({
  item,
  index,
}) => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        display: "flex",
        gap: { xs: 3, md: 5 },
        mb: 8,
        position: "relative",
      }}
    >
      {/* Icon and Line Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: 50, md: 60 },
            height: { xs: 50, md: 60 },
            borderRadius: "50%",
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.4)}`,
            border: `3px solid ${theme.palette.primary.main}`,
            zIndex: 2,
          }}
        >
          {item.type === "work" ? (
            <WorkOutlineIcon
              sx={{ color: "#333", fontSize: { xs: 25, md: 30 } }}
            />
          ) : (
            <SchoolOutlinedIcon
              sx={{ color: "#333", fontSize: { xs: 25, md: 30 } }}
            />
          )}
        </Box>
        {/* The line itself is handled by the parent container for continuity */}
      </Box>

      {/* Content Section */}
      <Box sx={{ flex: 1, pt: 0.5 }}>
        {/* Badge */}
        <Box
          sx={{
            display: "inline-flex",
            bgcolor: "white",
            color: "#333",
            px: 2,
            py: 0.5,
            borderRadius: "50px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            mb: 2,
            fontWeight: 700,
            fontSize: "0.9rem",
          }}
        >
          {item.year} - {item.status} {item.company && `| ${item.company}`}
        </Box>

        {/* Text */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "text.primary",
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            lineHeight: 1.6,
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: "800px",
            textAlign: "justify",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
};

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="experiência"
      component="section"
      sx={{
        py: 12,
        minHeight: "100vh",
        bgcolor: "transparent",
        position: "relative",
        overflow: "visible",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 10,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Minha Jornada
        </Typography>

        <Box sx={{ position: "relative", mt: 5 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 24, md: 29 },
              top: 30,
              bottom: 0,
              width: "4px",
              background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 1)} 0%, ${alpha(theme.palette.secondary.main, 1)} 100%)`,
              zIndex: 1,
            }}
          />

          {experiences.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
