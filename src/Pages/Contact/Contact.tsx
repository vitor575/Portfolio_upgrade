import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";

const Contact: React.FC = () => {
  const theme = useTheme();

  const primaryMain = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark ?? primaryMain;
  const secondaryMain = theme.palette.secondary.main;

  return (
    <Box
      id="contato"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "transparent",
        color: "text.primary",
        position: "relative",
        overflow: "visible",
        py: 12,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: 800,
              background: `linear-gradient(90deg, ${primaryMain}, ${secondaryMain})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Entre em Contato
          </Typography>
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "3px",
                borderRadius: "2px",
                background: `linear-gradient(90deg, ${primaryMain}, ${secondaryMain})`,
              },
            }}
          >
            Tem alguma dúvida? Envie-me uma mensagem e responderei o mais rápido
            possível.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: alpha(theme.palette.background.paper, 0.4),
                backdropFilter: "blur(20px)",
                border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                boxShadow: `0 20px 60px ${alpha(primaryMain, 0.1)}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 4,
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: alpha(primaryMain, 0.9),
                      mb: 1,
                    }}
                  >
                    Contato
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Tem algo a discutir? Envie-me uma mensagem e vamos
                    conversar.
                  </Typography>
                </Box>
                <IconButton sx={{ color: alpha(primaryMain, 0.6) }}>
                  <ShareIcon />
                </IconButton>
              </Box>

              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField
                  fullWidth
                  placeholder="Seu Nome"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon
                          sx={{
                            color: alpha(theme.palette.text.secondary, 0.4),
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.common.white, 0.03),
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: alpha(theme.palette.common.white, 0.05),
                      },
                      "& fieldset": {
                        borderColor: alpha(theme.palette.common.white, 0.1),
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: primaryMain,
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Seu Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon
                          sx={{
                            color: alpha(theme.palette.text.secondary, 0.4),
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.common.white, 0.03),
                      transition: "all 0.3s ease",
                      "& fieldset": {
                        borderColor: alpha(theme.palette.common.white, 0.1),
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: primaryMain,
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Sua Mensagem"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ alignSelf: "flex-start", mt: 1.5 }}
                      >
                        <ChatBubbleOutlineIcon
                          sx={{
                            color: alpha(theme.palette.text.secondary, 0.4),
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.common.white, 0.03),
                      transition: "all 0.3s ease",
                      "& fieldset": {
                        borderColor: alpha(theme.palette.common.white, 0.1),
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: primaryMain,
                      },
                    },
                  }}
                />

                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${primaryMain}, ${secondaryMain})`,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: `0 10px 25px ${alpha(primaryMain, 0.4)}`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${primaryDark}, ${secondaryMain})`,
                      boxShadow: `0 15px 35px ${alpha(primaryMain, 0.6)}`,
                    },
                  }}
                >
                  Enviar Mensagem
                </Button>
              </Box>

              <Box
                sx={{
                  mt: 6,
                  pt: 4,
                  borderTop: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 2,
                      bgcolor: primaryMain,
                      borderRadius: 1,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Conecte-se Comigo
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <Box
                      component="a"
                      href="https://linkedin.com/in/dev-vitorhugo/"
                      target="_blank"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 3,
                        textDecoration: "none",
                        bgcolor: alpha(theme.palette.common.white, 0.03),
                        border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: primaryMain,
                          bgcolor: alpha(primaryMain, 0.05),
                          transform: "translateX(10px)",
                        },
                      }}
                    >
                      <IconButton
                        sx={{
                          color: "#0077b5",
                          bgcolor: alpha("#0077b5", 0.1),
                          mr: 2,
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <Box>
                        <Typography
                          sx={{
                            color: "text.primary",
                            fontWeight: 700,
                            fontSize: "1.2rem",
                          }}
                        >
                          Vamos nos Conectar
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          no LinkedIn
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Box
                      component="a"
                      href="https://github.com/vitor575"
                      target="_blank"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 3,
                        textDecoration: "none",
                        bgcolor: alpha(theme.palette.common.white, 0.03),
                        border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "text.primary",
                          bgcolor: alpha(theme.palette.common.white, 0.05),
                          transform: "translateX(10px)",
                        },
                      }}
                    >
                      <IconButton
                        sx={{
                          color: "text.primary",
                          bgcolor: alpha(theme.palette.common.white, 0.1),
                          mr: 2,
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <Box>
                        <Typography
                          sx={{
                            color: "text.primary",
                            fontWeight: 700,
                            fontSize: "1.2rem",
                          }}
                        >
                          Github
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          @vitor575
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
