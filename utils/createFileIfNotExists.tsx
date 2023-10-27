import * as FileSystem from 'expo-file-system'; // used for files system access
import { FILE_CONSTANTS } from '../CONSTANTS/CONSTANTS';

export default async function createFileIfNotExists() {
  try {
    const fileInfo = await FileSystem.getInfoAsync(
      FILE_CONSTANTS.appDataDirectory + FILE_CONSTANTS.productsFile
    );

    // Initialize the data file with an empty array
    const initialDataString = JSON.stringify([]);

    if (!fileInfo.exists) {
      await FileSystem.writeAsStringAsync(
        FILE_CONSTANTS.appDataDirectory + FILE_CONSTANTS.productsFile,
        // passing empty array as initial data
        initialDataString
      );
    }
  } catch (error) {
    console.log('Error creating file:', error);
  }
}
