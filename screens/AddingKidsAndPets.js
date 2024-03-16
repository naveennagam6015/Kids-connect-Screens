import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TextBold, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { Foundation, AntDesign, MaterialIcons } from '@expo/vector-icons';
export default function AddingKidsAndPets() {
    return (
        <View style={[styles.container, { marginTop: 50 }]}>
            <TextRegular >Good Evening! <TextBold>Madisson</TextBold></TextRegular>
            <TextBold style={[styles.Headingtext]}>Let’s Complete your Profile </TextBold>
            <View style={[styles.image]}>
                <Image style={[styles.emailimage]} source={require('../assets/images/Email-icon.jpeg')} />
                <TextRegular style={[styles.subtext, { marginTop: 10 }]}>Admin has verified your profile</TextRegular>
            </View>
            <TextBold>WELCOME! to Kids Connect</TextBold>
            <View style={[styles.Card]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={[styles.childrenname]}>Lucy <TextRegular style={{ fontSize: 14, color: color.success }}>(Primary)</TextRegular></TextRegular>
                            <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.imageplus]}>
                            <AntDesign name="plus" size={40} color={color.neutral[500]} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={{ fontSize: 14, }}>Add Secondary Persons</TextRegular>
                            <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
                <TextRegular style={[styles.Skip,]}>Skip for now</TextRegular>
                <MaterialIcons name="keyboard-double-arrow-right" size={24} color={color.fontcolor} />
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    Skip: {
        fontSize: 20,
        textDecorationLine: "underline"
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageplus: {
        padding: 30,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderColor: color.accent,
    },
    subtext: {
        fontSize: 20,
    },
    image: {
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
    },
    emailimage: {
        width: 300,
        height: 300,
    },
    container: {
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary
    },

})