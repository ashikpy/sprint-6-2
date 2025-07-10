import "../src/footer.css";

import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        py: { xs: 4, md: 8, lg: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid
        container
        maxWidth="xl"
        sx={{ mx: "auto" }}
        spacing={{ xs: 4, md: 6, lg: 8 }}
      >
        {/* Company Info */}
        <Grid item xs={12} md={6} lg={4}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: { xs: 2, md: 3 },
              letterSpacing: 1,
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
            }}
          >
            TechShowcase
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, md: 4 },
              color: "grey.300",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", md: "1rem", lg: "1.1rem" },
              maxWidth: { lg: "90%" },
            }}
          >
            Leading the future of technology with innovative products designed
            for modern professionals. Experience excellence in every device we
            create.
          </Typography>
        </Grid>

        {/* Contact Information */}
        <div className="footer-contact-grid">
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "1.2rem", md: "1.4rem" },
              }}
            >
              Contact Info
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 1.5, md: 2 },
              }}
            >
              <Email
                sx={{ mr: { xs: 1.5, md: 2 }, fontSize: { xs: 20, md: 24 } }}
              />
              <Typography
                variant="body1"
                sx={{ color: "grey.300", fontSize: { md: "1.05rem" } }}
              >
                info@techshowcase.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 1.5, md: 2 },
              }}
            >
              <Phone
                sx={{ mr: { xs: 1.5, md: 2 }, fontSize: { xs: 20, md: 24 } }}
              />
              <Typography
                variant="body1"
                sx={{ color: "grey.300", fontSize: { md: "1.05rem" } }}
              >
                +1 (555) 123-4567
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 2, md: 3 },
              }}
            >
              <LocationOn
                sx={{ mr: { xs: 1.5, md: 2 }, fontSize: { xs: 20, md: 24 } }}
              />
              <Typography
                variant="body1"
                sx={{ color: "grey.300", fontSize: { md: "1.05rem" } }}
              >
                San Francisco, CA 94102
              </Typography>
            </Box>
          </Grid>
          {/* Social Media & Links */}
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "1.2rem", md: "1.4rem" },
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, md: 1.5 },
                mb: { xs: 3, md: 4 },
              }}
            >
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Facebook sx={{ fontSize: { xs: 24, md: 28 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Twitter sx={{ fontSize: { xs: 24, md: 28 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <LinkedIn sx={{ fontSize: { xs: 24, md: 28 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Instagram sx={{ fontSize: { xs: 24, md: 28 } }} />
              </IconButton>
            </Box>
            {/* Quick Links */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Terms of Service
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "grey.400",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Support Center
              </Typography>
            </Box>
          </Grid>
        </div>

        {/* Copyright */}
        <Grid item xs={12}>
          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.2)",
              mb: { xs: 3, md: 4 },
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{
                color: "grey.400",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              © 2025 TechShowcase. All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
