import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Fonts, Metrics, Colors} from '../../../Themes';
import Icon from "../Icon";
import PropTypes from "prop-types";
import {getValue} from "../../../Constants/Utils";
import {getIconObject} from "../../../Utils/CommonUtils";

export default class CustomInput extends PureComponent {
    state = {
        focus: false,
    };

    renderLeft = () => {
        const { image, text, renderLeft: rl, icon, onPressLeft } = this.props;
        if (image) return (
            <TouchableOpacity style={{ marginRight: 12 }} onPress={onPressLeft}>
                <Image
                    source={image}
                />
            </TouchableOpacity>
        );
        if (icon) return (
            <TouchableOpacity style={{ marginRight: 12 }} onPress={onPressLeft}>
                {Icon.IcoMoon(getIconObject(icon))}
            </TouchableOpacity>
        );
        if (text) return (
            <TouchableOpacity style={[ styles.containerLeft ]} onPress={onPressLeft}>
                <Text style={[ styles.input, { color: Colors.neutral3, fontWeight: '500' } ]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
        if (typeof rl === 'function') return rl();
    };

    renderRight = () => {
        const { imageRight, textRight, renderRight: rl, iconRight, onPressRight } = this.props;
        if (imageRight) return (
            <TouchableOpacity style={{ marginLeft: 12 }} onPress={onPressRight}>
                <Image
                    source={imageRight}
                />
            </TouchableOpacity>
        );
        if (iconRight) return (
            <TouchableOpacity style={{ marginLeft: 12 }} onPress={onPressRight}>
                {Icon.IcoMoon(getIconObject(iconRight))}
            </TouchableOpacity>
        );
        if (textRight) return (
            <TouchableOpacity style={[ styles.containerRight ]} onPress={onPressRight}>
                <Text style={[ styles.input, { color: Colors.neutral, lineHeight: 19 } ]}>
                    {textRight}
                </Text>
            </TouchableOpacity>
        );
        if (typeof rl === 'function') return rl();
    };

    focus = () => {
        const { onFocus } = this.props;

        this.setState({ focus: true });
        typeof onFocus === 'function' && onFocus();
    };

    blur = () => {
        const { onBlur } = this.props;

        this.setState({ focus: false });
        typeof onBlur === 'function' && onBlur();
    };

    render() {
        const { focus } = this.state;
        const { justText, onFocus, onBlur, nextInputRef, innerRef, containerStyle, style, error, iconRight, onPressIconRight, multiline, containerProps, ...rest } = this.props;
        const rootStyle = [ styles.container, containerStyle ];
        if (focus) rootStyle.push(styles.inputFocus);
        if (error) rootStyle.push(styles.inputError);

        return (
            <View>
                <View style={rootStyle} {...containerProps}>
                    {this.renderLeft()}
                    {!justText ?
                        <TextInput
                            ref={innerRef}
                            returnKeyType={"next"}
                            autoCapitalize={"none"}
                            multiline={multiline}
                            placeholderTextColor={Colors.neutral3}
                            underlineColorAndroid={'transparent'}
                            style={[ styles.input, style ]}
                            selectionColor={Colors.neutral2}
                            onFocus={this.focus}
                            onBlur={this.blur}
                            onSubmitEditing={getValue('current.focus', () => {
                            })(nextInputRef)}
                            {...rest}
                        /> :
                        <Text
                            ref={innerRef}
                            style={[ styles.input, style ]}
                            {...rest}
                        >
                            {rest.value || rest.placeholder}
                        </Text>
                    }
                    {this.renderRight()}
                </View>
                {error ? <Text style={[ styles.errorText ]}>{error}</Text> : null}
            </View>
        );
    }
}

CustomInput.defaultProps = {
    onPressRight: () => {
    },
    onPressLeft: () => {
    },
    justText: false
};

CustomInput.propTypes = {
    //All text input prop type
    containerStyle: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
    containerProps: PropTypes.object,
    style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
    error: PropTypes.string,
    icon: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
    text: PropTypes.string,
    image: PropTypes.oneOfType([ PropTypes.object, PropTypes.number ]),
    onPressLeft: PropTypes.func,
    iconRight: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
    textRight: PropTypes.string,
    imageRight: PropTypes.object,
    onPressRight: PropTypes.func,
    nextInputRef: PropTypes.object,
    multiline: PropTypes.bool,
    justText: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.neutral6,
        borderColor: Colors.neutral4,
        borderRadius: Metrics.INPUT_RADIUS,
        borderWidth: Metrics.INPUT_BORDER_WIDTH,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        minHeight: 48,
    },
    inputFocus: {
        borderColor: Colors.neutral2,
    },
    inputError: {
        borderColor: Colors.semanticRed,
    },
    input: {
        flex: 1,
        textAlign: 'left',
        color: Colors.neutral,
        fontSize: 14,
        // lineHeight: 22,
        fontFamily: Fonts.FontFamily,
        paddingVertical: 0
    },
    errorText: {
        marginTop: 8,
        color: Colors.semanticRed,
        fontSize: 12,
        lineHeight: 18,
    },
    containerLeft: {
        borderRightWidth: Metrics.INPUT_BORDER_WIDTH,
        borderColor: Colors.neutral5,
    },
    containerRight: {
        borderLeftWidth: Metrics.INPUT_BORDER_WIDTH,
        borderColor: Colors.neutral5,
    }
});
