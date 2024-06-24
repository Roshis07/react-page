import * as React from "react";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function RightSidebar() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  if (isXs) {
    return null; // Return null to hide the RightSidebar on xs screens
  }

  return (
    <Stack
      alignItems="center"
      sx={{
        flex: 1,
        backgroundColor: "red",
        padding: theme.spacing(2),
      }}
    >
      <h3>Right Sidebar</h3>
      <p>Content goes here...</p>
    </Stack>
  );
}
