import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {Text} from 'react-native';
import GlobalStore from "../../../Constants/GlobalStore";
import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "../../../Themes";

const CustomTitle = ({ children, type, color, style, icon, ...rest }) => {
    return (
        <Text
            style={[styles.container, GlobalStore.appTheme.text[type], { color }, style ]}
            {...rest}>
            {children}
        </Text>
    );
};

CustomTitle.defaultProps = {
    type: 'body1Regular',
    color: Colors.neutral2,
};

CustomTitle.propTypes = {
    color: PropTypes.string,
    type: PropTypes.oneOf([
        "heading1",
        "heading2",
        "heading3",
        "heading4",
        "button1",
        "button2",
        "caption1Regular",
        "caption1Medium",
        "caption2Regular",
        "caption2Medium",
        "body1Regular",
        "body1Medium",
        "body3Medium",
        "body2Regular",
        "body2Medium",
        "smallText" ]),
    children: PropTypes.oneOfType([ PropTypes.element, PropTypes.string, PropTypes.array ]).isRequired,
};
const styles = EStyleSheet.create({
    container: {
        flexShrink: 1
    },
});

export default memo(CustomTitle);
