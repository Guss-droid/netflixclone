import { Link as LinkUi } from "@chakra-ui/react";
import Link from "next/link";

export function ProfileManageBtn() {
  return (
    <Link href="/" passHref>
      <LinkUi
        as="a"
        px="5"
        textDecoration="none"
        border="1px"
        borderColor="gray.700"
        color="gray.700"
        fontSize="24"
        fontWeight="normal"
      >
        Gerenciar Perfis
      </LinkUi>
    </Link>
  )
}