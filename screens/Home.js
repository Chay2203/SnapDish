
import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import { StatusBar } from 'expo-status-bar';
import Categories from '../components/categories';
import SnapCook from '../components/snapcook';
import Items from '../components/items';

export default function Home() {
    {/*Search Bar*/}
    return (
        <SafeAreaView className="bg-yellow-300">
            <Text className="font-bold ml-6 pb-1">
                Delivery in
            </Text>
            <Text className="font-bold ml-5 text-4xl pb-1">
            8 mins
            </Text>
            <Text className="ml-6 pb-2 text-gray-600">
            Electronic City, Bangalore
            </Text>
            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pt-1">
                <View className="bg-white flex-row flex-1 items-center p-3 rounded-full ">
                    <Icon.Search  height="25"  widht="25" stroke="gray"/>
                    <TextInput placeholder="Search Mangoes" className="flex-1 ml-2 text-sm" />
                    <View className="flex-row items-center space-x-1 pl-2 border-l-gray">
                    <Icon.Mic height="20" width="20" className="stroke-current text-black" />
                    </View> 
                </View>
                <View className="bg-transparent p-3 rounded-full">
                    <Icon.Sliders height="25" width="25" stroke="black"/>
                </View>
            </View>
            {/*Main Content*/}
            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 20
            }} 
            > 
            {/*Categories*/}
            <Categories />
            {/*New Feature*/}
            <SnapCook />
            {/*Featured Items*/}
            <Items />
        </ScrollView>
    </SafeAreaView>
    );
}