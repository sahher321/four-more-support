import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ServiceCard({ image, text, altText }) {
  return (
    <Card
      sx={{
        width: "100%", // Ensures the card takes up full width of the Grid item
        height: "350px", // Allow height to adjust based on content
        cursor: "pointer",
        py: 4,
        px: 2,
        textAlign: "center",
        backgroundColor: "primary.light",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "secondary.main",
          "& .hoverText": {
            color: "secondary.light",
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
          <img
            src={image}
            alt={altText || "Service image"}
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Typography
          variant="h5"
          paddingX={3}
          paddingBottom={3}
          paddingTop={10}
          lineHeight={1.3}
          color="secondary.dark"
          fontWeight={500}
          component="div"
          gutterBottom
          className="hoverText"
          sx={{
            transition: "color 0.3s ease",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
