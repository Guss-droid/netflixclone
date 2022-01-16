import Head from "next/head";
import { Flex, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import { CardProfile } from "../components/CardProfile";
import { ProfileManageBtn } from "../components/Buttons/ProfileManageBtn";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Netflix</title>
      </Head>

      <Flex w="100%" h="80vh" justify="center" align="center" direction="column">
        <Heading mb="10" fontWeight="500">Quem está assistindo ?</Heading>
        <Grid
          templateColumns={["1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          mx="auto"
          maxW="1160px"
          gap={[1, 5]}
        >
          <GridItem>
            <CardProfile
              href="/dashboard"
              passHref
              name="Robert"
              image="/images/profileHappy.svg"
            />
          </GridItem>

          <GridItem>
            <CardProfile
              href="/dashboard"
              passHref
              name="Gina"
              image="/images/profileChild.svg"
            />
          </GridItem>

          <GridItem>
            <CardProfile
              href="/dashboard"
              passHref
              image="/images/profileNinja.svg"
              name="Tony"
            />
          </GridItem>

          <GridItem>
            <CardProfile
              href="/dashboard"
              passHref
              image="/images/profileHeroG.svg"
              name="Gustavo"
            />
          </GridItem>

          <GridItem>
            <CardProfile
              href="/"
              passHref
              image="/images/options.svg"
              name="Adicionar Perfil"
            />
          </GridItem>
        </Grid>

        <Flex mt="50px">
          <ProfileManageBtn />
        </Flex>
      </Flex>
    </>
  )
}
