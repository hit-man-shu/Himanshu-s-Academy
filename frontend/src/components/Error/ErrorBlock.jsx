import { Alert, AlertTitle, Box } from "@mui/material";

export function ErrorBlock({ title, description }) {
  return (
    <Alert severity="error" sx={{ borderRadius: 2, p: 2, mx: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          height: "100%",
          fontWeight: "bold",
        }}
      >
        <AlertTitle>Error</AlertTitle>
        <Box sx={{ fontWeight: "bold", mb: 0.5 }}>{title}</Box>
        {description && (
          <Box sx={{ fontWeight: "normal", color: "text.secondary" }}>
            {description}
          </Box>
        )}
      </Box>
    </Alert>
  );
}
