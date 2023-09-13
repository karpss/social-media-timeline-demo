import { Avatar } from "tamagui";

function UserAvatar() {
  return (
    <Avatar
      circular
      size="$3"
    >
      <Avatar.Image
        accessibilityLabel="Nate Wienert"
        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
      />
      <Avatar.Fallback
        delayMs={600}
        backgroundColor="$blue10"
      />
    </Avatar>
  );
}

export default UserAvatar;
