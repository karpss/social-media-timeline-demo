import { Image, Text, XStack, YStack } from "tamagui";

import { Posts } from "../types/timeline";

import PostHeader from "./PostHeader";
import PostIcons from "./PostIcons";
import ProfilePicture from "./ProfilePicture";
import RepliesAndLikes from "./RepliesAndLikes";

interface TimelinePostsProps {
  timelinePost: Posts;
}

function TimelinePosts({ timelinePost }: TimelinePostsProps) {
  return (
    <XStack space="$3">
      <ProfilePicture {...timelinePost} />
      <YStack>
        <PostHeader
          name={timelinePost.author.name}
          verified={timelinePost.author.verified}
          createdAt={timelinePost.createdAt}
        />
        <Text style={{ width: 300 }}>{timelinePost.content}</Text>
        {timelinePost.image && (
          <Image
            source={{
              uri: timelinePost.image,
              width: 290,
              height: 200
            }}
          />
        )}
        <PostIcons />
        <RepliesAndLikes
          replies={timelinePost.repliesCount}
          likes={timelinePost.likesCount}
        />
      </YStack>
    </XStack>
  );
}

export default TimelinePosts;
