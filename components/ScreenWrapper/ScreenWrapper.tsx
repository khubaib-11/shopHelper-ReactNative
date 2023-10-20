import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScreenWrapper = ({ children, padding = 16, flex = 1, style }) => {
  const containerStyle = [
    styles.container,
    { padding, flex },
    style, // Allow additional custom styles
  ];

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ScreenWrapper;
