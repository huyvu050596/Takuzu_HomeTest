import { Dimensions, Platform, StyleSheet } from 'react-native';
import {
  getStatusBarHeight,
  isIphoneX,
  ifIphoneX,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

let { width, height } = Dimensions.get('window');
const metrics = {
  BUTTON_RADIUS: 3,
  INPUT_RADIUS: 5,
  CARD_RADIUS: 5,
  MODAL_RADIUS: 15,
  DIALOG_RADIUS: 20,
  SWITCH_WRAP_RADIUS: 6,
  SWITCH_INNER_RADIUS: 4,
  CARD_COIN_RADIUS: 10,
  CHECK_BOX_RADIUS: 6,
  CONTAINER_RADIUS: 30,
  //
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  //
  HORIZONTAL_LINE_HEIGHT: StyleSheet.hairlineWidth,
  //
  HEADER_HEIGHT: 60,
  HEADER_PADDING_HORIZONTAL: 15,
  CONTENT_PADDING: 15,
  //
  STATUS_BAR_HEIGHT: getStatusBarHeight(),
  BOTTOM_SPACE: getBottomSpace(),
  //
  INPUT_BORDER_WIDTH: 1,
  isIphoneX,
};

export default metrics;
