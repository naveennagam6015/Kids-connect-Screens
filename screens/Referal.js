import React, { useEffect, useRef, useState } from 'react'
import { Alert, Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme';
import { MaterialIcons, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import axios from "axios";
import { BASEURL } from '@env';
import { useNavigation } from '@react-navigation/native';


export default function Referal() {
    const navigation = useNavigation();

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [mail, setMail] = useState('');
    const [otp, setOtp] = useState('');
    const [enteredOtp, setEnteredOtp] = useState('');
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
    return (

        <View style={[styles.containertop]}>

            {/* <ImageBackground source={require('../assets/images/LoginBackground.png')} style={styles.backgroundImage} resizeMode="cover"> */}
            <TextBold style={styles.heading}>Kid Connect</TextBold>
            <TextBold style={styles.subheading}>Welcome!</TextBold>
            <View>
                <View style={[styles.container]}>
                    <View style={[styles.mb8]}>
                        <TextInput style={styles.inputBox} placeholderTextColor={styles.textinputcolor} placeholder="Enter your mail" />
                    </View>
                    <TextRegular style={[styles.end]}>Change email</TextRegular>
                    <View style={[styles.flexrow, styles.justiffsb, styles.mb4]}>
                        <TextBold style={[styles.Headingtextinput]}>Enter Your Code</TextBold>
                    </View>
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
                    <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                        <Pressable
                            onPress={() => navigation.navigate('ProfileSetupAfterAdminApproval')}
                            style={[styles.flexrow]}>
                            <TextBold style={[styles.btnPrimaryTextsize]}>Register Now</TextBold>
                            <MaterialIcons style={[styles.arrow]} name="arrow-forward-ios" size={16} color={color.fontcolor} />
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    alinecenter: {
        alignItems: 'center'
    },
    end: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    time: {
        color: color.accent
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
    mb20: {
        // marginBottom: 20
    },
    mb4: {
        marginBottom: 4
    },
    mb8: {
        marginBottom: 8
    },
    mr10: {
        marginRight: 10,
    },
    arrowback: {
        color: color.primary,
        marginLeft: 15
    },
    back: {
        fontSize: 18,
        // color: color.fontcolor
    },
    editemail: {
        color: color.accent,
        marginLeft: -40,
        marginBottom: 10
    },
    textinputcolor: {
        // color: color.fontcolor
    },
    image: {
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
    },
    emailimage: {
        width: 250,
        height: 250,
    },
    arrow: {
        marginLeft: 10,
        marginTop: 5
    },
    flexrow: {
        flexDirection: 'row',
    },
    btnPrimaryTextsize: {
        fontSize: 18,
        // color: color.fontcolor
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
        width: '100%'
    },
    bottomline: {
        borderBottomColor: color.accent,
        borderBottomWidth: 3,
        // paddingBottom: 10,
        width: '50%'
    },
    bottomline2: {
        borderBottomColor: color.accent,
        borderBottomWidth: 3,
        // width: '95%'
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
    // inputBox: {
    //     padding: 10,
    //     borderColor: color.neutral[500],
    //     borderWidth: 1,
    //     borderRadius: 8,
    //     marginTop: 8,
    //     marginBottom: 16
    // },
    Headingtextinput: {
        fontSize: 16,
        color: color.neutral[500]
        // color: color.fontcolor

    },
    subtext: {
        fontSize: 16,
        // color: color.fontcolor
    },
    subtext2: {
        fontSize: 12,
        // color: color.fontcolor
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
    containertop: {
        justifyContent: 'center',
        flex: 1
    },
    heading: {
        fontSize: 50,
        alignSelf: 'center',
        color: color.neutral[500]
    },
    subheading: {
        fontSize: 25,
        alignSelf: 'center',
        color: color.neutral[500]
    },
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary
    },
    errorText: {
        color: 'red'
    }
})