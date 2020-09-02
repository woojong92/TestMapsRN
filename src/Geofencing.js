import React from 'react';
import Boundary, {Events} from 'react-native-boundary';
import {useEffect} from 'react';
import {View, Text} from 'react-native';

function Geofencing() {
  useEffect(() => {
    Boundary.add({
      lat: 34.017714,
      lng: -118.499033,
      radius: 50, // in meters
      id: 'Chipotle',
    })
      .then(() => console.log('success!'))
      .catch((e) => console.error('error :(', e));

    Boundary.on(Events.ENTER, (id) => {
      // Prints 'Get out of my Chipotle!!'
      console.log(`Get out of my ${id}!!`);
    });

    Boundary.on(Events.EXIT, (id) => {
      // Prints 'Ya! You better get out of my Chipotle!!'
      console.log(`Ya! You better get out of my ${id}!!`);
    });

    return () => {
      // Remove the events
      Boundary.off(Events.ENTER);
      Boundary.off(Events.EXIT);

      // Remove the boundary from native API´s
      Boundary.remove('Chipotle')
        .then(() => console.log('Goodbye Chipotle :('))
        .catch((e) => console.log('Failed to delete Chipotle :)', e));
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Boundary</Text>
    </View>
  );
}

export default Geofencing;
