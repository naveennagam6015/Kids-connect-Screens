import { StyleSheet, Text, TextInput, View } from "react-native";
import { color, tokens } from "../assets/colors/theme";
import { TextBold } from "../assets/fonts/CustomText";



export default function Login() {
    return (
        <View style={styles.container}>
            <TextBold style={styles.heading}>Kids Connect</TextBold>
            <TextBold style={styles.subheading}>Welcome back</TextBold>
            <View>
                <TextInput style={styles.inputBox} placeholder="Enter your mail" />
                <TextInput style={styles.inputBox} placeholder="Enter your password" />
                <Pressable style={styles.btnPrimary}>
                    <TextMedium>Login</TextMedium>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 60,
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
    }
})