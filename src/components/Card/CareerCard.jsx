import React from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { ServiceCircle } from "../../assets";

const CareerCard = ({ image, head }) => {
  return (
    <Card
      sx={{
        height: "350px",
        cursor: "pointer",
        py: 4,
        px: 2,
        textAlign: "center",
        backgroundColor: "secondary.main",
        color: "primary.light",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
          <img src={image} alt="" width="100%" />
        </Box>
        <Typography
          variant="h5"
          paddingX={3}
          paddingBottom={3}
          paddingTop={10}
          lineHeight={1.3}
          color="primary.light"
          fontWeight={500}
          component="div"
          gutterBottom
          className="hoverText"
          sx={{
            transition: "color 0.3s ease",
          }}
        >
          {head}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "max-content",
            fontSize: "16px",
            textTransform: "none",
            marginTop: "10px",
            color: "secondary.main",
          }}
          size="large"
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
