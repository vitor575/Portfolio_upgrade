import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

interface NavBarProps {
  window?: () => Window;
}

const navItems = ["Home", "Sobre", "Experiência", "Projetos", "Contato"];

const NavBar: React.FC<NavBarProps> = () => {
  const theme = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const isProjectPage = location.pathname.startsWith("/project/");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!isProjectPage) {
        const sections = navItems.map((item) =>
          document.getElementById(item.toLowerCase()),
        );
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          if (
            section &&
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveSection(
              section.id.charAt(0).toUpperCase() + section.id.slice(1),
            );
          }
        }
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        background: `linear-gradient(to bottom, ${alpha(theme.palette.background.default, 0.95)}, ${alpha(theme.palette.background.paper, 0.95)})`,
        backdropFilter: "blur(10px)",
        pt: 4,
      }}
    >
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{
          mb: 4,
          display: "block",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: "1.8rem",
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Vitor Hugo
      </Typography>
      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{
                textAlign: "center",
                borderRadius: "12px",
                bgcolor:
                  activeSection === item
                    ? alpha(theme.palette.primary.main, 0.1)
                    : "transparent",
                color:
                  activeSection === item
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                },
              }}
              component={HashLink}
              smooth
              to={`/#${item.toLowerCase()}`}
            >
              <ListItemText
                primary={item}
                slotProps={{
                  primary: {
                    fontWeight: activeSection === item ? 700 : 500,
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", pt: 2 }}>
      <AppBar
        component="nav"
        sx={{
          background:
            scrolled || isProjectPage
              ? alpha(theme.palette.background.default, 0.7)
              : "transparent",
          backdropFilter: scrolled || isProjectPage ? "blur(10px)" : "none",
          boxShadow: scrolled || isProjectPage ? theme.shadows[4] : "none",
          transition: "all 0.3s ease-in-out",
          backgroundImage: "none",
          borderBottom:
            scrolled || isProjectPage
              ? `1px solid ${alpha(theme.palette.divider, 0.1)}`
              : "none",
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", px: "0 !important" }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 0,
                fontWeight: 700,
                fontSize: "1.5rem",
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Vitor Hugo
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={HashLink}
                  smooth
                  to={`/#${item.toLowerCase()}`}
                  sx={{
                    color:
                      activeSection === item
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    textTransform: "none",
                    fontWeight: activeSection === item ? 600 : 400,
                    fontSize: "1.2rem",
                    mx: 1.5,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: activeSection === item ? "100%" : "0%",
                      height: "2px",
                      bottom: "4px",
                      left: "0",
                      backgroundColor: theme.palette.primary.main,
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: theme.palette.primary.main,
                      "&::after": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "280px",
              bgcolor: "transparent",
              backgroundImage: "none",
              boxShadow: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
