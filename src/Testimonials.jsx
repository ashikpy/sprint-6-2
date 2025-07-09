import { Grid, Box, Typography, Paper, Avatar, Rating } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import { testimonials } from "./productData";

const Testimonials = () => {
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
        <Grid
          item
          xs={12}
          sx={{
            mb: { xs: 6, md: 7, lg: 8 },
            textAlign: "center",
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
            What Our Customers Say
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
            Real feedback from satisfied customers who trust our products
          </Typography>
        </Grid>

        {/* Testimonial Cards */}
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
          {testimonials.map((testimonial) => (
            <Grid
              item
              xs={12}
              md={4}
              key={testimonial.id}
              sx={{ display: "flex" }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 3, md: 4, lg: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderRadius: 4,
                  boxShadow: { xs: 2, md: 4 },
                  minWidth: 0,
                  maxWidth: { xs: "100%", md: 340, lg: 360 },
                  mx: "auto",
                  transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.03)",
                    boxShadow: 10,
                  },
                  alignItems: "center",
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 12, md: 16 },
                    right: { xs: 12, md: 16 },
                    color: "primary.light",
                    opacity: 0.22,
                  }}
                >
                  <FormatQuote sx={{ fontSize: { xs: 32, md: 40, lg: 48 } }} />
                </Box>

                {/* Rating */}
                <Box sx={{ mb: 2.5 }}>
                  <Rating
                    value={5}
                    readOnly
                    size="medium"
                    sx={{ color: "warning.main" }}
                  />
                </Box>

                {/* Testimonial Text */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    flexGrow: 1,
                    mb: { xs: 2.5, md: 3 },
                    fontSize: { xs: "1rem", md: "1.05rem", lg: "1.12rem" },
                    textAlign: "center",
                  }}
                >
                  &ldquo;{testimonial.testimonial}&rdquo;
                </Typography>

                {/* Customer Info */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    mt: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      mr: { xs: 2, md: 2.5 },
                      width: { xs: 54, md: 60, lg: 68 },
                      height: { xs: 54, md: 60, lg: 68 },
                      fontSize: { xs: "1.18rem", md: "1.32rem", lg: "1.45rem" },
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                        fontSize: {
                          xs: "1.08rem",
                          md: "1.15rem",
                          lg: "1.22rem",
                        },
                        textAlign: "left",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          xs: "0.92rem",
                          md: "0.98rem",
                          lg: "1.05rem",
                        },
                        textAlign: "left",
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
