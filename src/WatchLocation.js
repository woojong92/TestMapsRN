import React, {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {View, Text} from 'react-native';

const WatchLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    const _watchId = Geolocation.watchPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );

    return () => {
      if (_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {location ? (
        <>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Latitude: {location.longitude}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default WatchLocation;
