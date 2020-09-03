import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import useTracking from './useTracking';

function BgGeolocation() {
  const [status, setStatus] = useState(true);
  const tracking = useTracking(status);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{tracking?.location?.latitude}</Text>
      <Text>{tracking?.location?.longitude}</Text>
      <Text>{tracking?.distance}</Text>
      {tracking?.history?.map((m, i) => (
        <Text key={i}>{m.latitude + ' ' + m.longitude}</Text>
      ))}
    </View>
  );
}

export default BgGeolocation;
