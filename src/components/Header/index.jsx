import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="px-2 bg-pinked rounded-sm border-gray-border row-start-1 row-end-2 col-start-1 col-end-3">
      <img src={logo} />
    </div>
  );
};

export default Header;
// 1px solid #b9b9b9
