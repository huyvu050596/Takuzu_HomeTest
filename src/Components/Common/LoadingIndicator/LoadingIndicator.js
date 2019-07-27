// Libraries
import React, {PureComponent} from 'react';
import {View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
// Utilities
import {Colors} from '../../../Themes';

//Components
export default class LoadingIndicator extends PureComponent {
    render() {
        const {customIndicator, isHidden, size} = this.props;
        if (isHidden) {
            return null;
        }
        return (
            <View style={[styles.indicatorWrapper, customIndicator]}>
                <ActivityIndicator size={size} color={Colors.primary}/>
            </View>
        )
    }
}

LoadingIndicator.defaultProps = {
    isHidden: false,
    size: "small"
};

LoadingIndicator.propsType = {
    customIndicator: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]),
    isHidden: PropTypes.bool,
    size: PropTypes.string,
};