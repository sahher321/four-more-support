import { Box, Container, Stack, Typography } from "@mui/material";
import { tick } from "../../assets";
// import {mainHeading} from "../../components"
import { MainHeading, MainPara } from "../../components";

const SupportSection = ({
  heading,
  background,
  image,
  items,
  reverse,
  para,
  fontWeight,
}) => {
  return (
    <Box
      paddingY={7}
      sx={{
        backgroundImage: background ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        position: "relative",
        overflow: "hidden",
      }}
    >
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
        >
          {/* Image Section */}
          <Box width={{ xs: "100%", lg: "50%" }}>
            <img src={image} alt="Illustration" style={{ width: "100%" }} />
          </Box>

          {/* Text Content */}
          <Stack
            width={{ xs: "100%", lg: "50%" }}
            gap={2}
            justifyContent="center"
            sx={{ padding: "20px" }}
          >
            <MainHeading heading={heading} />
            <MainPara para={para} />

            <Stack gap={1.5}>
              {items.map((item, index) => (
                <Typography
                  key={index}
                  variant="h6"
                  color="secondary.main"
                  fontWeight={fontWeight ?? 300}
                  lineHeight={1.3}
                  display="flex"
                  alignItems="center"
                >
                  <span style={{ marginRight: "8px", display: "inline-flex" }}>
                    <img src={tick} alt="Tick Icon" width={20} height={20} />
                  </span>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default SupportSection;
