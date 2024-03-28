import React, { useState } from 'react'
import { View, StyleSheet, Image, Pressable, Modal, TextInput, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { Foundation, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {BASEURL} from "@env";

export default function ProfileSetupAfterAdminApproval() {
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [modalopen, setModalopen] = useState(false);
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [gender, setGender] = useState([
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'Others', value: '0' }
    ]);
    const [relationship, setRelationship] = useState([
        { label: 'Child', value: '1' },
        { label: 'Sibling', value: '2' },
        { label: 'Friend', value: '0' }
    ]);
    const [roles, setRoles] = useState([{ label: '', value: '' }]);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ssn, setSsn] = useState('');
    const [pwd, setPwd] = useState('');
    const [about, setAbout] = useState('');
    const [roleId, setRoleId] = useState('');
    const [dob, setDob] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('')

    const onClose = () => {
        setOpen(false);
        setModalopen(false);
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            const filePath = result.assets[0].uri;
            const pathSegments = filePath.split('/');
            const filename = pathSegments[pathSegments.length - 1];
            setImageName(filename);

        }
    };


    function SubmitData(){
        axios({
            method:'post',
            url:`${BASEURL}`,
            data:{
                
            }
        })
    }

    return (
        <View style={[styles.container,]}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextRegular >Good Evening! <TextBold>Madisson</TextBold></TextRegular>
                <TextBold style={[styles.Headingtext]}>Let’s Complete your Profile </TextBold>
                <View style={[styles.image]}>
                    <Image style={[styles.emailimage]} source={require('../assets/images/Email-icon.jpeg')} />
                    <TextRegular style={[styles.subtext, { marginTop: 10 }]}>Admin has verified your profile</TextRegular>
                </View>
                <TextBold>WELCOME! to Kids Connect</TextBold>
                <View style={[styles.Card]}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <TextRegular style={[styles.childrenname]}>Lucy <TextRegular style={{ fontSize: 14, color: color.success }}>(Primary)</TextRegular></TextRegular>
                                <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Pressable onPress={() => {
                                setOpen(!open);

                            }}
                                style={[styles.imageplus]}>
                                <AntDesign name="plus" size={40} color={color.neutral[500]} />
                            </Pressable>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <TextRegular style={{ fontSize: 14, }}>Add Secondary Persons</TextRegular>
                                <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                            </View>
                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AddingKidsAndPets')} style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
                    <TextRegular style={[styles.Skip,]}>Skip for now</TextRegular>
                    <MaterialIcons name="keyboard-double-arrow-right" size={24} color={color.fontcolor} />
                </TouchableOpacity>
            </ScrollView>

            <Modal
                animationType='slide'
                transparent={true}
                visible={open}>
                <View style={styles.topDummy} />
                <View style={[styles.containerbg]}>
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                    </View>
                    <TextBold>First Name</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your first name" onChangeText={(e) => setFirstName(e)} />
                    <TextBold>Last Name</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your last name" onChangeText={e => setLastName(e)} />
                    <TextBold>Phone Number</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your phone number" onChangeText={e => setPhone(e)} />
                    <TextBold>Email Address</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your mail" onChangeText={(e) => setEmail(e)} />
                    <TextBold>Relationship</TextBold>
                    <Dropdown
                        style={styles.dropdownStyle}
                        data={relationship}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Relationship"
                        searchPlaceholder="Search..."
                        onChange={(item) => {
                            setRelationship(item.value)
                        }}

                    />
                    <View style={[styles.modalcontainer]}>
                        <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                            <TouchableOpacity
                                onPress={() => {
                                    setOpen(!open);
                                }}
                                style={[styles.flexrow, styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                                <TextMedium style={[styles.btnPrimaryTextsize]}>Back</TextMedium>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalopen(!modalopen);
                                    setOpen(!open)
                                }}
                                style={[styles.flexrow, styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                                <TextMedium style={[styles.btnPrimaryTextsize]}>Next</TextMedium>
                                <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType='slide'
                // transparent={true}
                visible={modalopen}>
                <View style={[styles.modalcontainer]}>
                    <TextBold>SSN Number</TextBold>
                    <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter 6 digit SSN number" onChangeText={e => setSsn(e)} />
                    <TextBold >Upload SSN Image</TextBold>
                    <View style={styles.imageContainer}>
                        {
                            !image && (
                                <Pressable style={styles.uploadButton} onPress={pickImage}>
                                    <TextMedium style={styles.uploadButtonText}>Upload</TextMedium>
                                </Pressable>
                            )
                        }
                        {
                            image && (
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                                    <TextMedium style={styles.imageText}>{imageName}</TextMedium>
                                    <FontAwesome name="trash" size={24} color={color.error[300]} onPress={() => setImage(null)} />
                                </View>
                            )
                        }

                        {image && <Image source={{ uri: image }} style={{ width: 170, height: 100, borderRadius: 8 }} />}
                        {!image && <Image source={require('../assets/images/ssnplaceholder.webp')} style={{ width: 170, height: 100, borderRadius: 8 }} />}
                    </View>
                    <TextBold >Enter D.O.B</TextBold>
                    <TextInput placeholderTextColor={styles.textinputcolor} placeholder="DD/MM/YYYY" onChangeText={e => setDob(e)} />
                    <TextBold >Gender</TextBold>
                    <Dropdown
                        style={styles.dropdownStyle}
                        data={gender}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Gender"
                        searchPlaceholder="Search..."
                        onChange={(item) => {
                            setSelectedGender(item.value)
                        }}

                    />
                    <TextBold>Address</TextBold>
                    <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Enter your current address" onChangeText={e => setAddress(e)} />
                    <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                        <View style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                            <Pressable
                                onPress={() => {
                                    setModalopen(!modalopen);
                                    setOpen(!open);
                                }}
                                style={[styles.flexrow]}>
                                <TextMedium style={[styles.btnPrimaryTextsize]}>Back</TextMedium>
                            </Pressable>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                // setOpen(!open)
                                setModalopen(!modalopen)
                                navigation.navigate('AddingKidsAndPets');

                            }}
                            style={[styles.flexrow, styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                            <TextMedium style={[styles.btnPrimaryTextsize]}>Add Profile</TextMedium>
                            <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    topDummy: {
        flex: 1,
        opacity: 0
    },
    textArea: {
        marginVertical: 5,
        height: 100,
        textAlignVertical: 'top',
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    dropdownStyle: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    uploadButton: {
        backgroundColor: color.primary,
        justifyContent: 'center',
        padding: 10,
        height: 50,
        alignSelf: 'center',
        width: 140,
        borderRadius: 8
    },
    uploadButtonText: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imageText: {
        // justifyContent: 'center',
        padding: 10,
        height: 70,
        alignSelf: 'center',
        width: 150,
    },
    flexrow: {
        flexDirection: 'row',
    },
    btnPrimaryTextsize: {
        fontSize: 20,
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
    modalcontainer: {
        paddingHorizontal: 20,
        // marginTop: "auto",
        // height: "50%",
        justifyContent: 'center',
    },
    inputBox: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    Skip: {
        fontSize: 20,
        textDecorationLine: "underline"
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageplus: {
        padding: 30,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderColor: color.accent,
    },
    subtext: {
        fontSize: 20,
    },
    image: {
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
    },
    emailimage: {
        width: 300,
        height: 300,
    },
    container: {
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    containerbg: {
        paddingHorizontal: 15,
        backgroundColor: color.lightBlue,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
    },
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary
    },

})