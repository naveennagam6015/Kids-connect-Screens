import React from 'react'
import { View, StyleSheet, Text, Image, Platform, Pressable } from 'react-native'
import { TextBold, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme';

export default function Confirmation() {
    return (
        <View style={styles.container}>
            <View style={styles.Card}>
                <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                    <View style={styles.contentContainer}>
                        <Image style={styles.profilepic} source={require('../assets/images/women.png')} />
                        <TextRegular style={styles.childrenname} numberOfLines={2}>
                            Yay..! Jay.jr’s Profile is successfully Uploaded on your circle!
                        </TextRegular>
                    </View>
                </View>
            </View>
            <View style={[styles.flexrow, { marginTop: 10, justifyContent: "space-between" }]}>
                <View style={[styles.innerbtn]}>
                    <Pressable>
                        <TextBold>Back to Home</TextBold>
                    </Pressable>
                </View>
                <View style={[styles.innerbtn1]}>
                    <Pressable>
                        <TextBold>Take me there</TextBold>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    innerbtn1: {
        alignItems: 'center',
        backgroundColor: color.primary,
        borderRadius: 8,
        paddingVertical: 14,
        marginHorizontal: 5,
        width: "70%"

    },
    innerbtn: {
        alignItems: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 8,
        paddingVertical: 14,
        width: "40%"
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        padding: 14,
        backgroundColor: color.white,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    profilepic: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    flexrow: {
        flexDirection: 'row',
    },
    container: {
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1,
    },
    childrenname: {
        flexShrink: 1,
        marginLeft: 8, // Adjust the margin as needed
    }
});
