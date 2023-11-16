import { View, Text, TextInput, Pressable} from "react-native";
import React, { useState } from "react";
import styles from "./Signup.styles"
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const Signup = ({navigation}) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerSignup({ email, password })
        .unwrap()
        .then (result => {
            dispatch(setUser(result))
        })
        .catch(error => console.log(error))
    }


    return(
        <View style={styles.container}>
            <View style={styles.signupBox}>
                <Text style={styles.infoText}>
                    Sign Up to start
                </Text>
                <TextInput style={styles.input} value={email} placeholder='Email' placeholderTextColor={'white'} onChangeText={setEmail}/>
                <TextInput style={styles.input} value={password} placeholder='Password' placeholderTextColor={'white'} onChangeText={setPassword}/>
                <Text style={styles.infoImportanText}>6 caracters minimun</Text>
                <TextInput style={styles.input} value={confirmPassword} placeholder='Confirm Password' placeholderTextColor={'white'} onChangeText={setConfirmPassword}/>
                <Text style={styles.infoImportanText}>6 caracters minimun</Text>
                <Pressable style={styles.Button} onPress={onSubmit}>
                    <Text style={styles.ButtonText}>Sign Up</Text>
                </Pressable>
                <Text style={styles.infoText}>Already have an account?</Text>
                <Pressable style={styles.Button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.ButtonText}>Login</Text>
                </Pressable>
                {result.isError ? (
                    <Text style={styles.errorText}>ERROR! Check credentials </Text>
                ) : (
                    <Text></Text>
                )}
            </View>
        </View>
    )
}

export default Signup