import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { quote } from "../../assets";

const TestimonialCard = () => {
  return (
    <Stack
      gap={1}
      sx={{
        width: "100%",
        padding: 4,
        backgroundColor: "#ffffff",
        border: "2px solid #E9BC03",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)", // pura card upar
          borderRight: "4px solid #E9BC03", // right border bara
        },
      }}
    >
      {/* Quotation Icon */}
      <Box width="40%" height="40%">
        <img src={quote} alt="" srcset="" width="100%" height="100%" />
      </Box>

      {/* Text Content */}
      <Typography
        variant="body1"
        sx={{
          color: "#4f4f4f",
          lineHeight: 1.5,
          marginBottom: 3,
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Felis vulputate facilisis ut
        nulla ut mauris metus elementum. Maecenas aliquam ultrices ultrices
        molestie id id. Nunc diam ipsum eu a dictum semper fermentum.
      </Typography>

      {/* User Info */}
      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: "#e0e0e0", width: 40, height: 40, mr: 2 }}>
          A
        </Avatar>
        <Typography variant="subtitle1" fontWeight={500}>
          John Doe
        </Typography>
      </Box>
    </Stack>
  );
};

export default TestimonialCard;
