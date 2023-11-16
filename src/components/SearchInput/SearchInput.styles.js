import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        minWidth:200,
        width: '100%',
        maxWidth:300,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 10,
    },
    input: {
        width: '85%',
        backgroundColor: colors.prymary,
        color: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.secondary,
        marginRight: 15,
        padding: 10,
        fontSize: 20,
    },
})