import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';

const Stack = createStackNavigator();

import HomeScreen from './src/Home';
import MapScreen from './src/Map';
import WatchLocationScreen from './src/WatchLocation';
import {Platform, PermissionsAndroid} from 'react-native';
import GeofencingScreenn from './src/Geofencing';

async function requestLocationPermission() {
  if (Platform.OS !== 'android') {
    Geolocation.requestAuthorization('always');
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'show my location need Location permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
}

function App() {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="map" component={MapScreen} />
        <Stack.Screen name="watchLocation" component={WatchLocationScreen} />
        <Stack.Screen name="geofencing" component={GeofencingScreenn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
