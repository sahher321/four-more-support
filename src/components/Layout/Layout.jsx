import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  console.log(openDropdown);

  return (
    <>
      <Header openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      {children}
      <Footer openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
    </>
  );
};

export default Layout;
