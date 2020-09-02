import React from 'react';
import {View, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Map" onPress={() => navigation.push('map')} />
    </View>
  );
}
export default Home;
