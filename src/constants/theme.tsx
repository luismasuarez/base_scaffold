import {StyleSheet} from 'react-native';

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    primary_accent: string;
    secondary_accent: string;
    dark: string;
    ligth: string;
    accent: string;
    text: string;
    invertedText: string;
  };
  sizes: {
    base: number;
    text: number;
    radius: number;
    padding: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    p: number;
    buttonHeight: number;
    buttonRadius: number;
    buttonBorder: number;
    inputHeight: number;
    inputRadius: number;
    inputBorder: number;
  };
  spacing: {
    xs: number;
    s: number;
    sm: number;
    m: number;
    md: number;
    l: number;
    xl: number;
    xxl: number;
  };
  assets: object;
  fonts: {
    regular: string;
    medium: string;
    bold: string;
  };
  icons: {};
}

export const COLORS = {
  primary: '#53a2c1',
  secondary: '#fba123',
  primary_accent: '#2f596a',
  secondary_accent: '#e37316',
  dark: '#1a1f23',
  light: '#bbcad3',
  accent: '#7d8b97',
  text: '#FFFFFF',
  invertedText: '#252F40',
};

export const SIZES = {
  base: 10,
  text: 14,
  radius: 5,
  padding: 20,
  h1: 44,
  h2: 40,
  h3: 32,
  h4: 24,
  h5: 18,
  p: 14,
  buttonHeight: 40,
  buttonRadius: 5,
  buttonBorder: StyleSheet.hairlineWidth,
  inputHeight: 40,
  inputRadius: 5,
  inputBorder: StyleSheet.hairlineWidth,
};

export const SPACING = {
  xs: SIZES.base * 0.5, // xs: 4px
  s: SIZES.base * 1, // s: 8px
  sm: SIZES.base * 2, // sm: 16px
  m: SIZES.base * 3, // m: 24px
  md: SIZES.base * 4, // md: 32px
  l: SIZES.base * 5, // l: 40px
  xl: SIZES.base * 6, // xl: 48px
  xxl: SIZES.base * 7, // xxl: 56px
};

export const ICONS = {};

export const ASSETS = {};

export const FONTS = {
  REGULAR: 'VictorMono-Regular',
  MEDIUM: 'VictorMono-Medium',
  SEMI_BOLD: 'VictorMono-SemiBold',
  BOLD: 'VictorMono-Bold',
};

export const WEIGHTS = {};

export const LINE_HEIGHTS = {};

export const THEME = {
  colors: {...COLORS},
  sizes: {...SIZES},
  spacing: {...SPACING},
  assets: {...ASSETS},
  icons: {...ICONS},
  fonts: {...FONTS},
};

export default THEME;
