import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { HomeCard, MainHeading, MainPara } from "../../components";
import {
  aboutRisha,
  Background2,
  homebg,
  homebg2,
  psyho,
  ServiceCircle,
  specialsupport,
} from "../../assets";
import TestimonialCard from "../../components/Card/TestimonialCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Stack
        position="relative"
        height={"52vh"}
        mt={{ xs: 3, lg: 8 }}
        maxHeight={"700px"}
        direction={{
          xs: "column", // 0 - 599px
          sm: "column", // 600 - 899px
          md: "column", // 900 - 1199px
          lg: "row", // 1200px and above
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={4}
            paddingTop={{ xs: 3, lg: 10 }}
          >
            <Stack
              gap={{ xs: 1, lg: 3 }}
              width={{ xs: "100%", sm: "100%", md: "50%", xl: "50%" }}
              position="absolute"
              top={"20%"}
            >
              <Typography
                variant="h2"
                fontWeight={700}
                color="secondary.main"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                Four More <br /> Supports
              </Typography>

              <Typography variant="h5" fontWeight={400} color="secondary.main">
                Specializing in NDIS Support Coordination
                <Box
                  component="br"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "inline",
                    },
                  }}
                />
                and Psychosocial Recovery Coaching in Adelaide.
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate("/contact")}
                sx={{
                  width: "max-content",
                  fontSize: "16px",
                  textTransform: "none",
                  mt: { lg: "2px" },
                  backgroundColor: "secondary.main",
                  color: "primary.light",
                }}
              >
                Get in touch
              </Button>
            </Stack>
          </Stack>
        </Container>
        <Box
          sx={{
            width: {
              xs: "90%", // for extra small screens (mobile)
              sm: "80%", // for small screens (tablets)
              md: "55%", // for medium screens (laptops)
              lg: "55%", // for large screens
              xl: "55%", // for extra large screens
            },
            maxWidth: "1500px",
            height: "auto",
          }}
          position="absolute"
          right={"0%"}
          bottom="-150px"
          zIndex={-10}
        >
          <img
            src={homebg2}
            alt="Hero"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>

      <Box
        pb={7}
        pt={{ xs: 5, sm: 16, md: 20 }}
        sx={{
          backgroundImage: `url(${homebg})`,
          backgroundSize: {
            xs: "100% 13%",
            sm: "100% 20%",
            md: "100% 40%",
            xl: "100% 50%",
            lg: "100% 50%",
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          width: "100%",
        }}
      >
        <Container>
          <Stack spacing={5}>
            <Stack spacing={1} textAlign="left" paddingY={2}>
              <Typography
                variant="h4"
                color="secondary.main"
                fontWeight={600}
                paddingTop={10}
              >
                Our Services
              </Typography>
              <Typography variant="h5" fontWeight={300} color="#000000">
                It's important for us to care for you
              </Typography>
            </Stack>

            <Grid container spacing={7}>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
                <HomeCard
                  head="Support  coordination"
                  para="Elevate your NDIS journey with Four More Supports’ Specialist v Coordination in Adelaide. Tailored, expert solutions for complex needs."
                  link="/support"
                  image={ServiceCircle}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
                <HomeCard
                  head="Specialist Support Coordination"
                  para="Elevate your NDIS journey with Four More Supports’ Specialist v Coordination in Adelaide. Tailored, expert solutions for complex needs."
                  link="/specialsupportcordination"
                  image={specialsupport}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
                <HomeCard
                  head="Psychosocial Recovery Coaching"
                  para="Achieve mental health resilience and recovery with Four More Supports’ Psychosocial Recovery Coaching in Adelaide. Expert guidance every step of the way."
                  link="/psycho"
                  image={psyho}
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box paddingY={7}>
        <Container>
          <Stack
            direction={{
              xs: "column", // 0 - 599px
              sm: "column", // 600 - 899px
              md: "column", // 900 - 1199px
              lg: "row", // 1200px and above
            }}
            gap={5}
            alignItems="center"
          >
            {/* Image Section */}
            <Box width={{ xs: "100%", lg: "50%" }}>
              <img
                src={aboutRisha}
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
              <MainHeading heading="About Risha" />
              <MainPara para="Lorem ipsum dolor sit amet consectetur. Felis vulputate facilisis ut nulla ut mauris metus elementum. Maecenas aliquam ultrices ultrices molestie id id. Nunc diam ipsum eu a dictum semper fermentum. " />
              <MainPara para="Lorem ipsum dolor sit amet consectetur. Felis vulputate facilisis ut nulla ut mauris metus elementum. Maecenas aliquam ultrices ultrices molestie id id. Nunc diam ipsum eu a dictum semper fermentum. " />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        py={7}
        sx={{
          width: "100%",
          backgroundImage: `url(${Background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "color",
          opacity: 1,
        }}
      >
        <Container>
          <Stack spacing={5}>
            <Stack spacing={1} textAlign="center">
              <Typography variant="h4" color="secondary.main" fontWeight={600}>
                What our clients say!
              </Typography>
            </Stack>

            <Grid container spacing={4} marginTop={40}>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
                <TestimonialCard />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
                <TestimonialCard />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
                <TestimonialCard />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
