import { Box, Container, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { tick } from "../../assets";
import { MainHeading, MainPara } from "../../components";

const SupportSection = ({
  heading,
  background,
  image,
  items = [],
  reverse = false,
  para,
  fontWeight = 300,
}) => {
  return (
    <Box
      py={7}
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
            md: "column",
            lg: reverse ? "row-reverse" : "row",
          }}
          gap={5}
          alignItems="center"
        >
          {/* Image Section */}
          {image && (
            <Box width={{ xs: "100%", lg: "50%" }}>
              <img
                src={image}
                alt={heading || "Support illustration"}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "8px",
                }}
                loading="lazy"
              />
            </Box>
          )}

          {/* Text Content */}
          <Stack
            width={{ xs: "100%", lg: "50%" }}
            gap={2}
            justifyContent="center"
            px={2}
          >
            {heading && <MainHeading heading={heading} />}
            {para && <MainPara para={para} />}

            {items.length > 0 && (
              <Stack gap={1.5}>
                {items.map((item, index) => (
                  <Typography
                    key={index}
                    variant="h6"
                    color="secondary.main"
                    fontWeight={fontWeight}
                    lineHeight={1.3}
                    display="flex"
                    alignItems="center"
                  >
                    <Box
                      component="span"
                      mr={1}
                      sx={{ display: "inline-flex", flexShrink: 0 }}
                    >
                      <img
                        src={tick}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                    </Box>
                    {item}
                  </Typography>
                ))}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

SupportSection.propTypes = {
  heading: PropTypes.string,
  background: PropTypes.string,
  image: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  reverse: PropTypes.bool,
  para: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SupportSection;
