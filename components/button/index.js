import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import {px} from '../../utils';


/**
 * 按钮组件,
 * props: {
 *  title: string,
 *  size: string | default: default,
 *  icon: none, 未定制
 *  type: default,primary, 未实现, 定义几种基本的按钮
 *  style: object, 预留样式定制，方便自己扩展按钮
 *  underlayColor: string, 激活时候的高亮背景， 几种定制完成的按钮不需要指定
 *  activeBorderColor: string, 激活时候的border颜色
 *  activeColor: string, 激活时候的字体颜色
 * }
 */

 /**
  * 
  * active需要对border颜色，字体等进行定制
  */

function mergeStyle(props) {
    const {style={}, size='default', type='default'} = props;
    let sizeStyle, typeStyle;
    // size样式
    if (size === 'small') {
        sizeStyle = styles.small;
    } else if (size === 'medium') {
        sizeStyle = styles.medium;
    } else {
        sizeStyle = styles.default;
    }
    // type样式
    if (type === 'other') {
        // 还未定制
        typeStyle = {};
    } else {
        typeStyle = styles.defaultType;
    }
    return {...styles.container, ...sizeStyle, ...typeStyle, ...style};
}




export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStyle: {}
    }
  }
  render() {
    const style = mergeStyle(this.props)
    return (
      <TouchableHighlight
        style={{...style, ...this.state.activeStyle}}
        onPress={() => this.onPress()}
        onPressIn={() => this.onPressIn()}
        onPressOut={() => this.onPressOut()}
        underlayColor={'#ecf5ff'}>
        <View>
          <Text>登录</Text>
        </View>
      </TouchableHighlight>
    )
  }

  onPress() {
    const press = this.props.onPress;
    if (press && typeof press === 'function') press();
  }

  onPressIn() {
    const {type='default', activeStyle={}} = this.props;
    console.log(1);
    this.setState(() => ({
      activeStyle: {
        ...styles[type+'TypeActive'],
        ...activeStyle
      }
    }))
  }

  onPressOut() {
    this.setState({activeStyle: {}});
  }
}

const styles = {
  container: {
    borderRadius: px(4),
  },
  default: {
    paddingTop: px(12),
    paddingRight: px(23),
    paddingBottom: px(12),
    paddingLeft: px(23)
  },
  small: {
    paddingTop: px(9),
    paddingRight: px(15),
    paddingBottom: px(9),
    paddingLeft: px(15)
  },
  medium: {
    paddingTop: px(10),
    paddingRight: px(20),
    paddingBottom: px(10),
    paddingLeft: px(20)
  },
  defaultType: {
    borderWidth: px(1),
    borderColor: '#dcdfe6',
    borderStyle: 'solid',
    backgroundColor: '#fff',
  },
  defaultTypeActive: {
    backgroundColor: '#ecf5ff',
    borderColor: '#c6e2ff',
  }
}