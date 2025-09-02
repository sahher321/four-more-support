// FMSLink.js
import React from "react";
import { Link } from "react-router-dom";

const FMSLink = ({ children }) => {
  // Replace 'FMS' with the Link component
  const modifiedText = children.split("FMS").map((part, index) =>
    index === 1 ? (
      <Link
        to="https://app.astalty.com.au/form/9efbdf3d-9476-41a1-9327-2e5c2bf1a443"
        key={index}
        style={{ textDecoration: "none", color: "#E9BC03" }}
        target="blank"
      >
        FMS
      </Link>
    ) : (
      part
    )
  );

  return <>{modifiedText}</>;
};

export default FMSLink;
