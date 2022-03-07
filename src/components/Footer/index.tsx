import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

import { FooterIcon } from "./FooterIcon";

import { AiOutlineHome } from "react-icons/ai";
import { BsCollectionPlay, BsDownload } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi"

export function Footer() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      {isWideVersion ?
        <Flex mt="55px">
          <Image src="/images/footer.svg" alt="footer" />
        </Flex>
        :
        <Flex
          as="footer"
          bg="gray.900"
          w="100%"
          h="10vh"
          justify="center"
          align="center"
          mt="79vh"
          position="fixed"
        >
          <FooterIcon icon={AiOutlineHome} text="Home" isActive />
          <FooterIcon icon={RiSearchLine} text="Pesquisar" />
          <FooterIcon icon={BsCollectionPlay} text="Em breve" />
          <FooterIcon icon={BsDownload} text="Downloads" />
          <FooterIcon icon={GiHamburgerMenu} text="Mais" />
        </Flex>
      }
    </>
  )
}