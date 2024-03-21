import { Image, ScrollView, StyleSheet, View } from "react-native"
import { TextRegular } from "../assets/fonts/CustomText"
import { color } from "../assets/colors/theme"
import { FontAwesome, } from '@expo/vector-icons';


export default function About() {
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <View style={[styles.flexrow,]} >
                    <View style={{ marginVertical: 10, }}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        <TextRegular style={[styles.childrenname]}>Abay (Father) </TextRegular>
                        <TextRegular style={[styles.childrenname, { color: color.neutral[500] }]}>+91 8328424553 </TextRegular>
                    </View>
                    <View>

                    </View>
                    <View>
                        <View style={[styles.flexrow, { marginTop: 5, alignItems: "center" }]}>
                            <FontAwesome style={{ marginRight: 10, marginLeft: 3 }} name="map-pin" size={16} color={color.neutral[500]} />
                            <TextRegular style={[styles.textnetural, { fontSize: 16, }]}>Architect, TCS</TextRegular>
                        </View>
                        <View style={[styles.flexrow, { marginTop: 5, alignItems: "center" }]}>
                            <FontAwesome style={{ marginRight: 10, marginLeft: 3 }} name="map-pin" size={16} color={color.neutral[500]} />
                            <TextRegular style={[styles.textnetural, { fontSize: 16, }]}>591 Joanne Lane, Wilmington, MA 01887</TextRegular>
                        </View>
                        <View style={[styles.flexrow, { marginTop: 5, alignItems: "center" }]}>
                            <FontAwesome style={{ marginRight: 8 }} name="envelope" size={16} color={color.neutral[500]} />
                            <TextRegular style={[styles.textnetural, { fontSize: 16, }]}>autumnphilips@gmail.com</TextRegular>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textnetural: {
        color: color.neutral[500],
    },
    flexrow: {
        flexDirection: "row"
    },
    childrenname: {
        fontSize: 18,
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    container: {
        marginTop: 50,
        paddingHorizontal: 15,
    },
})