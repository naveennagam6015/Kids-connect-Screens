import React from 'react'
import { View, StyleSheet, Platform, Pressable, Image } from 'react-native'
import { color } from '../assets/colors/theme';
import { TextBold, TextLight, TextRegular } from '../assets/fonts/CustomText';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Home() {
    return (
        <View style={[styles.container]}>
            <TextBold style={[styles.Headingtext]}>Glance Area</TextBold>
            <View style={[styles.flexrow]}>
                <View style={[styles.innerbtn1]}>
                    <Pressable>
                        <TextRegular>Individuals</TextRegular>
                    </Pressable>
                </View>
                <View style={[styles.innerbtn]}>
                    <Pressable>
                        <TextRegular>Circles</TextRegular>
                    </Pressable>
                </View>
            </View>
            <View>

                <TextBold style={[styles.Headingtext]}>Ongoing Appointments</TextBold>
                <View style={[styles.Card]}>
                    <View style={[styles.innercard1, styles.flexrow,]}>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Samanthaa</TextBold>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Samanthaa</TextBold>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Aron Finch <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular>3-5hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular>Feb 17th | Monday</TextRegular>

                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Iman Gadzi <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <View style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <MaterialIcons name="message" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                        </View>
                    </View>
                    <View style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </View>
                    <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                        <Pressable
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable
                        style={[styles.flexrow]}>
                        <TextRegular style={[styles.childrenname]}>View all</TextRegular>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={color.primary} />
                    </Pressable>
                </View>
                <TextBold style={[styles.Headingtext]}>Calender Overview</TextBold>
            </View>
            <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                <TextBold style={[styles.Headingtext]}>Previous Connection
                </TextBold>
                <Pressable
                    style={[styles.flexrow]}>
                    <TextRegular style={[styles.childrenname]}>View all</TextRegular>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color={color.primary} />
                </Pressable>
            </View>



            <View style={[styles.Card]}>

                <View style={[styles.innercard2, styles.flexrow,]}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <View>
                            <Image style={[styles.profilepic, styles.activeprofilr]} source={require('../assets/images/women.png')} />
                        </View>
                        <View>
                            <TextBold style={[styles.childrenname]}>Aron Finch</TextBold>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TextRegular>3-5hrs</TextRegular>
                        <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                        <TextRegular>Feb 17th | Monday</TextRegular>

                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View>
                            <TextBold style={[styles.childrenname, { color: color.neutral[300] }]}>Iman Gadzi</TextBold>
                        </View>
                    </View>
                </View>


                <View style={[styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <View style={{ width: '35%' }}>
                        <View style={[styles.flexrow, styles.dot]}>
                            <TextRegular>You have connected previously 3 times.</TextRegular>
                        </View>
                    </View>
                    <View style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <MaterialIcons name="message" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                        </View>
                    </View>
                    <View style={[styles.Buttoncard2, styles.Buttoncardwidth2,]}>
                        <Pressable>
                            <TextBold style={{ fontSize: 14 }}>More Details</TextBold>
                        </Pressable>
                    </View>
                </View>


            </View>



        </View >
    )
}
const styles = StyleSheet.create({
    activeprofilr: {
        borderWidth: 3,
        borderColor: color.primary,
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
    dot: {
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    arrow: {
        marginLeft: 2,
        marginTop: 3
    },
    Buttoncard2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 10,
        marginRight: 8
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 16,
    },
    Buttoncardwidth2: {
        width: '30%'
    },
    Buttoncardwidth: {
        width: '60%'
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    profilepic: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    innercard1: {
        backgroundColor: color.accent,
        justifyContent: 'space-between',
        padding: 14,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    innercard2: {
        justifyContent: 'space-between',
        padding: 14,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    flexrow: {
        flexDirection: 'row',
    },
    innerbtn1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.primary,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginHorizontal: 5,

    },
    innerbtn: {
        alignItems: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    Headingtext: {
        fontSize: 20
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: color.accent,
        backgroundColor: color.white,
        // ...Platform.select({
        //     ios: {
        //         shadowColor: '#000',
        //         shadowOffset: { width: 0, height: 2 },
        //         shadowOpacity: 0.25,
        //         shadowRadius: 3.84,
        //     },
        //     android: {
        //         elevation: 5,
        //     },
        // }),
    },
    container: {
        marginTop: 50,
        padding: 15,
        justifyContent: 'center'
    },
});