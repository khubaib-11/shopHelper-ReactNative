import React, { useState, useEffect, createContext, useContext } from 'react';
import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system'; // used for files system access

import { FILE_CONSTANTS } from '../CONSTANTS/CONSTANTS';
import createFileIfNotExists from '../utils/createFileIfNotExists';
import createFolderIfNotExists from '../utils/createFolderIfNotExists';

// Product interface
interface Product {
  name: string;
  price: string;
  barcode: string;
}

const FileDataContext = createContext();

const FileDataProvider = ({ children }) => {
  const [storeProducts, setStoreProducts] = useState<Product[]>([]);

  // As soon as app laches, check that our folders are present to store data, if not create them else return
  useEffect(() => {
    async function getFolderInfo() {
      try {
        await createFolderIfNotExists(); // Ensure the folder is created first
        await createFileIfNotExists(); // Create the file if the folder exists
      } catch (error) {
        console.log(
          error,
          'An error occurred while creating the folder and file'
        );
      }
    }
    getFolderInfo();
  }, []);

  // Read products.json file
  useEffect(() => {
    async function readProductsFromLocalFile() {
      try {
        const fileContentAsString = await FileSystem.readAsStringAsync(
          FILE_CONSTANTS.appDataDirectory + FILE_CONSTANTS.productsFile
        );

        // it will be an array of products or empty array
        const parsedData = JSON.parse(fileContentAsString);

        setStoreProducts(parsedData);
      } catch (error) {
        console.log(
          '🚀 ~ file: FileDataContext.tsx:42 ~ readProductsFromLocalFile ~ error:',
          error
        );
      }
    }

    readProductsFromLocalFile();
  }, [storeProducts]);

  // DOnt call this functions directly
  const saveDataToFile = (
    updatedData,
    alertTitle = '⚠️title',
    alertMessage = 'Message'
  ) => {
    const updatedDataString = JSON.stringify(updatedData);

    FileSystem.writeAsStringAsync(
      FILE_CONSTANTS.appDataDirectory + FILE_CONSTANTS.productsFile,
      updatedDataString
    )
      .then(() =>
        // Customize alert
        Alert.alert(`${alertTitle}`, `${alertMessage}`)
      )
      .catch((error) => {
        // Handle errors when saving data to the file
        console.log(
          '🚀 ~ file: FileDataContext.tsx:74 ~ saveDataToFile ~ error:',
          error
        );
      });
  };

  // Function to add a new products to the store
  function addNewProductInStore(newProduct: Product) {
    if (storeProducts.some((p) => p.barcode === newProduct.barcode)) {
      // Duplicate found, raise an error or show an alert.
      Alert.alert(
        'Product Already Exists',
        'This product is already in the store.'
      );
      return;
    } else {
      const updatedData = [...storeProducts, newProduct];
      setStoreProducts(updatedData);
      saveDataToFile(
        updatedData,
        'Product Added',
        'Product successfully added to the store.'
      );
    }
  }

  // Function to delete a product from the store
  function deleteProductFromStore(barcode: string) {
    const findProductToDelete = storeProducts.find(
      (p) => p.barcode === barcode
    );

    if (findProductToDelete === undefined) {
      Alert.alert(
        'Product not found',
        'Product you are trying to delete is not in store.'
      );
      return;
    } else {
      const updatedData = storeProducts.filter(
        (p) => p.barcode !== findProductToDelete.barcode
      );
      setStoreProducts(updatedData);
      saveDataToFile(
        updatedData,
        'Product Deleted',
        'Product successfully deleted from the store.'
      );
    }
  }

  // Function to change price of a product in store
  function changePriceOfProduct(barcode: string, newPrice: string) {
    const productExists = storeProducts.find((p) => p.barcode === barcode);

    if (!productExists) {
      Alert.alert('Product not found', 'This product does not exist');
      return;
    } else {
      const updatedData = storeProducts.map((p) => {
        if (p.barcode === barcode) {
          return { ...p, price: newPrice };
        } else {
          return p;
        }
      });

      setStoreProducts(updatedData);
      saveDataToFile(
        updatedData,
        'Price Changed',
        'Price of this product is successfully changed.'
      );
    }
  }

  return (
    <FileDataContext.Provider
      value={{
        storeProducts,
        addNewProductInStore,
        deleteProductFromStore,
        changePriceOfProduct,
      }}
    >
      {children}
    </FileDataContext.Provider>
  );
};

function useFileData() {
  const context = useContext(FileDataContext);

  if (context === undefined)
    throw new Error('File Data context was used outside of the Post Provider');

  return context;
}

export { FileDataProvider, useFileData };
