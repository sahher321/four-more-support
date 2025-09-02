import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { Phone, Mail, Linkedin, dropdownimage, logoSvg } from "../../assets";

const subLinks = [
  { name: "Careers", path: "/career" },
  { name: "Fee", path: "#" },
  { name: "Innovations", path: "#" },
  { name: "Brochures", path: "#" },
  { name: "Portal Login", path: "#" },
  { name: "Schedule of Supports", path: "#" },
];

const navigationLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "NDIS Services",
    path: "#",
    dropdown: true,
    items: [
      { label: "Support Coordination", path: "/support" },
      {
        label: "Specialist Support Coordination",
        path: "/specialsupportcordination",
      },
      { label: "Psychosocial Recovery Coaching", path: "/psycho" },
    ],
  },
  {
    label: "About FMS",
    path: "/about",
  },
  {
    label: "Blogs",
    path: "/blog",
  },
  {
    label: "Contact us",
    path: "/contact",
  },
];

const Header = ({ openDropdown, setOpenDropdown }) => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Mobile drawer dropdown state

  const toggleDrawer = (open) => {
    setOpen(open);
    setMobileDropdownOpen(null); // Drawer close hone pe dropdown bhi close ho jaye
  };

  // Toggle dropdown on mobile drawer links
  const toggleMobileDropdown = (label) => {
    if (mobileDropdownOpen === label) {
      setMobileDropdownOpen(null);
    } else {
      setMobileDropdownOpen(label);
    }
  };

  return (
    <>
      <ButtonAppBar />
      <SubNavbar />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "#F1F1F1", boxShadow: "none" }}
        >
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              py={2}
            >
              {/* Logo */}
              <Link to="/">
                <Box sx={{ width: "110px", height: "50px" }}>
                  <img src={logoSvg} alt="Logo" width="100%" />
                </Box>
              </Link>

              {/* Menu Icon (Visible on small screens) */}
              <IconButton
                edge="end"
                sx={{ display: { xs: "block", md: "none" } }}
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon sx={{ color: "secondary.main", fontSize: 30 }} />
              </IconButton>

              {/* Links (Hidden on small screens) */}
              <NavMenu
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            </Stack>
          </Container>
        </AppBar>

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
          <Box
            sx={{ width: 250, bgcolor: "#F1F1F1", height: "100vh", p: 2 }}
            role="presentation"
          >
            <IconButton sx={{ mb: 2 }} onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
            <List>
              {navigationLinks.map(({ label, path, dropdown, items }) => (
                <Box key={label}>
                  {dropdown ? (
                    <>
                      <ListItem
                        button
                        onClick={() => toggleMobileDropdown(label)}
                        sx={{
                          justifyContent: "space-between",
                          paddingLeft: 2,
                          paddingRight: 2,
                          borderBottom:
                            location.pathname === path
                              ? "2px solid #E9BC03"
                              : "none",
                          fontWeight:
                            location.pathname === path ? "bold" : "normal",
                          color: "secondary.main",
                          cursor: "pointer",
                        }}
                      >
                        <ListItemText primary={label} />
                        <Box
                          component="span"
                          sx={{
                            width: 10,
                            height: 5,
                            display: "inline-block",
                            marginBottom: "10px",
                            transition: "transform 0.3s ease",
                            transform:
                              mobileDropdownOpen === label
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        >
                          <img
                            src={dropdownimage}
                            alt="Dropdown Icon"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Box>
                      </ListItem>
                      {mobileDropdownOpen === label &&
                        items.map((item) => (
                          <ListItem
                            key={item.label}
                            sx={{
                              pl: 4,
                              borderBottom:
                                location.pathname === item.path
                                  ? "2px solid #E9BC03"
                                  : "none",
                              fontWeight:
                                location.pathname === item.path
                                  ? "bold"
                                  : "normal",
                            }}
                          >
                            <Link
                              to={item.path}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                                width: "100%",
                              }}
                              onClick={() => toggleDrawer(false)} // Close drawer on click
                            >
                              <Typography variant="body1">
                                {item.label}
                              </Typography>
                            </Link>
                          </ListItem>
                        ))}
                    </>
                  ) : (
                    <ListItem
                      sx={{
                        borderBottom:
                          location.pathname === path
                            ? "2px solid #E9BC03"
                            : "none",
                        fontWeight:
                          location.pathname === path ? "bold" : "normal",
                      }}
                    >
                      <Link
                        to={path}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          width: "100%",
                        }}
                        onClick={() => toggleDrawer(false)} // Close drawer on click
                      >
                        <Typography variant="body1">{label}</Typography>
                      </Link>
                    </ListItem>
                  )}
                </Box>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Stack
            direction="row"
            sx={{
              justifyContent: { xs: "center", sm: "end" },
            }}
          >
            {subLinks.map((link, index) => (
              <Link
                to={link.path}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Typography
                  variant="body1"
                  fontWeight="600"
                  sx={{
                    color: "secondary.main",
                    padding: { xs: "5px", sm: "10px" },
                    fontSize: { xs: "10px", sm: "16px", md: "18px" }, // Responsive font size
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Container>
      </AppBar>
    </Box>
  );
};

const SubNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "secondary.main" }}>
        <Container>
          <Stack
            direction={{ lg: "row", xs: "column" }}
            alignItems="center"
            justifyContent="space-between"
            py={2}
            gap={2} // optional for spacing between rows on mobile
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: { xs: "16px", sm: "24px" },
                  height: { xs: "16px", sm: "24px" },
                }}
              >
                <a
                  href="mailto:info@fourmoresupports.com.au"
                >
                  <img src={Mail} alt="Mail" width="100%" />
                </a>
              </Box>

              <Box
                sx={{
                  width: { xs: "16px", sm: "24px" },
                  height: { xs: "16px", sm: "24px" },
                  backgroundColor: "#FFFFFF",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Use this instead of justifyItems
                }}
              >
                <a
                  href="https://www.facebook.com/fourmoresupports"
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
                  <FaFacebookF style={{ color: "#002035", fontSize: "12px" }} />
                </a>
              </Box>

              <Box
                sx={{
                  width: { xs: "16px", sm: "24px" },
                  height: { xs: "16px", sm: "24px" },
                }}
              >
                <a
                  href="https://www.linkedin.com/company/fourmoresupports"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="LinkedIn" width="100%" />
                </a>
              </Box>

              <Box
                sx={{
                  width: { xs: "16px", sm: "24px" },
                  height: { xs: "16px", sm: "24px" },
                }}
              >
                <a href="tel:+1234567890">
                  <img src={Phone} alt="Phone" width="100%" />
                </a>
              </Box>
            </Stack>

            <Stack direction="row" alignItems="center" gap={{ xs: 2, sm: 5 }}>
              <a href="tel:+61426393517" style={{ textDecoration: "none" }}>
                <Stack
                  direction="row"
                  gap={{ xs: 1, sm: 2 }}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: { xs: "16px", sm: "24px" },
                      height: { xs: "16px", sm: "24px" },
                    }}
                  >
                    <img src={Phone} alt="Phone" width="100%" />
                  </Box>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="primary.light"
                    sx={{ fontSize: { xs: "10px", sm: "16px", md: "18px" } }}
                  >
                    +61426393517
                  </Typography>
                </Stack>
              </a>
              <a
                href="https://app.astalty.com.au/form/9efbdf3d-9476-41a1-9327-2e5c2bf1a443"
                target="blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    padding: { xs: "6px 12px", sm: "8px 16px" },
                    fontSize: { xs: "10px", sm: "16px", md: "18px" },
                  }}
                >
                  Submit a referral
                </Button>
              </a>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

export function NavMenu({ openDropdown, setOpenDropdown }) {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      gap={3}
      sx={{ display: { xs: "none", md: "flex" }, position: "relative" }}
    >
      {navigationLinks.map(({ label, path, dropdown, items }) => (
        <Box
          key={label}
          onMouseEnter={() => dropdown && setOpenDropdown(label)}
          onMouseLeave={() => dropdown && setOpenDropdown(null)}
          sx={{ position: "relative" }}
        >
          <Link to={path} style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                padding: "10px",
                borderBottom:
                  location.pathname === path ? "2px solid #E9BC03" : "none",
                fontWeight: location.pathname === path ? "bold" : "normal",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {label}
              {dropdown && (
                <Box
                  component="span"
                  sx={{
                    width: 10,
                    height: 5,
                    display: "inline-block",
                    marginBottom: "21px",
                  }}
                >
                  <img
                    src={dropdownimage}
                    alt="Dropdown Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              )}
            </Typography>
          </Link>

          {/* Dropdown Items */}
          {dropdown && openDropdown === label && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                width: "300px",
                left: 0,
                backgroundColor: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                zIndex: 1000,
                minWidth: 170,
                borderRadius: 1,
                overflow: "hidden",
                borderBottom:
                  location.pathname === path ? "2px solid #E9BC03" : "none",
                fontWeight: location.pathname === path ? "bold" : "normal",
              }}
            >
              {items.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      padding: "10px 15px",
                      color: "text.primary",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
}
