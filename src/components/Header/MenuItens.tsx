import { Flex, Stack, Text } from "@chakra-ui/react";

export function MenuItens() {
  return (
    <Flex ml="12">
      <Stack direction="row" spacing="6">
        <Text fontWeight="700">Início</Text>
        <Text>Séries</Text>
        <Text>Filmes</Text>
        <Text>Popular</Text>
        <Text>Lista</Text>
      </Stack>
    </Flex>
  )
}