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
    loginBox:{
        width: "80%",
        backgroundColor: colors.secondary,
        justifyContent:'center',
        alignItems:"center",
    },
    input:{
        width: "85%",
        backgroundColor: colors.ternary,
        marginVertical: "4%",
        color: colors.prymary,
        paddingHorizontal: 10,
    },
    Button:{
        backgroundColor: colors.ternary,
        paddingVertical: "3%",
        paddingHorizontal: "7%",
        
    },
    ButtonText:{
        fontSize: 15,
        color: colors.prymary,
    },
    infoText:{
        fontSize: 20,
        marginVertical: "5%"
    },
    errorText:{
        fontSize: 20,
        marginVertical: "4%",
        color: 'red',
    },
})