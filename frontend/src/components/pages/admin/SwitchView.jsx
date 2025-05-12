import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import Overview from "./Overview";
import Preview from "./Preview";

const SwitchView = ({ course }) => {
  const [view, setView] = useState("overview");

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={view}
        aria-label="View toggle"
        onChange={(e, newView) => setView(newView)}
        fullWidth
      >
        <ToggleButton value="overview">Overview</ToggleButton>
        <ToggleButton value="preview">Preview</ToggleButton>
      </ToggleButtonGroup>

      {view === "overview" ? (
        <Overview course={course} />
      ) : (
        <Preview course={course} />
      )}
    </>
  );
};

export default SwitchView;
