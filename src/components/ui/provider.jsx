

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        "test": {
          value: { _light: "red", _dark: "blue" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
