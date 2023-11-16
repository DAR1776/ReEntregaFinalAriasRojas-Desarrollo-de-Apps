import { Text, View, FlatList, Pressable, Alert } from 'react-native'
import CartItem from './components/CartItem'
import {Header} from "../../components";
import styles from './Cart.styles'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { usePostOrderMutation, useGetOrdersQuery } from '../../services/shopApi';


const Cart = () => {
    const cart = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const user = useSelector(state => state.auth.user)
    const [triggerPost, result] = usePostOrderMutation()

    const {refetch} = useGetOrdersQuery();

    const confirmCart = ()=> {
        triggerPost({total, cart, user: user})
        createButtonAlert()
        console.log('REFETCH')
    }

    const createButtonAlert = () =>
    Alert.alert('CONFIRMACION EXITOSA', 'Se confirmado con exito tu carrito de compras :)', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    return(
        <View style={styles.container}>
            <Header title= "Cart"/>
            <View>
                <FlatList 
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <CartItem item = {item}/>
                    )}
                />
            </View>
            <View>
                <Pressable style={styles.confirmButton} onPress={confirmCart}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </Pressable>
                <View >
                    <Text style={{fontSize: 20, marginHorizontal: "3%"}}>{`Total: $${total}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default Cart