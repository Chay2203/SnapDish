import {View,Text,StyleSheet,SafeAreaView} from 'react-native';
import React from 'react';
import Camera from '../components/camera';
import { Image } from 'react-native';
import GeminiChat from '../components/chat';



export default function Home() {
    return (
        <SafeAreaView className="bg-yellow-300 flex-1">
            <Text className="font-bold ml-5 text-4xl pb-1 pt-10">
            SnapDish
            </Text>
            <Text className="ml-6 pb-2 text-gray-600 pt-3">
            Upload a picture of your ingredients and {"\n"}we'll suggest recipes for you!
            </Text>
            {/* <View style={styles.container}>
            <Image source={require('../assets/images/deepak.png')} style={styles.image} />
            </View> */}
            {/* <View style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
                 paddingBottom: 100,
            }}>
            <Text style={{
                bottom: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
            }}>Hi, I am Deepak!</Text>
            <Text className="pb-20"style={{
                marginTop: 5, 
                bottom: 20,
                textAlign: 'center',
                fontSize: 35,
            }}>Your AI Assistant.</Text>
            </View> */}
            <GeminiChat />
            <Camera />
        </SafeAreaView>
    );  
}
const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      paddingTop: 300,
      paddingRight: 55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 1200, 
      height: 1200, 
      resizeMode: 'contain', 
    },
  });