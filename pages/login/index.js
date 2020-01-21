import React from 'react';
import {SafeAreaView, View, Text, StatusBar, ImageBackground} from 'react-native';
import Button from '../../components/button';

export default function LoginComponent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* 不显示状态栏 */}
      <StatusBar hidden={true}></StatusBar>
      {/* 背景图 */}
      <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%', ...styles.container}}>
        <Button onPress={() => props.navigation.navigate({routeName: 'Main'})}></Button>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}