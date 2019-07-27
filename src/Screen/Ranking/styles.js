import EStyleSheet from "react-native-extended-stylesheet";
import {Fonts, Colors, Metrics} from "../../Themes";
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    txtHeading: {
        marginTop:10,
        alignSelf:'center',
        color: Colors.neutral6,
        fontSize: Fonts.fontSize.label1,
        lineHeight: Fonts.fontSize.label1 + 3,
        fontWeight: Fonts.fontWeight.medium,
    },
    dividerList: {
        height: 5,
        width: "100%",
        backgroundColor: 'transparent',
    },
    viewBody:{
        flex: 1,
        margin:15,
        borderWidth: 0.5,
        borderColor: Colors.neutral6,
        backgroundColor: 'transparent',
        borderRadius: 5,
    },
    viewFooter:{
        marginBottom: Metrics.isIphoneX() ? 30 : 15,
        alignItems: 'center'
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
    viewEmpty: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
});
export default styles;