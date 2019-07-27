// Libraries
import React, {PureComponent} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from 'prop-types';
// Utilities
import {Colors} from '../../../Themes';
// Components
import Icon from '../Icon/Icon';
import GlobalStore from "../../../Constants/GlobalStore";

export default class RadioButton extends PureComponent {

    getNameIcon = () =>{
        const {buttonType, isActive, size} = this.props;
        if(buttonType === 'Radio'){
            return isActive ? {size, name: 'radio-enable', color:  GlobalStore.color.gradientOrange1} : {size, name: 'radio-disable', color: GlobalStore.color.neutral4}
        }else{
            return isActive ? {size, name: 'checkbox-enable', color:  GlobalStore.color.gradientOrange1} : {size, name: 'checkbox-disable', color: GlobalStore.color.neutral4}
        }
    };

    render() {
        const {
            onPress,
            buttonStyle,
            iconWrapper,
            hitSlop,
            isActive,
        } = this.props;
        const iconView =  (
            <View style={[ styles.iconWrapper, iconWrapper ]}>
                {Icon.IcoMoon(this.getNameIcon())}
            </View>
        );

        return (
            <TouchableOpacity
                onPress={() => onPress(!isActive)}
                style={[ styles.container, buttonStyle ]}
                hitSlop={hitSlop}>
                {iconView}
            </TouchableOpacity>
        );
    }
}

RadioButton.defaultProps = {
    onPress: () => {
    },
    buttonType: 'Radio',
    size: 20,
    isActive: false,
    hitSlop: {top:35, right:35, bottom:35, left:35}
};

RadioButton.propTypes = {
    onPress: PropTypes.func,
    isActive: PropTypes.bool,
    size: PropTypes.number,
    buttonType: PropTypes.oneOf(['Radio','Checkbox']),
    buttonStyle: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, PropTypes.number ]),
    iconWrapper: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, PropTypes.number ]),
};

const styles = EStyleSheet.create({
    container: {

    },
});
