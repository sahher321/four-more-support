import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const PsychologicalCard = ({ head }) => {
  return (
    <Card
      sx={{
        position: "relative",
        height: "250px",
        cursor: "pointer",
        py: 2,
        px: 2,
        textAlign: "center",
        backgroundColor: "primary.light",
        color: "primary.light",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "secondary.main",
          color: "primary.light",
        },
        "&:hover .hoverTarget": {
          backgroundColor: "primary.main",
          color: "secondary.main",
        },
        "&:hover .hoverText": {
          color: "primary.light",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          paddingX={1}
          paddingBottom={3}
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
          {head}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          className="hoverTarget"
          sx={{
            width: "max-content",
            fontSize: "16px",
            textTransform: "none",
            marginTop: "10px",
            transition: "background-color 0.3s ease, color 0.3s ease",
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          size="large"
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default PsychologicalCard;
