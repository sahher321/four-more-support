import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { VS, tick } from "../../assets";

const data = [
  {
    title: "Support coordination",
    color: "#002D42",
    text: "#fff",
    items: [
      "For general support needs",
      "Helps participants understand and use their NDIS plans",
      "Connects with mainstream, community, and funded supports",
      "Focuses on building skills and confidence",
    ],
  },
  {
    title: "Specialist support coordination",
    color: "#FFC72C",
    text: "#002D42",
    items: [
      "For complex needs or high-risk situations",
      "Delivered by qualified specialists (e.g. social workers, clinicians)",
      "Manages barriers impacting plan implementation",
      "Involves crisis response, intensive collaboration, and tailored service planning",
    ],
  },
];

const SupportCompareSection = () => {
  return (
    <Box py={7}>
      <Container>
        <Grid container spacing={2}>
          {data.map((section, index) => (
            <React.Fragment key={index}>
              {/* Left Section */}
              <Grid size={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }}>
                <Box
                  width="100%"
                  bgcolor={section.color}
                  color={section.text}
                  padding={2}
                  borderRadius={1}
                  mb={2}
                  pr={30}
                  sx={{
                    clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)",
                  }}
                >
                  <Typography variant="h5" fontWeight={600}>
                    {section.title}
                  </Typography>
                </Box>

                <Stack gap={1.5}>
                  {section.items.map((item, idx) => (
                    <Typography
                      key={idx}
                      variant="h6"
                      color="secondary.main"
                      fontWeight={300}
                      lineHeight={1.3}
                      ml={2}
                      display="flex"
                      alignItems="center"
                    >
                      <span
                        style={{ marginRight: "8px", display: "inline-flex" }}
                      >
                        <img
                          src={tick}
                          alt="Tick Icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>

              {/* VS Image - Only Render Once */}
              {index === 0 && (
                <Grid size={2} mx="auto">
                  <img src={VS} alt="VS" width="100%" />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SupportCompareSection;
