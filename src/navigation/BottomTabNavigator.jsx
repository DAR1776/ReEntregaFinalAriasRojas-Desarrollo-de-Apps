import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from './CartNavigator'
import StackNavigator from "./StackNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Feather from '@expo/vector-icons/Feather'
import ProfileNavigator from "./ProfileNavigator";


const BottomTab = createBottomTabNavigator()

function BottomTabNavigator(){
    return <BottomTab.Navigator 
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false, 
                tabBarStyle: styles.tabBar}}
        >   

        <BottomTab.Screen 
            name='Shop' 
            component={StackNavigator} 
            options={{
                tabBarIcon: ({focused}) => (
                <Feather name= "shopping-bag" size={24} color={focused ? colors.secondary : colors.prymary} /> )
            }} 
        /> 

        <BottomTab.Screen 
            name='CartNav' 
            component={CartNavigator} 
            options={{
                tabBarIcon: ({focused}) => (
                <Feather name= "shopping-cart" size={24} color={focused ? colors.secondary : colors.prymary} /> )
            }} 
        /> 

        <BottomTab.Screen 
            name='OrdersNav' 
            component={OrdersNavigator} 
            options={{
                tabBarIcon: ({focused}) => (
                <Feather name= "list" size={24} color={focused ? colors.secondary : colors.prymary} /> )
            }} 
        /> 

        <BottomTab.Screen 
            name='ProfileNav' 
            component={ProfileNavigator} 
            options={{
                tabBarIcon: ({focused}) => (
                <Feather name= "user" size={24} color={focused ? colors.secondary : colors.prymary} /> )
            }} 
        /> 

    </BottomTab.Navigator>
}

export default BottomTabNavigator



const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.ternary,
    }
})