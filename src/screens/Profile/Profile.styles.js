import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: colors.prymary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: '5%'
      },
    button: {
        backgroundColor: colors.ternary,
        height: "7%",
        width: '40%',
        alignItems: 'center',
        justifyContent:'center',
        marginVertical: '3%'
    },
    buttonText:{
        color: colors.prymary,
        fontSize: 18,
    }
})