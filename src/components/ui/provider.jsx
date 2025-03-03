

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        "test": {
          value: { _light: "#f0f0f0", _dark: "#111527" },
        },
        "test-header": {
          value: { _light: "#f0f0f0", _dark: "#111527" },
        },
        "test-footer": {
          value: { _light: "#f0f0f0", _dark: "#111527" },
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
