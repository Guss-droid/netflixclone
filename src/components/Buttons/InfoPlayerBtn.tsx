import { Button, Icon, Text } from "@chakra-ui/react";

import { AiOutlineInfoCircle } from 'react-icons/ai'

export function InfoPlayerBtn() {
  return (
   <Button
      bg="gray.800"
      color="white"
      size="lg"
      _hover={{ bg: 'gray.800'}}
    >
      <Icon as={AiOutlineInfoCircle} fontSize="22" />
      <Text ml="4">Mais Informações</Text>
    </Button>
  )
}