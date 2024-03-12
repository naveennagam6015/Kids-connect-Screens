import React, { useState } from 'react'
import { View, StyleSheet, Pressable, ScrollView, Image, Modal } from 'react-native'
import { TextBold, TextRegular } from '../assets/fonts/CustomText';
import { color } from '../assets/colors/theme';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Requests() {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };
    return (

        <ScrollView>
            <View style={[styles.container]}>
                <View style={[styles.flexrow, { justifyContent: "space-between" }]}>
                    <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                        <Pressable

                            style={[styles.flexrow]}>
                            <TextBold style={[styles.btnPrimaryTextsize]}>Circle Requests</TextBold>
                        </Pressable>
                    </View>
                    <View style={[styles.Buttoncard2, styles.Buttoncardwidth,]}>
                        <Pressable

                            style={[styles.flexrow]}>

                            <TextBold style={[styles.btnPrimaryTextsize]}>All Requests</TextBold>
                        </Pressable>
                    </View>
                </View>
                <View style={[styles.flexrow, { justifyContent: "space-between" }]}>
                    <View>
                        <TextRegular>Feb 27, Monday</TextRegular>
                    </View>
                    <View style={styles.flexrow}>
                        <TextBold>Filters</TextBold>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </View>
                </View>
                <View style={[styles.Card]}>
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
                            <TextRegular style={{ fontSize: 12 }}>3-5hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Iman Gadzi</TextBold>
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
                    <View style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <Pressable
                            onPress={() => setOpen(!open)}
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </Pressable>
                    </View>
                </View>
            </View>

            <Modal
                animationType='slide'
                // transparent={true}
                visible={open}>
                <View style={[styles.modalcontainer]}>
                    <View style={[styles.header, { alignItems: "flex-end", }]}>
                        <Pressable
                            onPress={onClose}>
                            <Icon name="cancel" size={30} color={color.neutral[300]} />
                        </Pressable>
                    </View>

                    <View style={[styles.flexrow, { alignItems: 'center' }]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={{ alignItems: 'flex-start' }}>
                            <TextBold style={[styles.childrenname]}>Samanthaa</TextBold>
                            <TextBold style={{ color: color.neutral[300] }}>by Shreyas (Father)</TextBold>
                        </View>
                    </View>
                    <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                        <View style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                            <Pressable
                                style={[styles.flexrow]}>
                                <TextBold style={[styles.btnPrimaryTextsize]}>Modify</TextBold>
                            </Pressable>
                        </View>
                        <View style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                            <Pressable
                                style={[styles.flexrow]}>
                                <TextBold style={[styles.btnPrimaryTextsize]}>Accept</TextBold>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView >
    )
}
const styles = StyleSheet.create({
    arrow: {
        marginLeft: 5,
        marginTop: 5
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: color.neutral[200],
    },
    profilepic: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    childrenname: {
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    innercard2: {
        justifyContent: 'space-between',
        padding: 14,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    justifysa: {
        justifyContent: 'space-around'
    },
    flexrow: {
        flexDirection: 'row',
    },
    btnPrimaryTextsize: {
        fontSize: 16,
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: color.neutral[100],
        paddingVertical: 18,
    },
    Buttoncard2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 18,
        marginVertical: 16,
    },
    Buttoncardinner: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: color.accent,
        paddingVertical: 20,
        marginVertical: 16,
    },
    Buttoncardinner2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 20,
        marginVertical: 16,
    },
    Buttoncardwidth: {
        width: '48%'
    },


    flexrow: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: color.neutral[300],
        padding: 5,
        borderRadius: 8,
        alignItems: "center"
    },
    modalcontainer: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        // backgroundColor: color.neutral[100]
    },
    container: {
        marginTop: 50,
        padding: 15,
        justifyContent: 'center'
    },
});