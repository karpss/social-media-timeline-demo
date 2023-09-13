import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Text, XStack } from "tamagui";

import { formatTime } from "../utils/formatTime";

interface PostHeaderProps {
  name: string;
  createdAt: string;
  verified: boolean;
}

function PostHeader({ name, createdAt, verified }: PostHeaderProps) {
  return (
    <XStack
      space="$17"
      spaceDirection="horizontal"
    >
      <XStack>
        <Text style={{ color: "white" }}>{name}</Text>
        {verified && (
          <MaterialIcons
            name="verified"
            size={14}
            color="#60a5fa"
          />
        )}
      </XStack>
      <XStack>
        <Text style={{ color: "gray" }}>{formatTime(createdAt)}</Text>

        <Feather
          name="more-horizontal"
          size={14}
          color="gray"
        />
      </XStack>
    </XStack>
  );
}
export default PostHeader;
