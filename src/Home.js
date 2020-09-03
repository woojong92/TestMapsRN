import React from 'react';
import {View, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Map" onPress={() => navigation.navigate('map')} />
      <Button
        title="WatchLocation"
        onPress={() => navigation.navigate('watchLocation')}
      />
      <Button
        title="geofencing"
        onPress={() => navigation.navigate('geofencing')}
      />
      <Button
        title="bgGeolocation"
        onPress={() => navigation.navigate('bgGeolocation')}
      />
    </View>
  );
}
export default Home;
