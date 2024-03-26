import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '../../../hooks/useTheme';
import {TVectorProps} from '../../../types/BottomTabTypes';

const Vector = ({iconName, size, color}: TVectorProps) => {
  const {
    theme: {colors, sizes},
  } = useTheme();

  return (
    <Ionicons
      name={iconName ? iconName : 'help'}
      size={size ? size : sizes.base * 2.5}
      color={color ? color : colors.primary}
    />
  );
};

export default Vector;
