import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Button, Image, Pressable, ScrollView } from 'react-native'
import { TextBold, TextLight, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { AntDesign, } from '@expo/vector-icons';
import { color } from '../assets/colors/theme';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';

export default function ProfileVerification() {

    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [gender, setGender] = useState([
        {label:'Male', value:'1'},
        {label:'Female', value:'2'},
        {label:'Others', value:'0'}
    ]);
    const [roles, setRoles] = useState([{label:'', value:''}]);
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



    useEffect(() => {
        axios({
            method:'get',
            url:'https://kidsconnect.glansadigital.com/api/roles'
        }).then(res => {
            const roleData = res.data.data.map((role) => ({
                label:(role.role).charAt(0).toUpperCase() + (role.role).slice(1),
                value:role.id
            }));
            setRoles(roleData);
        })
    },[]);


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
            url:'https://kidsconnect.glansadigital.com/api/subscriberlogins', 
            data:{
                    "RoleId": roleId,
                    "FirstName": firstName,
                    "LastName": lastName,
                    "Email": email,
                    "Dob": dob,
                    "Gender": selectedGender,
                    "PhoneNumber": phone,
                    "SSN": ssn,
                    "Password": pwd,
                    "About": about,
                    "Address": address,
                    "ProfileImage": image        
            }
        }).then(res => {
            alert("Form submitted successfully");
        })
    }

    return (
        <ScrollView style={styles.containertop} showsVerticalScrollIndicator={false}>
            <View style={[styles.flexrow, styles.mb10,]}>
                <AntDesign style={[styles.mr10, styles.arrowback]} name="arrowleft" size={24} />
                <TextBold style={[styles.back]}>Profile Verification</TextBold>
            </View>
            <View style={[styles.ml50]}>
                <TextRegular>Admin will verify your profile, and approves</TextRegular>
                <TextLight>Generally it takes around a 1-2 day</TextLight>
            </View>
            <View style={[styles.container]}>
                <TextBold style={[styles.Headingtextinput]}>Email Address</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your mail" onChangeText={(e) => setEmail(e)} />
                <TextBold style={[styles.Headingtextinput]}>First Name</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your first name" onChangeText={(e) => setFirstName(e)} />
                <TextBold style={[styles.Headingtextinput]}>Last Name</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your last name" onChangeText={e => setLastName(e)}/>
                <TextBold style={[styles.Headingtextinput]}>Phone Number</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your phone number" onChangeText={e => setPhone(e)}/>
                <TextBold style={[styles.Headingtextinput]}>Password</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter password" onChangeText={e => setPwd(e)} />
                <TextBold style={[styles.Headingtextinput]}>About</TextBold>
                <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Write about yourself" onChangeText={e => setAbout(e)} />
                <TextBold style={[styles.Headingtextinput]}>SSN Number</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter 6 digit SSN number" onChangeText={e => setSsn(e)} />                
                <TextBold style={[styles.Headingtextinput]}>Upload SSN Image</TextBold>
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
                            <View style={{flexDirection:'row', justifyContent:'center', alignSelf:'center'}}>
                                <TextMedium style={styles.imageText}>{imageName}</TextMedium>
                                <FontAwesome name="trash" size={24} color={color.error[300]} onPress={() =>setImage(null)} />
                            </View>
                        ) 
                    }

                    {image && <Image source={{ uri: image }} style={{ width: 170, height: 100, borderRadius: 8 }} />}
                    {!image && <Image source={require('../assets/images/ssnplaceholder.webp')} style={{ width: 170, height: 100, borderRadius: 8 }} />}
                </View>
                <TextBold style={[styles.Headingtextinput]}>Select Role</TextBold>
                <Dropdown
                    style={styles.dropdownStyle}
                    data={roles}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select role"
                    searchPlaceholder="Search..."
                    onChange={(item) => {
                        setRoleId(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="#3D833F" name="Safety" size={20} />
                    )}
                />
                <TextBold style={[styles.Headingtextinput]}>Enter D.O.B</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="DD/MM/YYYY" onChangeText={e => setDob(e)} />
                <TextBold style={[styles.Headingtextinput]}>Gender</TextBold>
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
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="#3D833F" name="Safety" size={20} />
                    )}
                />
                <TextBold style={[styles.Headingtextinput]}>Address</TextBold>
                <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Enter your current address" onChangeText={e => setAddress(e)} />
                <Pressable style={styles.submitButton} onPress={SubmitData}>
                    <TextMedium style={styles.submitButtonText}>Register</TextMedium>
                </Pressable>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: 'center'
    },
    inputBox: {
        padding: 10,
        borderColor: color.neutral[500],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    back: {
        fontSize: 18,
        color: color.primary[500]
    },
    ml50: {
        marginLeft: 50,
    },
    mr10: {
        marginRight: 10,
    },
    arrowback: {
        color: color.primary[500],
        marginLeft: 15
    },

    justiffsb: {
        justifyContent: 'space-between'
    },
    mb10: {
        marginBottom: 10
    },
    flexrow: {
        flexDirection: 'row',
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
    containertop: {
        marginTop: 60,
        // justifyContent: 'center'
        flex:1
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    uploadButton: {
        backgroundColor: color.primary[300],
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
    textArea:{
        marginVertical: 5,
        height: 100,
        textAlignVertical: 'top',
        padding: 10,
        borderColor: color.neutral[500],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    dropdownStyle:{
        padding: 10,
        borderColor: color.neutral[500],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    submitButton:{
        backgroundColor: color.primary[300],
        padding: 15,
        alignSelf: 'center',
        borderRadius: 8,
        width: "100%",
        justifyContent:'center'
    },
    submitButtonText:{
        justifyContent:'center',
        alignSelf:'center'
    }
})