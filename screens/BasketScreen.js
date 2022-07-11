import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurant } from '../redux/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter'

const BasketScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-3 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full bg-gray-100 absolute top-3 right-5">
                        <XCircleIcon color="#00CCBB" height={50} width={50} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image source={{ uri: "https://links.papareact.com/wru" }} className="bg-gray-400 h-7 w-7 rounded-full" />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image source={{ uri: urlFor(items[0]?.image).url() }} className="h-12 w-12 rounded-full" />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">
                                <Currency quantity={items[0]?.price} currency="GBP" />
                            </Text>
                            <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                <Text className="text-[#00CCBB] text-xs">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-3 space-y-4">
                    <View className="justify-between flex-row">
                        <Text className="text-gray-400">SubTotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency="GBP" />
                        </Text>
                    </View>
                    <View className="justify-between flex-row">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={5.99} currency="GBP" />
                        </Text>
                    </View>
                    <View className="justify-between flex-row">
                        <Text className="text-gray-600">Order Total</Text>
                        <Text className="text-gray-600 font-extrabold">
                            <Currency quantity={basketTotal + 5.99} currency="GBP" />
                        </Text>
                    </View>

                    <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-3" onPress={() => navigation.navigate("PreparingOrder")}>
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen