import React, { useState } from 'react'
import { View, StyleSheet, Platform, ScrollView, Image, Modal, TouchableOpacity } from 'react-native'
import { TextBold, TextLight, TextRegular } from '../assets/fonts/CustomText';
import { color } from '../assets/colors/theme';
import { AntDesign, FontAwesome, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileDetails from '../components/ProfileDetails';
import { useNavigation } from '@react-navigation/native';
import KidsProfileScr2 from './KidsProfileScn2';
import AnotherKidDetails from '../components/AnotherKidDetails';
import AnotherParentDetails from '../components/AnotherParentDetails';

export default function Requests() {
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [profileDetails, setProfileDetails] = useState(false);
    const [kiddetails, setKiddetails] = useState("");
    const [anotherkiddetails, setAnotherkiddetails] = useState(false);
    const [anotherparentdetails, setAnotherparentdetails] = useState("");

    const onClose = () => {
        setOpen(false);
        setProfileDetails(false);
        setKiddetails(false);
        setAnotherparentdetails(false);
    };
    return (

        <ScrollView>
            <View style={[styles.container]}>
                <View style={[styles.flexrow, { justifyContent: "space-between" }]}>

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
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* demo code start */}
                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.Card]}>
                    <View style={[styles.innercard2, styles.flexrow,]}>
                        <TouchableOpacity
                            onPress={() => setKiddetails(!kiddetails)}
                            style={{ alignItems: 'flex-start' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/bgwhite.png')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Soumya <TextBold style={{ color: color.neutral[300] }}>(M)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 12 }}>4hrs</TextRegular>
                            <AntDesign name="arrowright" size={18} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 12 }}>Feb 17th | Monday</TextRegular>

                        </View>
                        <TouchableOpacity
                            onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                            style={{ alignItems: 'flex-end' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                            </View>
                            <View>
                                <TextBold style={[styles.childrenname]}>Anita  <TextBold style={{ color: color.neutral[300] }}>(F)</TextBold></TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.Card, styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                        <MaterialIcons name="message" size={20} color="black" />
                        <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                            <Ionicons name="call" size={20} color="black" />
                        </View>
                        <View>
                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} style={[styles.Buttoncard, styles.Buttoncardwidth, { width: "60%" }]}>
                        <View
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.childrenname]}>More Details</TextBold>
                            <AntDesign style={[styles.arrow]} name="doubleright" size={16} color={color.fontcolor} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* demo code end */}

            </View>
            <Modal
                animationType="slide" transparent={true} visible={anotherkiddetails}>
                <View style={styles.topDummy} />
                <AnotherKidDetails name={"Naveen"} close={() => setAnotherkiddetails(!anotherkiddetails)} />
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={open}>
                <View style={styles.topDummy} />
                <View style={[styles.containerbg]}>
                    <View >
                        <TouchableOpacity
                            onPress={onClose}
                            style={[styles.cancelButtonContainer, { alignItems: "flex-end", }]}>
                            <Icon name="cancel" size={30} color={color.neutral[300]} />
                        </TouchableOpacity>
                        <View style={[styles.flexrow, { alignItems: 'center' }]}>
                            <View>
                                <Image style={[styles.profilepic, { marginTop: 15 }]} source={require('../assets/images/women.png')} />
                            </View>
                            <View>
                                <View style={[styles.flexrow, { alignItems: 'center', marginBottom: 5 }]}>
                                    <TextBold style={[styles.childrenname]}>Samantha </TextBold>
                                    <TextBold style={{ color: color.neutral[300] }}>(Daughter)</TextBold>
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
                                <TextRegular>4hrs</TextRegular>
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
                                            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ padding: 5, marginHorizontal: 10 }}>
                                                <View>
                                                    <MaterialIcons name="message" size={20} color={color.neutral[500]} />
                                                </View>
                                                <View>
                                                    <TextRegular style={[styles.textnetural, { fontSize: 12, }]}>Chat</TextRegular>
                                                </View>
                                            </TouchableOpacity>
                                            {/* <View style={{ padding: 5, marginHorizontal: 10 }}>
                                                <View>
                                                    <Ionicons name="call" size={20} color={color.neutral[500]} />
                                                </View>
                                                <View>
                                                    <TextRegular style={[styles.textnetural, { fontSize: 12, }]}>Call</TextRegular>
                                                </View>
                                            </View> */}
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
                        <TextRegular style={[styles.textnetural, { fontSize: 18, marginTop: 15, marginBottom: 10 }]}>4 Tags matches your Interests </TextRegular>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.bgyellow, { flexWrap: 'wrap' }]}>
                    <View style={[styles.Tags2]}>
                        <TextRegular>In-House </TextRegular>
                    </View>
                    <View style={[styles.Tags2]}>
                        <TextRegular>4hrs</TextRegular>
                    </View>
                    <View style={[styles.Tags2]}>
                        <TextRegular>Science Project</TextRegular>
                    </View>
                    <View style={[styles.Tags2]}>
                        <TextRegular>Project Based</TextRegular>
                    </View>
                </View>
                <View style={[styles.containerbg2]}>

                    <View style={[styles.modalcontainer]}>
                        <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                            <TouchableOpacity style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                                <View
                                    style={[styles.flexrow]}>
                                    <TextBold style={[styles.btnPrimaryTextsize]}>Modify</TextBold>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onClose}
                                style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                                <View
                                    style={[styles.flexrow]}>
                                    <TextBold style={[styles.btnPrimaryTextsize]}>Accept</TextBold>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextLight style={{
                        textDecorationLine: 'underline',
                        textAlign: 'center',
                        color: color.neutral[500]
                    }}>You have connected previously 3 times.</TextLight>
                </View>
            </Modal>
            <Modal
                animationType="slide" transparent={true} visible={profileDetails}>
                <View style={styles.topDummy} />
                <ProfileDetails name={"Naveen"} close={() => setProfileDetails(!profileDetails)} />
            </Modal>
            <Modal
                animationType="slide" transparent={true} visible={anotherparentdetails}>
                <View style={styles.topDummy} />
                <AnotherParentDetails name={"Naveen"} close={() => setAnotherparentdetails(!anotherparentdetails)} />
            </Modal>
            <Modal
                animationType="slide" transparent={true} visible={kiddetails}>
                <View style={styles.topDummy} />
                <KidsProfileScr2 name={"Naveen"} close={() => setKiddetails(!kiddetails)} />
            </Modal>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    Buttoncardfullwidth: {
        width: '100%'
    },
    cancelButtonContainer: {
        position: 'absolute',
        top: 15,
        right: 5,
    },
    containerbg2: {
        paddingHorizontal: 15,
        backgroundColor: color.white,
        justifyContent: 'center',
        paddingBottom: 10
    },
    containerbg: {
        paddingHorizontal: 15,
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 30,
            },
        }),
    },
    topDummy: {
        flex: 1,
        opacity: 0
    },
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
        backgroundColor: color.primary,
        paddingVertical: 18,
    },
    Buttoncard2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
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
        padding: 15,
        marginBottom: 40,
        justifyContent: 'center'
    },
});