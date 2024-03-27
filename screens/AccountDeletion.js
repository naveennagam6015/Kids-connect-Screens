import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, ScrollView, View, TextInput, Vibration } from 'react-native';
import { TextRegular, TextMedium, TextBold } from '../assets/fonts/CustomText';
import { color } from '../assets/colors/theme';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export default function AccountDeletion() {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [relationship, setRelationship] = useState([
        { label: 'Mother', value: '1' },
        { label: 'Father', value: '2' },
    ]);


    const validatePassword = (pwd, setPasswordErr) => {
        if (pwd.trim() === '') {
            setPasswordErr('Password is required');
            return false;
        } else {
            setPasswordErr('');
            return true;
        }
    }


    return (

        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={[styles.container, { marginTop: 30 }]}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <View style={[{ width: "40%" }, styles.profileName]}>
                        <Image style={styles.profilepic} source={require('../assets/images/women.png')} />
                    </View>
                    <View style={[{ width: "60%", alignItems: 'center', justifyContent: 'center' }, styles.profileName]}>
                        <TextRegular>We’re sad that your leaving the platform, can you give us a last chance..please! </TextRegular>
                    </View>
                </View>

                <TextRegular>we can rectify the issue, please choose or enter your issue, below</TextRegular>
                <TextBold style={{ color: color.accent }}>Please Specify:</TextBold>
                <TextInput style={[styles.textArea, { backgroundColor: color.neutral[200] }]} multiline={true} numberOfLines={5} placeholder="Specify Your Reason" />
                <TextBold style={{ color: color.accent }}>Warning:</TextBold>
                <TextRegular style={{ textAlign: 'left', marginBottom: 10 }}>By deleting your account, all your kids contacts and connections will be permanently removed, and cannot be undone.</TextRegular>

                <TextRegular style={{ textAlign: 'left', marginBottom: 10 }}>To delete your account, please enter your password, below</TextRegular>

                <View style={styles.inputContainer}>
                    <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Enter your password" onChangeText={(pwd) => { setPassword(pwd); validatePassword(pwd, setPasswordErr); }} secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons style={styles.eyeIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                    </TouchableOpacity>
                </View>

                <TextRegular style={{ color: color.neutral[500] }}>To confirm this, please type ‘DELETE’</TextRegular>

                <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                    <TextInput style={[styles.delete, styles.Buttoncardwidth]} />
                    <TouchableOpacity
                        onPress={() => {
                            Vibration.vibrate(50);
                        }}
                        style={[styles.Buttoncardinner2, styles.Buttoncardwidth]}>
                        <TextMedium style={styles.btnPrimaryTextsize}>Delete Account</TextMedium>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <View style={[{ width: "15%" }, styles.profileName]}>
                        <TextBold style={{ color: color.accent, fontSize: 16 }}>Note:</TextBold>
                    </View>
                    <View style={[{ width: "80%", alignItems: 'center', justifyContent: 'center' }, styles.profileName]}>
                        <TextRegular style={{ color: color.neutral[500] }}>You can login into your account within 30 days after deleting! we will be waiting for you. </TextRegular>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
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
    btnPrimaryTextsize: {
        fontSize: 20,
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
    delete: {
        padding: 10,
        fontSize: 20,
        height: 60,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 15,
        width: '100%',
        marginBottom: 16
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
    container: {
        padding: 15,
        justifyContent: 'center',
    },
    profilepic: {
        marginRight: 8,
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    flexrow: {
        flexDirection: 'row',

    },
    eyeIcon: {
        marginLeft: -50,
        marginTop: -10
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
})