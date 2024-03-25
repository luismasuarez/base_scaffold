import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';
import InvestScreen from '../screens/InvestScreen/InvestScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigatorLayout = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Invest" component={InvestScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorLayout;
