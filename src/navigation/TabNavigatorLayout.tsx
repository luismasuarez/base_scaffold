import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import InvestScreen from '../screens/InvestScreen/InvestScreen';
import {Vector} from '../core/components';

const renderTabBarIcon = (
  route: string,
  focused: boolean,
  size?: number,
  color?: string,
) => {
  let iconName;

  if (route === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route === 'Invest') {
    iconName = focused ? 'wallet' : 'wallet-outline';
  }

  return <Vector iconName={iconName} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();
const TabNavigatorLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) =>
          renderTabBarIcon(route.name, focused, size),
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Invest" component={InvestScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigatorLayout;
