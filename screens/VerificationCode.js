import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, TextBold, TextRegular, KeyboardAvoidingView } from 'react-native';
import { color } from "../assets/colors/theme";
import { ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function VerificationScreen() {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ImageBackground source={require('../assets/images/login.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.centeredContainer}>
                    <View style={styles.container}>
                        <Text>Enter the OTP sent to your email</Text>
                        <View style={[styles.flexrow, styles.justiffsb]}>
                            <View style={styles.inputfiled}></View>
                            <View style={styles.inputfiled}></View>
                            <View style={styles.inputfiled}></View>
                            <View style={styles.inputfiled}></View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Passwordsetup')} style={styles.btnPrimary}>
                            <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center' }}>Verify <AntDesign name="arrowright" size={18} color="black" /></Text>
                        </TouchableOpacity>

                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>Your Unique Code is sent to the mail: <Text style={{ color: 'grey' }}>alright@gmail.com</Text>,</Text>
                            <Text style={styles.infoText}>This unique code will be used to signup</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        padding: 20,
        backgroundColor: color.neutral[100],
        borderRadius: 10,
    },
    flexrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btnPrimary: {
        padding: 15,
        backgroundColor: color.primary,
        borderRadius: 8,
        marginVertical: 50,
    },
    inputfiled: {
        borderColor: color.primary,
        borderWidth: 1,
        marginBottom: 10,
        width: "20%",
        padding: 5,
        margin: 5,
        backgroundColor: color.neutral[200],
        borderRadius: 8,
        height: 50,
    },
    infoTextContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    infoTextContainer: {
        marginTop: 20,
    },
    infoText: {
        color: color.fontcolor, // Change this to the grey color you want
    },
});
