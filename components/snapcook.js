import { View, Text } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function SnapCook() {
    return (
        <View className="bg-white bg-opacity-10 flex-row items-center p-3 pl-6 pr-4 pt-8 rounded-t-3xl">
            <View className="flex-1">
            <Text className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                SnapCook
            </Text>
                <Text className="text-sm text-gray-600 font-semibold italic">
                    Get recipes based on ingredients
                </Text>
            </View>
            <View className="bg-yellow-300 p-5 rounded-full">
                <Text className="font-bold text-sm">
                    Try Now
                </Text>
            </View>
        </View>
    );
}