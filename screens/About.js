import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { TextBold, TextMedium, TextRegular } from "../assets/fonts/CustomText"
import { color } from "../assets/colors/theme"
import { FontAwesome, MaterialIcons, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';


export default function About() {
    return (
        <ScrollView>
            <View style={[styles.container, { marginTop: 50 }]}>
                <View style={[styles.flexrow,]} >
                    <View style={{ marginVertical: 10, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        <TextRegular style={[styles.childrenname]}>Abay (F) </TextRegular>
                        <TextRegular style={[styles.mobilrnumber, { color: color.neutral[500] }]}>+91 8328424553 </TextRegular>
                    </View>

                    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                        <View>
                            <View style={[styles.flexrow, { marginTop: 5, alignItems: "center", maxWidth: '70%' }]}>
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
                        <View style={[styles.flexrow, { justifyContent: 'center', alignItems: 'center', }]}>

                            <TouchableOpacity style={[styles.bgclr, { padding: 5, marginHorizontal: 10 }]}>
                                <View>
                                    <Ionicons name="call" size={20} color="black" />
                                </View>
                                <View>
                                    <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.bgclr, { padding: 5, marginHorizontal: 10 }]}>
                                <View>
                                    <MaterialIcons name="message" size={20} color="black" />
                                </View>
                                <View>
                                    <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <TextBold style={{ fontSize: 20, }}>Kids</TextBold>
                <View style={[styles.flexrow, { marginTop: 5 }]}>
                    <View style={{ marginRight: 10, justifyContent: "center", alignItems: "center" }}>
                        <View>
                            <Image style={[styles.profilepicactive]} source={require('../assets/images/women.png')} />
                        </View>
                        <View>
                            <TextRegular style={[styles.childrenname]}>Shrey</TextRegular>
                        </View>
                    </View>
                    <View style={{ marginRight: 10, justifyContent: "center", alignItems: "center" }}>
                        <View>
                            <Image style={[styles.profilepicactive]} source={require('../assets/images/women.png')} />
                        </View>
                        <View>
                            <TextRegular style={[styles.childrenname]}>Jisoo</TextRegular>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.bgfull, { marginVertical: 5 }]}>
                <View style={[styles.container]}>
                    <TextRegular style={{ fontSize: 16 }}>Kids Available only on Weekends</TextRegular>
                </View>
            </View>
            <View style={[styles.bgfull2, { marginVertical: 5 }]}>
                <View style={[styles.container]}>
                    <TextRegular style={{ fontSize: 14 }}>Common groups with Abay</TextRegular>

                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow]}>
                                    <TextMedium style={[styles.childrenname]}>Neighbourhood Group</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                            </View>
                        </View>
                    </View>

                    {/* dummy start */}
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow]}>
                                    <TextMedium style={[styles.childrenname]}>Samantha Group</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow]}>
                                    <TextMedium style={[styles.childrenname]}>School Group</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                            </View>
                        </View>
                    </View>
                    {/* dummy end */}

                </View>
            </View>
            <View style={[styles.bgfull2, { marginVertical: 5 }]}>
                <View style={[styles.container]}>
                    <View style={[styles.flexrow, { marginVertical: 5 }]}>
                        <Entypo name="block" style={{ marginRight: 10, }} size={20} color={color.secondaryOrange} />
                        <TextRegular style={{ fontSize: 18, color: color.secondaryOrange }}>Block Abay</TextRegular>
                    </View>
                    <View style={[styles.flexrow, { marginVertical: 5 }]}>
                        <AntDesign style={{ marginRight: 10 }} name="dislike1" size={20} color={color.secondaryOrange} />
                        <TextRegular style={{ fontSize: 18, color: color.secondaryOrange }}>Report Abay</TextRegular>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mv10: {
        marginVertical: 10,
    },
    justalinecenter: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    jcfs: {
        justifyContent: "flex-start"
    },
    bgfull2: {
        backgroundColor: color.neutral[200],
        paddingVertical: 10
    },
    bgfull: {
        backgroundColor: color.primary,
        paddingVertical: 20
    },
    profilepicactive: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    bgclr: {
        backgroundColor: color.primary,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8
    },
    textnetural: {
        color: color.neutral[500],
    },
    flexrow: {
        flexDirection: "row"
    },
    mobilrnumber: {
        fontSize: 14,
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
    profilepicchat: {
        marginRight: 12,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    container: {
        paddingHorizontal: 15,
    },
})