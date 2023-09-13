/*eslint-disable*/
import { Text, XStack, YStack, View,Stack, Avatar, Image} from "tamagui";
import { MaterialIcons, Feather, Ionicons, AntDesign, FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import ProfilePicture from "./ProfilePicture";
import PostHeader from "./PostHeader";


function TimelinePosts ({timelinePost})  {
  return (
    <XStack space="$3">
    <ProfilePicture {...timelinePost} />
      <YStack >
        <PostHeader
          name={timelinePost.author.name}
          verified={timelinePost.author.verified}
          createdAt={timelinePost.createdAt}
        />
         <Text style={{width: 300}}>{timelinePost.content}</Text>
         {timelinePost.image && (
          <Image
          source={{
            uri: timelinePost.image,
            width: 290,
            height: 200,
          }}
          />
        )}
        <PostIcons />
         <RepliesAndLikes replies={timelinePost.repliesCount} likes={timelinePost.likesCount} />
      </YStack>
      </XStack>
  )
}



export default TimelinePosts;






function PostIcons() {
  const iconSize = 20;
  const currentTheme = useColorScheme();
  const iconColor = currentTheme === "dark" ? "white" : "black";
  return (
    <XStack space="$9" paddingTop="$space.3">
      
      <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
      <AntDesign name="retweet" size={iconSize} color={iconColor} />
      <MaterialCommunityIcons name="email-send-outline" size={iconSize} color={iconColor} />
      <FontAwesome name="heart-o" size={iconSize} color={iconColor} />
    </XStack>
  );
}

function RepliesAndLikes({ replies, likes }: { replies: number; likes: number }) {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies · {likes} likes
    </Text>
  );
}

