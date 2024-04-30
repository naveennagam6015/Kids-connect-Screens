import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Platform, Image, TouchableOpacity, Switch, Text, Button, TextInput } from 'react-native'
import { TextBold, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { MaterialCommunityIcons, FontAwesome, FontAwesome5, Foundation, MaterialIcons, Ionicons, AntDesign, Octicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [notifications, setNotifications] = useState(false);
    const [darkmode, setDarkmode] = useState(false);


    useEffect(() => {
        async function GetUserData() {
            const userDetails = JSON.parse(await AsyncStorage.getItem('userDetails'));
            console.log(userDetails);
            const date_string = userDetails.created_at;
            const date_object = new Date(date_string);

            const month = date_object.toLocaleString('default', { month: 'long' });
            const year = date_object.getUTCFullYear();
            setMonth(month);
            setYear(year);
            setUserData(userDetails)
        }

        GetUserData();
    }, [])
    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row" }} >
                    <View style={[{ width: "35%" }, styles.profileName]}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/man3.jpg')} />
                    </View>
                    <View style={[{ width: "45%", }, styles.profileName]}>
                        <TextBold style={{ color: color.secondaryOrange, fontSize: 16 }}>Krishna (M)</TextBold>
                        <TextBold style={{ fontSize: 12 }}>krishna2024@gmail.com</TextBold>
                        <TextBold style={{ color: color.neutral[300], fontSize: 12 }}>4387 Farland Avenue, San Antonio, TX 78212</TextBold>
                        <TextBold style={{ color: color.neutral[300], fontSize: 12 }}>(Since 2022)</TextBold>

                    </View>
                    <View style={[{ width: "15%", marginTop: 10, marginRight: 7 }]}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProfileEdit')}
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextRegular style={{ fontSize: 11 }}>Edit Profile</TextRegular>
                            <Feather name="edit" style={{ marginLeft: 5 }} size={15} color={color.secondaryOrange} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    {/* <TextBold style={[{ justifyContent: 'center' }, styles.Headingtext]}>About</TextBold> */}
                </View>
                <TextRegular style={[styles.textnetural, { fontSize: 14 }]}>
                    {userData.About}
                </TextRegular>

                <View style={[styles.fullcard, styles.flexrow]}>
                    {/* First column: Image and Content */}
                    <View style={[styles.flexrow]}>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>

                            <View style={{ alignItems: 'flex-start' }}>
                                <TextBold style={[styles.childrenname]}>Radha </TextBold>
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
                                    <TextRegular style={{ fontSize: 11, paddingRight: 5 }}>Add</TextRegular>

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
                                    <TextRegular style={{ fontSize: 11, paddingRight: 5 }}>Add</TextRegular>

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
                <View style={[styles.paddingcard]}>
                    <View style={[styles.ProfileCard]}>
                        <View>             
                        <Text style={[styles.referal]}>Referal Code</Text>
                        <View style={{flexDirection:'row', width:'100%'}}>
                            <View style={[styles.text]}>
                                <TextInput style={[styles.inputtxt]}>12345</TextInput>
                            </View>
                            <View style={[styles.Button]}>
                                <TouchableOpacity>
                                    <Text style={[styles.txtbtn]}>Refer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={[styles.radio]}>
                                <Text>Copy</Text>
                                <Feather name="copy" size={18} color="black" />
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View>             
                        <Text style={[styles.referal]}>Invitation Link</Text>
                        <View style={{flexDirection:'row', width:'100%'}}>
                            <View style={[styles.text]}>
                                <TextInput style={[styles.inputlink]}>kidsconnect/madisson.kd</TextInput>
                            </View>
                            <View style={[styles.Button]}>
                                <TouchableOpacity>
                                    <Text style={[styles.txtbtn]}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={[styles.radio]}>
                                <Text>Copy</Text>
                                <Feather name="copy" size={18} color="black" />
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={[styles.Card, styles.flexrow, styles.justsb]}>
                    <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>My Bookings</TextBold>
                    <MaterialIcons style={{ marginTop: 8, marginRight: 8 }} name="arrow-forward-ios" size={16} color={color.fontcolor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyAccount')} style={[styles.Card, styles.flexrow, styles.justsb]}>
                    <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>My Account</TextBold>
                    <MaterialIcons style={{ marginTop: 8, marginRight: 8 }} name="arrow-forward-ios" size={16} color={color.fontcolor} />
                </TouchableOpacity>
                <TextBold style={[styles.Headingtext,]}>Requested by</TextBold>
                <View style={[styles.yellowcard, { marginTop: 4 }]}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>My Account</TextBold>
                        <TouchableOpacity onPress={() => navigation.navigate('DevicePermissions')} style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialCommunityIcons name="lock-check" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Device Permissions</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
                        <View style={[styles.line]}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <FontAwesome5 name="key" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Change Password </TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
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
                            <Switch
                                trackColor={{ false: color.secondaryOrange, true: color.success }}
                                thumbColor={darkmode ? color.white : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setDarkmode(previousState => !previousState)}
                                value={darkmode}
                            />
                        </View>
                        <View style={[styles.line]}></View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="notifications-active" size={24} color={color.white} />
                                {/* <MaterialIcons name="notifications-off" size={24} color={color.white} /> */}
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Notifications</TextBold>
                            </View>
                            <Switch
                                trackColor={{ false: color.secondaryOrange, true: color.success }}
                                thumbColor={notifications ? color.white : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setNotifications(previousState => !previousState)}
                                value={notifications}
                            />
                        </View>

                    </View>
                </View>
                <View style={[styles.yellowcard,]}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>Support</TextBold>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ContactUs')}
                            style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="contact-phone" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Contact Us</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
                        <View style={[styles.line]}></View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TermsAndConditions')}
                            style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <Foundation name="clipboard-notes" style={{ marginLeft: 5 }} size={28} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Terms & Conditions</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
                        <View style={[styles.line]}></View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('PrivacyPolicy')}
                            style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="privacy-tip" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Privacy Policy</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
                        <View style={[styles.line]}></View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('FAQs')}
                            style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>FAQs</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
                        <View style={[styles.line]}></View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Aboutus')}
                            style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <FontAwesome name="group" size={22} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>About us</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
                        <View style={[styles.line]}></View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Help</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </View>
                        <TouchableOpacity style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                            <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Logout</TextBold>
                            </View>
                            <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
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
    radio: {
        flexDirection: 'row-reverse',
        marginTop: 10,
        alignItems: 'center',

    },
    inputtxt: {
        fontWeight: "bold",
        fontSize: 20,
        color: color.fontcolor,
        textAlign: "center",
    },
    inputlink:{
        fontWeight: "600",
        fontSize: 15,
        color: color.fontcolor,
        textAlign: "center",
    },
    txtbtn: {
        fontWeight: "bold",
        fontSize: 20,
        color: color.fontcolor,
        textAlign: "center",
    },
    text: {
        width:"55%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: color.white,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderWidth: 3,
        borderColor: color.neutral[100],
        borderStyle: 'dotted',
        padding: 8,
    },
    Button: {
        width:"45%",
        flexDirection: 'row',
        justifyContent: 'center',  
        backgroundColor: color.primary,
       marginLeft: "-1%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color.neutral[100],
        // borderStyle: 'dotted',
        padding: 8,
    },
    paddingcard: {
        padding: 1,

    },
    ProfileCard: {
        backgroundColor: color.neutral[100],
        margin: 10,
        padding: 20,
        borderRadius: 8,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

    },

    referal: {
        fontWeight: '600',
        fontSize: "25",
        color: color.fontcolor,
        marginBottom: 12,
    },
    justsb: {
        justifyContent: "space-between"
    },
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
        borderColor: '#000',
        borderWidth: 0.5
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
        marginTop: 8,
        marginBottom: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: color.neutral[300],
        // backgroundColor: color.white,
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
        borderRadius: 8,
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
        marginBottom: 40,
        justifyContent: 'center',
    },
    profileName: {
        justifyContent: 'center'
    },
    imageplusadd: {
        padding: 5,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },

})
