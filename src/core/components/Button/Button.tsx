import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface IButton extends TouchableOpacityProps {
  children?: React.ReactNode;
  color?: ViewStyle['backgroundColor'];
  outlined?: boolean;
  radius?: ViewStyle['borderRadius'];
  flex?: ViewStyle['flex'];
  row?: boolean;
  justify?: ViewStyle['justifyContent'];
  justifyContent?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  alignItems?: ViewStyle['alignItems'];
  shadow?: {
    color?: ViewStyle['shadowColor'];
    offset?: ViewStyle['shadowOffset'];
    opacity?: ViewStyle['shadowOpacity'];
    radius?: ViewStyle['shadowRadius'];
  };
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  position?: ViewStyle['position'];
  top?: ViewStyle['top'];
  right?: ViewStyle['right'];
  bottom?: ViewStyle['bottom'];
  left?: ViewStyle['left'];
  disabled?: boolean;
  vibrate?: number | number[];
}

const Button = ({
  children,
  color,
  outlined,
  radius,
  flex,
  row,
  justify,
  justifyContent,
  align,
  alignItems,
  shadow,
  height,
  width,
  position,
  top,
  right,
  bottom,
  left,
  disabled,
  style,
  activeOpacity = 0.8,
  ...props
}: IButton) => {
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && {backgroundColor: color},
    outlined && {
      borderWidth: 1,
      borderColor: color,
      backgroundColor: 'transparent',
    },
    radius !== undefined && {borderRadius: radius},
    flex !== undefined && {flex},
    row && {flexDirection: 'row'},
    justify !== undefined && {justifyContent: justify},
    justifyContent !== undefined && {justifyContent},
    align !== undefined && {alignItems: align},
    alignItems !== undefined && {alignItems},
    shadow !== undefined && {...shadow},
    {minHeight: height || 48},
    {minWidth: width || 48},
    position !== undefined && {position},
    top !== undefined && {top},
    right !== undefined && {right},
    bottom !== undefined && {bottom},
    left !== undefined && {left},
    disabled && {opacity: 0.5},
    style,
  ]) as ViewStyle;

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled}
      activeOpacity={activeOpacity}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
