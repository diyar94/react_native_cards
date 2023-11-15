import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import Login from '@/components/Login';
import * as Keychain from 'react-native-keychain';

import {useNavigation} from '@react-navigation/native';
import {requestCameraPermission} from '@/utils/PermissionHelper';
import * as process from 'process';

const LoginScreen: React.FC = () => {
  const [hasCameraPermission, setCameraPermission] = useState<boolean | null>(
    null,
  );
  const navigation = useNavigation();

  const handleCameraPermission = async () => {
    const granted = await requestCameraPermission();
    setCameraPermission(granted);
    navigation.navigate('CameraScreen' as never);
  };
  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await fetch(`${process.env.API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({email, password}),
      });
      const backendRes = await res.json();
      const {result} = backendRes;
      const {session, user} = result;
      const {token} = session;

      if (token) {
        // when token is received, store it in KeyChain
        // and navigate to MainPageScreen

        await Keychain.setGenericPassword(process.env.Token as string, token, {
          service: process.env.SERVICE_NAME as string,
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
          accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
        });

        await Keychain.setGenericPassword(
          process.env.USER_DATA as string,
          JSON.stringify(user),
          {
            service: process.env.SERVICE_NAME as string,
            accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
            accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
          },
        );
      }
    } catch (e) {
      console.error('Login Failed', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Login onLogin={handleLogin} />
        {!hasCameraPermission && (
          <Button title={'Open Camera'} onPress={handleCameraPermission} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
  },
});

export default LoginScreen;
