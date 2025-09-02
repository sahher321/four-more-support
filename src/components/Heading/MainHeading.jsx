import React from "react";
import { Typography } from "@mui/material";
import FMSLink from "./FMSLink"; // Import the FMSLink component

const MainHeading = ({ heading, textAlign }) => {
  return (
    <Typography
      variant="h4"
      color="secondary.main"
      fontWeight={600}
      sx={{
        width: "100%",
        textAlign: textAlign || "left",
      }}
    >
      <FMSLink>{heading}</FMSLink>
    </Typography>
  );
};

export default MainHeading;
