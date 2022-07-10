import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
            <CategoryCard title="KFC" imgUrl="https://links.papareact.com/gn7" />
            <CategoryCard title="KFC" imgUrl="https://links.papareact.com/gn7" />
            <CategoryCard title="KFC" imgUrl="https://links.papareact.com/gn7" />
            <CategoryCard title="KFC" imgUrl="https://links.papareact.com/gn7" />
            <CategoryCard title="KFC" imgUrl="https://links.papareact.com/gn7" />
            <CategoryCard title="KFC" imgUrl="https://links.papareact.com/gn7" />
        </ScrollView>
    )
}

export default Category