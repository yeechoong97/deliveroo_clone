import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 items-center justify-center">
            <Animatable.Image
                source={require("../assets/95531-chef.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-[#00CCBB] font-bold text-center"
            >
                Waiting for Restaurant to accept your order
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color="#00CCBB" />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen