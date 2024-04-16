import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import {View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';


export default function Camera() {
    const openDocumentPicker = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });
            if (result.type === 'success') {
                // Handle the selected document, such as uploading it or processing it
                Alert.alert('Image Selected', `URI: ${result.uri}`);
              }
            } catch (error) {
              console.error('Error picking Image:', error);
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
    });

    if (!result.cancelled) {
      Alert.alert('Image captured', `Image URI: ${result.uri}`);
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
        alignItems: 'center',}}>
        <Ionicons name="camera" size={32} color="white" />
        <Text style={{ marginTop: 10, color: 'white' }}>Click a Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openDocumentPicker} style={styles.documentButton}>
      <Ionicons name="document" size={32} color="white" />
      <Text style={styles.buttonText}>Upload a Document</Text>
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
      width: 220,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      marginTop: 10,
      color: 'white',
    },
  });
