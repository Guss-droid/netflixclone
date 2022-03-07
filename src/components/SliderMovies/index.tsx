import { Flex, Icon, Progress } from "@chakra-ui/react";
import { ElementType } from 'react'

interface ISliderContent {
  icon?: ElementType;
  image: string;
  isWatching?: boolean;
  progress?: number
}

export function SliderMovies({ icon, image, isWatching = false, progress }: ISliderContent) {
  return (
    <Flex direction="column" align="center">

      <Flex
        w={["182px", "182px", "305px"]}
        h="171"
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
      {
        isWatching && (
          <Progress
            value={progress}
            bg="gray.800"
            width={["110px", "110px", "175px"]}
            colorScheme="red"
            height="3px"
            mt="2"
          />
        )
      }
    </Flex >
  )
}