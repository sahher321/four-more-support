import React from "react";
import {
  Banner,
  MainHeading,
  MainPara,
  PsychoCard,
  SupportSection,
  SupportSectionSecond,
} from "../../components";
import {
  Mail,
  maildark,
  Phone,
  phonedark,
  sideImage10,
  sideImage15,
  sideImage16,
  sideImage18,
  sideImage2,
} from "../../assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PsychologicalCard from "../../components/Card/PsychologicalCard";
import { useNavigate } from "react-router-dom";

const Psyhco = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Banner
        head="Recovery coaching in adelaide"
        para="Build mental health resilience with Four More Supports"
        main="Leading psychosocial "
      /> */}
      <SupportSectionSecond
        heading="What is Psychosocial Recovery Coaching?"
        para="At Four More Supports, our Psychosocial Recovery Coaching helps individuals with psychosocial disabilities build resilience and lead fulfilling lives through personalised, strength-based support."
        image={sideImage2}
      />
      <SupportSectionSecond
        heading="Psychosocial Recovery Coaching in Adelaide"
        para="Four More Supports delivers expert, personalised coaching for individuals navigating mental health recovery and complex psychosocial needs."
        image={sideImage10}
        reverse={true}
      />
      <SupportSection
        heading="Empowering Your Journey to Recovery"
        image={sideImage18}
        items={itemFirst}
        para="We help individuals with mental health challenges to:"
      />

      <Box
        sx={{
          background: `linear-gradient(
      to bottom,
      rgba(243, 196, 0, 0.3) 4%,
      rgba(243, 196, 0, 0) 80%
    )`,
          minHeight: "100vh",
        }}
        paddingY={5}
      >
        <Container display="flex" justifyContent="center">
          <Stack
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            width="65%"
            mx="auto"
            gap={1}
          >
            <MainHeading
              heading="Our recovery coaching approach"
              textAlign="center"
            />
            <MainPara
              para="We take a personalised, goal-focused approach to Psychosocial Recovery Coaching through:"
              textAlign="center"
            />
            <MainPara
              para="Tailored recovery planning aligned with your goals"
              textAlign="center"
            />
            <MainPara
              para="Strength-based strategies to support long-term wellbeing"
              textAlign="center"
            />
          </Stack>
          <Stack alignItems="center" mt={6} gap={5} width="100%">
            <Box>
              <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
                  <PsychologicalCard head="Connection to Community and Supports" />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
                  <PsychologicalCard head="Skill Development for Independence" />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
                  <PsychologicalCard head="Crisis Prevention and Management" />
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
                  <PsychologicalCard head="Ongoing Support and Reflection" />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      <SupportSection
        heading="Why Choose Four More Supports for Psychosocial Recovery?"
        image={sideImage15}
        items={itemSecond}
        para="Our Adelaide-based recovery coaches offer:"
      />

      <Box
        sx={{
          background: `linear-gradient(
      to bottom,
      rgba(243, 196, 0, 0) 38%,
      rgba(243, 196, 0, 0.3) 68%,
      rgba(243, 196, 0, 0) 100%
    )`,
        }}
        paddingY={5}
      >
        <Container display="flex" justifyContent="center">
          <Stack
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            width="75%"
            mx="auto"
            gap={1}
          >
            <MainHeading
              heading="Start your recovery journey with Four More Supports"
              textAlign="center"
            />
            <MainPara
              para="Looking for expert Psychosocial Recovery Coaching in Adelaide? Contact us today."
              textAlign="center"
            />

            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "max-content",
                fontSize: "16px",
                textTransform: "none",
                marginTop: "10px",
              }}
              size="large"
              onClick={() => navigate("/contact")}
            >
              Start your recovery journey with us
            </Button>

            <Stack
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              width="75%"
              mx="auto"
              gap={1}
              paddingTop={2}
            >
              <Typography
                variant="h5"
                color="secondary.main"
                fontWeight={500}
                lineHeight={1.3}
                textAlign="center"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <span
                  style={{ width: "24px", height: "24px", display: "flex" }}
                >
                  <img
                    src={maildark}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </span>
                info@fourmoresupports.com.au
              </Typography>

              <Typography
                variant="h5"
                color="secondary.main"
                fontWeight={600}
                lineHeight={1.3}
                textAlign="center"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <span
                  style={{ width: "24px", height: "24px", display: "flex" }}
                >
                  <img
                    src={phonedark}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </span>
                +61426393517
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <SupportSectionSecond
        heading="Your partner in Psychosocial Recovery"
        para="Four More Supports is your trusted provider of Psychosocial Recovery Coaching in Adelaide offering expert support to help you navigate mental health recovery with confidence."
        image={sideImage16}
        reverse={true}
      />
    </>
  );
};
const itemFirst = [
  "Understand and manage their mental health",
  "Build coping skills and resilience",
  "Improve well-being and quality of life",
];
const itemSecond = [
  "Expert guidance in mental health recovery",
  "Personalised coaching that respects your journey",
  "Strong local connections to Adelaide supports and services",
];
export default Psyhco;
