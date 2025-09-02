import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { ServiceCircle } from "../../assets"; // Adjust the path based on your project structure
import { useNavigate } from "react-router-dom";
const HomeCard = ({ head, para, image, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${link}`);
  };
  return (
    <Card
      sx={{
        height: {
          xs: "auto", // Mobile and smaller screens
          sm: "auto", // Tablets
          md: "520px", // Laptops and above
          lg: "520px", // Large screens
          xl: "520px", // Extra large screens
        },

        cursor: "pointer",
        py: 4,
        px: 3,
        textAlign: "center",
        backgroundColor: "primary.light",
        color: "#000000",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "secondary.main",
          "& .hoverText": {
            color: "#FFFFFF",
          },
          "& .hoverButton": {
            backgroundColor: "primary.main",
            color: "#FFFFFF ",
          },
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "110px", height: "50px" }}>
          <img src={image} alt="Service" width="100%" />
        </Box>

        <Typography
          variant="h5"
          paddingX={3}
          paddingBottom={2}
          paddingTop={10}
          lineHeight={1.3}
          color="#000000"
          fontWeight={500}
          className="hoverText"
          sx={{
            transition: "color 0.3s ease",
          }}
        >
          {head}
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }} className="hoverText">
          {para}
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: "max-content",
            fontSize: "16px",
            textTransform: "none",
            mt: 5,
            backgroundColor: "secondary.main",
            color: "primary.light",
          }}
          className="hoverButton"
          onClick={handleClick}
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
