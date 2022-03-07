import { ElementType } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";

interface IFooterIcon {
  icon: ElementType;
  text: string;
  isActive?: boolean;
}

export function FooterIcon({ icon, text, isActive = false }: IFooterIcon) {
  return (
    <Flex
      as="button"
      flexDir="column"
      align="center"
      fontWeight={isActive ? "700" : "normal"}
      mx="10"
    >
      <Icon as={icon} fontSize={["36", "32", "24"]} />
      <Text fontSize={["22", "18", "14"]}>{text}</Text>
    </Flex>
  )
}