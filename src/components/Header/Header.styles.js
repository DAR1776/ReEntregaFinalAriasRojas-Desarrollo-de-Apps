import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        minHeight: 100,
        height: "15%",
        maxHeight: 200,
        width:"100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
  
        paddingTop: "10%",
        paddingBottom: "5%",
        backgroundColor: colors.quaternary
    },
    text:{
        fontSize: 30,
        fontFamily: 'Montserrat',
        marginHorizontal: '10%',
    }
})