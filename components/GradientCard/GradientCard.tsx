import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientCard = ({ colorsArray, children }) => {
  return (
    <LinearGradient
      colors={colorsArray}
      style={styles.card}
      start={{ x: 0.05, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '40%',
    borderRadius: 6,
    paddingTop: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
