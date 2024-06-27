import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';
import { useTheme } from './context/themeContext';  // Import the custom hook
import Profiles from './component/profiles';
import Cards from './component/cards';
import Payments from './component/payments';
import Transactions from './component/transactions';

export default function HomeScreen() {
  const { isDarkMode } = useTheme();  // Use the context

  const containerStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <View style={containerStyle}>
      <Profiles  isDarkMode={isDarkMode} />
      <Cards  isDarkMode={isDarkMode} />
      <Payments isDarkMode={isDarkMode} />
      <Transactions isDarkMode={isDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 0,
  },
});