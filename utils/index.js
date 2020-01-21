import {Dimensions, PixelRatio, findNodeHandle, UIManager} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

// 以750设计稿，决定最终显示在屏幕上的大小
export function px(num) {
  return (screenWidth / 750) * num;
}

export function pxReverse(num) {
  return (num * 750) / screenWidth;
}

export function fontPx(num) {
  return PixelRatio.getFontScale() * num;
}

export {
    screenHeight,
    screenWidth
}

export function layout(ref) {
  const handle = findNodeHandle(ref);
  return new Promise(resolve => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      resolve({
        x,
        y,
        width,
        height,
        pageX,
        pageY,
      });
    });
  });
}
