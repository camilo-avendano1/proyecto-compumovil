import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import EventSyncImagotype from "@/components/EventSyncImagotype";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create-event"
        options={{
          title: "Crear Evento",
          headerShown: true,
          headerTitle: () => null,
          headerLeft: () => <EventSyncImagotype />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "add-circle" : "add"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
