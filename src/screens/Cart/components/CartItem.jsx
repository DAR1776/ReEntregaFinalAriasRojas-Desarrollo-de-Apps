import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './CartItem.styles';
import { colors } from '../../../constants/colors';
import Feather from '@expo/vector-icons/Feather';

const CartItem = ({item}) => { 
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{item.title}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text>{`$${item.price}`}</Text>
                    <Text>{`Units: ${item.quantity} `}</Text>
                </View>
                <Pressable>
                    <Feather name="trash" size={24} color={"red"} />
                </Pressable>
            </View>
        </View>
    );
}

export default CartItem;
