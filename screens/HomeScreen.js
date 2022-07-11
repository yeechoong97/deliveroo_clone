import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'
import Category from '../components/Category'
import FeatureRow from '../components/FeatureRow'
import client from '../sanity'

const HomeScreen = () => {

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    useEffect(() => {
        client.fetch(`
            *[_type == "featured"] {
                ...,
                restaurants[]-> {
                    ...,
                    dishes[]->
                }
            }`).then(data => {
            setFeaturedCategories(data);
        })
    }, []);

    return (
        <SafeAreaView className="bg-white pt-3 flex-1">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <View className="flex-row items-center">
                        <Text className="font-bold text-lg">Current Location</Text>
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </View>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 px-4">
                <View className="flex-row space-x-2 bg-gray-200 flex-1 items-center px-4">
                    <SearchIcon size={20} color="gray" />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </View>
                <AdjustmentsIcon size={24} color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100 flex-1" >
                {/* Category Component */}
                <Category />
                {/* Featured Rows */}

                {featuredCategories?.map((category) => (
                    <FeatureRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen
