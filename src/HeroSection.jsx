import { Grid, Box, Typography, Button } from "@mui/material";
import { ArrowForward, ShoppingCart } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "grey.50",
        py: { xs: 4, md: 8, lg: 10 },
        px: { xs: 2, md: 0 },
        minHeight: { md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 6, lg: 8 }}
          alignItems="center"
          sx={{ width: "100%", mx: "auto" }}
        >
          {/* Left side: Product title, marketing slogan, CTA button */}
          <Grid item xs={12} lg={7}>
            <Box sx={{ maxWidth: { xs: "100%", md: "90%" }, ml: { lg: 2 } }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: "2.1rem", md: "3.2rem", lg: "4rem" },
                  background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: { xs: 1.18, lg: 1.08 },
                  letterSpacing: 0.5,
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Next-Gen Technology
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2.5, md: 3.5 },
                  color: "text.secondary",
                  fontWeight: 400,
                  fontSize: { xs: "1.13rem", md: "1.35rem", lg: "1.55rem" },
                  lineHeight: 1.35,
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Experience the future of innovation with our cutting-edge
                products designed for modern professionals.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: { xs: 3, md: 4 },
                  color: "text.secondary",
                  fontWeight: 400,
                  lineHeight: 1.55,
                  fontSize: { xs: "1.01rem", md: "1.08rem", lg: "1.18rem" },
                  maxWidth: { xs: "100%", lg: "90%" },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                From powerful laptops to smart devices, discover technology that
                adapts to your lifestyle and empowers your productivity like
                never before.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "stretch", sm: "center" },
                  justifyContent: { xs: "center", lg: "flex-start" },
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ShoppingCart />}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 4, md: 6 },
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    textTransform: "none",
                    borderRadius: 3,
                    boxShadow: 3,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: 6,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Shop Now
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 4, md: 6 },
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    textTransform: "none",
                    borderRadius: 3,
                    borderWidth: 2,
                    "&:hover": {
                      borderWidth: 2,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right side: Product image placeholder */}
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                bgcolor: "grey.300",
                height: { xs: 220, md: 350, lg: 420 },
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                position: "relative",
                overflow: "hidden",
                boxShadow: { md: 4, lg: 8 },
                mx: { xs: 0, lg: 2 },
                minWidth: 0,
              }}
            >
              {/* Decorative elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: "15%",
                  left: "15%",
                  width: { xs: 60, lg: 80 },
                  height: { xs: 60, lg: 80 },
                  bgcolor: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "25%",
                  right: "20%",
                  width: { xs: 40, lg: 60 },
                  height: { xs: 40, lg: 60 },
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "70%",
                  width: { xs: 30, lg: 45 },
                  height: { xs: 30, lg: 45 },
                  bgcolor: "rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
                  letterSpacing: 0.5,
                  px: { xs: 1, md: 2 },
                }}
              >
                Product Showcase
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
