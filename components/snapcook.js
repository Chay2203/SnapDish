import { View, Text } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";


export default function SnapCook() {
    return (
        <View className="bg-yellow-300 flex-row items-center p-3 rounded-xl mt-2 mx-6">
            <View className="flex-1">
            <Text className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                SnapDish
            </Text>
                <Text className="text-sm text-gray-600 font-semibold italic">
                    Get recipes based on ingredients
                </Text>
            </View>
            <View className="bg-white p-5 rounded-full">
                <Text className="font-bold text-sm">
                    <Icon.Camera className="pt-1" height="25" width="25" stroke="black"/>
                </Text>
            </View>
        </View>
    );
}