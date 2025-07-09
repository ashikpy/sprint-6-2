import { Grid, Box, Typography, Paper } from "@mui/material";
import { Speed, BatteryFull, Brush, Security } from "@mui/icons-material";
import { features } from "./productData";

const Features = () => {
  // Icon mapping object to convert string names to actual icon components
  const iconMap = {
    Speed: Speed,
    Battery: BatteryFull,
    Design: Brush,
    Security: Security,
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10, lg: 12 },
        px: { xs: 2, md: 0 },
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
        {/* Section Header */}
        <Box
          sx={{
            mb: { xs: 6, md: 7, lg: 8 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              color: "primary.main",
              fontSize: { xs: "2rem", md: "2.7rem", lg: "3rem" },
              letterSpacing: 0.5,
              textAlign: "center",
            }}
          >
            Why Choose Our Products?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              fontWeight: 400,
              maxWidth: { xs: "100%", md: 700, lg: 800 },
              mx: "auto",
              fontSize: { xs: "1.08rem", md: "1.18rem", lg: "1.25rem" },
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Discover the key features that make our technology stand out from
            the competition
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Grid
          container
          spacing={0}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4, lg: 5 },
            width: "100%",
            mx: "auto",
            maxWidth: 1200,
          }}
        >
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Paper
                key={feature.id}
                elevation={3}
                sx={{
                  textAlign: "center",
                  p: { xs: 3, md: 4, lg: 4 },
                  height: "100%",
                  borderRadius: 4,
                  boxShadow: { xs: 2, md: 4 },
                  transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
                  minWidth: 0,
                  maxWidth: { xs: "100%", md: 340, lg: 360 },
                  mx: "auto",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.03)",
                    boxShadow: 10,
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Feature Icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 2, md: 2.5, lg: 3 },
                    borderRadius: "50%",
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                    mb: { xs: 2, md: 2.5 },
                    boxShadow: 2,
                  }}
                >
                  <IconComponent
                    sx={{ fontSize: { xs: 38, md: 44, lg: 48 } }}
                  />
                </Box>

                {/* Feature Title */}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 1.5, md: 2 },
                    color: "text.primary",
                    fontSize: { xs: "1.13rem", md: "1.22rem", lg: "1.28rem" },
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Feature Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.98rem", md: "1.05rem", lg: "1.09rem" },
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
