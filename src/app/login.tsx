import { useLogin } from '@/api/authApi';
import { globalStyles } from '@/globalStyles';
import { saveToken } from '@/storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: loginMutate, isError, error } = useLogin();
  const router = useRouter();
  
  const handleLogin = () => {
    loginMutate(
      { email, password },
      {
        onSuccess: async (data) => {
          console.log('Login successful, received data:', data);
          await saveToken(data.session_token);
          router.replace('/');
        },
      }
    );
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.text}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={globalStyles.text}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {isError && <Text style={globalStyles.text}>Error: {error?.message}</Text>}
    </View>
  );
};

export default LoginScreen;