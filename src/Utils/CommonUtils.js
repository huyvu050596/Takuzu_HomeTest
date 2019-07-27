import { Platform, Alert } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {Colors} from "../Themes";
import _ from "lodash";
export default {
  getStatusBarHeight() {
    // 44 - on iPhoneX
    // 20 - on iOS device
    // X - on Android platfrom (runtime value)
    // 0 - on all other platforms (default)
    return getStatusBarHeight();
  },
  msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return `${hours > 0 ? hours + ' : ' : ''}${minutes} : ${seconds}`
  },
  AlertCommon(title, message, actionActive, textActive, actionNonActive , textNonActive){
    const active = actionActive ? {text: textActive, onPress: () => actionActive()} : null;
    const nonActive = actionNonActive ? {text: textNonActive, onPress: () => actionNonActive()} : null;
    const arrButton = [active];
    if(nonActive) arrButton.unshift(nonActive);
    Alert.alert(
        title,
        message,
        arrButton,
        {cancelable: false},
    );
  },
  showError(title, error, cb) {
    Alert.alert(title, error, [{ text: 'OK', onPress: cb ? () => cb() : () => {} }], {
      cancelable: false,
    });
  },
  /**
|--------------------------------------------------
| check Object Empty
|--------------------------------------------------
*/
  isEmptyObj(obj) {
    return Object.keys(obj || {}).length === 0;
  },
  isStringEmpty(text) {
    return text === undefined || text === null || text === '';
  },

  orderByDesc(array, key){
    return _.orderBy(array, key, ['asc'])
  },

  findMaxItem(array, key){
    return _.reduce(array, (prev, current) => {
      return (current[key] > prev[key])? current : prev
    })
  }
};

export const getPlatform = () => Platform.OS;
export const isAndroid = () => getPlatform() !== 'ios';
export const getHeightAuth = (height) => isAndroid() ? getStatusBarHeight() + height : height;
export const showAlert = (title = 'Thông báo', message=`Có lỗi xảy ra`, button=[]) => Alert.alert(
    title,
    message,
    button,
    {cancelable: false},
);

export const getIconObject = (icon) => {
  if (typeof icon === 'string')
    return { size: 24, name: icon, color: Colors.neutral3 };

  return icon;
};

