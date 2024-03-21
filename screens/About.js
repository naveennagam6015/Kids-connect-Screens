import { Image, ScrollView, StyleSheet, View } from "react-native"
import { TextBold } from "../assets/fonts/CustomText"

export default function About() {
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <View style={{ alignItems: 'center', justifyContent: "center", marginVertical: 10 }}>
                    <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                    <TextBold style={[styles.childrenname]}>This is group name</TextBold>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

})