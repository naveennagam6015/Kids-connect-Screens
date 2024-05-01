import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Platform, StyleSheet, TouchableOpacity, Text, View, TextInput, Switch } from "react-native";
import { TextBold, TextRegular } from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";
import {
    Feather, FontAwesome6, FontAwesome5
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";


export default function KidsProfileScr2({ close, name }) {
    const navigation = useNavigation();
    const [darkmode, setDarkmode] = useState(false);

    return (
        <ScrollView>
            <View style={[styles.container, styles.containermain]}>
                <TouchableOpacity
                    onPress={close}
                    style={[styles.cancelButtonContainer, { alignItems: "flex-end" }]}
                >
                    <Icon name="cancel" size={30} color={color.neutral[300]} />
                </TouchableOpacity>
                <View style={[styles.padding]}>
                    <View style={{ flexDirection: "row" }} >
                        <View style={[{ width: "30%" }, styles.profileName]}>
                            <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                        </View>
                        <View style={[{ width: "70%", }, styles.profileName]}>
                            <TextBold style={{ fontSize: 12 }}>Anita, 14 loves outdoor adventures, sports, art, and tech exploration. Each activity fuels his curiosity and passion for discovering the world's wonders.
                            </TextBold>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ marginTop: 10 }}>30+ Connections </Text>
                                <Feather name="arrow-up-right" size={20} color="black" />
                            </View>
                        </View>


                    </View>

                    <View style={[styles.edit]}>
                        <Text style={{ fontWeight: "600" }}>Edit Profile</Text>
                        <View style={[styles.designedit]}>
                            <TouchableOpacity>
                                <FontAwesome5 name="edit" size={16} color="#FFC107" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.margin]}>
                        <TextInput style={styles.inputBox} placeholder="Sathwik" />
                    </View>

                    <View style={[styles.margin]}>
                        <TextInput style={styles.inputBox} placeholder="sathwik@gmail.com" />
                    </View>

                    <View style={[styles.margin]}>
                        <TextInput style={styles.inputBox} placeholder="Punjagutta metro station" />
                    </View>

                    <View style={[styles.margin]}>
                        <TextInput style={styles.inputBox} placeholder="Jubliee Hills" />
                    </View>

                    <View style={[styles.margin]}>
                        <TextInput style={styles.inputBox} placeholder="500018" />
                    </View>

                    <View style={[styles.margin]}>
                        <TextInput style={styles.inputBox} placeholder="Hyderabad, TG" />
                    </View>


                    <TouchableOpacity style={styles.btnPrimary}>
                        <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center', fontSize: 18 }}>Booking History</Text>
                    </TouchableOpacity>

                    <View style={[styles.btnSecondary, { justifyContent: "space-between", alignItems: "center" }]}>
                        <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center', fontSize: 18 }}>Permissions</Text>
                        <Switch
                            trackColor={{ false: color.secondaryOrange, true: color.success }}
                            thumbColor={darkmode ? color.white : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setDarkmode(previousState => !previousState)}
                            value={darkmode}
                        />
                    </View>

                    <View style={[styles.edithobbies]}>
                        <TextBold style={{ fontSize: 18 }}>Hobbies</TextBold>
                        <View style={[styles.designedit]}>
                            <TouchableOpacity>
                                <FontAwesome5 name="edit" size={13} color="#FFC107" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.flexrow, { flexWrap: "wrap" }]}>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Playstation </TextRegular>
                        </View>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Swimming</TextRegular>
                        </View>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Vlogging</TextRegular>
                        </View>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Soccer</TextRegular>
                        </View>
                    </View>

                    <View style={[styles.border]}>
                        <TextBold style={{ marginBottom: 10, }}>
                            Open to Connections
                        </TextBold>
                        <View style={[styles.flexrow, { flexWrap: "wrap" }]}>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Tank Bund </TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Movie</TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>16th April, 2024</TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Shopping</TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Between 10am-5:30pm</TextRegular>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({


    margin: {
        marginVertical: 10,
    },

    inputBox: {
        padding: 15,
        borderColor: color.neutral[300],
        borderWidth: 1,
        margin: 4,
        borderRadius: 8
    },

    border: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.primary,
        backgroundColor: color.white,
        padding: 16,
        marginVertical: 20,
    },

    Tags1: {
        backgroundColor: color.primary,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4,
    },

    flexrow: {
        flexDirection: "row",
    },

    Tags2: {
        backgroundColor: color.white,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4,
    },

    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    edit: {
        marginTop: 30,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-between",
    },
    edithobbies: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    designedit: {
        padding: 5,
        marginLeft: 5,
        borderRadius: 50,
        marginLeft: "1%",
        alignItems: "center",
        backgroundColor: color.white,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 3,
    },


    btnPrimary: {
        padding: 15,
        margin: 2,
        backgroundColor: color.primary,
        borderRadius: 8,
        marginVertical: 10,

    },

    btnSecondary: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        margin: 1,
        backgroundColor: color.primary,
        borderRadius: 8,
        marginVertical: 10,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    containermain: {
        padding: 25,
        marginTop: 20,
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 30,
            },
        }),
    },
    container: {
        paddingHorizontal: 15,
        backgroundColor: color.white,
    },

})