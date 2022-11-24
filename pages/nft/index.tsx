import type { NextPage } from "next";
import Image from "next/image";
import Confetti from "react-confetti";
import { Box, Stack, Typography } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";

const Home: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <Box display={"inline-block"}>
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={2000}
        style={{ position: "absolute" }}
      />
      <Stack
        justifyContent={"center"}
        display="flex"
        alignItems={"center"}
        position="absolute"
        zIndex={1000}
        width={"100%"}
      >
        <Image
          src={"/image.webp"}
          width={0.7 * width}
          height={0.7 * height}
          objectFit={"contain"}
        />
        <Typography variant="h1" fontWeight={"800"}>
          You got an NFT
        </Typography>
      </Stack>
    </Box>
  );
};

export default Home;
