import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '../../core/components/Section/Section';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title="Step One">
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this //
        screen and then come back to see your edits. //{' '}
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
