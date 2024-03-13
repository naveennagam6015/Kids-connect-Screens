import React from 'react'
import { View, StyleSheet, Pressable, Image, Platform } from 'react-native'
import { TextBold, TextLight, TextRegular } from '../assets/fonts/CustomText'
import Search from '../components/Search'
import { color } from '../assets/colors/theme'
import { MaterialIcons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';

export default function Appointment() {
    function CircleRequests() {

    }
    return (
        <View style={[styles.container]}>
            <Search />
            <TextRegular style={[styles.subtext]}>Use <TextBold>Tags</TextBold> to find the Precise Connections Tags</TextRegular>
            <View style={[styles.flexrow, styles.justiffsb]}>
                <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                    <Pressable
                        onPress={CircleRequests}
                        style={[styles.flexrow]}>

                        <TextBold style={[styles.btnPrimaryTextsize]}>Circle Requests</TextBold>
                    </Pressable>
                </View>
                <View style={[styles.Buttoncard2, styles.Buttoncardwidth,]}>
                    <Pressable
                        onPress={CircleRequests}
                        style={[styles.flexrow]}>

                        <TextBold style={[styles.btnPrimaryTextsize]}>All Requests</TextBold>
                    </Pressable>
                </View>
            </View>
            <View style={[styles.flexrow]}>
                <TextBold style={[styles.Headingtext]}>MOST SEARCHED TAGS
                </TextBold>
                <View style={styles.line} />
            </View>
            <View style={[styles.home]}>
                <View style={[styles.innerbtn1]}>
                    <Pressable>
                        <TextRegular>In-House</TextRegular>
                    </Pressable>
                </View>
                <View style={[styles.innerbtn]}>
                    <Pressable>
                        <TextRegular>In-House</TextRegular>
                    </Pressable>
                </View>
                <View style={[styles.innerbtn]}>
                    <Pressable>
                        <TextRegular>No Pet</TextRegular>
                    </Pressable>
                </View>
                <View style={[styles.justifyflexend]}>
                    <Pressable style={[styles.flexrow]}>
                        <TextRegular>All filters</TextRegular>
                        <MaterialIcons style={[styles.arrow]} name="arrow-forward-ios" size={12} />
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={[styles.flexrow, styles.mt8, styles.mh5, styles.justiffsb]}>
                    <View style={[styles.flexrow, styles.alineitemscenter]}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        <TextBold style={{ color: color.secondaryOrange }}>Madisson</TextBold>
                        <TextLight>(Mother)</TextLight>
                    </View>
                    <View style={[styles.flexrow, styles.alineitemscenter]}>
                        <Entypo name="dots-three-vertical" size={18} color={color.neutral[300]} />
                    </View>
                </View>
                <View style={[styles.Card]}>
                    <View style={[styles.flexrow, styles.justiffsb, styles.mb8]}>
                        <View>
                            <Image style={[styles.cardimg]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={[styles.cardborderbottam]}>
                            <View style={[styles.flexrow, styles.justiffsb, styles.mb4]}>
                                <TextBold style={[styles.childrenname]}>Naveen Nagam naveen</TextBold>
                                <FontAwesome name="bookmark" size={18} color={color.accent} />
                                {/* <FontAwesome name="bookmark-o" size={18} color={color.accent} /> */}
                            </View>
                            <View style={[styles.flexrow, styles.justiffsb]}>
                                <View style={[styles.ratingstarborder]}>
                                    <View style={[styles.flexrow]}>
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <Feather style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <TextRegular>(65)</TextRegular>
                                    </View>
                                    <View style={[styles.flexrow]}>
                                        <TextRegular>25 Reviews</TextRegular>
                                        <Feather style={[styles.arrow]} name="arrow-up-right" size={14} color={color.primary} />
                                    </View>
                                </View>
                                <View style={[styles.pl10]}>
                                    <TextRegular><TextBold>100+</TextBold> Connections</TextRegular>
                                    <TextRegular>(since Feb’24)</TextRegular>
                                </View>
                            </View>
                            <View style={[styles.flexrow, styles.mt8]}>
                                <View style={[styles.Tags]}>
                                    <TextRegular>3-5hrs</TextRegular>
                                </View>
                                <View style={[styles.Tags]}>
                                    <TextRegular>Science Project</TextRegular>
                                </View>
                            </View>
                            <View style={[styles.flexrow, styles.mt8]}>

                                <View style={[styles.Tags]}>
                                    <TextRegular>Feb 17th | Monday</TextRegular>
                                </View>
                                <View style={[styles.Tags]}>
                                    <TextRegular>In-House</TextRegular>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TextRegular style={[styles.carddec]}>
                        Maecenas dignissim justo eget nulla rutrum
                        molestie. Maecenas lobortis sem dui, vel rutrum
                        risus...<TextRegular style={[styles.knowmore]}>know more</TextRegular>
                    </TextRegular>
                    <View style={[styles.flexrow, styles.dot]}>

                        <TextLight>21 hours ago</TextLight>
                    </View>
                </View>
            </View>
            <View>
                <View style={[styles.flexrow, styles.mt8, styles.mh5, styles.justiffsb]}>
                    <View style={[styles.flexrow, styles.alineitemscenter]}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        <TextBold style={{ color: color.secondaryOrange }}>Madisson</TextBold>
                        <TextLight>(Mother)</TextLight>
                    </View>
                    <View style={[styles.flexrow, styles.alineitemscenter]}>
                        <Entypo name="dots-three-vertical" size={18} color={color.neutral[300]} />
                    </View>
                </View>
                <View style={[styles.Card]}>
                    <View style={[styles.flexrow, styles.justiffsb, styles.mb8]}>
                        <View>
                            <Image style={[styles.cardimg]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={[styles.cardborderbottam]}>
                            <View style={[styles.flexrow, styles.justiffsb, styles.mb4]}>
                                <TextBold style={[styles.childrenname]}>Naveen Nagam naveen</TextBold>
                                <FontAwesome name="bookmark" size={18} color={color.accent} />
                                {/* <FontAwesome name="bookmark-o" size={18} color={color.accent} /> */}
                            </View>
                            <View style={[styles.flexrow, styles.justiffsb]}>
                                <View style={[styles.ratingstarborder]}>
                                    <View style={[styles.flexrow]}>
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <Feather style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                        <TextRegular>(65)</TextRegular>
                                    </View>
                                    <View style={[styles.flexrow]}>
                                        <TextRegular>25 Reviews</TextRegular>
                                        <Feather style={[styles.arrow]} name="arrow-up-right" size={14} color={color.primary} />
                                    </View>
                                </View>
                                <View style={[styles.pl10]}>
                                    <TextRegular><TextBold>100+</TextBold> Connections</TextRegular>
                                    <TextRegular>(since Feb’24)</TextRegular>
                                </View>
                            </View>
                            <View style={[styles.flexrow, styles.mt8]}>
                                <View style={[styles.Tags]}>
                                    <TextRegular>3-5hrs</TextRegular>
                                </View>
                                <View style={[styles.Tags]}>
                                    <TextRegular>Science Project</TextRegular>
                                </View>
                            </View>
                            <View style={[styles.flexrow, styles.mt8]}>

                                <View style={[styles.Tags]}>
                                    <TextRegular>Feb 17th | Monday</TextRegular>
                                </View>
                                <View style={[styles.Tags]}>
                                    <TextRegular>In-House</TextRegular>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TextRegular style={[styles.carddec]}>
                        Maecenas dignissim justo eget nulla rutrum
                        molestie. Maecenas lobortis sem dui, vel rutrum
                        risus...<TextRegular style={[styles.knowmore]}>know more</TextRegular>
                    </TextRegular>
                    <View style={[styles.flexrow, styles.dot]}>

                        <TextLight>21 hours ago</TextLight>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mh5: {
        marginHorizontal: 1
    },
    dot: {
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    knowmore: {
        fontSize: 14
    },
    carddec: {
        fontSize: 18,
        margin: 0,
    },
    cardborderbottam: {
        borderBottomWidth: 0.3,
        borderColor: color.neutral[300]
    },
    mt8: {
        marginTop: 8
    },
    mb8: {
        marginBottom: 8
    },
    mb4: {
        marginBottom: 4
    },
    childrenname: {
        fontSize: 20
    },
    arrow: {
        marginLeft: 10,
        marginTop: 5
    },
    ratingstarborder: {
        borderRightWidth: 2,
        paddingRight: 10,
        borderColor: color.neutral[300]
    },
    pl10: {
        paddingLeft: 10
    },
    Card: {
        borderRadius: 10,
        marginTop: 4,
        marginBottom: 10,
        padding: 14,
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
    alineitemscenter: {
        alignItems: 'center'
    },
    cardimg: {
        width: 100,
        height: 140,
        borderRadius: 8,
    },
    profilepic: {
        marginRight: 8,
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: color.success,
        borderWidth: 1
    },
    justifyflexend: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    arrow: {
        marginLeft: 2,
        marginTop: 2
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
        borderColor: color.neutral[300],
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    Tags: {
        borderColor: color.accent,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 4
    },
    home: {
        borderColor: color.accent,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    Headingtext: {
        fontSize: 14,
        marginVertical: 5,
        // color: color.fontcolor
    },
    line: {
        borderBottomWidth: 2,
        width: '10%',
        borderBottomColor: color.neutral[300],
        marginLeft: 8,
        marginBottom: 12
    },
    justiffsb: {
        justifyContent: 'space-between'
    },
    flexrow: {
        flexDirection: 'row',
    },
    btnPrimaryTextsize: {
        fontSize: 20,
        // color: color.fontcolor
    },
    Buttoncard: {
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
    Buttoncard2: {
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
    subtext: {
        fontSize: 14,
        // color: color.fontcolor
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
});