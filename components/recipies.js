import { View, Text, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Image } from 'react-native';


export default function Fruits() {
    return (
        <View className="bg-yellow-300">
          <View className="flex-row justify-between items-center px-6 pt-3">
            <View>
             <Text
             className="text-sm text-xl font-bold">Suggested Recipies
             </Text>
             </View>
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
                <View className="mr-5 bg-white rounded-3xl h-36 w -32 shadow">
                  <Image className="h-36 w-44 rounded-3xl" source={require('../assets/images/biryani.jpg')} />
                </View>
              </TouchableWithoutFeedback>              
            }
            {
            <TouchableWithoutFeedback>
                <View className="mr-5 bg-white rounded-3xl h-36 w -32 shadow">
                  <Image className="h-36 w-44 rounded-3xl" source={require('../assets/images/chicken.jpg')} />
                </View>
              </TouchableWithoutFeedback>              
            }
            {
            <TouchableWithoutFeedback>
                <View className="mr-5 bg-white rounded-3xl h-36 w -32 shadow">
                  <Image className="h-36 w-44 rounded-3xl" source={require('../assets/images/soup.jpg')} />
                </View>
              </TouchableWithoutFeedback>              
            }
          </ScrollView>   
        </View> 
    );
}
