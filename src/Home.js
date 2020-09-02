import React from 'react';
import {View, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Map" onPress={() => navigation.push('map')} />
      <Button
        title="WatchLocation"
        onPress={() => navigation.push('watchLocation')}
      />
      <Button
        title="geofencing"
        onPress={() => navigation.push('geofencing')}
      />
    </View>
  );
}
export default Home;
