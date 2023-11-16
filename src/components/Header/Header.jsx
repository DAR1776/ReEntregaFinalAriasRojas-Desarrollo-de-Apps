import { Text, View, Button } from "react-native";
import Feather from '@expo/vector-icons/Feather'
import { useDispatch } from "react-redux";
import { clearUser } from "../../features/auth/authSlice";

import React from "react";

import styles from './Header.styles'
import { deleteSession } from "../../db";


const Header = ({title}) => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Feather name="log-out" size={24} onPress={logout} />
        </View>
    )
}

export default Header

