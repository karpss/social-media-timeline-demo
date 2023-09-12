import { Button, YStack } from "tamagui";

import { MyStack } from "./MyStack";

export default function Home() {
  return (
    <MyStack>
      <YStack space="$2.5">
        <Button onPress={() => "/tabs"}>Go to tabs page</Button>
      </YStack>
    </MyStack>
  );
}
