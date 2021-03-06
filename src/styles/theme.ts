import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#141414",
      "800": "#FFFFFF4D",
      "700": "#808080",
      "500": "#6D6D6EB3",
      "400": "#E5E5E5",
    },
    netflix: "#B9090B"
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans'
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white'
      }
    }
  },
})