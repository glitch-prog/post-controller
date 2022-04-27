/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState, useEffect} from 'react';
import type {Node} from 'react';
import {PermissionsAndroid, TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NodePlayerView, NodeCameraView} from 'react-native-nodemediaclient';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './components/SignInScreen/SignInScreen';
import SignUpScreen from './components/SignUpScreen/SignUpScreen';
import ControlsScreen from './components/ControlsScreen/ControlsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="controlsScreen"
          component={ControlsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // justifyContent: 's',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7',
  },
  controlsBtnSection: {
    width: 320,
    marginVertical: 100,
    marginHorizontal: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  controlsBtn: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'blue',
  },

  controlsBtnText: {
    color: '#ffffff',
  },
});

export default App;
