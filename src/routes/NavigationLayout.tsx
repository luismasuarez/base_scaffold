import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DrawerScreen from '../screens/DrawerScreen/DrawerScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export const NavigationLayout = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
