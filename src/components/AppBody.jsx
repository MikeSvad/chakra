import React from "react";
// import { withRouter } from "react-router"
import { Text, VStack, HStack } from "@chakra-ui/react";
import AppAside from "./AppAside";
import AppSidebar from "./AppSidebar";

function AppBody() {
  return (
    <React.Fragment>
      <HStack h="calc(100vh - 116px)" w="100%">
        <AppSidebar />
        <VStack
          w="100%"
          // bg="blue.100"
          bg="{colors.test}"
          h="100%"
        >
          <Text>Hello from AppBody</Text>
        </VStack>
        {/* <AppAside  /> */}
      </HStack>
    </React.Fragment>
  );
}

export default AppBody;
