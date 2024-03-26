import React, {useState} from 'react';
import {StatusBar, TouchableOpacity, useColorScheme} from 'react-native';
import {Box, Typography, Vector} from '../../core/components';
import useTheme from '../../hooks/useTheme';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [secction, setSecction] = useState('spending');

  const {
    theme: {colors, sizes},
  } = useTheme();

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={colors.primary} />
      <Box
        flex={1}
        color={isDarkMode ? colors.dark : colors.light}
        align="center">
        <Box color={colors.primary} height={100} width={'100%'}>
          <Box row align="center">
            <Box left={20}>
              <Vector iconName="settings" size={sizes.h4} color={colors.text} />
            </Box>
            <Box row align="center" justify="center" flex={1}>
              <Typography color={colors.text} size={16}>
                Overview:{' '}
              </Typography>
              <Box row align="center">
                <Typography color={colors.text} size={sizes.h5} weight="600">
                  My Wallet
                </Typography>
                <Vector
                  iconName="chevron-down-outline"
                  size={16}
                  color={colors.text}
                />
              </Box>
            </Box>
          </Box>
          <Box row flex={1} justify="center" align="flex-end" bottom={14}>
            <Box
              color={secction === 'spending' ? colors.opacity : colors.primary}
              width={100}
              padding={5}
              align="center"
              justify="center"
              radius={sizes.radius + 10}>
              <TouchableOpacity onPress={() => setSecction('spending')}>
                <Typography weight="700" color={colors.text}>
                  SPENDING
                </Typography>
              </TouchableOpacity>
            </Box>
            <Box
              color={secction === 'list' ? colors.opacity : colors.primary}
              width={100}
              padding={5}
              align="center"
              justify="center"
              radius={sizes.radius + 10}>
              <TouchableOpacity onPress={() => setSecction('list')}>
                <Typography weight="700" color={colors.text}>
                  LIST
                </Typography>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
        {secction === 'spending' ? (
          <Box>
            <Typography>Spending</Typography>
          </Box>
        ) : (
          <Box>
            <Typography>List</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default HomeScreen;
