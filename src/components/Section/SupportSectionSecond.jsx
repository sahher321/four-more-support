import React from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import { MainHeading, MainPara } from "../../components";
import { useNavigate } from "react-router-dom";

const SupportSectionSecond = ({
  heading,
  para,
  image,
  reverse,
  buttonText,
  morePara,
  buttonLink,
}) => {
  const navigate = useNavigate();
  return (
    <Box paddingY={7}>
      <Container>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: reverse ? "row-reverse" : "row",
            xl: reverse ? "row-reverse" : "row",
          }}
          gap={5}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width={{
              xs: "100%", // Mobile
              sm: "100%", // Tablets
              md: "100%", // Desktops
              lg: "100%", // Large screens
              xl: "row", // Extra large screens
            }}
          >
            <img src={image} alt="Illustration" style={{ width: "100%" }} />
          </Box>

          {/* Text Content */}
          <Stack
            width={{
              xs: "100%", // Mobile
              sm: "100%", // Tablets
              md: "100%", // Desktops
              lg: "100%", // Large screens
              xl: "row", // Extra large screens
            }}
            gap={2}
            justifyContent="center"
            sx={{
              padding: "20px",
            }}
          >
            <MainHeading heading={heading} />
            <MainPara para={para} />

            {buttonText && (
              <Button
                onClick={() => navigate(buttonLink)}
                variant="contained"
                color="secondary"
                sx={{
                  width: "max-content",
                  fontSize: "16px",
                  textTransform: "none",
                }}
                size="large"
              >
                {buttonText}
              </Button>
            )}

            {morePara && <MainPara para={morePara} />}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default SupportSectionSecond;
