import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        width:"100%",
        height: "100%",
        alignItems:"center",
        backgroundColor: colors.prymary,

    },
    listContainer: {
        flex: 1,
        minWidth: 200,
        width: "80%",
        maxWidth: 300,
        backgroundColor: colors.secondary,
        paddingHorizontal: 15,
        marginTop: 15,
    },
    text:{
        fontFamily: 'MontserratLightItalic',
        fontSize: 20
    },
    productContainer:{
        width: "100%", 
        borderWidth: 1,
        padding: 20,
        marginTop: 10,
        alignItems: "center",
    },
})