import React from 'react'
import { ScrollView, StyleSheet, View, Platform, Image, TouchableOpacity } from 'react-native'
import { TextBold, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { MaterialCommunityIcons, FontAwesome5, Foundation, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
<EvilIcons name="plus" size={24} color="black" />


export default function Profile() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row" }} >
                    <View style={[{ width: "35%" }, styles.profileName]}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                    </View>
                    <View style={[{ width: "45%", }, styles.profileName]}>
                        <TextBold style={{ color: color.secondaryOrange, fontSize: 16 }}>Madisson Arora(M)</TextBold>
                        <TextBold style={{ fontSize: 12 }}>Madisson7@gmail.com</TextBold>
                        <TextBold style={{ color: color.neutral[300], fontSize: 12 }}>4387 Farland Avenue, San Antonio, TX 78212</TextBold>
                        <TextBold style={{ color: color.neutral[300], fontSize: 12 }}>(Since Feb 2023)</TextBold>

                    </View>
                    <View style={[{ width: "15%", marginTop: 10, marginRight: 7 }]}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <TextRegular style={{ fontSize: 11 }}>Edit Profile</TextRegular>
                            <Feather name="edit" size={15} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <TextBold style={[{ justifyContent: 'center' }, styles.Headingtext]}>Bio</TextBold>
                    <Feather name="edit" size={15} color="black" style={[{ justifyContent: 'center', marginVertical: 5, alignSelf: 'center' },]} />
                </View>
                <TextRegular style={[styles.textnetural, { fontSize: 14 }]}>
                    Hey there! I'm Madisson Arora, a passionate Motion Designer currently based in the bustling city of New York. In addition to my career, I'm also a proud mother of... more
                </TextRegular>

                <View style={[styles.fullcard, styles.flexrow]}>
                    {/* First column: Image and Content */}
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
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 10 }}>
                                    <Image style={[styles.profilepic, { width: 50, height: 50, marginBottom: 10 }]} source={require('../assets/images/women.png')} />
                                </View>
                                <View>
                                    <Image style={[styles.profilepic, { width: 50, height: 50, marginBottom: 10 }]} source={require('../assets/images/women.png')} />
                                </View>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <TextRegular style={{ fontSize: 11, paddingRight:5 }}>Add</TextRegular>
                               
                                <View style={{ alignItems: 'center' }}>
                                    <View style={[styles.imageplusadd]}>
                                        <AntDesign name="plus" size={10} color={color.neutral[500]} />
                                    </View>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View>
                                    <Image style={[styles.profilepic, { width: 50, height: 50 },]} source={require('../assets/images/women.png')} />
                                </View>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <TextRegular style={{ fontSize: 11, paddingRight:5}}>Add</TextRegular>
                               
                                <View style={{ alignItems: 'center' }}>
                                    <View style={[styles.imageplusadd]}>
                                        <AntDesign name="plus" size={10} color={color.neutral[500]} />
                                    </View>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={{ marginLeft: 10, flex: 1 }}>
                            <TextRegular style={[styles.textnetural]}>Additional content goes here...</TextRegular>
                        </View> */}
                        {/* </View> */}
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

            </SafeAreaView>
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
        // backgroundColor: color.primary,
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
        justifyContent: 'center',
    },
    profileName: {
        justifyContent: 'center'
    }, imageplusadd: {
        padding: 5,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },

})
