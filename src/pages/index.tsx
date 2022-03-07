import Head from "next/head";
import { Flex, Grid, Heading, useBreakpointValue } from "@chakra-ui/react";
import { CardProfile } from "../components/CardProfile";
import { ProfileManageBtn } from "../components/Buttons/ProfileManageBtn";

export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Head>
        <title>Home | Netflix</title>
      </Head>

      <Flex
        w={["210%", "100%"]}
        h="100vh"
        justify={["", "center", "center"]}
        align="center"
        direction="column"
      >
        {isWideVersion &&
          <Heading
            mb="10"
            fontWeight="500"
          >
            Quem está assistindo ?
          </Heading>
        }

        <Grid
          templateColumns={["1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
          width="100%"
          mx="auto"
          mt={[28, 20, 0]}
          maxW={["500px", "600px", "1160px"]}
          gap={[1, 5]}
        >

          <CardProfile
            href="/dashboard"
            passHref
            name="Robert"
            image="/images/profileHappy.svg"
          />

          <CardProfile
            href="/dashboard"
            passHref
            name="Gina"
            image="/images/profileChild.svg"
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

        </Grid>

        {isWideVersion &&
          <Flex mt="50px">
            <ProfileManageBtn />
          </Flex>
        }
      </Flex>
    </>
  )
}
