import React from "react";
// import { withRouter } from "react-router"
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  VStack,
  Image,
} from "@chakra-ui/react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { useColorMode } from "./ui/color-mode";

// import { ColorModeSwitcher } from "../../../utils/ColorModeSwitcher";

function AppHeader() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <React.Fragment>
      <VStack
        borderBottom={"1px"}
        borderColor="gray.300"
        w="100%"
        h="100px"
        // bg="gray.200"
        bg="{colors.test-header}"
        mb={2}
      >
        <HStack w="100%" h="100%" p="1">
          <HStack>
          <Box style={{ paddingInline: 2 }}>
            <Image
              htmlWidth="43px"  
              // htmlHeight="50px"
              // src="https://i.pravatar.cc/400?u=1"
              src="https://www.mos.ru/upload/structure/institutions/icon/dit2x.png"
            />
          </Box>
          <Box>
            <p style={{fontWeight: 500}}>ДИТ</p>
            <p style={{fontSize: '0.75rem',opacity: 0.5}}>Москва</p>
          </Box>
          </HStack>
          <Spacer />
          <Flex pr="5">
            {/* <Flex> */}
            <SimpleGrid columns={1} gap="16px">
              {/* <ColorModeSwitcher justifySelf="flex-end"/> */}
              {/* <Button>Button 1</Button> */}
              {/* <Button>Button 2</Button>{" "} */}
              <Button variant="ghost"
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
