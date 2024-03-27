import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Button, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { TextBold, TextLight, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { AntDesign, } from '@expo/vector-icons';
import { color } from '../assets/colors/theme';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { BASEURL } from '@env'
import { useNavigation } from '@react-navigation/native';

export default function ProfileVerification() {
    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [gender, setGender] = useState([
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'Others', value: '0' }
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
    const [phone, setPhone] = useState('');
    const [mailError, setMailError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameErr, setLastNameErr] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [aboutErr, setAboutErr] = useState('');
    const [ssnErr, setSsnErr] = useState('');
    const [roleErr, setRoleErr] = useState('');
    const [dobErr, setDobErr] = useState('');
    const [genderErr, setGenderErr] = useState('');
    const [addressErr, setAddressErr] = useState('');



    // Validation of form
    // Done by soumya
    /*=================================== Validation Start=================================*/

    const validateEmail = (email, setMailError) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            setMailError('Email is required');
            return false;
        } else if (!regex.test(email)) {
            setMailError('Enter a valid email id');
            return false;
        } else {
            setMailError('');
            return true;
        }
    };


    const validateFirstName = (firstName, setFirstNameError) => {
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(firstName)) {
            setFirstNameError('Numbers are not allowed in the name field');
            return false;
        } else if (firstName.trim() === '') {
            setFirstNameError('Name is required');
            return false;
        } else {
            setFirstNameError('');
            return true;
        }
    };


    const validateLastName = (lastname, setLastNameErr) => {
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(lastname)) {
            setLastNameErr('Numbers are not allowed in the name field');
            return false;
        } else if (lastname.trim() === '') {
            setLastNameErr('Name is required');
            return false;
        } else {
            setLastNameErr('');
            return true;
        }
    };


    const validateMobileNumber = (mobile, setMobileError) => {
        const regex = /^[0-9]{10}$/;
        if (!regex.test(mobile)) {
            setMobileError('Mobile number should be a 10-digit number');
            return false;
        } else if (mobile.trim() === '') {
            setMobileError('Mobile number is required');
            return false;
        } else {
            setMobileError('');
            return true;
        }
    };

    const validatePassword = (password, setPasswordErr) => {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

        if (password.length < minLength) {
            setPasswordErr('Password should be at least 8 characters long');
            return false;
        } else if (!hasUppercase) {
            setPasswordErr('Password should contain at least one uppercase letter');
            return false;
        } else if (!hasLowercase) {
            setPasswordErr('Password should contain at least one lowercase letter');
            return false;
        } else if (!hasNumber) {
            setPasswordErr('Password should contain at least one number');
            return false;
        } else if (!hasSpecialChar) {
            setPasswordErr('Password should contain at least one special character');
            return false;
        } else {
            setPasswordErr('');
            return true;
        }
    };

    const validateAbout = (about, setAboutErr) => {
        if (about.trim() === '') {
            setAboutErr('About section is required');
            return false;
        } else {
            setAboutErr('');
            return true;
        }
    };

    const validateSsn = (ssn, setSsnErr) => {
        const regex = /^\d{3}-\d{2}-\d{4}$/;
        if (!regex.test(ssn)) {
            setSsnErr('Please enter a valid SSN (###-##-####)');
            return false;
        } else {
            setSsnErr('');
            return true;
        }
    };

    const validateRole = (selectedRole, setRoleErr) => {
        if (!selectedRole) {
            setRoleErr('Role is required');
            return false;
        }
        else {
            setRoleErr('');
            return true;
        }
    };

    const validateDob = (dob, setDobErr) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    
        if (!regex.test(dob)) {
            setDobErr('Please enter a valid date in the format DD/MM/YYYY');
            return false;
        } else {
            setDobErr('');
            return true;
        }
    };
    
    const validateGender = (selectedGender, setGenderErr) => {
        if (!selectedGender) {
            setGenderErr('Gender is required');
            return false;
        } else {
            setGenderErr('');
            return true;
        }
    };

    const validateAddress = (address, setAddressErr) => {
        if (!address.trim()) {
            setAddressErr('Address is required');
            return false;
        } else {
            setAddressErr('');
            return true;
        }
    };

    /*======================================Validation End======================================*/
    
    


// Fetching user roles
// Done by Soumya
/* =====================================Fetching user roles start=========================================*/

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:8000/api/roles`
        }).then(res => {
            const roleData = res.data.data.map((role) => ({
                label: (role.role).charAt(0).toUpperCase() + (role.role).slice(1),
                value: role.id
            }));
            setRoles(roleData);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    /* =====================================Fetching user roles end=========================================*/

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

    function SubmitData() {
        axios({
            method: 'post',
            url: `${BASEURL}api/subscriberlogins`,
            data: {
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
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your mail" onChangeText={(e) => {
                    setEmail(e);
                    validateEmail(e, setMailError);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{mailError}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>First Name</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your first name" onChangeText={(e) => {
                    setFirstName(e);
                    validateFirstName(e, setFirstNameError);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{firstNameError}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>Last Name</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your last name" onChangeText={e => {
                    setLastName(e);
                    validateLastName(e, setLastNameErr);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{lastNameErr}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>Phone Number</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your phone number" onChangeText={e => {
                    setPhone(e);
                    validateMobileNumber(e, setMobileError);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{mobileError}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>Password</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter password" onChangeText={e => {
                    setPwd(e);
                    validatePassword(e, setPasswordErr);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{passwordErr}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>About</TextBold>
                <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Write about yourself" onChangeText={e => {
                    setAbout(e);
                    validateAbout(e, setAboutErr);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{aboutErr}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>SSN Number</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter 6 digit SSN number" onChangeText={e => {
                    setSsn(e)
                    validateSsn(e, setSsnErr);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{ssnErr}</TextBold>
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
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                                <TextMedium style={styles.imageText}>{imageName}</TextMedium>
                                <FontAwesome name="trash" size={24} color={color.error[300]} onPress={() => setImage(null)} />
                            </View>
                        )
                    }

                    {image && <Image source={{ uri: image }} style={{ width: 170, height: 100, borderRadius: 8 }} />}
                    {!image && <Image source={require('../assets/images/ssnplaceholder.webp')} style={{ width: 170, height: 100, borderRadius: 8 }} />}
                </View>
                {/* <TextBold style={{ marginBottom: 16, color: 'red' }}>{lastNameErr}</TextBold> */}
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
                        validateRole(item.value, setRoleErr);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="#3D833F" name="Safety" size={20} />
                    )}
                />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{roleErr}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>Enter D.O.B</TextBold>
                <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="DD/MM/YYYY" onChangeText={e => {
                    setDob(e);
                    validateDob(e, setDobErr);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{dobErr}</TextBold>
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
                        setSelectedGender(item.value);
                        validateGender(item.value, setGenderErr);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="#3D833F" name="Safety" size={20} />
                    )}
                />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{genderErr}</TextBold>
                <TextBold style={[styles.Headingtextinput]}>Address</TextBold>
                <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Enter your current address" onChangeText={e => {
                    setAddress(e);
                    validateAddress(e, setAddressErr);
                }} />
                <TextBold style={{ marginBottom: 16, color: 'red' }}>{addressErr}</TextBold>
                <TouchableOpacity style={styles.submitButton}
                    onPress={() => navigation.navigate('ProfileSetupAfterAdminApproval')}
                // onPress={SubmitData}
                >
                    <TextMedium style={styles.submitButtonText}>Register</TextMedium>
                </TouchableOpacity>
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
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',

    },
    back: {
        fontSize: 18,
        color: color.primary
    },
    ml50: {
        marginLeft: 50,
    },
    mr10: {
        marginRight: 10,
    },
    arrowback: {
        color: color.primary,
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
        flex: 1
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
    submitButton: {
        backgroundColor: color.primary,
        padding: 15,
        alignSelf: 'center',
        borderRadius: 8,
        width: "100%",
        justifyContent: 'center'
    },
    submitButtonText: {
        justifyContent: 'center',
        alignSelf: 'center'
    }
})