import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TextRegular } from '../assets/fonts/CustomText'
import { useNavigation } from '@react-navigation/native';

export default function Thankyou() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
            </View>
            <TextRegular style={{ marginTop: 20 }}>We’re sad that your leaving the platform.</TextRegular>
            <TextRegular style={{ marginTop: 50 }}>Thanks for being in this platform for 2 years since Feb,2022</TextRegular>
        </View>
    )
}
const styles = StyleSheet.create({
    profilepic: {
        marginRight: 8,
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    container: {
        padding: 15,
        justifyContent: 'center',
        alignItems: "center"
    },
})