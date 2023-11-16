import React, { useEffect, useState } from "react";
import { Text, View, FlatList, useWindowDimensions, Image, TouchableOpacity } from "react-native";
import styles from "./Products.styles";
import { Header, SearchInput } from "../../components";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../services/shopApi";

const Products = ({navigation}) => {
    const category = useSelector(state => state.shop.categorySelected)
    const [keyword, setKeyword] = useState ("")
    const {height, width} = useWindowDimensions()
    const {data, isLoading} = useGetProductsByCategoryQuery(category)
    const [products, setProducts] = useState([])

    //PENDIENTE ARREGLAR EL SEARCH
    useEffect(() => {
        if (!isLoading){ 
            const dataArr = Object.values(data)
            setProducts(dataArr)
            const productsFiltered = dataArr.filter(products => 
                products.title.includes(keyword)
            )
            setProducts(productsFiltered)
        }
    }, [isLoading,keyword]) 

    return(
        <View style={styles.container}>
            <Header title={category}/>
            <SearchInput onSearch={setKeyword}/>
            <View style={styles.listContainer}>
                {!isLoading && (
                    <FlatList
                        data={products}
                        renderItem={({ item }) => (
                        <TouchableOpacity style={styles.productContainer} onPress={() => navigation.navigate('Details', {product: item})}>
                            <Text style={styles.text}>{item.title}</Text>
                            {width > 350 && (
                                <Image
                                style={{ width: 150, height: 250 }}
                                source={{
                                    uri: item.thumbnail,
                                }}
                                />
                            )}
                        </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}

            </View>
        </View>
    )
}

export default Products
