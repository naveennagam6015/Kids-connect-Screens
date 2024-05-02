import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { color } from "../assets/colors/theme";
import { TextRegular } from "../assets/fonts/CustomText";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../assets/styles/style";
export default function PasswordSettingScr2({ navigation, route }) {
    // const navigation = useNavigation();

    const { data } = route.params;

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [passwordErr, setPasswordErr] = useState('');
    const [password, setPassword] = useState('');

    const validatePassword = (pwd) => {
        if (pwd.trim() === '') {
            setPasswordErr('Password is required');
            return false;
        } else {
            setPasswordErr('');
            return true;
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.font}>Enter your email Id</Text>
                <View style={styles.inputContainer}>
                <TextInput style={[styles.inputBox,styles.fullwidth]} placeholder="Enter Your Mail" />
                </View>
            </View>

            <View>
                <Text style={styles.font}>Enter your Password</Text>
                <View style={styles.inputContainer}>
                        <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Enter your password" onChangeText={(pwd) => { setPassword(pwd); validatePassword(pwd, setPasswordErr); }} secureTextEntry={!showPassword} />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons style={styles.eyeIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                        </TouchableOpacity>
                    </View>
        </View>

        <View>
            <Text style={styles.font}>Confirm your Password</Text>
            <View style={styles.inputContainer}>
                        <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Enter your password" onChangeText={(pwd) => { setPassword(pwd); validatePassword(pwd, setPasswordErr); }} secureTextEntry={!showPassword} />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons style={styles.eyeIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                        </TouchableOpacity>
                    </View>
        </View>

            <View style={[styles.comment]}>
                <TextRegular style={[styles.fontWeight,styles.cmtfont,styles.font]}>Strong Password Tip: </TextRegular>
                <TextRegular style={[styles.cmtfont]}>Use combination of alphabets and numbers.</TextRegular>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login', { data: data })}
                style={styles.btnPrimary}>
                <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center', fontSize: 18 }}>Go to Sign up</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

// const styles = StyleSheet.create(
//     {
//         container: {
//             padding: 16,
//         },
//         header: {
//             flexDirection: "row",

//             marginVertical: 30,
//         },
//         headertxt: {
//             fontWeight: "bold",
//         },
//         inputBox: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             padding: 7,
//             borderWidth: 1,
//             borderRadius: 8,
//             borderColor: color.neutral[500],
//             marginTop:5,
//         },
//         font: {
//             fontWeight: "600",

//         },
        

//         font1: {
//             fontWeight: "600",
//             marginTop: 20,
//         },
//         input: {
//             flex: 1,
//             padding: 5,
//         },
//         eyeIcon: {
//             marginLeft: -30,
//         },

//         btnPrimary: {
//             padding: 15,
//             margin: 1,
//             backgroundColor: color.primary,
//             borderRadius: 8,
//             marginVertical: 50,
//         },

//         comment: {
//             flexDirection: "row",

//         },

//         cmtfont: {
//             color: color.neutral[300],
//             fontSize: 12,

//         },


//         fullwidth: {
//             width: "94%"
//         },

//     }
// )