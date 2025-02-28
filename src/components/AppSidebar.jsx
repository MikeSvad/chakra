import React from "react";
// import { withRouter } from "react-router"
import { Text, VStack, Box, Button, Flex } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

function AppSidebar(props) {
  const [size, setSize] = React.useState(250);
  const [iconName, setIconName] = React.useState(RiArrowLeftLine);

  const togglePanel = () => {
    setSize(size == 50 ? 250 : 50);
    setIconName(size == 50 ? RiArrowLeftLine : RiArrowRightLine);
  };

  return (
    <React.Fragment>
      <VStack
        h="100%"
        w={size + "px"}
        bg="red.200"
        style={{ minWidth: size + "px", maxWidth: size + "px" }}
      >
        <Box  h="40px" align={"end"} p="1">
          <Button w="fit-content"
            onClick={togglePanel}
            size="xs"
            // leftIcon={iconName}
          >
            {" "}
            {iconName}
          </Button>
        </Box>
        {size!= 50 && <Text>Hello from AppSidebar</Text>}
        <Flex minH={0}>
          <Box w={'100%'} overflow={'auto'} scrollbarGutter={'stable'} bg={'yellow'} padding={2}
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'black',
              borderRadius: '24px',
            },
          }}
          >
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            
          </Box>
        </Flex>
      </VStack>
    </React.Fragment>
  );
}

export default AppSidebar;
