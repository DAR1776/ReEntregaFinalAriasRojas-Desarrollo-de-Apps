import React from "react";
import { View, FlatList } from "react-native";
import {CategoryItem} from "./components/index"; 
import {Header} from "../../components";
import styles from "./Home.styles"

import { useGetCategoriesQuery } from "../../services/shopApi";

const Home = ({navigation}) => {
    const {data, isLoading} = useGetCategoriesQuery()
    return(
        <View style={styles.container}>
            <Header title= "Categories"/>
            {!isLoading && (            
            <FlatList 
            data={data} 
            keyExtractor={category => category}
            renderItem={({item}) => 
                <CategoryItem category={item} navigation={navigation}/>}
            />
            )}

        </View>
    )
}

export default Home
