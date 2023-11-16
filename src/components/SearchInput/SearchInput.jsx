import { View, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import styles from './SearchInput.styles'

const SearchInput =  ({onSearch}) => {
    const [value,  setValue] = useState('')

    useEffect(() => {
        onSearch(value)
    }, [value])

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder="Search product"
            />
        </View>
    )
}

export default SearchInput