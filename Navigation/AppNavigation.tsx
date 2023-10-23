import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from '../Screens/Tabs/TabNavigation';
import AddProductScreen from '../Screens/Stacks/AddProductScreen';
import DeleteProductScreen from '../Screens/Stacks/DeleteProductScreen';
import ChangePriceScreen from '../Screens/Stacks/ChangePriceScreen';
import { FONT_FAMILY } from '../CONSTANTS/CONSTANTS';
import CartScreen from '../Screens/Stacks/CartScreen';
import BillScreen from '../Screens/Stacks/BillScreen';

// Define common stack screen options
// for consistent styling and configuration.

const commonStackScreenOptions = (screenTitle: string) => ({
  title: screenTitle,
  headerTitleStyle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: 25,
  },
  headerShadowVisible: false,
});

const Stack = createNativeStackNavigator();

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
          name="ChangeProductPriceScreen"
          component={ChangePriceScreen}
          options={commonStackScreenOptions('Change Price')}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={commonStackScreenOptions('Cart')}
        />
        <Stack.Screen
          name="BillScreen"
          component={BillScreen}
          options={commonStackScreenOptions('Bill')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
