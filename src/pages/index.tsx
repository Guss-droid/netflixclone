import Head from "next/head";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { CardProfile } from "../components/CardProfile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Netflix</title>
      </Head>

      <Flex w="100%" h="80vh" justify="center" align="center" direction="column">
        <Heading mb="10" fontWeight="500">Quem está assistindo ?</Heading>
        <Stack direction="row" spacing="10">
          <CardProfile
            href="/dashboard"
            passHref
            name="Robert"
            image="/images/profileHappy.svg"
          />

          <CardProfile
            href="/dashboard"
            passHref
            image="/images/profileNinja.svg"
            name="Tony"
          />
          
          <CardProfile
            href="/dashboard"
            passHref
            image="/images/profileHeroG.svg"
            name="Gustavo"
          />
          
          <CardProfile
            href="/"
            passHref
            image="/images/options.svg"
            name="Adicionar Perfil"
          />
        </Stack>
      </Flex>
    </>
  )
}
