import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Index() {
  return (
    <Stack justifyContent={"center"} alignItems="center" height={"100vh"}>
      <video
        src="https://pub-37a096d288074149a469e20bf3e489b8.r2.dev/73.MP4"
        width={"100%"}
        height={"100%"}
        controls
      />
    </Stack>
  );
}
