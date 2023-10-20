import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from '../Screens/Tabs/TabNavigation';
import AddProductScreen from '../Screens/Stacks/AddProductScreen';
import { FONT_FAMILY } from '../CONSTANTS/CONSTANTS';
import DeleteProductScreen from '../Screens/Stacks/DeleteProductScreen';
import ChangePriceScreen from '../Screens/Stacks/ChangePriceScreen';

const Stack = createNativeStackNavigator();

// below function is used in stack screen
const commonStackScreenOptions = (screenTitle: string) => ({
  title: screenTitle,
  headerTitleStyle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: 25,
  },
  headerShadowVisible: false,
});

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProductScreen"
          component={AddProductScreen}
          options={commonStackScreenOptions('Add New Product')}
        />
        <Stack.Screen
          name="DeleteProductScreen"
          component={DeleteProductScreen}
          options={commonStackScreenOptions('Delete Product')}
        />
        <Stack.Screen
          name="ChnageProudctPriceScreen"
          component={ChangePriceScreen}
          options={commonStackScreenOptions('Change Price')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
