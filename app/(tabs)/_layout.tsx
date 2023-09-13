import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import UserAvatar from "../../components/UserAvatar";
import { white } from "../../utils/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: white,
        tabBarStyle: { backgroundColor: "#050203" },
        headerShown: true,
        headerTintColor: white,
        headerStyle: {
          backgroundColor: "#050203"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
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
          title: "",
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
          title: "",
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
          title: "",
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
