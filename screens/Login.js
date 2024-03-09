import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { color, tokens } from "../assets/colors/theme";
import { TextBold, TextMedium, TextRegular } from "../assets/fonts/CustomText";



export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/LoginBackground.png')} style={styles.backgroundImage} resizeMode="cover">
                <TextBold style={styles.heading}>Kids Connect</TextBold>
                <TextBold style={styles.subheading}>Welcome back</TextBold>
                <View>
                    <TextInput style={styles.inputBox} placeholder="Enter your mail" />
                    <TextInput style={styles.inputBox} placeholder="Enter your password" />
                    <TextRegular style={styles.forgotPwd}>Forgot Password?</TextRegular>
                </View>
                <View>
                    <Pressable style={styles.btnPrimary}>
                        <TextMedium style={styles.btnText}>Login</TextMedium>
                    </Pressable>
                    <View style={styles.mainView}>
                        <View style={styles.horizontalLine}></View>
                        <TextRegular style={styles.textR}>or Login with</TextRegular>
                        <View style={styles.horizontalLine}></View>
                    </View>
                    <Pressable style={styles.googleImage}>
                        <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../assets/images/GoogleIcon.png')} />
                        <TextMedium style={{ justifyContent: 'center', alignSelf: 'center', marginStart: 10 }}>Continue with google</TextMedium>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 25,
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
    }
})