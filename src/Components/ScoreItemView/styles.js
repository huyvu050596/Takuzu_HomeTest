import EStyleSheet from "react-native-extended-stylesheet";
import {Fonts, Colors} from "../../Themes";
import {Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: Colors.neutral6,
        backgroundColor: 'transparent',
        margin:5,
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius: 5,
        flexDirection:'row',
        alignItems: "center",
    },
    txtScore: {

    }
});
export default styles;