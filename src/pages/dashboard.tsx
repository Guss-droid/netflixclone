import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { BannerImg } from "../components/Dashboard/BannerImg";
import { Dash } from "../components/Dashboard";
import { Footer } from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Netflix</title>
      </Head>

      <Flex direction="column">
        <BannerImg />
        <Dash />
        <Footer />
      </Flex>
    </>
  )
}