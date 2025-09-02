import React from "react";
import {
  Banner,
  MainHeading,
  MainPara,
  SupportSection,
  SupportSectionSecond,
} from "../../components";
import {
  arrow,
  Background1,
  sideImage,
  sideImage12,
  // sideImage13,
  sideImage14,
  sideImage17,
  // sideImage7,
  tick,
  VS,
} from "../../assets";
import { Container, Grid, Typography, Box, Stack, Button } from "@mui/material";

const Support = () => {
  return (
    <>
      {/* <Banner
        head="Support coordination at  "
        main="Navigating NDIS with "
        para="Maximise your NDIS plan with Support Coordination in Adelaide"
      /> */}
      {/* <SupportSectionSecond
        heading="What is Support Coordination?"
        para="At Four More Supports, we empower you with expert guidance, practical resources, and personalised support—so you can 
        make informed decisions, build independence, and achieve your NDIS goals confidently."
        image={sideImage12}
        reverse={true}
      /> */}
      <Box paddingY={7}>
        <Container>
          <Stack
            direction={{
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row-reverse",
              xl: "row-reverse",
            }}
            height={{
              xs: "100%", // Mobile
              sm: "100%", // Tablets
              md: "100%", // Desktops
              lg: "400px", // Large screens
              xl: "400px", // Extra large screens
            }}
            gap={5}
            alignItems="center"
            justifyContent="center"
            // sx={{ background: "red" }}
          >
            <Box
              width={{
                xs: "100%", // Mobile
                sm: "100%", // Tablets
                md: "100%", // Desktops
                lg: "100%", // Large screens
                xl: "row", // Extra large screens
              }}
              height="100%"
            >
              <img
                src={sideImage12}
                alt="Illustration"
                style={{ width: "100%", height: "100%" }}
              />
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
              <MainHeading heading="What is Support Coordination?" />
              <MainPara
                para="At Four More Supports, we empower you with expert guidance, practical resources, and personalised support so you can 
        make informed decisions, build independence, and achieve your NDIS goals confidently."
              />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        py={7}
        sx={{
          width: "100%",
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Stack
            gap={3}
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "60%", // md and up
              },
            }}
            mx="auto"
          >
            <MainHeading
              heading="Unlock the benefits of NDIS Support Coordination with Four More Supports"
              textAlign="center"
            />
            <MainPara
              para="Choosing the right NDIS partner makes all the difference. At Four More Supports, we integrate Support Coordination seamlessly into your plan ensuring a smoother, more supported journey toward your goals."
              textAlign="center"
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "max-content",
                fontSize: "16px",
                textTransform: "none",
                mx: "auto",
              }}
              size="large"
            >
              Read More
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box
        paddingY={7}
        sx={{
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
              lg: "row",
              xl: "row",
            }}
            gap={5}
            alignItems="center"
          >
            {/* Image Section */}
            <Box width={{ xs: "100%", lg: "50%" }}>
              <img
                src={sideImage17}
                alt="Illustration"
                style={{ width: "100%" }}
              />
            </Box>

            {/* Text Content */}
            <Stack
              width={{ xs: "100%", lg: "50%" }}
              gap={2}
              justifyContent="center"
              sx={{ padding: "20px" }}
            >
              <MainHeading heading="What our NDIS Support Coordinators in Adelaide offer" />
              <MainPara
                para="Our expert Support Coordinators provide 
        tailored guidance to help you get the most out of your NDIS plan:"
              />

              <Stack gap={1.5}>
                {itemFirst.map((item, index) => (
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
                    <span>
                      <span style={{ fontWeight: 600 }}>{item.bold}:</span>{" "}
                      {item.text}
                    </span>
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        py={7}
        sx={{
          backgroundImage: `linear-gradient(
    to bottom,
    rgba(243, 196, 0, 0) 38%,
    rgba(243, 196, 0, 0.3) 68%,
    rgba(243, 196, 0, 0) 100%
  )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
        }}
      >
        <Container>
          <Box pb={3} width="80%">
            <MainHeading
              heading="Diverse Support Coordination Services 
by Four More Supports"
            />
          </Box>
          <Grid container spacing={2}>
            {data.map((section, index) => (
              <React.Fragment key={index}>
                <Grid size={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }}>
                  <Box
                    width="100%"
                    bgcolor={section.color}
                    color={section.text}
                    padding={2}
                    borderRadius={1}
                    mb={2}
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
                  <Grid size={2} paddingTop={4} mx="auto">
                    <img src={arrow} alt="VS" width="100%" />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box py={7}>
        <Container>
          <Stack
            gap={3}
            width={{ xs: "100%", xl: "60%", lg: "60%", md: "60%", sm: "100%" }}
            mx="auto"
          >
            <MainHeading
              heading="Flexible NDIS Support Coordination Across Adelaide"
              textAlign="center"
            />
            <MainPara
              para="At Four More Supports, we offer responsive and location-flexible Support Coordination ensuring you receive the right support, wherever you are in Adelaide. Our delivery methods are tailored to suit your needs and lifestyle."
              textAlign="center"
            />
          </Stack>
        </Container>
      </Box>

      <SupportSectionSecond
        heading="Ready to get the most from your NDIS plan in Adelaide?"
        para="Connect with Four More Supports today. Our expert Support Coordination 
        team is here to link you with the right services and supports to match your goals and needs."
        image={sideImage}
        buttonText="Start your support coordination journey"
        buttonLink="/contact"
      />
      <SupportSectionSecond
        heading="Independent & expert NDIS Support Coordinators in Adelaide"
        para="At Four More Supports, 
        our Support Coordinators offer non-judegmental, expert guidance always prioritising your goals."
        image={sideImage14}
        reverse={true}
      />
    </>
  );
};

export default Support;

const itemFirst = [
  {
    bold: "Strategic Planning",
    text: "Aligning your plan with your personal goal",
  },
  {
    bold: "Resource Connection",
    text: "Linking you with trusted services and community supports",
  },
  {
    bold: "Ongoing Support",
    text: "Providing continuous guidance and flexible plan adjustments",
  },
];

const data = [
  {
    title: "Level 2: Support Coordination",
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
    title: "Level 3: Specialist Support Coordination (SSC)",
    color: "#FFC72C",
    text: "#002D42",
    items: [
      "Strategic Planning: Aligning your plan with your personal goal",
      "Resource Connection: Linking you with trusted services and community supports",
      "Ongoing Support: Providing continuous guidance and flexible plan adjustments",
    ],
  },
];
