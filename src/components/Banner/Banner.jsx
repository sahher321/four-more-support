import React from "react";
import { wave, FMSBanner } from "../../assets";
import { Box, Stack, Typography } from "@mui/material";

const Banner = ({ head, para, main }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        background: `linear-gradient(90deg, #F1F1F1 15%, #FAF0C8 29%, #FFFFFF 63%)`,
        overflow: "hidden",
      }}
      alignItems="center"
      justifyContent="center"
    >
      
      {/* Background Wave */}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "300px",
          backgroundImage: `url(${wave})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      <Stack
        justifyContent="center"
        alignItems="center"
        zIndex={2}
        paddingTop={10}
        paddingBottom={20}
        sx={{
          width: {
            xs: "100%",
            sm: "70%",
            md: "60%",
            lg: "60%",
            xl: "60%",
          },
        }}
      >
        {/* Main Title */}
        {main && (
          <Typography
            variant="h4"
            color="secondary.main"
            fontWeight={600}
            textAlign="center"
          >
            {main}
          </Typography>
        )}

        {head && (
          <Typography
            variant="h3"
            color="secondary.main"
            fontWeight={600}
            textAlign="center"
          >
            {head}
          </Typography>
        )}

        <Box width="40%" height="40%" marginY={2}>
          <img src={FMSBanner} alt="" width="100%" height="100%" />
        </Box>

        {para && (
          <Typography
            variant="body1"
            fontSize="20px"
            color="secondary.main"
            fontWeight={500}
            textAlign="center"
          >
            {para}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default Banner;
