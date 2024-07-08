import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return <Feather size={24} style={{ marginBottom: -10 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "orange",
        // headerShown: false,
        tabBarShowLabel: false,
        headerShadowVisible: false,

        headerStyle: {
          height: 105,
          backgroundColor: "black",
        },
        tabBarStyle: {
          backgroundColor: "#000",
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
          headerLeft: () => {
            return (
              <View style={{ paddingVertical: 10 }}>
                <Text
                  style={{
                    color: Colors.dark.white,
                    marginLeft: 10,
                    fontSize: 28,
                    fontStyle: "italic",
                  }}
                >
                  ShopIru
                </Text>
              </View>
            );
          },

          headerRight: () => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 8,
                  marginRight: 10,
                  paddingBottom: 10,
                }}
              >
                {/* Notification */}
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                  }}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={22}
                    color={Colors.dark.white}
                  />
                </TouchableOpacity>

                {/* User Profile */}
                <TouchableOpacity
                  style={{
                    backgroundColor: "orange",
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name="person-outline"
                    size={22}
                    color={Colors.dark.white}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          headerLeft: () => {
            return (
              <View style={{ paddingVertical: 10 }}>
                <Text
                  style={{
                    color: Colors.dark.white,
                    marginLeft: 10,
                    fontSize: 28,
                    fontStyle: "italic",
                  }}
                >
                  Checkout
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
