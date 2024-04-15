import { View, Text, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Image } from 'react-native';


export default function Items() {
    return (
        <View>
          <View className="flex-row justify-between items-center px-6 pt-5">
            <View>
             <Text
             className="text-sm text-2xl font-bold">Featured Items
             </Text>
             </View>
             <TouchableOpacity>
                <Text className="text-sm text-gray-800 font-semibold">View All</Text>
             </TouchableOpacity>
          </View>
          <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          content ContainerStyle={{
              paddingHorizontal: 15
          }}
          className="overflow-visible py-5 pl-5"
          >
            {
                <TouchableWithoutFeedback>
                <View className="mr-6 bg-white rounded-3xl shadow-lg">
                  <Image className="h-36 w-64 rounded-t-3xl" source={require('../assets/images/mango.avif')} />
                  <View className="px-3 pb-4 space-y-1">
                    <Text className="text-lg font-bold">{"Mangoes"}</Text>
                    <Text className="text-sm text-gray-500">{"Fruits"}</Text>
                    <Text className="text-lg font-bold">₹ {"300/Kg"}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>              
            }
            {
                <TouchableWithoutFeedback>
                        <View className="mr-6 bg-white rounded-3xl shadow-lg">
                            <Image className="h-36 w-64 rounded-t-3xl" source={require('../assets/images/tomatoes.jpeg')} />
                            <View className="px-3 pb-4 space-y-1">
                                <Text className="text-lg font-bold">{"Tomatoes"}</Text>
                                <Text className="text-sm text-gray-500">{"Vegatbables"}</Text>
                                <Text className="text-lg font-bold">₹ {"30/Kg"}</Text>
                            </View>
                        </View>
                </TouchableWithoutFeedback>
            }
          </ScrollView>   
        </View> 
    );
}
