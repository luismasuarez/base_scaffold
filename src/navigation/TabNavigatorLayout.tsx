import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import InvestScreen from '../screens/InvestScreen/InvestScreen';

const Tab = createBottomTabNavigator();
const TabNavigatorLayout = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={InvestScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigatorLayout;
