import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeComponent from '../home/home';
import SettingComponent from '../setting/setting';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#003399'
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center'
}

const HomeNavigator = createStackNavigator({
  HomePage: {
    screen: HomeComponent,
    navigationOptions: {
      title: '首页',
    }
  }
}, {
  initialRouteName: 'HomePage',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#003399'
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center'
  }
})

const SettingNavigator = createStackNavigator({
  SettingPage: {
      screen: SettingComponent
  }
}, {
  defaultNavigationOptions
})


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator
  },
  Setting: {
    screen: SettingNavigator
  }
});


export default TabNavigator;
