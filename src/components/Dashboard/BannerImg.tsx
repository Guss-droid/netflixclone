import { Flex } from "@chakra-ui/react";

import { InfoImg } from "./InfoImg";

export function BannerImg() {
  return (
    <Flex
      w="100%"
      h="810"
      bgImage="/images/moviePoster.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        align="center"
        justify="flex-start"
        mx="auto"
        w="100%"
        px="20"
      >
        <InfoImg />
      </Flex>
    </Flex>
  )
}