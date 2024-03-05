import React from 'react';
import {useColorScheme} from 'react-native';
import {Button} from '../../core/components';
import Box from '../../core/components/Box/Box';
import Typography from '../../core/components/Text/Text';
import useTheme from '../../hooks/useTheme';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {
    theme: {colors, fonts, sizes},
  } = useTheme();
  return (
    <Box color={isDarkMode ? colors.dark : colors.light} align="center">
      <Typography size={52} color={colors.secondary} font={fonts.BOLD}>
        Hola Mundo
      </Typography>
      <Button
        height={40}
        width={200}
        color={colors.primary}
        align="center"
        justify="center"
        radius={sizes.radius}>
        <Typography font={fonts.SEMI_BOLD} weight="600" size={24}>
          Go
        </Typography>
      </Button>
    </Box>
  );
};

export default HomeScreen;
