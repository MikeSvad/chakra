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
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt, ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit, qui in ea voluptate velit esse, quam
            nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo
            voluptas nulla pariatur? At vero eos et accusamus et iusto odio
            dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
            atque corrupti, quos dolores et quas molestias excepturi sint,
            obcaecati cupiditate non provident, similique sunt in culpa, qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio, cumque nihil impedit,
            quo minus id, quod maxime placeat, facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut
            et voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
          </Box>
        </Flex>
      </VStack>
    </React.Fragment>
  );
}

export default AppSidebar;
