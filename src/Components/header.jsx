import React from "react";
import Org from "../assets/Digital_India.png";
import logo from "../assets/logo_ceg.png";
import GOI from "../assets/GOI_King.png";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#dafef9",
        paddingBottom: ".4rem",
        paddingTop: ".4rem",
        borderBottom:'1px solid aqua',
        boxShadow:'0 1px 5px #dafef9'
      }}
    >
      <img
        src={logo}
        style={{
          height: "50px",
          marginLeft: "1.8rem",
        }}
      />
      <div>
        <img
          src={GOI}
          style={{
            height: "50px",
            marginLeft: "12rem",
          }}
        />

        <h5>Center For E-Governance Solutions Group New Delhi</h5>
      </div>
      <img
        src={Org}
        style={{
          height: "50px",
          marginRight: "1.8rem",
        }}
      />
    </div>
  );
}
export default Header;
