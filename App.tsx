import React, {useEffect, useState} from 'react';

import 'react-native-gesture-handler';
import LoginScreen from '@/screens/LoginScreen';
import MainPageScreen from '@/screens/MainPageScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Keychain from 'react-native-keychain';
import LoadingScreen from '@/screens/LoadingScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await Keychain.getGenericPassword({
          service: 'iManageIt',
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
          accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
        });
        if (token) {
          setIsAuthenticated(true);
        }
      } catch (e) {}
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'MainPageScreen' : 'LoginScreen'}>
        {isAuthenticated ? (
          <Stack.Screen
            name="MainPageScreen"
            component={MainPageScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}
              component={LoginScreen}
            />
            {/*<Stack.Screen name="CameraScreen" component={CameraScreen} />*/}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
