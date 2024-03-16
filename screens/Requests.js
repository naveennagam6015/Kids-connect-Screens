import React, { useState } from 'react'
import { View, StyleSheet, Pressable, ScrollView, Image, Modal } from 'react-native'
import { TextBold, TextLight, TextRegular } from '../assets/fonts/CustomText';
import { color } from '../assets/colors/theme';
import { AntDesign, FontAwesome, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
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
                        <View>
                            <View style={[styles.flexrow, { alignItems: 'center', marginBottom: 5 }]}>
                                <TextBold style={[styles.childrenname]}>Samantha </TextBold>
                                <TextBold style={{ color: color.neutral[300] }}>(Son)</TextBold>
                                <Feather name="arrow-up-right" size={16} color={color.secondaryOrange} />
                                <FontAwesome name="bookmark" style={{ marginLeft: 15 }} size={18} color={color.accent} />

                            </View>
                            <View style={[styles.flexrow, styles.justiffsb]}>
                                <View style={[styles.ratingstarborder]}>
                                    <View style={[styles.flexrow]}>
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <Feather style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                    </View>

                                </View>
                                <View style={[styles.pl10,]}>
                                    <TextRegular style={{ fontSize: 18 }}><TextBold>30+</TextBold> Connections</TextRegular>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.flexrow, styles.mt8, { flexWrap: 'wrap' }]}>

                        <View style={[styles.Tags]}>
                            <TextRegular>In-House </TextRegular>
                        </View>
                        <View style={[styles.Tags]}>
                            <TextRegular>3-5hrs</TextRegular>
                        </View>
                        <View style={[styles.Tags]}>
                            <TextRegular>Science Project</TextRegular>
                        </View>
                        <View style={[styles.Tags]}>
                            <TextRegular>Feb 17th | Monday</TextRegular>
                        </View>
                    </View>
                    <TextRegular style={[styles.textnetural, { fontSize: 18, }]}>Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nislstr... more</TextRegular>
                    <TextBold style={[styles.Headingtext]}>Address</TextBold>
                    <TextRegular style={[styles.textnetural, { fontSize: 18, }]}>199 Oakway Lane, Woodland Hills, CA 91303</TextRegular>
                    {/* <TextRegular style={[styles.textnetural, { fontSize: 18, }]}>CA 91303</TextRegular> */}
                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: color.neutral[300],
                        marginTop: 5
                    }}>
                    </View>
                    <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>Requested by</TextBold>
                    <View style={[styles.flexrow, { alignItems: "flex-start" }]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View >
                            <View style={[styles.flexrow, { alignItems: "center" }]}>

                                <View style={[styles.flexrow, { alignItems: "center", justifyContent: "space-around" }]}>
                                    <View>
                                        <View style={[styles.flexrow, { alignItems: 'center' }]}>
                                            <TextBold style={[styles.childrenname]}>Neha </TextBold>
                                            <TextBold style={{ color: color.neutral[300] }}>(Mother)</TextBold>
                                            <Feather name="arrow-up-right" size={16} color={color.secondaryOrange} />
                                        </View>
                                        <View>
                                            <TextRegular style={[styles.textnetural, { fontSize: 18, }]}>Architect, TCS</TextRegular>
                                        </View>
                                    </View>
                                    <View style={[styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                                        <View style={{ padding: 5, marginHorizontal: 10 }}>
                                            <View>
                                                <MaterialIcons name="message" size={20} color={color.neutral[500]} />
                                            </View>
                                            <View>
                                                <TextRegular style={[styles.textnetural, { fontSize: 12, }]}>Chat</TextRegular>
                                            </View>
                                        </View>
                                        <View style={{ padding: 5, marginHorizontal: 10 }}>
                                            <View>
                                                <Ionicons name="call" size={20} color={color.neutral[500]} />
                                            </View>
                                            <View>
                                                <TextRegular style={[styles.textnetural, { fontSize: 12, }]}>Call</TextRegular>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={[styles.flexrow, { marginTop: 5, alignItems: "center" }]}>
                                    <FontAwesome style={{ marginRight: 10, marginLeft: 3 }} name="map-pin" size={16} color={color.neutral[500]} />
                                    <TextRegular style={[styles.textnetural, { fontSize: 16, }]}>591 Joanne Lane, Wilmington, MA 01887</TextRegular>
                                </View>
                                <View style={[styles.flexrow, { marginTop: 5, alignItems: "center" }]}>
                                    <FontAwesome style={{ marginRight: 8 }} name="envelope" size={16} color={color.neutral[500]} />
                                    <TextRegular style={[styles.textnetural, { fontSize: 16, }]}>autumnphilips@gmail.com</TextRegular>
                                </View>
                                <View style={[styles.flexrow, { marginTop: 5, alignItems: "center" }]}>
                                    <FontAwesome style={{ marginRight: 8, marginLeft: 2 }} name="building" size={16} color={color.neutral[500]} />
                                    <TextRegular style={[styles.textnetural, { fontSize: 16, }]}>Britches of Georgetown</TextRegular>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TextRegular style={[styles.textnetural, { fontSize: 18, marginTop: 15 }]}>4 Tags matches your Interests </TextRegular>
                </View>

                <View style={[styles.flexrow, styles.bgyellow, styles.mt8, { flexWrap: 'wrap' }]}>
                    <View style={[styles.Tags2]}>
                        <TextRegular>In-House </TextRegular>
                    </View>
                    <View style={[styles.Tags2]}>
                        <TextRegular>3-5hrs</TextRegular>
                    </View>
                    <View style={[styles.Tags2]}>
                        <TextRegular>Science Project</TextRegular>
                    </View>
                    <View style={[styles.Tags2]}>
                        <TextRegular>Project Based</TextRegular>
                    </View>
                </View>
                <View style={[styles.modalcontainer]}>
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
                <TextLight style={{
                    textDecorationLine: 'underline',
                    textAlign: 'center',
                    color: color.neutral[500]
                }}>You have connected previously 3 times.</TextLight>
            </Modal>

        </ScrollView >
    )
}
const styles = StyleSheet.create({
    justiffsb: {
        justifyContent: 'space-between',
        alignItems: "center"
    },
    pl10: {
        paddingLeft: 10
    },
    mh5: {
        marginHorizontal: 1
    },
    ratingstarborder: {
        borderRightWidth: 2,
        paddingRight: 10,
        borderColor: color.neutral[300]
    },
    textnetural: {
        color: color.neutral[500],
        marginVertical: 2
    },
    bgyellow: {
        backgroundColor: color.accent,
        padding: 10
    },
    Headingtext: {
        fontSize: 20,
        marginVertical: 5,
    },
    mt8: {
        marginTop: 8
    },
    Tags2: {
        backgroundColor: color.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4
    },
    Tags: {
        borderColor: color.accent,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4
    },
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
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    childrenname: {
        fontSize: 20,
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
        paddingVertical: 16,
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
        paddingVertical: 16,
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