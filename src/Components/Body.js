import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Post } from "./Post";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Body() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <LeftSidebar />
      <Post />
      <RightSidebar>right-sidebar</RightSidebar>
    </Stack>
  );
}
