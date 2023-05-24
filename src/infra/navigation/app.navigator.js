import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantNavigator } from "./restaurants.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import styled from "styled-components/native";

const DroidSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const Tab = createBottomTabNavigator();

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <DroidSafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </DroidSafeArea>
  );
};

const TAB_ICON = {
  Restaurants: "restaurant",
  Settings: "settings",
  Map: "map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
