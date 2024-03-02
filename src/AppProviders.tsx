import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {AuthProvider} from './context/AuthContext';
import {ThemeProvider} from './hooks/useTheme';

type TProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const AppProviders = ({children}: TProviderProps) => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider>{children}</ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};
export default AppProviders;
