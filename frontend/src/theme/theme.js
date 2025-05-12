import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    primary: {
      main: "#000000",
      light: "#333333", // Added light variant
      dark: "#000000", // Can keep same as main or use darker shade
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f5f5f5",
      light: "#fafafa", // Lighter variant
      dark: "#e0e0e0", // Darker variant
    },
    error: {
      // Add error colors if missing
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555555",
      disabled: "#bdbdbd", // Add disabled color
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Arial', sans-serif`,
    fontSize: 14,
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    // Fixed components structure
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "4px 12px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#333333",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 1px 4px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#f5f5f5",
          color: "#1a1a1a",
          borderRight: "1px solid #e0e0e0",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: "#ffffff",
          "&:hover": {
            borderColor: "#bdbdbd",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 1px 6px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});
