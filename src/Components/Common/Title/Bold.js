import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';

const Bold = ({ children, style, ...rest }) => {
    return (
        <Text style={[ { fontWeight: '500' }, style ]} {...rest}>
            {children}
        </Text>
    );
};

Bold.defaultProps = {};

export default memo(Bold);
