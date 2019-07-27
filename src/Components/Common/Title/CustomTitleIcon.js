import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStore from "../../../Constants/GlobalStore";
import Icon from "../Icon";
import {getIconObject} from "../../../Utils/CommonUtils";
import {Colors} from "../../../Themes";

const CustomTitle = ({ children, type, color, style, align, icon, ...rest }) => {
    return (
        <View style={styles.container}>
            {icon ? <View style={styles.icon}>
                {Icon.IcoMoon(getIconObject(icon))}
            </View> : null}
            <Text
                style={[ {
                    flexShrink: 1,
                    textAlign: align,
                }, GlobalStore.appTheme.text[type], { color }, style ]}
                {...rest}>
                {children}
            </Text>
        </View>
    );
};

CustomTitle.defaultProps = {
    type: 'body1Regular',
    color: Colors.neutral2,
    align: 'auto',
    icon: null,
};

CustomTitle.propTypes = {
    align: PropTypes.oneOf([ 'auto', 'left', 'right', 'center', 'justify' ]),
    color: PropTypes.string,
    icon: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 12,
        alignSelf: 'center',
    }
});

export default memo(CustomTitle);
