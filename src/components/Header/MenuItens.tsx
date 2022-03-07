import { Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function MenuItens() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex ml="12">
      {isWideVersion ?
        <Stack direction="row" spacing="6">
          <Text fontWeight="700">Início</Text>
          <Text>Séries</Text>
          <Text>Filmes</Text>
          <Text>Popular</Text>
          <Text>Lista</Text>
        </Stack>
        :
        <Stack direction="row" spacing="16">
          <Text fontSize={["26", "22", "18"]}>Séries</Text>
          <Text fontSize={["26", "22", "18"]}>Filmes</Text>
          <Text fontSize={["26", "22", "18"]}>Lista</Text>
        </Stack>
      }
    </Flex>
  )
}