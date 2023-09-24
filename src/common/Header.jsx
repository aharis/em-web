import React from "react";
import CompanyLogo from "../assets/company-logo.jpg";

const Header = () => {
  return (
    <div className="d-inline-block header">
      <div className="">
        <img src={CompanyLogo} alt="company-logo" className="company-logo" />
      </div>
    </div>
  );
};

export default Header;
