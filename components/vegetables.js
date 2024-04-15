import { View, Text, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Image } from 'react-native';


export default function Vegatbables() {
    return (
        <View className="bg-white">
          <View className="flex-row justify-between items-center px-6 pt-5">
            <View>
             <Text
             className="text-sm text-2xl font-bold">Vegetables
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
                <View className="mr-6 bg-white rounded-3xl shadow">
                  <Image className="h-36 w-64 rounded-t-3xl" source={require('../assets/images/potato.jpeg')} />
                  <View className="px-3 pb-4 space-y-1">
                    <Text className="text-lg font-bold pt-2">{"Potatoes"}</Text>
                    <Text className="text-sm text-gray-500">{"Vegetables"}</Text>
                    <Text className="text-lg font-bold">₹ {"30/Kg"}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>              
            }
            {
                <TouchableWithoutFeedback>
                        <View className="mr-6 bg-white rounded-3xl shadow">
                            <Image className="h-36 w-64 rounded-t-3xl" source={require('../assets/images/tomatoes.jpeg')} />
                            <View className="px-3 pb-4 space-y-1">
                                <Text className="text-lg font-bold pt-2">{"Tomatoes"}</Text>
                                <Text className="text-sm text-gray-500">{"Vegatbables"}</Text>
                                <Text className="text-lg font-bold">₹ {"30/Kg"}</Text>
                            </View>
                        </View>
                </TouchableWithoutFeedback>
            }
             {
                <TouchableWithoutFeedback>
                <View className="mr-6 bg-white rounded-3xl shadow">
                  <Image className="h-36 w-64 rounded-t-3xl" source={require('../assets/images/ladyfinger.webp')} />
                  <View className="px-3 pb-4 space-y-1">
                    <Text className="text-lg font-bold pt-2">{"Ladies Finger"}</Text>
                    <Text className="text-sm text-gray-500">{"Vegetbales"}</Text>
                    <Text className="text-lg font-bold">₹ {"20/Kg"}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>              
            }
             {
                <TouchableWithoutFeedback>
                <View className="mr-6 bg-white rounded-3xl shadow">
                  <Image className="h-36 w-64 rounded-t-3xl" source={require('../assets/images/spinach.avif')} />
                  <View className="px-3 pb-4 space-y-1">
                    <Text className="text-lg font-bold pt-2">{"Spinach"}</Text>
                    <Text className="text-sm text-gray-500">{"Vegetables"}</Text>
                    <Text className="text-lg font-bold">₹ {"10/Kg"}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>              
            }
          </ScrollView>   
        </View> 
    );
}
