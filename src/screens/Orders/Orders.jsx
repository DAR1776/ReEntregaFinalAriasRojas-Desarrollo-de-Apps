import React, { useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useGetOrdersQuery } from '../../services/shopApi';
import { Header } from "../../components";
import styles from './Orders.styles';

const Orders = () => {
    const { data, isLoading, refetch } = useGetOrdersQuery();
    const renderList = () => {
        if (!data) {
            return null; 
        } 

        return (
            <>
                <FlatList
                    data={Object.values(data)}
                    renderItem={({ item }) => (
                        <View style={styles.itemBox}>
                            <Text style={styles.textItem}>Price: {item.total}$</Text>
                            <Text style={styles.textItem}>User: {item.user}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

                <Button title="Refresh Orders" onPress={refetch} />
            </>
        );
    };

    return (
        <View style={styles.container}>
            <Header title='Orders' />
            {!isLoading && renderList()}
        </View>
    );
};

export default Orders;