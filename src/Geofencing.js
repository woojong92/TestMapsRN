import React from 'react';
import Boundary, {Events} from 'react-native-boundary';
import {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';

function Geofencing() {
  useEffect(() => {
    Boundary.add({
      lat: 37.501522,
      lng: 127.028457,
      radius: 10, // in meters
      id: 'Chipotle',
    })
      .then(() => console.log('success!'))
      .catch((e) => console.warn('error :(', e));

    return () => {
      // Remove the events
      Boundary.off(Events.ENTER);
      Boundary.off(Events.EXIT);

      // Remove the boundary from native API´s
      Boundary.remove('Chipotle')
        .then(() => console.log('Goodbye Chipotle :('))
        .catch((e) => console.warn('Failed to delete Chipotle :)', e));
    };
  }, []);

  Boundary.on(Events.ENTER, (id) => {
    // Prints 'Get out of my Chipotle!!'
    console.log(`Get out of my ${id}!!`);
  });

  Boundary.on(Events.EXIT, (id) => {
    // Prints 'Ya! You better get out of my Chipotle!!'
    console.log(`Ya! You better get out of my ${id}!!`);
  });

  const P0 = {latitude: 37.501522, longitude: 127.028457};
  const P1 = {latitude: 37.564462, longitude: 126.977111};

  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      center={{...P0, zoom: 16}}
      onTouch={(e) => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
      onCameraChange={(e) => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={(e) => console.warn('onMapClick', JSON.stringify(e))}>
      <Marker coordinate={P0} onClick={() => Alert.alert('onClick! p0')} />
      <Marker
        coordinate={P1}
        pinColor="blue"
        onClick={() => Alert.alert('onClick! p0')}
      />
      <Circle
        coordinate={P0}
        color={'rgba(255,0,0,0.3)'}
        radius={10}
        onClick={() => Alert.alert('onClick! circle')}
      />
    </NaverMapView>
  );
}

export default Geofencing;
