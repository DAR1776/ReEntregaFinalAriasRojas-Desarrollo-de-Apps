import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems:"left",
        backgroundColor: colors.prymary,
    },
    textItem:{
        color: 'black',
        fontSize: 20,

    },
    itemBox:{
        flex: 1,
        marginVertical: "10%",
        marginHorizontal: "5%",
        width: '100%',
        borderBottomWidth: 2,
    },
})