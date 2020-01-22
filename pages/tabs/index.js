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
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: '首页'
    }
  },
  Setting: {
    screen: SettingNavigator,
    navigationOptions: {
      title: '设置'
    }
  }
}, {
  tabBarOptions: {
    showIcon: false,
    // 不显示icon, 且文本居中
    labelStyle: {
      fontSize: 16
    },
    tabStyle: {
      justifyContent: 'center'
    }
  }
});


export default TabNavigator;
