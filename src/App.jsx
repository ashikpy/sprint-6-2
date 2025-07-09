import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <Features />
      <Products />
      <Testimonials />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
