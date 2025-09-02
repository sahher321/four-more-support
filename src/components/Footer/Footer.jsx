import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Footer2, Footer3, Logo2 } from "../../assets";
import { Link } from "react-router-dom";
import Input from "../Heading/Input";
import emailjs from "@emailjs/browser";
import { IoIosMail } from "react-icons/io";

 

const Footer = ({ setOpenDropdown }) => {
  const handleNDISClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setOpenDropdown("NDIS Services");
    }, 100);
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jbggpme",
        "template_yjo2ufe",
        {
          name: formData.fullName,
          email: formData.email,
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
      <Box sx={{ backgroundColor: "secondary.main" }} paddingY={7}>
        <Container>
          <Stack gap={6}>
            <Grid container spacing={4}>
              {/* Logo and Description */}
              <Grid item size={{ xl: 3, lg: 3, md: 12, sm: 12, xs: 12 }}>
                <Stack gap={2}>
                  <Box width="128px" height="68px">
                    <img src={Logo2} alt="" width="100%" height="100%" />
                  </Box>
                  <Typography fontSize="13px" color="rgba(255, 255, 255, 0.5)">
                    Lorem ipsum dolor sit amet consectetur. Felis vulputate
                    facilisis ut nulla ut mauris metus elementum.
                  </Typography>
                  <Stack direction="row" gap={1}>
                    <Box
                      sx={{
                        width: { xs: "16px", sm: "24px" },
                        height: { xs: "16px", sm: "24px" },
                        backgroundColor: "#FFFFFF",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", // Use this instead of justifyItems
                      }}
                    >
                      <Link
                        to="mailto:info@fourmoresupports.com.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center", // Center icon inside <a>
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <IoIosMail
                          style={{ color: "#002035", fontSize: "14px" }}
                        />
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "16px", sm: "24px" },
                        height: { xs: "16px", sm: "24px" },
                      }}
                    >
                      <a
                         href="https://www.facebook.com/fourmoresupports"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Footer2} alt="Mail" width="100%" />
                      </a>
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "16px", sm: "24px" },
                        height: { xs: "16px", sm: "24px" },
                      }}
                    >
                      <a href="tel:+1234567890" rel="noopener noreferrer">
                        <img src={Footer3} alt="Mail" width="100%" />
                      </a>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>

              {/* Site Map - 1 */}
              <Grid item size={{ xl: 2, lg: 2, md: 12, sm: 12, xs: 12 }}>
                <Typography variant="h6" color="secondary.light" mb={2}>
                  Site Map
                </Typography>
                <Stack spacing={1}>
                  {Links.map((link, index) => {
                    if (link.link === "NDIS") {
                      return (
                        <Typography
                          key={index}
                          onClick={handleNDISClick}
                          fontSize="13px"
                          sx={{
                            padding: "5px 0",
                            color: "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                          }}
                        >
                          {link.link}
                        </Typography>
                      );
                    } else {
                      return (
                        <Link
                          to={link.path}
                          style={{ textDecoration: "none" }}
                          key={index}
                        >
                          <Typography
                            fontSize="13px"
                            sx={{
                              padding: "5px 0",
                              color: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            {link.link}
                          </Typography>
                        </Link>
                      );
                    }
                  })}
                </Stack>
              </Grid>

              {/* Site Map - 2 */}
              <Grid item size={{ xl: 2, lg: 2, md: 12, sm: 12, xs: 12 }}>
                <Typography variant="h6" color="secondary.light" mb={2}>
                  Useful Links
                </Typography>
                <Stack spacing={1}>
                  {Linkstwo.map((link, index) => (
                    <Link
                      to={link.path}
                      style={{ textDecoration: "none" }}
                      key={index}
                    >
                      <Typography
                        fontSize="13px"
                        sx={{
                          padding: "5px 0",
                          color: "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        {link.link}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Contact Details */}
              <Grid item size={{ xl: 2, lg: 2, md: 12, sm: 12, xs: 12 }}>
                <Typography variant="h6" color="secondary.light" mb={2}>
                  Contact Us
                </Typography>
                <Stack spacing={1}>
                  <Typography fontSize="13px" sx={{ color: "secondary.light" }}>
                    Address:
                  </Typography>
                  <Typography
                    fontSize="13px"
                    sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    PO Box 220, Kilburn North SA 5084
                  </Typography>
                  <Typography fontSize="13px" sx={{ color: "secondary.light" }}>
                    Email:
                  </Typography>
                  <Typography fontSize="13px" sx={{ color: "primary.main" }}>
                    info@fourmoresupports.com.au
                  </Typography>
                  <Typography fontSize="13px" sx={{ color: "secondary.light" }}>
                    Phone:
                  </Typography>
                  <a href="tel:+61426393517" style={{ textDecoration: "none" }}>
                    <Typography
                      fontSize="13px"
                      sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                    >
                      +61426393517
                    </Typography>
                  </a>
                </Stack>
              </Grid>

              {/* Contact Form */}
              <Grid
                item
                size={{ xl: 3, lg: 3, md: 12, sm: 12, xs: 12 }}
                paddingLeft={{ xl: "10px", lg: "10px" }}
              >
                <Typography variant="h6" color="primary" mb={2}>
                  Join our mailing list
                </Typography>
                <Stack gap={2} component="form" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    backgroundColor="#0C2D3F"
                    color="rgba(255, 255, 255, 0.5)"
                    height="30px"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.message}
                    onChange={handleInputChange}
                    name="message"
                    backgroundColor="#0C2D3F"
                    color="rgba(255, 255, 255, 0.5)"
                    height="30px"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    backgroundColor="#0C2D3F"
                    color="rgba(255, 255, 255, 0.5)"
                    height="30px"
                  />

                  <Button
                    variant="contained"
                    sx={{
                      width: "fit-content",
                      textTransform: "none",
                      backgroundColor: "primary.main",
                    }}
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Box>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                gap={2}
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" color="rgba(255, 255, 255, 0.5)">
                  ABN 18660144187
                </Typography>
  
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <FooterBottom />
    </>
  );
};

const FooterBottom = () => {
  return (
    <Box backgroundColor="primary.main" paddingY={3}>
      <Container>
        <Typography variant="body1" color="#335469." textAlign="center">
          Copyright@2025.Four More Supports. | Disclaimer | Privacy policy |
          Terms & Conditions
        </Typography>
      </Container>
    </Box>
  );
};
const Links = [
  { link: "Home", path: "/" },
  { link: "NDIS Services", path: "/specialsupportcordination" },
  { link: "About FMS", path: "/about" },
  { link: "NDIS", path: "#" },
  { link: "Contact Us", path: "/contact" },
  { link: "Blog", path: "/blog" },
  { link: "Schedule of Supports", path: "#" },
];
const Linkstwo = [
  { link: "Terms of Use", path: "/termcondition" },
  { link: "Privacy Policy", path: "/privacy" },
  { link: "Complaints and feedback", path: "https://app.astalty.com.au/form/9efbe171-0d94-49d9-bac3-b18019d937f8" },
];

export default Footer;
