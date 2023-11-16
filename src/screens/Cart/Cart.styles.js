import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: colors.prymary,
    },
    confirmButton: {
        width: "25%",
        backgroundColor: colors.ternary,
        marginVertical: "5%",
        marginHorizontal: "3%",
        padding: "3%",
        alignItems: "center"
    },
    confirmButtonText:{
        fontSize: 15,
        color: colors.prymary
    },
})