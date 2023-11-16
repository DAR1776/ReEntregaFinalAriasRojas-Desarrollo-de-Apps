import {Text, View, Image, Pressable} from 'react-native'
import { Header } from '../../components'
import React from 'react'
import styles from './Details.styles'

import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'

const Details = ({route}) => {
    const dispatch = useDispatch()
    const {product} = route.params

    const handleAddToCart = () => {
        dispatch(addItem({...product, quantity: 1}))
    }

    return(
        <View style={styles.container}>
            <Header title={"Detail"}/>
            <View style={styles.detailBox}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} 
                        source={{uri:product.images[0]}}
                    />
                </View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.descripcion}>{product.description}</Text>
                <Text style={styles.price}>{`$ ${product.price}`}</Text>
                <Pressable style={styles.addButton} onPress={handleAddToCart}>
                    <Text style={styles.addButtonText}>Add to cart</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Details