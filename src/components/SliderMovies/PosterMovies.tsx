import { Flex, Icon, Progress } from "@chakra-ui/react";
import { ElementType } from 'react'

interface ISliderContent {
  icon?: ElementType;
  image: string;
}

export function PosterMovies({ icon, image,  }: ISliderContent) {
  return (
    <Flex direction="column" align="center">

      <Flex
        w="305px"
        h="575"
        bgImage={image}
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify="flex-end"
        ml="3"
        direction="row"
      >
        {icon && <Icon as={icon} fontSize="48" />}
      </Flex>
    </Flex>
  )
}