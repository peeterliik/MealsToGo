import React from 'react';

import { StatusBar, Text } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.sceen';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infra/theme';

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;
const Map = () => <Text>Map</Text>;

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  let iconName;

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Restaurants') {
                  iconName = focused ? 'restaurant' : "restaurant-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                } else if (route.name === 'Map') {
                  iconName = focused ? 'map' : 'map-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map" component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
