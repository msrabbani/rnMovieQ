/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './src/app/AppNavigation'

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

export default App;
