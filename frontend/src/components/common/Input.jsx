import { TextField, Typography } from "@mui/material";
import React from "react";

const Input = ({ label, type = "text", id, ...props }) => {
  return (
    <>
      <TextField
        label={label}
        id={id}
        name={id}
        type={type}
        {...props}
        required
      />
    </>
  );
};

export default Input;
