import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { white } from "../../utils/colors";
import UserAvatar from "../../utils/userAvatar";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: white,
        tabBarStyle: { backgroundColor: "black" },
        headerShown: true,
        headerTintColor: white,
        headerStyle: {
          backgroundColor: "black"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab 1",
          headerTitleAlign: "center",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="home"
                {...props}
              />
            );
          },
          headerLeft() {
            return <UserAvatar />;
          }
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "Tab 2",
          headerTitleAlign: "center",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="feature-search-outline"
                {...props}
              />
            );
          },
          headerLeft() {
            return <UserAvatar />;
          }
        }}
      />
      <Tabs.Screen
        name="tab3"
        options={{
          title: "Tab 3",
          headerTitleAlign: "center",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="bell-ring"
                {...props}
              />
            );
          },
          headerLeft() {
            return <UserAvatar />;
          }
        }}
      />
      <Tabs.Screen
        name="tab4"
        options={{
          title: "Tab 4",
          headerTitleAlign: "center",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="message-badge"
                {...props}
              />
            );
          },
          headerLeft() {
            return <UserAvatar />;
          }
        }}
      />
    </Tabs>
  );
}
