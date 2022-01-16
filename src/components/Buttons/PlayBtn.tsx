import { Button, Icon, Text } from "@chakra-ui/react";

import { FaPlay } from 'react-icons/fa'

export function PlayBtn() {
  return(
    <Button bg="white" color="gray.900" size="lg">
      <Icon as={FaPlay} />
      <Text ml="4">Assistir</Text>
    </Button>
  )
}