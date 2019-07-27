import EStyleSheet from "react-native-extended-stylesheet";
import GlobalStore from "../../Constants/GlobalStore";
import {Fontsm, Colors} from "../../Themes";
import {Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        height:80,
        borderWidth: 0.5,
        borderColor: Colors.neutral6,
        backgroundColor: 'transparent',
        borderRadius: 5,
        width: (width - 6 * 4) / 4,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    nonActive:{
        backgroundColor: 'transparent',
    },
    activeRed:{
        backgroundColor: Colors.semanticRed
    },
    activeBlue:{
        backgroundColor: Colors.semanticBlue
    }
});
export default styles;