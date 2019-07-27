import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../Icon/Icon';
import GlobalStore from '../../../Constants/GlobalStore';
import { isEmpty, throttle } from 'lodash';
import {getIconObject} from "../../../Utils/CommonUtils";
import {Colors} from "../../../Themes";
export default class CustomButton extends PureComponent {
  constructor(props) {
    super(props);
    this.throttlePress = throttle(this.props.onPress, 300);
  }

  getBaseColorButton = () => {
    const { color, variant } = this.props;
    const textColor = color;
    const backgroundColor = 'transparent';
    const borderColor = 'transparent';
    if (variant === 'text') return { textColor, backgroundColor, borderColor };
    if (variant === 'outlined') return { textColor, backgroundColor, borderColor: color };
    return {
      textColor: Colors.neutral6,
      backgroundColor: color,
      borderColor: color,
    };
  };

  getIconObject = icon => {
    const { color, variant, size: s } = this.props;

    if (typeof icon === 'string') {
      const size = s === 'small' ? 16 : 24;
      if (variant === 'contained')
        return { size, name: icon, color: Colors.neutral6 };
      return { size, name: icon, color };
    }

    return icon;
  };

  render() {
    const {
      onPress,
      label,
      textProps,
      buttonStyles,
      icon,
      hitSlop,
      loading,
      size,
      color,
      variant,
      hidden,
      disabled,
      fullWidth,
      justIcon,
      styleIcon,
      colorText,
      isIconRight,
      ...rest
    } = this.props;

    if (hidden) return null;

    const { backgroundColor, textColor, borderColor } = this.getBaseColorButton();
    const stylesLabel = [GlobalStore.appTheme.text.button1];
    const stylesContainer = [styles.container];

    if (size === 'small') {
      stylesLabel.push(GlobalStore.appTheme.text.button2);
      stylesContainer.push(styles.containerSmall);
    }

    if (!fullWidth) stylesContainer.push(styles.containerFit);

    const labelView = label ? (
      <Text
        {...textProps}
        style={[...stylesLabel, { color: colorText || textColor }, { ...textProps.style }]}>
        {label}
      </Text>
    ) : null;

    const iconView = !isEmpty(icon) ? (
      <View style={[{ marginRight: label ? 6 : 0 , marginLeft:isIconRight && label ? 6: 0 }, styleIcon]}>
        {Icon.Ionicons(getIconObject(icon))}
      </View>
    ) : null;

    if (loading) return <ActivityIndicator size="small" color={color} />;

    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={this.throttlePress}
        hitSlop={hitSlop}
        {...rest}>
        <View
          style={
            !justIcon ? [...stylesContainer, { backgroundColor, borderColor }, buttonStyles] : {}
          }>
         {!isIconRight && iconView}{labelView}{isIconRight && iconView}
        </View>
      </TouchableOpacity>
    );
  }
}

CustomButton.defaultProps = {
  onPress: () => {},
  label: '',
  icon: null,
  color: Colors.accent,
  size: 'normal',
  variant: 'contained',
  fullWidth: true,
  loading: false,
  hidden: false,
  hitSlop: { top: 20, left: 20, bottom: 20, right: 20 },
  textProps: {},
  buttonStyles: {},
  justIcon: false,
  colorText: null,
  isIconRight:false
};

CustomButton.propTypes = {
  justIcon: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  hidden: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  color: PropTypes.string,
  colorText: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  textProps: PropTypes.object,
  buttonStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
  }),
  isIconRight:PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 13,
    borderWidth: 1.5,
    height: 48,
  },
  containerSmall: {
    borderWidth: 1,
    paddingHorizontal: 7,
    height: 30,
  },
  containerFit: {
    alignSelf: 'center',
  },
  indicatorWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
