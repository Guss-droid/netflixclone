import { Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";

import { PlayBtn } from "../Buttons/PlayBtn";

import { BsInfoCircle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

export function InfoImgMobile() {
  return (
    <Flex flexDir="column" justify="space-between" h="16vh" align="center">
      <Flex align="center">
        <Image
          src="/images/top10Icon.svg"
          alt="top10 icon"
          w="10"
          h="10"
        />
        <Text ml="4" fontWeight="700" fontSize="24">#2 no Brasil</Text>
      </Flex>

      <Flex>
        <Stack spacing="10" direction="row">

          <Flex flexDir="column" align="center">
            <Icon as={FaPlus} fontSize="20" />
            <Text fontSize="20">Minha lista</Text>
          </Flex>

          <PlayBtn />

          <Flex flexDir="column" align="center">
            <Icon as={BsInfoCircle} fontSize="20" />
            <Text fontSize="20">Info</Text>
          </Flex>

        </Stack>
      </Flex>
    </Flex>
  )
}