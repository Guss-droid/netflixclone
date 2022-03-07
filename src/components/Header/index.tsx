import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Logo } from "./Logo";
import { MenuItens } from "./MenuItens";
import { Profile } from "./Profile";

export function Header() {

  const router = useRouter()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      mx="auto"
      align="center"
      justify={["center", "center", "left"]}
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
          {isWideVersion &&
            <Flex ml="auto" mt="2">
              <Profile />
            </Flex>
          }
        </>
      }
    </Flex>
  )
}