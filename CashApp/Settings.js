import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Switch } from 'react-native';
import { useTheme } from './context/themeContext'; 

const MyCardsScreen = () => {
  const { isDarkMode } = useTheme(); 
  
  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#000' : '#fff',
    bottom: 50
  };

  return (
    <View style={containerStyle}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default MyCardsScreen