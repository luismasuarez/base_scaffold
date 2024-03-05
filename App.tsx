/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppProviders from './src/AppProviders';
import useTheme from './src/hooks/useTheme';
import {NavigationLayout} from './src/screens/NavigationLayout';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const {
    theme: {colors},
  } = useTheme();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppProviders>
        <NavigationLayout />
      </AppProviders>
    </SafeAreaProvider>
  );
};

export default App;

/*
Colores que vienen en la variable Colors

const Colors = {
  "black": "#000",
  "dark": "#444",
  "darker": "#222",
  "light": "#DAE1E7",
  "lighter": "#F3F3F3",
  "primary": "#1292B4",
  "white": "#FFF"
}
*/
