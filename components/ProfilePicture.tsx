import { Avatar, XStack } from "tamagui";

function ProfilePicture(timelinePost) {
  return (
    <XStack>
      <Avatar
        circular
        size="$3"
      >
        <Avatar.Image
          accessibilityLabel="Profile Picture"
          src={timelinePost.author.photo}
        />
        <Avatar.Fallback
          delayMs={600}
          backgroundColor="$blue10"
        />
      </Avatar>
    </XStack>
  );
}
export default ProfilePicture;
