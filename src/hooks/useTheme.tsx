import React, {ReactNode, createContext, useContext} from 'react';

import appTheme, {ITheme} from '../constants/theme';

interface IThemeHook {
  children?: ReactNode;
  theme?: ITheme;
}

// All state data by context
export const ThemeContext = createContext({
  theme: appTheme,
});

// Provider to inject all state data by props to childrens
export const ThemeProvider = ({children, theme = appTheme}: IThemeHook) => {
  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

// Use and export once time the theme context
export default function useTheme() {
  const {theme} = useContext(ThemeContext);
  return {theme};
}
