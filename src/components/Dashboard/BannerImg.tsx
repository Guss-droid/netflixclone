import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { InfoImg } from "./InfoImg";
import { InfoImgMobile } from "./InfoImgMobile";

export function BannerImg() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w={["200%", "100%"]}
      h="810"
      bgImage={[
        "/images/moviePoster_mobile.svg",
        "/images/moviePoster_mobile.svg",
        "/images/moviePoster.svg"
      ]}
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
        {isWideVersion ?
          <InfoImg />
          :
          <>
            <Flex align="center" justify="center" w="100%" h="220vh" mt="80vh">
              <InfoImgMobile />
            </Flex>
          </>
        }
      </Flex>
    </Flex>
  )
}