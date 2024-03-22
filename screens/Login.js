import { Button, Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { color, tokens } from "../assets/colors/theme";
import { TextBold, TextMedium, TextRegular } from "../assets/fonts/CustomText";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { BASEURL } from '@env';

export default function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    WebBrowser.maybeCompleteAuthSession();
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '1060882560652-o8avicvf9bhj0344aulnr9og7ksu1rbt.apps.googleusercontent.com',
        webClientId: '1060882560652-c7f475gqnqr2ob2vapop00i90h6umlb1.apps.googleusercontent.com',

        iosClientId: '1060882560652-o4p870s2go3gl9rhkdlsb2ilvju7g6oi.apps.googleusercontent.com'
    });


    useEffect(() => {
        handleSigninWithGoogle();
        // if(response?.type === 'success'){
        //     const {id_token} = response.params;
        //     const credential = GoogleAuthProvider.credential(id_token);
        //     signInWithCredential(auth, credential);
        // }
    }, [response]);

    // useEffect(() => {
    //     const unsub = onAuthStateChanged(auth, async(user) => {
    //         if(user){
    //             console.log(user);
    //         }else{

    //         }
    //     });

    //     return () => unsub();

    // },[])

    async function handleSigninWithGoogle() {
        const user = await AsyncStorage.getItem('@user');
        if (!user) {
            if (response?.type === 'success') {
                await getUserInfo(response.authentication.accessToken);
            }

        } else {
            setUserInfo(JSON.parse(user));
        }
    }

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch('https://www.googleapis.com/userinfo/v2/me',
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            const user = await response.json();
            await AsyncStorage.setItem('@user', JSON.stringify(user));
            setUserInfo(user);
            console.log(user);
        } catch (error) {

        }
    }

    // Validation of Login
    // Done by Soumya

    /*=================================Validation Start====================================== */

    // Email Validation
    // Done by Soumya
    const validateEmail = (email, setMailError) => {
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

    /*=================================Validation Start====================================== */




    // Login Functionality by generating token
    // Done by Soumya

    /*=====================================Login Functionality Start===================================== */

    function LoginFunctionality() {
        if (email == '') {
            validateEmail(email, setEmailError);
        } else if (password == '') {
            validatePassword(password, setPasswordErr);
        } else {
            axios({
                method: 'post',
                url: `${BASEURL}login`,
                data: {
                    "Email": email,
                    "password": password
                }
            }).then(async res => {
                const authData = JSON.stringify(res.data);
                AsyncStorage.setItem('authData', authData);
                await GetSubscriber(res.data.token);
            }).catch(err => {
                console.log(err);
            }).finally(() => {

            })
        }

    }

    // Get the user on the basis of token
    // Done by Soumya

    async function GetSubscriber(token) {
        axios({
            method: 'get',
            url: `${BASEURL}subscriberlogins`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(async res => {
            console.log(res.data);
            const userData = JSON.stringify(res.data.data);
            AsyncStorage.setItem('userDetails', userData);
        }).catch(err => {
            console.log(err);
        }).finally(() => {

        })
    }


    /*=========================================Login Functionality End======================================*/


    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <ImageBackground source={require('../assets/images/LoginBackground.png')} style={styles.backgroundImage} resizeMode="cover"> */}
            <TextBold style={styles.heading}>Kids Connect</TextBold>
            <TextBold style={styles.subheading}>Welcome back</TextBold>
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

                <TextInput style={styles.inputBox} placeholder="Enter your password" onChangeText={(pwd) => {
                    setPassword(pwd);
                    validatePassword(pwd, setPasswordErr);
                }} />
                {
                    passwordErr !== '' && (
                        <TextBold style={{ marginBottom: 10, color: 'red', paddingLeft: 18 }}>{passwordErr}</TextBold>
                    )
                }
                <TextRegular style={styles.forgotPwd}>Forgot Password?</TextRegular>
            </View>
            <View>
                <TouchableOpacity style={styles.btnPrimary}
                    // onPress={() => navigation.navigate('ProfileSetupAfterAdminApproval')}
                    onPress={LoginFunctionality}
                >
                    <TextMedium style={styles.btnText}>Login</TextMedium>
                </TouchableOpacity>
                <View style={styles.mainView}>
                    <View style={styles.horizontalLine}></View>
                    <TextRegular style={styles.textR}>or Login with</TextRegular>
                    <View style={styles.horizontalLine}></View>
                </View>
                <Pressable style={styles.googleImage} onPress={() => promptAsync()}>
                    <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../assets/images/GoogleIcon.png')} />
                    <TextMedium style={{ justifyContent: 'center', alignSelf: 'center', marginStart: 10 }}>Continue with Google</TextMedium>
                </Pressable>
                <View style={styles.signupView}>
                    <TextRegular>Don't have an Account! </TextRegular>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <TextMedium style={styles.signUpMediumText}>Signup</TextMedium>
                    </TouchableOpacity>
                </View>
                {/* <Button title="Logout" onPress={() => AsyncStorage.removeItem('@user')} /> */}
            </View>

            {/* dummy */}
            {/* <TouchableOpacity style={styles.btnPrimary}
                onPress={() => navigation.navigate('Chat')}
            >
                <TextMedium style={styles.btnText}>Chat</TextMedium>
            </TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
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
        padding: 10,
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