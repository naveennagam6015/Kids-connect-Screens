import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, } from "react-native";
import { TextBold, TextRegular } from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";
import {
    Foundation,
    AntDesign,
    MaterialIcons,
    Fontisto,
    FontAwesome5,
} from "@expo/vector-icons";

export default function Connecting() {
    const navigation = useNavigation();
    return (
        <ScrollView style={[styles.padding]}>
            <View>
                <Text style={[styles.txt]}>Now You can Manage your kids from your profile section</Text>
            </View>

            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginRight: 140, marginVertical: 20 }}>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Image
                                style={[styles.profilepic1]}
                                source={require("../assets/images/bgwhite.png")}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                        </View>
                    </View>


                </View>
            </View>

            <View style={[styles.dirextion]}>
                <TouchableOpacity style={styles.btnPrimary}>
                    <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center', fontSize: 18, width: "60%" }}>Manage</Text>
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={[styles.Card]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Image
                                style={[styles.profilepic]}
                                source={require("../assets/images/2men3.jpg")}

                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={[styles.childrenname]}>
                                Krishna (M)
                                <TextRegular style={{ fontSize: 14, color: color.success }}>
                                </TextRegular>
                            </TextRegular>
                        </View>
                    </View>
                    <View style={[styles.arrow]}>
                        <FontAwesome5 name="arrows-alt-h" size={40} color="black" />
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Image
                                style={[styles.profilepic]}
                                source={require("../assets/images/2women.jpg")}

                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={[styles.childrenname]}>
                                Radha (F)
                                <TextRegular style={{ fontSize: 14, color: color.success }}>
                                </TextRegular>
                            </TextRegular>
                        </View>
                    </View>

                </View>

            </View>
            <TouchableOpacity style={{ alignSelf: "center", }} onPress={() => navigation.navigate("BottomNavigation")}>

                <TextRegular style={{ fontSize: 20 }}>Skip to home screen</TextRegular>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    arrow: {
        justifyContent: 'center'
    },
    dirextion: {
        // marginBottom: 
        alignSelf: 'flex-start'
    },

    btnPrimary: {
        padding: 10,
        // margin: 100,
        width: '50%',
        backgroundColor: color.primary,
        borderRadius: 8,
        marginVertical: 10,
        alignSelf: "flex-start",
        flexDirection: "row",

    },
    padding: {
        padding: 16,

    },

    txt: {
        fontWeight: "800",
        color: "#06092e",
        fontSize: 20,
        // padding: 16,
    },

    Card: {
        borderRadius: 10,
        marginVertical: 10,

        paddingHorizontal: 10,
        paddingVertical: 30,
        borderColor: color.accent,
    },

    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,

    },
    profilepic1: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,

    },

    childrenname: {
        fontSize: 18,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
})