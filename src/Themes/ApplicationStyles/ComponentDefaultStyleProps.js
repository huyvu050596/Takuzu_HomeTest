import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity,
} from 'react-native-global-props';
import Fonts from '../Fonts';
// Setting a default background color for all View components.
const customViewProps = {
  style: {},
};

// Getting rid of that ugly line on Android and adding some custom style to all TextInput components.
const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
  style: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
};

// Setting default styles for all Text components.
const customTextProps = {
  style: { fontFamily: Fonts.FontFamily, fontSize: 14 },
};

// Makes every image resize mode cover by default.
const customImageProps = {
  resizeMode: 'cover',
};

// Adds a bigger hit box for all TouchableOpacity's.
const customTouchableOpacityProps = {
  // hitSlop: { top: 15, right: 15, left: 15, bottom: 15 },
  activeOpacity: 0.85,
};
const init = () => {
  setCustomView(customViewProps);
  setCustomTextInput(customTextInputProps);
  setCustomText(customTextProps);
  setCustomImage(customImageProps);
  setCustomTouchableOpacity(customTouchableOpacityProps);
};

export default init;
