import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const theme = useTheme();
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const primaryMain = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark ?? primaryMain;
  const secondaryMain = theme.palette.secondary.main;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setSnackbar({
        open: true,
        message: "Por favor, preencha todos os campos.",
        severity: "error",
      });
      return;
    }

    setIsSending(true);

    try {
      // SUBSTITUA PELAS SUAS CHAVES DO EMAILJS
      // Você pode criar uma conta gratuita em https://www.emailjs.com/
      const result = await emailjs.sendForm(
        "service_py4x7ft", // Ex: service_abc123
        "template_t3p0z2g", // Ex: template_xyz456
        formRef.current!,
        "p6BSW-__qibCkibyo", // Ex: user_abc123...
      );

      console.log("Email enviado com sucesso:", result.text);
      setSnackbar({
        open: true,
        message: "Mensagem enviada com sucesso! Responderei em breve.",
        severity: "success",
      });
      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSnackbar({
        open: true,
        message: "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
        severity: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

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
              pb: 2,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "20rem",
                height: "3px",
                borderRadius: "2px",
                background: `linear-gradient(90deg, ${primaryMain}, ${secondaryMain})`,
              },
            }}
          >
            Quer entrar em contato comigo ?, use uma das opções abaixo.
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
                ref={formRef}
                onSubmit={handleSend}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField
                  fullWidth
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
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
                        boxShadow: `0 0 15px ${alpha(primaryMain, 0.3)}`,
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
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
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
                      "&:hover": {
                        bgcolor: alpha(theme.palette.common.white, 0.05),
                        boxShadow: `0 0 15px ${alpha(primaryMain, 0.3)}`,
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
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
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
                      "&:hover": {
                        bgcolor: alpha(theme.palette.common.white, 0.05),
                        boxShadow: `0 0 15px ${alpha(primaryMain, 0.3)}`,
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

                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variant="contained"
                  type="submit"
                  disabled={isSending}
                  endIcon={
                    isSending ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SendIcon />
                    )
                  }
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
                  {isSending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </Box>

              <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() =>
                  setSnackbar((prev) => ({ ...prev, open: false }))
                }
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                <Alert
                  onClose={() =>
                    setSnackbar((prev) => ({ ...prev, open: false }))
                  }
                  severity={snackbar.severity}
                  sx={{ width: "100%", borderRadius: 2 }}
                >
                  {snackbar.message}
                </Alert>
              </Snackbar>

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
                      href="https://wa.me/5511977562907"
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
                          borderColor: "#25D366",
                          bgcolor: alpha("#25D366", 0.05),
                          transform: "translateX(10px)",
                          boxShadow: `0 0 20px ${alpha("#25D366", 0.3)}`,
                        },
                      }}
                    >
                      <IconButton
                        sx={{
                          color: "#25D366",
                          bgcolor: alpha("#25D366", 0.1),
                          mr: 2,
                        }}
                      >
                        <WhatsAppIcon />
                      </IconButton>
                      <Box>
                        <Typography
                          sx={{
                            color: "text.primary",
                            fontWeight: 700,
                            fontSize: "1.2rem",
                          }}
                        >
                          WhatsApp
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
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
