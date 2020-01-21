/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginComponent from './pages/login';
import TabsComponent from './pages/tabs';

const SwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginComponent,
  },
  Main: {
    screen: TabsComponent
  }
})

const App = createAppContainer(SwitchNavigator);

export default App;
