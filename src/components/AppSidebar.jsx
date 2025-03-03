import React from "react";
// import { withRouter } from "react-router"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot, Box, Button, Flex, Icon, List, Text, VStack,
} from "@chakra-ui/react";
import { LuAlarmClock, LuChartBarStacked, LuTags } from "react-icons/lu";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
const styleListItem = {
  paddingLeft: 30,
  lineHeight: '40px',
  background: 'rgba(255,255,255, 0.05)'
}

const listItemContent=(onClick) => <List.Root style={{listStyleType: 'none',}}>
<List.Item style={styleListItem} onClick={(e)=>{onClick('form')}}>
  Lorem ipsum dolor
</List.Item>
<List.Item style={styleListItem} onClick={(e)=>{onClick('form2')}}>
  Assumenda 1
</List.Item>
<List.Item style={styleListItem}>
  Quidem quis sed
</List.Item>
</List.Root>;

const items =(onClick)=> [
  {
    value: "a",
    title: "First Item",
    text: listItemContent(onClick),
    icon: <LuTags />,
  },
  {
    value: "b",
    title: "Second Item",
    text: listItemContent(onClick),
    icon: <LuChartBarStacked />,
  },
  {
    value: "c",
    title: "Third Item",
    text: listItemContent(onClick),
    icon: <LuAlarmClock />,
  },
  {
    value: "d",
    title: "First Item",
    text: listItemContent(onClick),
    icon: <LuTags />,
  },
  {
    value: "e",
    title: "Second Item",
    text: listItemContent(onClick),
    icon: <LuChartBarStacked />,
  },
  {
    value: "f",
    title: "Third Item",
    text: listItemContent(onClick),
    icon: <LuAlarmClock />,
  },
];

function AppSidebar({onClickMenuItem}) {
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
        bg="{colors.test}"
        style={{ minWidth: size + "px", maxWidth: size + "px" }}
      >
        <Box h="40px" align={"end"} p="1" w="100%">
          <Button variant="ghost"
            w="100%"
            onClick={togglePanel}
            size="xs"
            // leftIcon={iconName}
          >
            {" "}
            {iconName}
          </Button>
        </Box>
        {size != 50 && <Text>Hello from AppSidebar</Text>}
        <Flex minH={0} w={"100%"}>
          <Box
            w={"100%"}
            overflow={"auto"}
            scrollbarGutter={"stable"}
            padding={2}
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "black",
                borderRadius: "24px",
              },
            }}
          >
            <AccordionRoot collapsible multiple>
              {items(onClickMenuItem).map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionItemTrigger>
                    <Icon fontSize="lg" color="fg.subtle">
                      {item.icon}
                    </Icon>
                    {item.title}
                  </AccordionItemTrigger>
                  <AccordionItemContent>{item.text}</AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </Box>
        </Flex>
      </VStack>
    </React.Fragment>
  );
}

export default AppSidebar;
