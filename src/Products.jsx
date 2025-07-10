import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from "@mui/material";
import { Visibility, ShoppingCart, Star } from "@mui/icons-material";
import { products } from "./productData";

const Products = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10, lg: 12 },
        px: { xs: 2, md: 0 },
        bgcolor: "grey.50",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
        <Grid container sx={{ width: "100%" }}>
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
              Our Latest Products
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
              Explore our carefully curated collection of cutting-edge
              technology products
            </Typography>
          </Grid>

          {/* Product Cards */}
          <Grid
            container
            spacing={0}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(3, 1fr)",
              },
              gap: { xs: 3, md: 4, lg: 5 },
              width: "100%",
              mx: "auto",
              maxWidth: 1200,
            }}
          >
            {products.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={product.id}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s cubic-bezier(.4,2,.6,1)",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: { xs: 2, md: 4 },
                    minWidth: 0,
                    maxWidth: { xs: "100%", md: 340, lg: 360 },
                    mx: "auto",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.03)",
                      boxShadow: 10,
                    },
                    alignItems: "center",
                  }}
                >
                  {/* Product Image Placeholder */}
                  <CardMedia
                    sx={{
                      height: { xs: 180, md: 200, lg: 220 },
                      bgcolor: "grey.300",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      background: `linear-gradient(135deg, 
                      ${
                        product.id % 2 === 0
                          ? "#667eea 0%, #764ba2 100%"
                          : "#f093fb 0%, #f5576c 100%"
                      }
                    )`,
                      position: "relative",
                    }}
                  >
                    {/* Bestseller Badge */}
                    {product.id <= 2 && (
                      <Chip
                        label="Bestseller"
                        color="secondary"
                        size="small"
                        icon={<Star />}
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          fontWeight: "bold",
                        }}
                      />
                    )}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: 400,
                        fontSize: { xs: "1rem", md: "1.1rem", lg: "1.18rem" },
                        px: { xs: 1, md: 2 },
                      }}
                    >
                      {product.name}
                    </Typography>
                  </CardMedia>

                  {/* Product Content */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: { xs: 2, md: 3, lg: 3 },
                      width: "100%",
                    }}
                  >
                    {/* Product Name */}
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: { xs: 1, md: 2 },
                        color: "text.primary",
                        fontSize: {
                          xs: "1.13rem",
                          md: "1.22rem",
                          lg: "1.28rem",
                        },
                        textAlign: "center",
                      }}
                    >
                      {product.name}
                    </Typography>

                    {/* Product Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        mb: { xs: 2, md: 3 },
                        flexGrow: 1,
                        lineHeight: 1.6,
                        fontSize: {
                          xs: "0.98rem",
                          md: "1.05rem",
                          lg: "1.09rem",
                        },
                        textAlign: "center",
                      }}
                    >
                      {product.description}
                    </Typography>

                    {/* Price */}
                    <Typography
                      variant="h4"
                      sx={{
                        color: "primary.main",
                        fontWeight: 800,
                        mb: { xs: 2, md: 3 },
                        fontSize: { xs: "1.3rem", md: "1.5rem", lg: "1.6rem" },
                        textAlign: "center",
                      }}
                    >
                      {product.price}
                    </Typography>

                    {/* Action Buttons */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: { xs: 1, md: 1.5 },
                        flexDirection: { xs: "column", md: "row" },
                        mt: "auto",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<ShoppingCart />}
                        sx={{
                          textTransform: "none",
                          borderRadius: 2,
                          py: { xs: 1, md: 1.2 },
                          px: { xs: 2, md: 3 },
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          fontWeight: 600,
                          minWidth: 120,
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Visibility />}
                        sx={{
                          textTransform: "none",
                          borderRadius: 2,
                          py: { xs: 1, md: 1.2 },
                          px: { xs: 2, md: 3 },
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          fontWeight: 600,
                          minWidth: 120,
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
