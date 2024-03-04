import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Box from '../../core/components/Box/Box';
import Typography from '../../core/components/Text/Text';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Box color={isDarkMode ? Colors.darker : Colors.light}>
      <Typography>Hola Mundo</Typography>
    </Box>
  );
};

export default HomeScreen;
