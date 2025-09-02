import React from "react";
import {
  Banner,
  SupportSection,
  MainHeading,
  MainPara,
  SupportSectionSecond,
  SupportCompareSection,
  ServiceCard,
  PsychoCard,
} from "../../components";
import {
  sideImage,
  sideImage2,
  sideImage3,
  sideImage4,
  sideImage5,
  sideImage6,
  back,
  cardImage1,
  cardImage2,
  cardImage3,
  tick,
} from "../../assets";
import { Box, Stack, Typography, Container, Grid } from "@mui/material";
const Service = () => {
  return (
    <>
      {/* <Banner
        main="Expert specialist support coordination "
        head="Services in adelaide"
        para="Tailored support for complex needs Four More Supports is here to help."
      /> */}
      <SupportCompareSection />
      <Box paddingY={7}>
        <Container>
          <Grid container spacing={7} sx={{ marginBottom: "30px" }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
              <ServiceCard image={cardImage1} text="Complexity & Expertise" />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
              <ServiceCard image={cardImage2} text="Intensive Support" />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
              <ServiceCard image={cardImage3} text="Collaboration" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        paddingY={7}
        sx={{
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          width: "100%",
          position: "relative",
          height: "min-content",
        }}
      >
        <Container>
          <Stack
            direction={{
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            gap={5}
            alignItems="center"
          >
            <Box
              width={{ xs: "100%", lg: "50%" }}
              paddingBottom={{ lg: "80px" }}
            >
              <img
                src={sideImage2}
                alt="Illustration"
                style={{ width: "100%" }}
              />
            </Box>

            <Stack
              width={{ xs: "100%", lg: "50%" }}
              gap={2}
              justifyContent="center"
              sx={{ padding: "20px" }}
              paddingBottom={{ xs: "150px", lg: "80px" }}
            >
              <MainHeading heading="Why us?" />
              <MainPara para="For complex or urgent NDIS needs, our expert team helps to:" />

              <Stack gap={1.5}>
                {itemsFirst.map((item, index) => (
                  <Typography
                    key={index}
                    variant="h6"
                    color="secondary.main"
                    fontWeight={300}
                    lineHeight={1.3}
                    display="flex"
                    alignItems="center"
                  >
                    <span
                      style={{ marginRight: "8px", display: "inline-flex" }}
                    >
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
      <SupportSection
        heading="Tailored NDIS Support for Complex Needs"
        para="Our Specialist Support Coordination in Adelaide is designed for individuals with:"
        image={sideImage3}
        items={itemSecond}
        reverse="true"
      />
      <Box paddingY={5}>
        <Container>
          <Stack gap={5}>
            <Stack gap={2}>
              <MainHeading
                heading="Specialist Support Coordination, tailored for complexity"
                textAlign="center"
              />
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "70%",
                  },
                }}
                mx="auto"
              >
                <MainPara
                  para="At Four More Supports Adelaide, we deliver structured, high-impact Specialist Support Coordination designed to meet the complex needs of your NDIS plan with expertise and care."
                  textAlign="center"
                />
              </Box>
            </Stack>
            <Box width="100%">
              <img src={sideImage4} alt="" width="100%" />
            </Box>
          </Stack>
        </Container>
      </Box>
      {/* 
      <SupportSection
        heading="Expert NDIS support, delivered your way"
        para="At Four More Supports Adelaide, our Specialist Support Coordinators are committed to your success and independence through:"
        image={sideImage5}
        items={itemThird}
      /> */}
      <SupportSectionSecond
        image={sideImage}
        heading="Start Specialist Support Coordination in Adelaide"
        para="Need expert support for complex NDIS needs? Four More Supports is here to help. Contact us today to maximise your plan and get the right support."
        reverse={true}
        buttonText="Connect with Our Specialists Today"
        buttonLink="/contact"
      />
      <SupportSection
        heading="Independent & expert NDIS Support in Adelaide"
        para="At Four More Supports, we prioritise your independence with:"
        image={sideImage6}
        items={itemFourth}
      />
    </>
  );
};

const itemsFirst = [
  "Manage high-impact support plans",
  "Navigate complex service systems",
  "Resolve barriers to plan implementation",
  "Simplify your support environment",
  "Deliver responsive, crisis-ready coordination",
];
const itemSecond = [
  "Significant health or behavioural support needs",
  "Justice system involvement or forensic backgrounds",
  "Complex housing challenges and multi-service navigation (health, education, justice)",
];
const itemThird = [
  "In-person consults across Adelaide",
  "Accessible virtual support",
  "Ongoing plan review and adjustments",
];
const itemFourth = [
  "A participant-first, unbiased approach",
  "Expertise in complex care and coordination",
  "A commitment to empowering NDIS participants",
];
export default Service;
