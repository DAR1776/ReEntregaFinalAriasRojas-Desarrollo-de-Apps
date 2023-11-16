import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Home, Products } from "../screens";
import { Header } from "../components";
import { View, Button } from "react-native";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={({route, navigation}) => ({
                headerShown: false,
                /*header: () => (
                    <View style = {{flexDirection: "row", paddingTop: 30}}>
                        <Button onPress={() => navigation.goBack()} title="Previous"/>
                        <Header title={route.name}/>
                    </View>
                ) */
            })}
        >
            <Stack.Screen name= 'Home' component={Home} />
            <Stack.Screen name= 'Products' component={Products} />
            <Stack.Screen name= 'Details' component={Details} />
        </Stack.Navigator>
    )
}
export default StackNavigator