import Fonts from '../Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = () => {
    const text = EStyleSheet.create({
        heading1: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.heading1,
            lineHeight: 30,
        },
        //
        heading2: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.heading2,
            lineHeight: 28,
        },
        //
        heading3: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.heading3,
            lineHeight: 24,
        },
        //
        heading4: {
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.heading4,
            // fontStyle: 'normal',
            lineHeight: 22,
        },
        //
        button1: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.button1,
            lineHeight: 22,
        },
        //
        button2: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.regular,
            fontSize: Fonts.fontSize.button2,
            lineHeight: 18,
        },
        button3: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.regular,
            fontSize: Fonts.fontSize.body1,
            lineHeight: 22,
        },
        //
        caption1Regular: {
            //  fontFamily: Fonts.FontFamily,
            fontWeight: Fonts.fontWeight.regular,
            fontSize: Fonts.fontSize.caption1,
            lineHeight: 16,
        },
        //
        caption1Medium: {
            // fontFamily: Fonts.fontFamily,
            fontSize: Fonts.fontSize.caption1,
            lineHeight: 13,
        },
        //
        caption2Regular: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.regular,
            fontSize: Fonts.fontSize.caption2,
            lineHeight: 16,
        },
        //
        caption2Medium: {
            // fontFamily: Fonts.fontFamily,
            fontSize: Fonts.fontSize.caption2,
            lineHeight: 13,
        },
        //
        body1Regular: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.regular,
            fontSize: Fonts.fontSize.body1,
            lineHeight: 22,
        },
        //
        body1Medium: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.body1,
            lineHeight: 22,
        },
        //
        body2Regular: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.regular,
            fontSize: Fonts.fontSize.body2,
            lineHeight: 18,
        },
        //
        body2Medium: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.body2,
            lineHeight: 18,
        },
        body3Medium: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.medium,
            fontSize: Fonts.fontSize.body1,
            lineHeight: 20,
        },
        //
        smallText: {
            // fontFamily: Fonts.fontFamily,
            fontWeight: Fonts.fontWeight.regular,
            fontSize: Fonts.fontSize.smallText,
            lineHeight: 13,
        },
    });

    const view = EStyleSheet.create({
        container: {
            flex: 1,
        },
        flexStartRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        flexCenterRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        flexEndRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        flexStartCol: {
            alignItems: 'center',
        },
        flexCenterCol: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        flexEndCol: {
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
    });
    const button = EStyleSheet.create({
        btnLabelWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return {view, text, button};
};

export default styles;
