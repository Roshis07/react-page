import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function LeftSidebar() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "white",
        display: isXs ? "none" : "block",
      }}
    >
      <Stack spacing={2}>
        {[...Array(9).keys()].map((item) => (
          <Button
            key={item}
            sx={{
              "&:active": {
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
                transform: "scale(0.98)",
              },
            }}
          >
            Item {item + 1}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
