import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Link href="/" passHref>
      <Flex as="a">
        <Image src="/logo.svg" alt="Logo" />
      </Flex>
    </Link>
  )
}