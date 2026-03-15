import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export const saveToken = async (token: string) => {
  if (isWeb) {
    await AsyncStorage.setItem('sessionToken', token);
    return;
  }
  await SecureStore.setItemAsync('sessionToken', token);
}

export const getToken = async () => {
  if (isWeb) {
    return await AsyncStorage.getItem('sessionToken');
  }
  return await SecureStore.getItemAsync('sessionToken');
}

