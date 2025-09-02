import React from "react";
import {
  Banner,
  MainHeading,
  MainPara,
  PsychoCard,
  ServiceCard,
  SupportSection,
  SupportSectionSecond,
} from "../../components";
import {
  sideImage7,
  sideImage,
  sideImage8,
  sideImage9,
  sideImage11,
  cardImage4,
  cardImage5,
  cardImage6,
  cardImage7,
  cardImage8,
} from "../../assets";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      {/* <Banner main="Meet Our Team," para="Our Vision for NDIS Care" /> */}

      <Box paddingY={7}>
        <Container>
          <Stack
            direction={{
              xs: "column", // Mobile
              sm: "column", // Tablets
              md: "row", // Desktops
              lg: "row", // Large screens
              xl: "row", // Extra large screens
            }}
            gap={5}
          >
            <Box
              width={{
                xs: "column", // Mobile
                sm: "column", // Tablets
                md: "50%", // Desktops
                lg: "50%", // Large screens
                xl: "50%",
              }} // Extra large screens
            >
              <img src={sideImage8} alt="" width="100%" />
            </Box>
            <Box
              width={{
                xs: "column", // Mobile
                sm: "column", // Tablets
                md: "50%", // Desktops
                lg: "50%", // Large screens
                xl: "50%",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding={2}
            >
              <MainHeading heading="Meet the expert team at Four More Supports" />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box paddingY={7}>
        <Container>
          <Stack
            direction={{
              xs: "column", // Mobile
              sm: "column", // Tablets
              md: "row", // Desktops
              lg: "row", // Large screens
              xl: "row", // Extra large screens
            }}
            gap={5}
          >
            <Box
              width={{
                xl: "50%", // Mobile
                sm: "50%", // Tablets
                md: "50%", // Desktops
                lg: "100%", // Large screens
                xs: "100%",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              gap={3}
              padding={2}
            >
              <Box width="100%">
                <MainHeading heading="Meet our dedicated support team in Adelaide" />
                {/* <Stack
                  sx={{ backgroundColor: "primary.main", width: "100%" }}
                  paddingY={2}
                  paddingX={3}
                  marginTop={2}
                  gap={1}
                >
                  <Typography
                    variant="h5"
                    color="secondary.main"
                    fontWeight={600}
                  >
                    Specialist Support Coordinator
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary.main"
                    fontWeight={600}
                  >
                    Risha Bhura
                  </Typography>
                </Stack> */}
              </Box>
            </Box>

            <Box
              width={{
                xl: "50%", // Mobile
                sm: "50%", // Tablets
                md: "50%", // Desktops
                lg: "100%", // Large screens
                xs: "100%",
              }}
            >
              <img src={sideImage9} alt="" width="100%" />
            </Box>
          </Stack>
        </Container>
      </Box>

      <SupportSectionSecond
        heading="Why choose our team"
        para="At Four More Supports, our Adelaide based team delivers expert, person centred support through Specialist Support Coordination, Support Coordination, and Psychosocial Recovery Coaching empowering every client with personalised care and proven results."
        image={sideImage7}
      />

      <Box
        sx={{
          background: `linear-gradient(
      to bottom,
      rgba(243, 196, 0, 0.3) 4%,
      rgba(243, 196, 0, 0) 80%
    )`,
        }}
        paddingY={7}
        height="content-fit"
      >
        <Container display="flex" justifyContent="center">
          <Stack
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%", // md and larger
              },
            }}
            mx="auto"
            gap={3}
          >
            <MainHeading
              heading="Our Commitment to Disability Support"
              textAlign="center"
            />
            <MainPara
              para="We deliver exceptional, evidence based disability support services in Adelaide championing autonomy and the strengths of every individual we support."
              textAlign="center"
            />
          </Stack>
          <Stack alignItems="center" mt={6} gap={5} width="100%">
            <MainHeading
              heading="Principles Guiding Our Services"
              textAlign="center"
            />
            <Box>
              <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <PsychoCard
                    head="Person-Centered Approach"
                    para="We embrace a person-centered approach, recognizing each individual's unique strengths, preferences, and goals. Research by O’Brien and O’Brien (2002) highlights that person-centered planning enhances autonomy and empowerment in individuals with disabilities."
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <PsychoCard
                    head="Empowerment and Autonomy"
                    para="We aim to eliminate the gap where it is assumed that individuals with disabilities cannot make decisions for themselves. Instead, we empower them to be the primary decision-makers, supported by our expertise. Studies by Wehmeyer et al. (2008) emphasize the importance of self-determination and autonomy in improving the quality of life for people with disabilities."
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <PsychoCard
                    head="Collaborative Support"
                    para="We work alongside individuals, supporting, supervising, educating, celebrating, and reflecting with them. This collaborative approach fosters a therapeutic alliance, which is crucial for effective support and positive outcomes (Horvath & Greenberg, 1994)."
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} justifyContent="center" mt={2}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <PsychoCard
                    head="Capacity Building"
                    para="Our services focus on building the capacity of individuals, helping them learn from both successes and failures. By providing education and resources, we support continuous personal growth and resilience, in line with the principles of recovery-oriented practice (Slade, 2009)."
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <PsychoCard
                    head="Strengths-Based Perspective"
                    para="We recognize that individuals with disabilities are experts by experience, and we are experts by knowledge. This perspective ensures that our support emphasizes their inherent strengths and capabilities (Saleebey, 1996)."
                  />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      <SupportSection
        heading="Our Approach to Support"
        image={sideImage}
        items={itemFirst}
        para="At Four More Supports, our team of expert support coordinators and psychosocial recovery coaches work diligently to provide"
        reverse={true}
        fontWeight={500}
      />

      <SupportSectionSecond
        heading="Commitment to Continuous Improvement"
        para="At Four More Supports, we evolve with research and feedback to deliver 
        better outcomes helping people with disabilities live more fulfilling, independent lives."
        image={sideImage11}
        buttonText="Start your journey with us"
        buttonLink="/contact"
      />

      <Box
        sx={{
          background: `linear-gradient(
      to bottom,
      rgba(243, 196, 0, 0.3) 4%,
      rgba(243, 196, 0, 0) 80%
    )`,
        }}
        paddingY={7}
      >
        <Container display="flex" justifyContent="center">
          <Stack
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%", // md and larger
              },
            }}
            mx="auto"
            gap={2}
          >
            <MainHeading
              heading="Our Vision for NDIS Care"
              textAlign="center"
            />

            <Typography variant="h5" color="secondary.main" fontWeight={600}>
              Empowering Autonomy, Building <br /> Resilience
            </Typography>

            <MainPara
              para="At Four More Supports, our vision is to transform how disability support services are delivered, emphasizing empowerment and autonomy 
              for individuals with disabilities in Adelaide. We are dedicated to:"
              textAlign="center"
            />
          </Stack>
          <Stack alignItems="center" mt={6} gap={5} width="100%">
            <Box>
              <Grid container spacing={10}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <ServiceCard
                    image={cardImage4}
                    text="Empowering Decision-Makers"
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <ServiceCard
                    image={cardImage5}
                    text="Fostering Independence"
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <ServiceCard
                    image={cardImage6}
                    text="Collaborative Partnerships"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={7} justifyContent="center" mt={5}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <ServiceCard
                    image={cardImage7}
                    text="Innovative and Person-Centered"
                  />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <ServiceCard
                    image={cardImage8}
                    text="Commitment to Continuous Improvement"
                  />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const itemFirst = [
  "Tailored NDIS education and resources",
  "Guidance for informed decision-making",
  "Recognition of progress and growth",
  "Ongoing reflection to improve outcomes",
];

export default About;
