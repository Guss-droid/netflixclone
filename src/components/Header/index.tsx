import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Logo } from "./Logo";
import { MenuItens } from "./MenuItens";
import { Profile } from "./Profile";

export function Header() {

  const router = useRouter()

  return (
    <Flex
      mx="auto"
      align="center"
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      px="6"
    >
      {router.asPath === '/' ? <Logo /> :
        <>
          <Logo />
          <MenuItens />
          <Flex ml="auto" mt="2">
            <Profile />
          </Flex>
        </>
      }
    </Flex>
  )
}