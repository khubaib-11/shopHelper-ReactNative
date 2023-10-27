import * as FileSystem from 'expo-file-system'; // used for files system access

export const FILE_CONSTANTS = {
  // directory where all data will be stored, all files should be inside of appDataDirectory folder
  appDataDirectory: `${FileSystem.documentDirectory}appDataDirectory/`,
  productsFile: 'products.json',
};

export const COLORS = {
  BLACK: '#2F3640',
  WHITE: '#F5F6FA',
  INACTIVE: '#718093',

  WARNING: '#E84118',
  SUCCESS: '#4CD137',
  ALERT: '#FBC531',
};

export const FONT_FAMILY = {
  REGULAR: 'outfit',
  MEDIUM: 'outfitMedium',
  BOLD: 'outfitBold',
};
