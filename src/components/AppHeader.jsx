import React from "react";
// import { withRouter } from "react-router"
import {
  Box,
  VStack,
  Center,
  HStack,
  Spacer,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AsideSwitcher } from "./AsideSwitcher";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useColorMode } from "./ui/color-mode"

// import { ColorModeSwitcher } from "../../../utils/ColorModeSwitcher";

function AppHeader(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <React.Fragment>
      <VStack
        borderBottom={"1px"}
        borderColor="gray.300"
        w="100%"
        h="100px"
        bg="gray.200"
      >
        <HStack w="100%" h="100%" p="1">
          <Box w="400px" h="100%" bg="pink" rounded="md">
            <Center h="100%">Logo is here</Center>
          </Box>
          <Spacer />
          <Flex pr="5">
            {/* <Flex> */}
            <SimpleGrid columns={2} gap="16px">
              {/* <ColorModeSwitcher justifySelf="flex-end"/> */}
              <Button>Button 1</Button>
              {/* <Button>Button 2</Button>{" "} */}
              <Button
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{ boxShadow: "none" }}
                w="fit-content"
              >
                {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
              </Button>
              {/* <div style={{width:20, height: 20, background: 'blue'}}/> */}
              {/* <AsideSwitcher  /> */}
            </SimpleGrid>
            {/* </Flex> */}
          </Flex>
        </HStack>
      </VStack>
    </React.Fragment>
  );
}

export default AppHeader;
