import { Flex, Icon, Progress } from "@chakra-ui/react";
import { ElementType } from 'react'

interface ISliderContent {
  icon?: ElementType;
  image: string;
}

export function PosterMovies({ icon, image, }: ISliderContent) {
  return (
    <Flex direction="column" align="center">

      <Flex
        w={["155px", "155px", "305px"]}
        h="575"
        bgImage={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify="flex-end"
        ml="3"
        direction="row"
        cursor="pointer"
        _hover={{
          transition: "transform .5s",
          transform: "scale(1.2)",
          msTransform: "scale(1.2)",
          webkitTransform: "scale(1.2)",
        }}
      >
        {icon && <Icon as={icon} fontSize="48" />}
      </Flex>
    </Flex>
  )
}