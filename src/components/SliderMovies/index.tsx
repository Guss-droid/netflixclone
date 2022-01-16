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
        w="305px"
        h="171"
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
      {isWatching && (
        <Progress
          value={progress}
          bg="gray.800"
          width="175px"
          colorScheme="red"
          height="3px"
          mt="2"
        />
      )}
    </Flex>
  )
}