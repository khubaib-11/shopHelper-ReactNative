import * as FileSystem from 'expo-file-system'; // used for files system access
import { FILE_CONSTANTS } from '../CONSTANTS/CONSTANTS';

export default async function createFolderIfNotExists() {
  try {
    const folderInfo = await FileSystem.getInfoAsync(
      FILE_CONSTANTS.appDataDirectory
    );
    if (!folderInfo.exists) {
      await FileSystem.makeDirectoryAsync(FILE_CONSTANTS.appDataDirectory);
    }
  } catch (error) {
    console.log(error, 'Error creating folder:');
  }
}
