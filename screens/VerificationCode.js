import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput,TextBold,TextRegular } from 'react-native';
// import { TouchableOpacity, Text } from 'react-native-gesture-handler';
import { color } from "../assets/colors/theme";
import { ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function VerificationScreen() {
    const navigation = useNavigation();


    return (
        <ImageBackground source={require('../assets/images/login.jpg')} style={{ width: '100%', height: '100%' }}>

        <View>
            
            <View style={styles.container}>
                <Text>Enter the OTP sent to your email</Text>
                <View style={[styles.flexrow, styles.justiffsb]}>
               <View style={styles.inputfiled}>
                 </View>
               <View style={styles.inputfiled}>
                 </View>
               <View style={styles.inputfiled}>
                 </View>
               <View style={styles.inputfiled}>
                 </View>
                 
              
              </View>

            <TouchableOpacity onPress={() => navigation.navigate('Passwordsetup')} style={styles.btnPrimary}>
                <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center' }}>Verify <AntDesign name="arrowright" size={18} color="black" /></Text>
            </TouchableOpacity>
            <View>
        <Text>Your Unique Code is sent to the mail:alright@gmail.com,</Text>
        <Text>This unique code will be used to signup</Text>
      </View>
        </View>
      
      
  </View >
  </ImageBackground>
  );

}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: "center",
        marginTop: 200,
        marginLeft:30,
        width:"90%",
        height:"50%",
        backgroundColor: color.neutral[100],
        borderRadius: 10,
        alignItems: "center",
        textAlign : "center"


    },
    flexrow:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btnPrimary: {
        padding: 15,
        margin: 1,
        backgroundColor: color.primary,
        borderRadius: 8,
        marginVertical: 50,
        width:"80%"
    },
    inputfiled: {
        borderColor: color.primary,
        borderWidth: 1,
        marginBottom: 10,
        width:"20%",
        padding: 5,
        margin: 5,
        backgroundColor:color.neutral[200],
        borderWidth: 1,
        marginBottom: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 8,
        height: 50,
      },
      inputBox: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: "100%",
        marginBottom: 16,
      },
})