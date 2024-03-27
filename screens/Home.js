import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Platform, Pressable, Image, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native'
import { color } from '../assets/colors/theme';
import { TextBold, TextRegular } from '../assets/fonts/CustomText';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import axios from "axios";
import { BASEURL } from '@env';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
const { width: screenWidth } = Dimensions.get('window');

export default function Home() {
    const [data, setData] = useState([]);
    const carouselRef = useRef(null);
    const bottomTabBarHeight = useBottomTabBarHeight();
    const [activeIndex, setActiveIndex] = useState(0);
    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                {/* <Text style={styles.title}>{item.title}</Text> */}
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{ uri: `${BASEURL}${item.image}` }}
                  resizeMode="cover"
                />
            </View>
        );
    };

    useEffect(() => {
        axios({
            method:'get',
            url:`${BASEURL}api/allBanners`,
            headers:{
                Accept:'*/*'
            }
        }).then(res => {
            setData(res.data.data);
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    },[]);

    return (
        <ScrollView style={{ paddingBottom: bottomTabBarHeight }}>
            <TextBold style={[styles.Headingtext, { marginHorizontal: 15, marginTop: 15 }]}>Glance Area</TextBold>


            <Carousel
                ref={carouselRef}
                layout="default"
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                loop
                loopClonesPerSide={data.length}
                autoplay
                autoplayInterval={3000}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            <View style={[styles.container]}>

                <View style={[styles.flexrow, styles.justiffsb]}>
                    <TouchableOpacity style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.btnPrimaryTextsize]}>Circle Requests</TextBold>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.Buttoncard2, styles.Buttoncardwidth,]}>
                        <View
                            style={[styles.flexrow]}>

                            <TextBold style={[styles.btnPrimaryTextsize]}>All Requests</TextBold>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* <View style={[styles.flexrow]}>
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
                </View> */}
                <View>
                    <TextBold style={[styles.Headingtext]}>Ongoing Appointments</TextBold>


                    <View style={[styles.Cardnodata]}>
                        <View style={[styles.innercardnodata, styles.flexrow,]}>
                            <View style={{ alignItems: 'center', justifyContent: "center" }}>
                                <View style={{ width: 80, height: 80, borderRadius: 100, backgroundColor: color.neutral[500], marginBottom: 10 }}>
                                </View>
                                <View style={{ padding: 8, backgroundColor: color.neutral[300], width: "90%" }}>
                                </View>
                            </View>
                            <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                                <TextBold style={{ fontSize: 20 }}>Oops..!</TextBold>
                                <TextRegular style={{ fontSize: 16 }}>No appointments yet </TextRegular>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: "center" }}>
                                <View style={{ width: 80, height: 80, borderRadius: 100, backgroundColor: color.neutral[500], marginBottom: 10 }}>
                                </View>
                                <View style={{ padding: 8, backgroundColor: color.neutral[300], width: "90%" }}>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.innercard2, styles.flexrow,]}>
                            <View style={{ alignItems: 'center', justifyContent: "center" }}>
                                <View style={{ width: 80, height: 80, borderRadius: 100, backgroundColor: color.neutral[500], marginBottom: 10 }}>
                                </View>
                                <View style={{ padding: 8, backgroundColor: color.neutral[300], width: "90%" }}>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: "flex-start" }}>
                                <TouchableOpacity style={[styles.Buttoncardnodata]}>
                                    <View
                                        onPress={() => navigation.navigate('BottomNavigation')}
                                        style={[styles.flexrow, { alignItems: "center" }]}>
                                        <TextBold style={[styles.btnPrimaryTextsize]}>Connect Now</TextBold>
                                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ padding: 8, backgroundColor: color.neutral[300], width: "70%" }}>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: "center" }}>
                                <View style={{ width: 80, height: 80, borderRadius: 100, backgroundColor: color.neutral[500], marginBottom: 10 }}>
                                </View>
                                <View style={{ padding: 8, backgroundColor: color.neutral[300], width: "90%" }}>
                                </View>
                            </View>
                        </View>
                    </View>


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
                        <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                            <View>
                                <MaterialIcons name="message" size={20} color="black" />
                            </View>
                            <View>
                                <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                            <View>
                                <Ionicons name="call" size={20} color="black" />
                            </View>
                            <View>
                                <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Buttoncard, styles.Buttoncardwidth2,]}>
                            <View
                                style={[styles.flexrow]}>
                                <TextBold style={[styles.childrenname]}>More Details</TextBold>
                                <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[styles.flexrow]}>
                            <TextRegular style={[styles.childrenname]}>View all</TextRegular>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color={color.primary} />
                        </TouchableOpacity>
                    </View>
                    <TextBold style={[styles.Headingtext]}>Calender Overview</TextBold>
                </View>
                <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                    <TextBold style={[styles.Headingtext]}>Previous Connection
                    </TextBold>
                    <TouchableOpacity
                        style={[styles.flexrow]}>
                        <TextRegular style={[styles.childrenname]}>View all</TextRegular>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={color.primary} />
                    </TouchableOpacity>
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
                        <TouchableOpacity style={[styles.Buttoncard2, styles.Buttoncardwidth2,]}>
                            <TextBold style={{ fontSize: 14 }}>More Details</TextBold>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>



        </ScrollView >
    )
}
const styles = StyleSheet.create({
    btnPrimaryTextsize: {
        fontSize: 16,
    },
    slide: {
        width: screenWidth,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
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
    justiffsb: {
        justifyContent: 'space-between'
    },
    Buttoncard: {
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
    Buttoncardnodata: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
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
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardwidth: {
        width: '48%'
    },
    Buttoncardwidth2: {
        width: '38%',
        marginRight: 10
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
    innercardnodata: {
        backgroundColor: color.neutral[100],
        justifyContent: 'space-between',
        padding: 14,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
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
    Cardnodata: {
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: color.neutral[200],
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: color.accent,
        backgroundColor: color.white,
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
});