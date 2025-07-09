import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Home, Phone, Email } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main", boxShadow: 2 }}>
      <Toolbar
        sx={{
          py: { xs: 1, md: 1.5 },
          px: { xs: 2, md: 4 },
          maxWidth: "xl",
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Site Logo/Name */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: 1.2,
            fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
          }}
        >
          TechShowcase
        </Typography>

        {/* Desktop Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: 3, lg: 4 },
          }}
        >
          <Button
            color="inherit"
            startIcon={<Home />}
            sx={{
              fontSize: { md: "1rem", lg: "1.1rem" },
              fontWeight: 500,
              textTransform: "none",
              px: { md: 2, lg: 3 },
              py: 1,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            startIcon={<Phone />}
            sx={{
              fontSize: { md: "1rem", lg: "1.1rem" },
              fontWeight: 500,
              textTransform: "none",
              px: { md: 2, lg: 3 },
              py: 1,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Products
          </Button>

          <Button
            color="inherit"
            startIcon={<Email />}
            sx={{
              fontSize: { md: "1rem", lg: "1.1rem" },
              fontWeight: 500,
              textTransform: "none",
              px: { md: 2, lg: 3 },
              py: 1,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile Navigation Links */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            color="inherit"
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "0.65rem",
              p: 1,
            }}
          >
            <Home sx={{ fontSize: 20 }} />
            <Typography
              variant="caption"
              sx={{ mt: 0.25, fontSize: "0.65rem" }}
            >
              Home
            </Typography>
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "0.65rem",
              p: 1,
            }}
          >
            <Phone sx={{ fontSize: 20 }} />
            <Typography
              variant="caption"
              sx={{ mt: 0.25, fontSize: "0.65rem" }}
            >
              Products
            </Typography>
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "0.65rem",
              p: 1,
            }}
          >
            <Email sx={{ fontSize: 20 }} />
            <Typography
              variant="caption"
              sx={{ mt: 0.25, fontSize: "0.65rem" }}
            >
              Contact
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
