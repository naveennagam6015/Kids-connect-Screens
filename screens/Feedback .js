import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import { TextBold, TextLight } from '../assets/fonts/CustomText'
import { AntDesign } from '@expo/vector-icons';
import { color } from '../assets/colors/theme';

export default function Feedback() {
    return (
        <View style={[styles.container]}>
            <Image style={[styles.profilepic]} source={require('../assets/images/Feedback.jpeg')} />
            <View style={[styles.flexrow]}>
                <AntDesign style={{ marginRight: 10 }} name="checkcircle" size={20} color={color.success} />
                <TextBold>
                    Your Profile is Successfully sent for
                    admin Verification.
                </TextBold>
            </View>
            <TextLight style={{ marginLeft: 30, fontSize: 12, marginTop: 10 }}>With in 1-2 days (without Considering holidays and weekends) you will receive a notification on your respective registered mobile and e-mail.</TextLight>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 30,
                    right: 30,
                    padding: 10,
                    borderRadius: 10,
                }}
            >
                <View style={[styles.flexrow, { alignItems: "center", }]}>
                    <TextBold style={{ marginRight: 10 }}>Help?</TextBold>
                    <Image style={[styles.support]} source={require('../assets/images/Support.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    flexrow: {
        flexDirection: 'row',
    },
    container: {
        // marginTop: 50,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    },
    profilepic: {
        width: 420,
        height: 500,
    },
    support: {
        width: 60,
        height: 60
    }
});