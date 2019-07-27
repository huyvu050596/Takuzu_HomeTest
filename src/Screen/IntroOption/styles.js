import EStyleSheet from "react-native-extended-stylesheet";
import {Fonts, Colors, Metrics} from "../../Themes";
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtHeading: {
        position:'absolute',
        top: height / 4,
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.label1,
        lineHeight: Fonts.fontSize.label1 + 3,
        fontWeight: Fonts.fontWeight.medium,
    },
    txtBottomPlay: {
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.label2,
        lineHeight: Fonts.fontSize.label2 + 3,
        fontWeight: Fonts.fontWeight.medium,
    },
    btnBottomPlay: {
        marginVertical: 30,
        alignSelf: 'center',
    },
    txtBottomRank: {
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.label2,
        lineHeight: Fonts.fontSize.label2 + 3,
        fontWeight: Fonts.fontWeight.medium,
    },
    btnBottomRank: {
        marginTop:10,
        alignSelf: 'center',
    },
    txtBottom:{
        position:'absolute',
        bottom: 10,
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.heading1,
        lineHeight: Fonts.fontSize.heading1 + 3,
        fontWeight: Fonts.fontWeight.medium,
    }
});
export default styles;