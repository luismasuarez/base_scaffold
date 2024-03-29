import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface IBox extends ViewProps {
  flex?: ViewStyle['flex'];
  row?: boolean;
  justify?: ViewStyle['justifyContent'];
  justifyContent?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  alignItems?: ViewStyle['alignItems'];
  content?: ViewStyle['alignContent'];
  alignContent?: ViewStyle['alignContent'];
  wrap?: ViewStyle['flexWrap'];
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  padding?: ViewStyle['padding'];
  position?: ViewStyle['position'];
  ml?: ViewStyle['marginLeft'];
  mr?: ViewStyle['marginRight'];
  mt?: ViewStyle['marginTop'];
  mb?: ViewStyle['marginBottom'];
  top?: ViewStyle['top'];
  right?: ViewStyle['right'];
  bottom?: ViewStyle['bottom'];
  left?: ViewStyle['left'];
  color?: ViewStyle['backgroundColor'];
  outlined?: boolean;
  card?: boolean;
  radius?: ViewStyle['borderRadius'];
  overflow?: ViewStyle['overflow'];
  safe?: boolean;
  scroll?: boolean;
  shadow?: {
    color?: ViewStyle['shadowColor'];
    offset?: ViewStyle['shadowOffset'];
    opacity?: ViewStyle['shadowOpacity'];
    radius?: ViewStyle['shadowRadius'];
  };
  elevation?: ViewStyle['elevation'];
  children?: React.ReactNode;
}

const Box = ({
  children,
  style,
  flex,
  row,
  justify,
  justifyContent,
  align,
  alignItems,
  content,
  alignContent,
  wrap,
  width,
  height,
  padding,
  position,
  ml,
  mr,
  mt,
  mb,
  top,
  right,
  bottom,
  left,
  color,
  outlined,
  card,
  radius,
  overflow,
  safe,
  scroll,
  shadow,
  elevation,
  ...props
}: IBox) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    row && {flexDirection: 'row'},
    justify !== undefined && {justifyContent: justify},
    justifyContent !== undefined && {justifyContent},
    align !== undefined && {alignItems: align},
    alignItems !== undefined && {alignItems},
    content !== undefined && {alignContent: content},
    alignContent !== undefined && {alignContent},
    wrap !== undefined && {flexWrap: wrap},
    width !== undefined && {width},
    height !== undefined && {height},
    padding !== undefined && {padding},
    position !== undefined && {position},
    ml !== undefined && {marginLeft: ml},
    mr !== undefined && {marginRight: mr},
    mt !== undefined && {marginRight: mt},
    mb !== undefined && {marginRight: mb},
    top !== undefined && {top},
    right !== undefined && {right},
    bottom !== undefined && {bottom},
    left !== undefined && {left},
    color !== undefined && {backgroundColor: color},
    outlined && {
      borderWidth: 1,
      borderColor: color,
      backgroundColor: 'transparent',
    },
    card && {
      backgroundColor: 'white',
      borderRadius: 16,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.07,
      shadowRadius: 4,
      elevation: 2,
    },
    elevation !== undefined && {elevation},
    radius !== undefined && {borderRadius: radius},
    overflow !== undefined && {overflow},
    shadow !== undefined && {...shadow},
    // the style property will overwrite all above styles
    style,
  ]) as ViewStyle;

  // renders SafeAreaView if safe props is true
  if (safe) {
    return (
      <SafeAreaView style={blockStyle} {...props}>
        {children}
      </SafeAreaView>
    );
  }

  // renders ScrollView if scroll props is true
  if (scroll) {
    return (
      <ScrollView style={blockStyle} {...props}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Box;
