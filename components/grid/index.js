import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {px, fontPx, layout, pxReverse} from '../../utils';

function CreateText(props) {
  return (
    <Text
      style={{
        color: props.color,
        fontSize: fontPx(props.fontSize),
        paddingTop: px(10),
      }}>
      {props.title}
    </Text>
  );
}

function PositionView(props) {
  let ref = null;
  function computeWidth() {
    layout(ref).then(res => {
      props.computeWidth(res);
    });
  }
  return (
    <View
      style={{...styles.wrapper}}
      ref={r => (ref = r)}
      onLayout={computeWidth}>
      <Text>{''}</Text>
    </View>
  );
}

// function createIcon(props) {
//   return;
// }

function CreateImage(props) {
  // require中不能使用变量, 所以图片直接通过requie传入
  const width = px(props.width * 0.36);
  return <Image source={props.image} style={{width, height: width}} />;
}

/**
 * props:
 * - col: Number, default: 3
 * - border: Boolean, default: true
 * - padding: Number, default: 15
 * - background: String, default: #fff
 * - color: String, default: #000
 * - fontSize: Number, default: 18
 * - data: Array[{title: String, image/icon: String,}]
 */
export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  render() {
    const {
      col = 3,
      border = true,
      padding = 15,
      data = [],
      color = '#000000',
      background = '#FFFFFF',
      fontSize = 14,
    } = this.props;
    let children = [];
    if (this.state.width > 0) {
      const width = this.state.width / col;
      const len = data.length;
      children = data.map((item, index) => {
        let borderRightWidth = (index + 1) % col === 0 ? px(1) : 0;
        const borderTopWidth = index + 1 > col ? 0 : px(1);
        if (len === index + 1) {
          borderRightWidth = px(1);
        }
        const borderStyle = border
          ? {...styles.border, borderRightWidth, borderTopWidth}
          : {};
        return (
          // border={border} padding={padding} width={width}
          <TouchableOpacity
            style={{
              width: px(width),
              height: px(width),
              padding: px(padding),
              ...styles.gridItemWrapper,
              ...borderStyle,
            }}
            activeOpacity={0.4}
            onPress={() => this.gridPress(index)}
            key={index}>
            {item.image && <CreateImage image={item.image} width={width} />}
            {item.title && (
              <CreateText
                title={item.title}
                color={color}
                fontSize={fontSize}
              />
            )}
          </TouchableOpacity>
        );
      });
    }
    const renderComponent =
      this.state.width === 0 ? (
        <PositionView computeWidth={res => this.computeWidth(res)} />
      ) : (
        <View
          style={{
            ...styles.wrapper,
            backgroundColor: background,
          }}>
          {children}
        </View>
      );
    return renderComponent;
  }

  computeWidth(res) {
    let {width} = res;
    this.setState(() => ({
      width: pxReverse(width),
    }));
  }

  gridPress(index) {
    if (this.props.onPress) {
      this.props.onPress(index);
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  border: {
    borderWidth: px(1),
    borderColor: '#ccc',
    borderStyle: 'solid',
  },
  gridItemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
