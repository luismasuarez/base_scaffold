/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppProviders from './AppProviders';
import useTheme from './hooks/useTheme';
import {NavigationLayout} from './routes/NavigationLayout';

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
