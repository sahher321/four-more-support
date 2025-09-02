import React, { useState } from "react";
import { Banner, Input, MainHeading, MainPara } from "../../components";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { location, maildark, map, phonedark } from "../../assets";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .send(
        "service_jbggpme",
        "template_yjo2ufe",
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
        },
        "b-kGMbT0xdK-3SmTt"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Message failed to send. Please try again.");
      });
  };

  return (
    <>
      <Box paddingY={7}>
        <Container>
          <Stack
            direction={{
              xs: "column", // 0 - 599px
              sm: "column", // 600 - 899px
              md: "column", // 900 - 1199px
              lg: "row", // 1200px and above
              xl: "row",
            }}
            gap={5}
            paddingTop="20px"
          >
            <Stack
              width={{
                xl: "45%",
                lg: "45%",
                xs: "100%",
                sm: "100%",
                md: "100%",
              }}
              gap={3}
            >
              <MainHeading heading="Contact Us" />

              <Stack gap={2}>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box width="30px" height="30px">
                    <img src={location} alt="" width="100%" height="100%" />
                  </Box>
                  <Stack>
                    <MainPara para="PO Box 220, Kilburn " />
                    <MainPara para="North SA 5084" />
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box width="30px" height="30px">
                    <img src={phonedark} alt="" width="100%" height="100%" />
                  </Box>
                  <MainPara para="+61426393517" />
                </Stack>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box width="30px" height="30px">
                    <img src={maildark} alt="" width="100%" height="100%" />
                  </Box>
                  <MainPara para="info@fourmoresupports.com.au" />
                </Stack>
              </Stack>

       
            </Stack>

            <Stack
              component="form"
              onSubmit={handleSubmit}
              width={{
                xl: "55%",
                lg: "55%",
                sm: "100%",
                md: "100%",
                xs: "100%",
              }}
              spacing={2}
            >
              <Grid container spacing={2}>
                <Grid item size={6}>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    backgroundColor="#F1F1F1"
                    color="#002035"
                  />
                </Grid>
                <Grid item size={6}>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    backgroundColor="#F1F1F1"
                    color="#002035"
                  />
                </Grid>
                <Grid item size={6}>
                  <Input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    backgroundColor="#F1F1F1"
                    color="#002035"
                  />
                </Grid>
                <Grid item size={6}>
                  <Input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    backgroundColor="#F1F1F1"
                    color="#002035"
                  />
                </Grid>
                <Grid item size={12}>
                  <textarea
                    name="message"
                    rows="13"
                    cols="50"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "#F1F1F1",
                      padding: "20px",
                      borderRadius: "5px",
                      border: "none",
                      outline: "none",
                      width: "100%",
                      fontSize: "16px",
                      color: "#002035",
                      fontFamily: "Inter",
                    }}
                  />
                </Grid>
                <Grid item size={12} display="grid" justifyContent="end">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width: "max-content",
                      fontSize: "16px",
                      textTransform: "none",
                      marginTop: "10px",
                      width: "fit-content",
                      marginRight: "auto",
                    }}
                    type="submit"
                    size="large"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
