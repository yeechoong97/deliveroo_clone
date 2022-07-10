import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeatureRow = ({ title, description, featuredCategory }) => {
    return (
        <View className="mb-2">
            <View className="mt-4 flex-row items-center justify-between px-3">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                className="pt-4">
                <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Testing 1" rating="4.0" genre="Fast Food" address="Taman Suntex" short_description="Please enjoy taman" dishes={[]} long={20} lat={20} />
                <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Testing 1" rating="4.0" genre="Fast Food" address="Taman Suntex" short_description="Please enjoy taman" dishes={[]} long={20} lat={20} />
                <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Testing 1" rating="4.0" genre="Fast Food" address="Taman Suntex" short_description="Please enjoy taman" dishes={[]} long={20} lat={20} />
                <RestaurantCard id="1" imgUrl="https://links.papareact.com/gn7" title="Testing 1" rating="4.0" genre="Fast Food" address="Taman Suntex" short_description="Please enjoy taman" dishes={[]} long={20} lat={20} />
            </ScrollView>
        </View>
    )
}

export default FeatureRow