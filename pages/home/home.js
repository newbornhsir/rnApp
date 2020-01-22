import React from 'react';
import { View, Text } from 'react-native';
import StatusBar from '../../components/statusBar';
import Grid from '../../components/grid';

class HomeComponent extends React.Component {
  render() {
    const data = [
      {title: '测试', image: require('../../assets/bg.jpg')},
      {title: '测试', image: require('../../assets/bg.jpg')},
      {title: '测试', image: require('../../assets/bg.jpg')},
      {title: '测试', image: require('../../assets/bg.jpg')},
      {title: '测试', image: require('../../assets/bg.jpg')},
      {title: '测试', image: require('../../assets/bg.jpg')},
    ]
    return (
      <View>
        <StatusBar/>
        <Grid data={data} col={4}></Grid>
        <Text>home</Text>
      </View>
    )
  }
}

export default HomeComponent;