import React from 'react'
import { ScrollView, StyleSheet, View, Platform, Image } from 'react-native'
import { TextBold, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { MaterialCommunityIcons, FontAwesome5, Foundation, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextBold style={[styles.Headingtext]}>Bio</TextBold>
                <TextRegular style={[styles.textnetural, { fontSize: 18, }]}>Hey there! I'm Madisson Arora, a passionate Motion Designer currently based in the bustling city of New York. In addition to my career, I'm also a proud mother of... more</TextRegular>
                <View style={[styles.fullcard, styles.flexrow]}>
                    <View style={[styles.flexrow]}>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={{ alignItems: 'flex-start' }}>
                                <TextBold style={[styles.childrenname]}>Samanthaa</TextBold>
                            </View>
                        </View>
                        <View>
                            <View style={[styles.flexrow, styles.line]}>
                                <Image style={[styles.profilepicsmall]} source={require('../assets/images/women.png')} />
                                <Image style={[styles.profilepicsmall]} source={require('../assets/images/women.png')} />
                            </View>
                            {/* <View style={[styles.line]}></View> */}
                            <View style={[styles.flexrow]}>
                                <Image style={[styles.profilepicsmall]} source={require('../assets/images/women.png')} />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={[styles.Card]}>
                    <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>My Bookings</TextBold>
                </View>
                <View style={[styles.Card]}>
                    <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>My Account</TextBold>
                </View>
                <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>Requested by</TextBold>
                <View style={[styles.yellowcard, { marginTop: 10 }]}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>My Account</TextBold>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialCommunityIcons name="lock-check" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Device Permissions</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>
                        <View style={[styles.line]}></View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <FontAwesome5 name="key" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Change Password </TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>
                        <View style={[styles.line]}></View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="security" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Security</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>
                        <View style={[styles.line]}></View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <FontAwesome5 name="language" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 15, fontSize: 16 }}>Language Settings</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>
                    </View>
                </View>
                <View style={[styles.yellowcard,]}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>Preference</TextBold>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Dark Mode</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>
                        <View style={[styles.line]}></View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="notifications-active" size={24} color={color.white} />
                                {/* <MaterialIcons name="notifications-off" size={24} color={color.white} /> */}
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Notifications</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>

                    </View>
                </View>
                <View style={[styles.yellowcard,]}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>Support</TextBold>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Help</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>
                        <View style={[styles.line]}></View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <Foundation name="clipboard-notes" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Terms & Conditions</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>

                    </View>
                </View>

                <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center", marginTop: 10 }]}>
                    <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>My Referal Code</TextBold>
                    <View style={[styles.Carddotted, styles.flexrow, { alignItems: "center" }]}>
                        <TextBold style={{ marginBottom: 5, fontSize: 24 }}>12345</TextBold>
                        <Ionicons style={{ marginLeft: 10 }} name="eye-off" size={16} color={color.neutral[500]} />
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textnetural: {
        color: color.neutral[500],
        marginVertical: 2
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    profilepicsmall: {
        marginRight: 8,
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Card1: {
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
    Carddotted: {
        borderRadius: 10,
        marginTop: 4,
        width: "40%",
        justifyContent: "space-between",
        borderStyle: "dotted",
        marginBottom: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: color.neutral[300],
        backgroundColor: color.white,

    },
    Card: {
        borderRadius: 10,
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: color.neutral[300],
        backgroundColor: color.white,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.10,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    flexrow: {
        flexDirection: 'row',
    },
    line: {
        borderBottomWidth: 0.5,
        borderBottomColor: color.white
    },
    Headingtext: {
        fontSize: 20,
        marginVertical: 5,
    },
    fullcard: {
        backgroundColor: color.primary,
        marginVertical: 10,
        padding: 10
    },
    yellowcard: {
        backgroundColor: color.primary,
        borderRadius: 8,
        marginTop: 18,
        padding: 10
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },

})
