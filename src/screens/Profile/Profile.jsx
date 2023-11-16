import * as ImagePicker from 'expo-image-picker'  

import {View, Image, Pressable, Text, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './Profile.styles'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopApi'

const Profile = ({navigation}) => {
    const image = useSelector(state => state.auth.imageCamera)
    const { localId } = useSelector(state => state.auth)
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
          return false
        }
        return true
    }
    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()

        if (isCameraOk) {
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [9, 16],
            base64: true,
            quality: 0.4, //Va de 0  a 1 
          })
          if (!result.canceled) {
            dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)) 
          }
        }
    }
    const confirmImage = () => {
        triggerSaveProfileImage({ image, localId })
        console.log('STATUS:', result.status)
        createButtonAlert()
    }

    const createButtonAlert = () =>
    Alert.alert('CONFIRMACION EXITOSA', 'Se confirmado con exito tu foto de perfil :)', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    return(
        <View style={styles.container}>
            {image ?   (
                <Image
                    source={{
                        uri: image 
                    }}
                    style={styles.image}
                    resizeMode='cover'
                /> ) 
                : (
                    <Image
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
                        }}
                        style={styles.image}
                        resizeMode='cover'
                    /> ) 
            }
            <Pressable style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>Add profile photo</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={confirmImage}>
                <Text style={styles.buttonText}>Confirm photo</Text>
            </Pressable>
        </View>
    )
}

export default Profile