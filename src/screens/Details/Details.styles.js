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
    detailBox:{
        width:"100%",
        height: "90%",
        alignItems:"center",
    },
    imageBox:{
        height: "50%",
        width: "50%",
        marginVertical: "5%",
    },
    image:{
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
    title:{
        fontSize: 30,
        fontFamily: 'MontserratLightItalic',
        marginBottom: "2%"
    },
    descripcion:{
        fontSize: 15,
        fontFamily: 'MontserratExtraLightItalic',
        marginBottom: "2%",
        marginHorizontal: "5%"
    },
    price:{        
        fontSize: 20,
        fontFamily: 'MontserratLightItalic',
    },
    addButton:{
        backgroundColor: colors.ternary,
        margin: "3%",
        paddingHorizontal: "15%",
        paddingVertical:"2%"
    },
    addButtonText:{
        color: colors.prymary,
        fontSize: 20
    }
})