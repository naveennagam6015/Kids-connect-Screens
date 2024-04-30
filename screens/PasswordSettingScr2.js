import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { AntDesign,Ionicons } from '@expo/vector-icons';
import { color } from "../assets/colors/theme";
import { TextRegular } from "../assets/fonts/CustomText";
export default function PasswordSettingScr2(){
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [passwordErr, setPasswordErr] = useState('');
    const [password, setPassword] = useState('');
    const validatePassword = (pwd, setPasswordErr) => {
        if (pwd.trim() === '') {
            setPasswordErr('Password is required');
            return false;
        } else {
            setPasswordErr('');
            return true;
        }
    }
    return(
        <ScrollView style={[styles.container]}>
            <View style={[styles.header]}>
            <AntDesign name="arrowleft" size={22} color="black" />
                <Text style={[styles.headertxt]}>Step 2 of 3</Text>
            </View>

           
            <View >
                <Text style={[styles.font]}>Enter your email Id</Text>
                <TextInput style={[styles.inputBox]}placeholder="Madission@gmail.com" />
            </View>
            
            <View >
                <Text style={[styles.font1]}>Enter your Password</Text>
                <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Enter your password" onChangeText={(pwd) => { setPassword(pwd); validatePassword(pwd, setPasswordErr); }} secureTextEntry={!showPassword} />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons style={styles.eyeIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                        </TouchableOpacity>             
            </View>

            <View  >
                <Text style={[styles.font]}>Confirm your Password</Text>
                <TextInput style={[styles.inputBox, styles.fullwidth]} placeholder="Enter your password" onChangeText={(pwd) => { setPassword(pwd); validatePassword(pwd, setPasswordErr); }} secureTextEntry={!showPassword} />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons style={styles.eyeIcon} name={showPassword ? 'eye-off' : 'eye'} size={24} color={color.neutral[500]} />
                        </TouchableOpacity>  
                        
            </View>
         
           

            <View style={[styles.comment]}>
                <TextRegular style={[styles.cmtfont,{fontWeight:"bold"}]}>Strong Password Tip: </TextRegular>
                <TextRegular style={[styles.cmtfont]}>Use combination of alphabets and numbers.</TextRegular>
            </View>

            <TouchableOpacity  style={styles.btnPrimary}>
                            <Text style={{ color:color.fontcolor, fontWeight:"bold", textAlign: 'center' }}>Go to Sign up</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            padding: 16,
        },
        header:{
          flexDirection: "row",  
          
          marginVertical: 30,
        },
        headertxt:{
            fontWeight: "bold",
        },
        inputBox:{
            padding: 15,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: color.neutral[500]
        },
        font:{
            fontWeight: "600",
           
        },

        font1:{
            fontWeight: "600",
            marginTop: 20,
        },

        eyeIcon:{
            marginLeft: -50,

        },

        btnPrimary:{
            padding: 15,
            margin: 1,
            backgroundColor: color.primary,
            borderRadius: 8,
            marginVertical: 50,
        },

        comment:{
         flexDirection:"row",
         
        },
        
        cmtfont:{
         color: color.neutral[300],
         fontSize: 12,

        },

        // form:{
        //     marginVertical: 7,
        // },

        fullwidth: {
            width: "94%"
        },
      
    }
)