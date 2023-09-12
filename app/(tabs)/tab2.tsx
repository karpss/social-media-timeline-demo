import { H5, Tabs, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function Tab2() {
  return (
    <MyStack>
      <Tabs
        defaultValue="index"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.List>
          <Tabs.Tab value="index">
            <Text>SubTab 1</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab2">
            <Text>SubTab 2</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab3">
            <Text>SubTab 3</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content value="index">
          <H5>SubTab 1 Content</H5>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <H5>SubTab 2 Content</H5>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <H5>SubTab 3 Content</H5>
        </Tabs.Content>
      </Tabs>
    </MyStack>
  );
}
