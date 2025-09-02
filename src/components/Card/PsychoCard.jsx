import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const PsychoCard = ({ head, para }) => {
  return (
    <Card
      sx={{
        width: "100%",
        py: 2,
        px: 4,
        textAlign: "center",
        backgroundColor: "secondary.main",
        color: "primary.light",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        height: {
          xl: "400px",
          lg: "400px",
          sm: "auto",
          md: "auto",
          xs: "auto",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          paddingX={3}
          paddingBottom={2}
          lineHeight={1.3}
          color="primary.main"
          fontWeight={500}
          component="div"
          gutterBottom
        >
          {head}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          {para}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PsychoCard;
