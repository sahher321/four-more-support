import React from "react";
import {
  Banner,
  CareerCard,
  MainHeading,
  Input,
  MainPara,
} from "../../components";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import {
  cardImage10,
  cardImage11,
  cardImage9,
  noJob,
  search,
} from "../../assets";

const Career = () => {
  return (
    <>
      {/* <Banner
        head="Find career that fits your ambitions only at"
        para="Our vision for NDIS Care
"
      /> */}
      <Box paddingY={7}>
        <Container>
          <Grid container spacing={7}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
              <CareerCard image={cardImage9} head="Current Vacancies" />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
              <CareerCard image={cardImage10} head="Graduation Programs" />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
              <CareerCard image={cardImage11} head="NDIS Services Delivery" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container>
          <Grid container spacing={2} alignItems="center">
            {/* Search Input - 6 columns */}
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
              sx={{ position: "relative" }}
            >
              <Input
                type="name"
                placeholder="Search job title here"
                backgroundColor="#F1F1F1"
                color="#002035"
              />
              <img
                src={search}
                width="20px"
                height="20px"
                style={{ position: "absolute", top: "18px", right: "15px" }}
              />
            </Grid>

            {/* Empty Space - 4 columns */}
            <Grid item size={{ xs: 0, sm: 1, md: 2, lg: 3, xl: 3 }}></Grid>

            {/* Button Stack - 2 columns */}
            <Grid item size={{ xs: 12, sm: 5, md: 4, lg: 3, xl: 3 }}>
              <Stack spacing={1} direction="row">
                <Button
                  variant="contained"
                  color="secondary"
                  className="hoverTarget"
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                    textTransform: "none",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                >
                  Job Alert
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="hoverTarget"
                  sx={{
                    width: "100%",
                    fontSize: "16px",
                    textTransform: "none",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    padding: "15px",
                  }}
                >
                  Next Job
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box paddingY={5}>
        <Container>
          <Stack gap={2}>
            <MainHeading heading="Careers at FMS" />
            {/* <Stack gap={3}>
              {Array.from({ length: 1 }).map((_, index) => (
                <Box
                  sx={{
                    backgroundColor: "secondary.light",
                    p: {
                      xs: 1,
                      sm: 1,
                      md: 5,
                    },
                  }}
                >
                  <Stack width="90%" gap={3}>
                    <Typography
                      variant="h4"
                      color="secondary.main"
                      fontWeight={600}
                    >
                      Affirmative Measure (Disability Only)
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={300}
                      color="secondary.main"
                      borderBottom="1px solid #000000"
                      paddingBottom={1}
                    >
                      Any upcoming opportunity
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: "max-content",
                        fontSize: "16px",
                        textTransform: "none",
                        color: "secondary.main",
                      }}
                      size="large"
                    >
                      Apply
                    </Button>
                  </Stack>
                </Box>
              ))}
            </Stack> */}
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap={3}
            >
              <Box width="200px" height="200px">
                <img src={noJob} alt="" width="100%" height="100%" />
              </Box>
              <MainHeading heading="Welcome to FMS" textAlign="center" />
              <MainPara para="No job opportunity now" />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Career;
