import type { NextPage } from "next";
import Image from "next/image";
import Confetti from "react-confetti";
import {
  Box,
  Card,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";

const Home: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <Stack justifyContent={"center"} alignItems="center" height={"100vh"}>
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={2000}
        style={{ position: "absolute" }}
      />
      <Card sx={{ borderRadius: 10, zIndex: 1000 }}>
        <Stack p={10} justifyContent="center" alignItems={"center"} spacing={2}>
          <Typography variant="h4">Congratulations!</Typography>
          <Stack direction={"row"}>
            <Image
              src={"/mylink.png"}
              width={0.4 * width}
              height={0.4 * height}
              objectFit={"contain"}
            />
            <Divider orientation="vertical" flexItem />
            <Image
              src={"/curpon.svg"}
              width={0.4 * width}
              height={0.4 * height}
              objectFit={"contain"}
            />
          </Stack>
          <Typography variant="h1">You got an NFT</Typography>
          <Link fontSize={40} href="https://l.mylinkapp.hk/eniw">
            Open in MyLink App
          </Link>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Home;
