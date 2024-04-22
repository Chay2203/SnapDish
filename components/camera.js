import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import {View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';


export default function Camera() {
    const openDocumentPicker = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });
            if (result.type === 'success') {
                Alert.alert('Image Selected', `URI: ${result.uri}`);
              }
            } catch (error) {
              console.log('Error picking Image:');
            }
          };
        
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'You need to grant camera permissions to use this feature.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    // console.log(result.assets[0].base64);

    if (!result.cancelled && result.assets[0].uri) {

      console.log("workign");
      
      const formData = new FormData();
    // Append image to FormData
    formData.append('file',  result.assets[0].base64);

    // console.log(formData);

    try {
      console.log('Uploading image')
      const res = await fetch('https://snap-cook.vercel.app/v1/upload', {
          method: 'POST',
          body: formData,
      }).then((response) => response.json())
      .then((result) => {
          console.log('Success:', result);
      })
      // Handle response from server
      } catch (error) {

      console.log('Error uploading image:', error);
      }
      Alert.alert('Image captured', `Image URI: ${result.assets[0].uri}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'left', position: 'relative'}}>
      <TouchableOpacity onPress={openCamera} style={{ backgroundColor: 'black',height:100, width:200,  position: 'absolute',
        bottom: -40,
        backgroundColor: 'black',
        height: 200,
        width: 220,
        justifyContent: 'center',
        paddingBottom: 20,
        alignItems: 'center',}}>
      <Ionicons name="camera" size={32} color="white"/>
      <Text style={{ marginTop: 10, color: 'white' }}>Click a Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openDocumentPicker} style={styles.documentButton}>
      <Ionicons name="document" size={32} color="white" />
      <Text style={styles.buttonText}>Upload a Picture</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    documentButton: {
      position: 'absolute',
      bottom: -40,
      right: 0,
      backgroundColor: 'black',
      height: 200,
      paddingBottom: 20,
      width: 220,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      marginTop: 10,
      color: 'white',
    },
  });
