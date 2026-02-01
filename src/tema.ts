// tema.ts
import { createContext, useState, useMemo } from "react";
import { createTheme, type Theme } from "@mui/material/styles";

type Mode = "light" | "dark";

export const tokens = (mode: Mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#AD1CED",
          200: "#9a17d9",
          300: "#8613c6",
          400: "#7210b3",
          500: "#691CED",
          600: "#5f17d0",
          700: "#5412b4",
          800: "#490f98",
          900: "#3e0b7c",
        },
        secondary: {
          100: "#ED1CE5",
          200: "#d219ce",
          300: "#b715b7",
          400: "#9a10a1",
          500: "#8a0e8a",
          600: "#780c78",
          700: "#660965",
          800: "#540753",
          900: "#420441",
        },
        accent: {
          100: "#BF9FF5",
          200: "#ad8cee",
          300: "#9b79e6",
          400: "#8966df",
          500: "#7a54d8",
          600: "#6c49c0",
          700: "#5d3ea7",
          800: "#4f348e",
          900: "#412a76",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#f2e6fa",
          200: "#e6ccf5",
          300: "#d9b3f0",
          400: "#cc99eb",
          500: "#BF9FF5",
          600: "#AD8CEE",
          700: "#9b79e6",
          800: "#8966df",
          900: "#7a54d8",
        },
        secondary: {
          100: "#fde6fa",
          200: "#f9ccf5",
          300: "#f5b3f0",
          400: "#ef99eb",
          500: "#ED1CE5",
          600: "#d219ce",
          700: "#b715b7",
          800: "#9a10a1",
          900: "#8a0e8a",
        },
        accent: {
          100: "#E8E0FA",
          200: "#D1C1F5",
          300: "#B9A2F0",
          400: "#A183EB",
          500: "#8a54d8",
          600: "#7a49c0",
          700: "#6b3ea7",
          800: "#5c348e",
          900: "#4d2976",
        },
      }),
});

export const themeSettings = (mode: Mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.secondary[500],
      },
      background: {
        default: mode === "dark" ? colors.grey[900] : "#fcfcfc",
        paper: mode === "dark" ? colors.grey[800] : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#FFFFFF" : "#000000",
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
    },
  };
};

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<Mode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
