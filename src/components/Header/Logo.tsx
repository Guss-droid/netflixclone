import Link from "next/link";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export function Logo() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Link href="/" passHref>
      <Flex as="a">
        {isWideVersion ?
          <Image src="/logo.svg" alt="Logo" />
          :
          <Image src="/logo_mobile.svg" alt="Logo" />
        }
      </Flex>
    </Link>
  )
}