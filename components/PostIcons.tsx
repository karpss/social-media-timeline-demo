import { useColorScheme } from "react-native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { XStack } from "tamagui";

function PostIcons() {
  const iconSize = 20;
  const currentTheme = useColorScheme();
  const iconColor = currentTheme === "dark" ? "white" : "black";
  return (
    <XStack
      space="$9"
      paddingTop="$space.3"
    >
      <Ionicons
        name="chatbubble-outline"
        size={iconSize}
        color={iconColor}
      />
      <AntDesign
        name="retweet"
        size={iconSize}
        color={iconColor}
      />
      <MaterialCommunityIcons
        name="email-send-outline"
        size={iconSize}
        color={iconColor}
      />
      <FontAwesome
        name="heart-o"
        size={iconSize}
        color={iconColor}
      />
    </XStack>
  );
}

export default PostIcons;
