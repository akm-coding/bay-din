import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigations/root-navigator/RootNavigator';

const App = () => {
  return (
    <>
      <RootNavigator />
    </>
  );
};

export default App;
