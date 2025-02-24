/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import './App.css'
import { Theme, Button, HStack, Center, Box, Flex } from "@chakra-ui/react";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import AppFooter from "./components/AppFooter";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Theme appearance="light" colorPalette="green"> */}
        <Box w="100%">
          <AppHeader w="100%" h="100px" />
          <Flex w="100%" bg="blue.200">
            <AppBody />
          </Flex>
          <AppFooter />  
        </Box>
      {/* </Theme> */}
    </>
  );
}

export default App;
