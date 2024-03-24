import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import InvestScreen from '../InvestScreen/InvestScreen';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Invest" component={InvestScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
