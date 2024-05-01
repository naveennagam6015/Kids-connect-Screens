import { Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { color, tokens } from "../assets/colors/theme";
import { TextBold, TextMedium, TextRegular } from "../assets/fonts/CustomText";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { BASEURL } from '@env';
import { Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
export default function Login({ navigation, route }) {
    const { data } = route.params;
    // const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    WebBrowser.maybeCompleteAuthSession();
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '1060882560652-o8avicvf9bhj0344aulnr9og7ksu1rbt.apps.googleusercontent.com',
        webClientId: '1060882560652-c7f475gqnqr2ob2vapop00i90h6umlb1.apps.googleusercontent.com',
        expoClientId: '1060882560652-5946ukqdti6lji8o6njv21at3bsbr9bi.apps.googleusercontent.com',
        iosClientId: '1060882560652-iuuuvi794r18rtp076sobh1qhmgmftkt.apps.googleusercontent.com',
        scopes: ["profile", "email"],
    });



    const validateEmail = (email, setEmailError) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            setEmailError('Email is required');
            return false;
        } else if (!regex.test(email)) {
            setEmailError('Enter a valid email id');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };




    const validatePassword = (pwd, setPasswordErr) => {
        if (pwd.trim() === '') {
            setPasswordErr('Password is required');
            return false;
        } else {
            setPasswordErr('');
            return true;
        }
    }



    async function GetSubscriber(token) {
        axios({
            method: 'get',
            url: `${BASEURL}api/subscriberlogins`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(async (res) => {
            console.log(res.data);
            const userData = JSON.stringify(res.data.data);
            await AsyncStorage.setItem('userDetails', userData);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {

        })
    }


    /*=========================================Login Functionality End======================================*/

    /*=====================================Forgot password Functionality Start===================================== */

    const handleSubmit = async () => {
        try {

            axios({
                method: 'post',
                url: `${BASEURL}api / forgotPassword`,
                data: {
                    "email": email
                }
            }).then(res => {
                console.log(res.data);
            })




            // Reset the email input field and loading state
            setEmail('');
            //   setIsLoading(false);
        } catch (error) {
            console.error('Error submitting email:', error);

        }
    };

    const handleCloseModal = () => {
        // Handle closing the modal here
        console.log('Modal closed');

        // You can also reset any state variables related to the modal if needed
    };



    return (
        <ScrollView>

            <View style={styles.container}>
                <StatusBar />
                {/* <Image source={require('../assets/images/LoginBackground.png')} style={styles.backgroundImage} resizeMode="cover"> */}
                <Ionicons style={{ justifyContent: "center", alignItems: "center", alignSelf: "center" }} name="image-outline" size={180} color={color.neutral[500]} />
                <TextBold style={[styles.heading, { color: color.neutral[500] }]}>Kid Connect</TextBold>
                <TextBold style={styles.subheading}>Welcome</TextBold>
                <View>
                    <TextInput style={styles.inputBox} placeholder="Enter your mail" onChangeText={(email) => {
                        setEmail(email);
                        validateEmail(email, setEmailError);
                    }} />
                    {
                        emailError !== '' && (
                            <TextBold style={{ marginBottom: 10, color: 'red', paddingLeft: 18 }}>{emailError}</TextBold>
                        )
                    }


                    <View style={styles.inputContainer}>
                        <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Enter your password" onChangeText={(pwd) => { setPassword(pwd); validatePassword(pwd, setPasswordErr); }} secureTextEntry={!showPassword} />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons style={styles.eyeIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                        </TouchableOpacity>
                    </View>



                    {
                        passwordErr !== '' && (
                            <TextBold style={{ marginBottom: 10, color: 'red', paddingLeft: 18 }}>{passwordErr}</TextBold>
                        )
                    }
                    <TouchableOpacity>
                        <TextRegular style={styles.forgotPwd}>Forgot Password?</TextRegular>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnPrimary}
                        // onPress={() => navigation.navigate('ProfileSetupAfterAdminApproval')}
                        onPress={() => navigation.navigate('ProfileVerification', { data: data })}
                    >
                        <TextMedium style={styles.btnText}>Sign in</TextMedium>
                    </TouchableOpacity>
                    <View style={styles.mainView}>
                        <View style={styles.horizontalLine}></View>
                        <TextRegular style={styles.textR}>or Sign in with</TextRegular>
                        <View style={styles.horizontalLine}></View>
                    </View>
                    {/* <Button title="Profile" onPress={() => navigation.navigate('BottomNavigation', {screen:'Profile'})} /> */}
                    <TouchableOpacity style={styles.googleImage}>
                        <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../assets/images/GoogleIcon.png')} />
                        <TextMedium style={{ justifyContent: 'center', alignSelf: 'center', marginStart: 10 }}>Sign in with google</TextMedium>
                    </TouchableOpacity>

                    <Button title="Home" onPress={() => navigation.navigate('BottomNavigation')} />
                </View>

                {/* dummy */}

                {/* <TouchableOpacity style={styles.btnPrimary}
                    onPress={() => navigation.navigate('About')}
                >
                    <TextMedium style={styles.btnText}>About</TextMedium>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPrimary}
                    onPress={() => navigation.navigate('ProfileDetails')}
                >
                    <TextMedium style={styles.btnText}>Details</TextMedium>
                </TouchableOpacity> */}


            </View>

            {/* Forgot password */}
            <Modal visible={false} animationType="slide" transparent={true}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 10 }}>
                        <TouchableOpacity onPress={handleCloseModal} style={{ alignSelf: 'flex-end' }}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={e => setEmail(e)}
                            style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                        />
                        <TouchableOpacity onPress={handleSubmit} style={styles.btnPrimary}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    fullwidth: {
        width: "94%"
    },
    eyeIcon: {
        marginLeft: -50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    eye: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    flexrow: {
        flexDirection: "row",
    },
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 50,
        alignSelf: 'center',
        color: color.neutral[700]
    },
    subheading: {
        fontSize: 25,
        alignSelf: 'center',
        color: color.neutral[500]
    },
    inputBox: {
        padding: 15,
        borderColor: color.neutral[500],
        borderWidth: 1,
        margin: 12,
        borderRadius: 8
    },
    btnPrimary: {
        padding: 15,
        margin: 12,
        backgroundColor: color.primary,
        borderRadius: 8
    },
    btnText: {
        alignSelf: 'center',
        fontSize: 18
    },
    forgotPwd: {
        padding: 10,
        alignSelf: 'flex-end'
    },
    textR: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 5,
    },
    horizontalLine: {
        width: 60,
        height: 1,
        backgroundColor: color.neutral[300],
        marginHorizontal: 10,
    },
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleImage: {
        padding: 12,
        margin: 14,
        backgroundColor: color.neutral[100],
        borderRadius: 8,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    backgroundImage: {
        // flex:1
    },
    signupView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    signUpMediumText: {
        // fontSize:18,
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
})