import { Typography } from "@mui/material";
import React from "react";

const MainPara = ({ para, textAlign }) => {
  return (
    <Typography
      variant="h5"
      color="secondary.main"
      fontWeight={300}
      lineHeight={1.3}
      sx={{
        textAlign: textAlign || "left",
      }}
    >
      {para}
    </Typography>
  );
};

export default MainPara;
