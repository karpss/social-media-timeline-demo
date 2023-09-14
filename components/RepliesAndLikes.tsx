import { Text } from "tamagui";

interface RepliesAndLikesProps {
  replies: number;
  likes: number;
}

function RepliesAndLikes({ replies, likes }: RepliesAndLikesProps) {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies · {likes} likes
    </Text>
  );
}

export default RepliesAndLikes;
