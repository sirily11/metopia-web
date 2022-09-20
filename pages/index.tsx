import type { NextPage } from "next";
import Image from "next/image";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Stack, Typography } from "@mui/material";

const Home: NextPage = () => {
  const { width, height } = useWindowSize(3840, 2160);

  return (
    <Stack justifyContent={"center"} display="flex" alignItems={"center"}>
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={2000}
      />
      <Image src={"/image.webp"} width={1000} height={1000} />
      <Typography variant="h1" fontWeight={"800"}>
        You got an NFT
      </Typography>
    </Stack>
  );
};

export default Home;
