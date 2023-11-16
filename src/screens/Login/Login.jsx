import { View, Text, TextInput, Pressable} from "react-native";
import React, {useState} from "react";
import styles from "./Login.styles"
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { insertSession } from "../../db";

const Login = ({navigation}) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [triggerLogin, result] = useLoginMutation()
    const dispatch = useDispatch()

    onSubmit = () => {
        triggerLogin({
            email,
            password,
        })
        .unwrap()
        .then(result => {
            dispatch(setUser(result))
            insertSession({
                localId: result.localId,
                email: result.email,
                token: result.idToken,
        })})
        
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }

    return(
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <Text style={styles.infoText}>
                    Login to start
                </Text>
                <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'white'} value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'white'} value={password} onChangeText={setPassword}/>
                <Pressable style={styles.Button} onPress={onSubmit}>
                    <Text style={styles.ButtonText}>Login</Text>
                </Pressable>
                <Text style={styles.infoText}>No account?</Text>
                <Pressable style={styles.Button} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.ButtonText}>Sign Up</Text>
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

export default Login