import {Dimensions, Platform, PixelRatio, NativeModules} from 'react-native';

let url = 'http://39.107.74.181:9501';

//获取手机状态栏高度
const {StatusBarManager} = NativeModules;
const statusHeight = StatusBarManager.HEIGHT;

//获取手机屏幕宽高
const {width, height} = Dimensions.get('window');

const contentHeight = height - 55;

//屏幕尺寸转换 && 适配不同屏幕
export function px(size) {
  if (PixelRatio.get() >= 3 && Platform.OS === 'ios' && size === 1) {
    return size;
  }
  return (width / 750) * size;
}

export default {
  StatusBarManager,
  statusHeight,
  width,
  height,
  contentHeight,
  url,
};
