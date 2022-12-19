import React from "react";
interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => (
  <button> {props.label ?? " empty"}</button>
);
export default Button;
