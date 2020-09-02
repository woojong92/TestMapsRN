import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

import HomeScreen from './src/Home';
import MapScreen from './src/Map';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
