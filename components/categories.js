import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <View className="bg-white overflow-auto h-24 flex-row items-center space-x-3 pl-4 rounded-t-3xl">
            <TouchableOpacity onPress={() => handleCategoryClick("All")} className="flex-row items-center p-3 rounded-full" style={{ backgroundColor: selectedCategory === "All" ? "yellow" : "white", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: selectedCategory === "All" ? "black" : "black" }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryClick("Fruits")} className="flex-row items-center p-3 rounded-full" style={{ backgroundColor: selectedCategory === "Fruits" ? "yellow" : "white", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, marginLeft: 5 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: selectedCategory === "Fruits" ? "black" : "black" }}>Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryClick("Vegetables")}className="flex-row items-center p-3 rounded-full" style={{ backgroundColor: selectedCategory === "Vegetables" ? "yellow" : "white", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, marginLeft: 5 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: selectedCategory === "Vegetables" ? "black" : "black" }}>Vegetables</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryClick("Dairy")} className="flex-row items-center p-3 rounded-full" style={{ backgroundColor: selectedCategory === "Dairy" ? "yellow" : "white", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, marginLeft: 5 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: selectedCategory === "Dairy" ? "black" : "black" }}>Dairy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryClick("Bakery")} className="flex-row items-center p-3 rounded-full" style={{ backgroundColor: selectedCategory === "Bakery" ? "yellow" : "white", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, marginLeft: 5 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: selectedCategory === "Bakery" ? "black" : "black" }}>Bakery</Text>
            </TouchableOpacity>
        </View>
    );
}
