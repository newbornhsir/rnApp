import React from 'react';
import { View, Text } from 'react-native';
import StatusBar from '../../components/statusBar';

class HomeComponent extends React.Component {
  render() {
    return (
      <View>
        <StatusBar/>
        <Text>home screensss</Text>
      </View>
    )
  }
}

export default HomeComponent;