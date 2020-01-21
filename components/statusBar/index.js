import React from 'react';
import {StatusBar} from 'react-native';

export default function CustomStatusBar(props) {
  // statusbar 可以在任意视图加载，且后加载的会覆盖之前加载的内容
  const {barStyle="light-content", hidden=false, backgroundColor="#003399"} = props;
  return <StatusBar {...{backgroundColor, hidden, barStyle}}/>
}