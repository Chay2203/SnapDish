import { View, Text } from "react-native";
import React from "react";

export default function Categories() {
    return (
        <View className="overflow-auto h-24 flex-row items-center space-x-3 pl-4">
        <View className="bg-white flex-row items-center p-3 rounded-full">
            <Text className="text-sm font-bold">All</Text>
        </View>
        <View className="bg-white flex-row items-center p-3 rounded-full">
            <Text className="text-sm font-bold">Fruits</Text>
        </View>
        <View className="bg-white flex-row items-center p-3 rounded-full">
            <Text className="text-sm font-bold">Vegetables</Text>
        </View>
        <View className="bg-white flex-row items-center p-3 rounded-full">
            <Text className="text-sm font-bold">Dairy</Text>
        </View>
        <View className="bg-white flex-row items-center p-3 rounded-full">
            <Text className="text-sm font-bold">Bakery</Text>
        </View>
    </View>
    );
}