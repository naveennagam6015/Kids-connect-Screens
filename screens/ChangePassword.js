import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert, View } from 'react-native'
import { TextBold, TextLight, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { useNavigation } from '@react-navigation/native'
import { color } from '../assets/colors/theme'
import { Ionicons } from '@expo/vector-icons'

export default function ChangePassword() {
    const navigation = useNavigation();
    const [enteredOtp, setEnteredOtp] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [passwordtwo, setPasswordtwo] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [passwordErrtwo, setPasswordErrtwo] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordtwo, setShowPasswordtwo] = useState(false);
    const togglePasswordVisibilitytwo = () => {
        setShowPasswordtwo(!showPasswordtwo);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        function generateOTP() {

            let digits = '0123456789';
            let OTP = '';
            for (let i = 0; i < 5; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            return OTP;
        }
        setOtp(generateOTP());
    }, []);

    const inputRefs = Array(5)
        .fill()
        .map((_, i) => useRef());

    const handleKeyPress = (index, event) => {
        if (event.nativeEvent.key >= '0' && event.nativeEvent.key <= '9') {
            if (index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
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
    const validatePasswordtwo = (pwdtwo, setPasswordErrtwo) => {
        if (pwdtwo.trim() === '') {
            setPasswordErrtwo('Password is required');
            return false;
        } else {
            setPasswordErrtwo('');
            return true;
        }
    }
    const VerifyClick = () => {
        Alert.alert("You have successfully set your password");
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
    };
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <TextRegular style={{ color: color.fontcolor, fontSize: 18 }}>We have sent a code to your registered email: <TextMedium style={{ color: color.fontcolor, fontSize: 18 }}>sasian*****@gmail.com</TextMedium></TextRegular>
                <TextBold style={[styles.Headingtextinput, styles.mb4]}>Enter Your Code</TextBold>
                <View style={[styles.flexrow, styles.justiffsb]}>
                    {inputRefs.map((inputRef, index) => (
                        <TextInput
                            ref={inputRef}
                            key={index}
                            style={styles.inputBoxes}
                            keyboardType="numeric"
                            maxLength={1}
                            onKeyPress={(event) => handleKeyPress(index, event)}
                            onChangeText={(e) => {
                                setEnteredOtp((prevString) => prevString + e);
                            }}
                        />
                    ))}

                </View>
                <TextBold style={[styles.Headingtextinput, styles.mb4]}>Enter New Password</TextBold>
                <View style={styles.inputContainer}>
                    <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Enter your password" onChangeText={(pwd) => { setPassword(pwd); validatePassword(pwd, setPasswordErr); }} secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons style={styles.eyeIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                    </TouchableOpacity>
                </View>
                <TextLight><TextRegular>Strong Password Tip:</TextRegular> Use combination of alphabets and numbers</TextLight>
                <TextBold style={[styles.Headingtextinput, styles.mb4]}>Re-enter Password</TextBold>
                <View style={styles.inputContainer}>
                    <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Re- enter your Password" onChangeText={(pwdtwo) => { setPasswordtwo(pwdtwo); validatePasswordtwo(pwdtwo, setPasswordErrtwo); }} secureTextEntry={!showPasswordtwo} />
                    <TouchableOpacity onPress={togglePasswordVisibilitytwo}>
                        <Ionicons style={styles.eyeIcon} name={showPasswordtwo ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={VerifyClick}
                    style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                    <TextBold style={[styles.btnPrimaryTextsize]}>Change password</TextBold>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    arrow: {
        marginLeft: 10,
        marginTop: 5
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
        backgroundColor: color.primary,
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardwidth: {
        width: '100%',
        marginTop: 50
    },
    fullwidth: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    eyeIcon: {
        marginLeft: -50,
    },
    inputContainer: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    eye: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    inputBox: {
        padding: 15,
        fontSize: 20,
        borderColor: color.neutral[500],
        borderWidth: 1,
        borderRadius: 8
    },
    Headingtextinput: {
        fontSize: 16,
    },
    flexrow: {
        flexDirection: 'row',
    },
    inputBoxes: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: color.accent,
        borderColor: color.accent,
        borderWidth: 1,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 8,
        fontSize: 18,
        marginBottom: 16
    },
    justiffsb: {
        justifyContent: 'space-between'
    },
    mb4: {
        marginBottom: 4,
        marginTop: 20
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
})