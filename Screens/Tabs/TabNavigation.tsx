import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Camera, ScrollText } from 'lucide-react-native';

import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import PriceListScreen from './PriceListScreen';
import { COLORS, FONT_FAMILY } from '../../CONSTANTS/CONSTANTS';
const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 72,
          paddingBottom: 16,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.BLACK,
        tabBarInactiveTintColor: COLORS.INACTIVE,
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONT_FAMILY.MEDIUM,
          },
        }}
      />
      <Tabs.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color }) => <Camera size={24} color={color} />,
          tabBarLabel: 'Scan',
          unmountOnBlur: true,
          headerShown: false,
          tabBarStyle: { display: 'none' },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONT_FAMILY.MEDIUM,
          },
        }}
      />
      <Tabs.Screen
        name="PriceListScreen"
        component={PriceListScreen}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarIcon: ({ color }) => <ScrollText size={24} color={color} />,
          tabBarLabel: 'Price List',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONT_FAMILY.MEDIUM,
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
