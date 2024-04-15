import { View, Text } from "react-native";
import React from "react";


export default function Footer() {
    return (
    <View className="bg-gray-100 pl-5 pt-10">
    <Text className="text-6xl opacity-20 font-bold font-poppins">
    India's last minute app {'❤️'}
    </Text>
    <View style={{ borderBottomWidth: 2, borderBottomColor: "black", marginTop: 5, opacity: 0.2, width:380, paddingTop:20 }} />
    <Text className="font-bold font-poppins pt-8 pb-8 opacity-50">
        blinkit
    </Text>
    </View>
    );
}