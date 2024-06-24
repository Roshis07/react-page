import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function LeftSidebar() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "white",
        display: isXs ? "none" : "block",
      }}
    >
      <Stack spacing={2}>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 1
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 2
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 3
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 4
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 5
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 6
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 7
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 8
        </Button>
        <Button
          sx={{
            "&:active": {
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "scale(0.98)",
            },
          }}
        >
          Item 9
        </Button>
      </Stack>
    </Box>
  );
}
