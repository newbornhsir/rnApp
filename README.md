# react-native学习

## 环境配置

1. 根据官网搭建项目环境，安装依赖
2. 创建项目，先使用android studio 同步gradle 文件
3. gradle下载失败可以手动下载替换
4. 项目启动失败或者新安装的包下载失败，打开android studio多同步几次，因为是外网，不是很稳定
5. 配置国内源

```js
  // build.gradle文件中替换下载源
  // google()
  // jcenter()
  maven { url 'https://maven.aliyun.com/repository/google'}
  maven { url 'https://maven.aliyun.com/repository/jcenter'}
  maven { url 'http://maven.aliyun.com/nexus/content/groups/public'}
```

## 导航react-navigation

react-navigation是之后社区主推的导航。

1. 根据官网介绍安装依赖
2. 打开android studio项目同步
3. 运行不成功，项目结构中depency点一下applay

### navigation

`const App = createAppContainer(navigatorType)`创建一个导航，一个应用推荐之创建一个container。

创建不同的导航类型

`const navigator = createTypeNavigator(routeConfig, navigatorConfig)`

### 生命周期

- willFocus
- willBlur
- didFocus
- didiBlur

### navigate VS push

### 路由传参

参数传递和接收， state.params navigation.getParam

### 定制

#### 组件内定制

##### 静态定制

``` JS
static navigationOptions = {
    title: '首页'
}
```

##### 动态定制

```js
// 可接收页面传递的参数等信息， 返回一个配置项，可配置性更强
class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '首页是'
  });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
```

## stackNavigation

`yarn add react-navigation-stack`

栈结构的导航模式，类似浏览器的history模式。`createStackNavigator`函数返回一个react组件。

### createStackNavigator(routeConfig, [navigatorConfig])

```js
createStackNavigator({
    name: {
        screen: component,
        path: path,
        navigationOptions: {} || ({navigation}) => ({
            title: 'test'
        }) // 此处是在路由中配置navigationOptions， 也可在组件中配置
    }
}, {
    initialRouteName: 'name', // 初始路由名称
    initialRouteParam: {}, // 初始路由的参数
    initialRouteKey: '', //初始路由的可选标识符
    defaultNavigationOptions: {}, // screen默认配置
    paths: {}, // 重写routeConfig中path的映射
    mode: 'card' || 'modal', // 渲染和转换样式
    headerMode: 'float'||'screen'|| null, // 标题呈现方式
    keyboardHandlingEnabled: true, // If false, the on screen keyboard will NOT automatically dismiss when navigating to a new screen. Defaults to true
    defaultNavigationOptions: {
        // 此处是在全局中配置navigationOptions， 会和具体路由中的navigationOptions合并和覆盖
        title: '',
        header: ({scene, previous, navigation}) => ({
            const {options} = scene.descriptor;
            return <Text>返回react组件的函数， 自定义header显示</Text>
        }),
        headerShown: true,
        headerTitle: String || Function, // 返回标头显示内容，字符或者返回组件的函数
        headerTitleAlign: 'left' || 'center',
        headerTitleAllowFontScaling: false,
        headerRight: () => ReactElement,
        headerLeft: () => ReactElement,
        headerStyle: {
            headerTitleStyle: {},
            headerBackTitleStyle: {},
            headerLeftContainerStyle: {},
            headerRightContainerStyle: {},
            headerTitleContainerStyle: {},
            headerTintColor: '', //页眉的字体颜色
            headerPressColorAndroid: '',
            headerBackground: () => ReactElement,
            headerStatusBarHeight: 0,
        }
    }
})
```

## tabNavigation

`yarn add react-navigation-tabs`

## flex布局

方向，居中

## 打包

1. 按照官网文档配置keystore
2. 配置gradle变量
3. 配置签名配置
4. 打包时网络出错，配置下载源
5. Could not find tools.jar. jdk环境出错，重新配置
