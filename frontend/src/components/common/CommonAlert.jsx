import { Alert } from "@mui/material";
import React from "react";

const CommonAlert = ({ severity, children, icon = null, variant }) => {
  return (
    <Alert
      icon={icon || <CheckIcon fontSize="inherit" />}
      variant={variant || "filled"}
      severity={severity}
    >
      {children}
    </Alert>
  );
};

export default CommonAlert;
