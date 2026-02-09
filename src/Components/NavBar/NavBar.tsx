import React, { useState, useEffect } from "react";
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

interface NavBarProps {
  window?: () => Window;
}

const navItems = ["Home", "About", "Portfolio", "Contact"];

const NavBar: React.FC<NavBarProps> = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section logic based on scroll position - expand this later with actual sections
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Vitor
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              href={`#${item.toLowerCase()}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          background: scrolled
            ? alpha(theme.palette.background.default, 0.7) // Glassmorphism when scrolled
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? theme.shadows[4] : "none",
          transition: "all 0.3s ease-in-out",
          backgroundImage: "none", // Remove default gradient on dark mode if present
          borderBottom: scrolled
            ? `1px solid ${alpha(theme.palette.divider, 0.1)}`
            : "none",
        }}
        elevation={0} // Remove default shadow
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", px: "0 !important" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 0,
                fontWeight: 700,
                fontSize: "1.5rem",
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
              }}
            >
              Vitor
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color:
                      activeSection === item
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    textTransform: "none",
                    fontWeight: activeSection === item ? 600 : 400,
                    fontSize: "1rem",
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
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
