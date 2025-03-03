import React from "react";
// import { withRouter } from "react-router"
import { Text, VStack, HStack } from "@chakra-ui/react";
import ExampleForm from "./ExampleForm";
import AppSidebar from "./AppSidebar";

function AppBody() {
 const [contentName, setContentName] = React.useState(null);

 
 const onClickMenuItem=(itemName)=>{
   setContentName(itemName)
 }
  return (
    <React.Fragment>
      <HStack h="calc(100vh - 116px)" w="100%">
        <AppSidebar onClickMenuItem={onClickMenuItem} />
        <VStack
          w="100%"
          // bg="blue.100"
          bg="{colors.test}"
          h="100%"
        >
         {contentName==='form'?<ExampleForm/> : <Text>Hello from AppBody</Text>}
        </VStack>
        {/* <AppAside  /> */}
      </HStack>
    </React.Fragment>
  );
}

export default AppBody;
