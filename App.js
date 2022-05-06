import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Stack';


export default function App() {
  return (
    <React.StrictMode>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </React.StrictMode>
  );

}