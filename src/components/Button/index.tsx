import React from "react";
import image from "./LogoBiodiversiteQuebec2.png";
import "./bt.css";
interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => (
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "blue" }}>
    <img
      src={image}
      style={{ display: "block", width: "400px", height: "300px" }}
    />
  </div>
);
export default Button;
