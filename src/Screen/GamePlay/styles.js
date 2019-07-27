import EStyleSheet from "react-native-extended-stylesheet";
import {Fonts, Colors, Metrics} from "../../Themes";
import {Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        //alignItems:'center'
    },
    viewHeading: {
        marginVertical: Metrics.isIphoneX() ? 30 : 20,
        width: width / 1.5,
        borderWidth: 0.5,
        borderColor: Colors.neutral6,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    },
    txtHeading: {
        width: width / 1.5,
        textAlign: 'center',
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.label2,
        lineHeight: Fonts.fontSize.label2 + 3,
        fontWeight: Fonts.fontWeight.regular,
    },
    viewBody: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 25
    },
    viewFooter: {
        flex: 1,
        position: 'absolute',
        bottom: Metrics.isIphoneX() ? 30 : 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
    },
    txtBottomBack: {
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.label2,
        lineHeight: Fonts.fontSize.label2 + 3,
        fontWeight: Fonts.fontWeight.medium,
    },
    btnBottomBack: {
        marginHorizontal: 30,
        alignSelf: 'center',
    },
    txtBottomPlayAgain: {
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.label2,
        lineHeight: Fonts.fontSize.label2 + 3,
        fontWeight: Fonts.fontWeight.medium,
    },
    btnBottomPlayAgain: {
        marginHorizontal: 30,
        alignSelf: 'center',
    },
    contentBody: {flexDirection: 'row'}
});
export default styles;