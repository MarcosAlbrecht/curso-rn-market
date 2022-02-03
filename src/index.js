
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import Routes from './routes';


const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#312e38' />
      <Routes />
    </>
  );
}

export default App;
