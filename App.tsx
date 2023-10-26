import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Navigations } from './src/navigator/Navigations';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
   return (
    <NavigationContainer>
      {/* <Navigations/> */}
      <Tabs/>
    </NavigationContainer>
   );
};


export default App;
