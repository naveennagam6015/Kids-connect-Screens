import React, { useState, useEffect } from "react";
import { View, StyleSheet, Platform, Image, Modal, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddKid({ closed }) {
    const navigation = useNavigation();
    const [openpets, setOpenpets] = useState(false);
    const [cameramodal, setCameraModal] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [relationshipError, setRelationshipError] = useState("");
    const [descriptionError, setDescriptionError] = useState('');
    const onClose = () => {
        setOpenpets(false);
        setPetopen(false);
    };

    const [petgender, setGender] = useState([
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'other', value: '0' }
    ]);
    const [breed, setBreed] = useState([
        { label: 'Child', value: '1' },
        { label: 'Sibling', value: '2' },
        { label: 'Friend', value: '0' }
    ]);
    return (
        <View>
            <View style={[styles.containerbg]}>
                <TouchableOpacity
                    onPress={closed}
                    style={[styles.cancelButtonContainer, { alignItems: "flex-end", }]}>
                    <Icon name="cancel" size={30} color={color.neutral[300]} />
                </TouchableOpacity>
                <View>
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Image style={[styles.profilepic]} source={require("../assets/images/user_placeholder.png")} />
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: "2%",
                                right: "38%",
                                backgroundColor: "lightgray",
                                borderRadius: 50,
                                padding: 8,
                            }}
                            onPress={() => setCameraModal(!cameramodal)}
                        >
                            <Fontisto name="camera" size={15} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TextBold>Name</TextBold>
                    <TextInput style={styles.inputBox}
                        placeholder="Enter your first name"
                        onChangeText={(e) => {
                            setFirstName(e);
                            validateFirstName(e, setFirstNameError);
                        }}
                    />
                    {firstNameError !== "" && (
                        <TextBold style={{ marginBottom: 16, color: "red" }}>
                            {firstNameError}
                        </TextBold>
                    )}
                    <TextBold>Gender</TextBold>
                    <Dropdown
                        style={styles.dropdownStyle}
                        data={petgender}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Gender"
                        searchPlaceholder="Search..."
                        onChange={(item) => {
                            setSelectedGender(item.value);
                            validateGender(item.value, setGenderError);
                        }}
                    />
                    {genderError !== "" && (
                        <TextBold style={{ marginBottom: 16, color: "red" }}>
                            {genderError}
                        </TextBold>
                    )}

                    <TextBold>Breed</TextBold>
                    <Dropdown
                        style={styles.dropdownStyle}
                        data={breed}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Breed"
                        searchPlaceholder="Search..."
                        onChange={(item) => {
                            setBreed(item.value)
                        }}
                    />
                    <TextBold>Description</TextBold>
                    <TextInput style={styles.textArea}
                        multiline={true} numberOfLines={5}
                        placeholder="Enter your Description"
                        onChangeText={(e) => {
                            setDescription(e);
                            validateDescription(e);
                        }}
                    />
                    {descriptionError !== '' && (
                        <Text style={{ color: 'red' }}>{descriptionError}</Text>
                    )}
                </View>
                <View style={[styles.modalcontainer]}>
                    <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                        <View style={[styles.Buttoncardinner2, styles.Buttoncardfullwidth,]}>
                            <Pressable
                                onPress={closed}

                                style={[styles.flexrow]}>
                                <TextMedium style={[styles.btnPrimaryTextsize]}>Add to Profile</TextMedium>
                                <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({


    cancelButtonContainerpic: {
        position: "absolute",
        top: 1,
        right: 1,
    },
    cancelButtonContainer: {
        position: "absolute",
        top: 15,
        right: 15,
    },
    topDummy: {
        flex: 1,
        opacity: 0,
    },
    topCamera: {
        flex: 1,
        justifyContent: "flex-end",
        // alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    cameraModal: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        // padding:10
    },
    textArea: {
        marginVertical: 5,
        height: 100,
        textAlignVertical: "top",
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: "100%",
        marginBottom: 16,
    },
    dropdownStyle: {
        padding: 8,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: "100%",
        marginBottom: 12,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    uploadButton: {
        backgroundColor: color.primary,
        justifyContent: "center",
        padding: 10,
        height: 50,
        alignSelf: "center",
        width: 140,
        borderRadius: 8,
    },
    uploadButtonText: {
        justifyContent: "center",
        alignSelf: "center",
    },
    imageText: {
        // justifyContent: 'center',
        padding: 10,
        height: 70,
        alignSelf: "center",
        width: 150,
    },
    flexrow: {
        flexDirection: "row",
    },
    btnPrimaryTextsize: {
        fontSize: 20,
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: color.neutral[100],
        paddingVertical: 18,
    },
    Buttoncard2: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: "center",
        backgroundColor: color.primary,
        paddingVertical: 18,
        marginVertical: 16,
    },
    Buttoncardinner: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: color.accent,
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardinner2: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: "center",
        backgroundColor: color.primary,
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardfullwidth: {
        width: "100%",
    },
    Buttoncardwidth: {
        width: "48%",
    },
    modalcontainer: {
        paddingHorizontal: 20,
        // marginTop: "auto",
        // height: "50%",
        justifyContent: "center",
    },
    inputBox: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: "100%",
        marginBottom: 12,
    },
    Skip: {
        fontSize: 20,
        textDecorationLine: "underline",
    },
    childrenname: {
        fontSize: 18,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    imageplus: {
        padding: 30,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent,
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderColor: color.accent,
    },
    subtext: {
        fontSize: 20,
    },
    image: {
        justifyContent: "center",
        marginVertical: 20,
        alignItems: "center",
    },
    emailimage: {
        width: 300,
        height: 300,
    },
    container: {
        padding: 15,
        justifyContent: "center",
    },
    containerbg: {
        paddingHorizontal: 15,
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
    cameraBackground: {
        // backgroundColor: "lightgray",
        borderRadius: 50,
        padding: 15,
        marginBottom: 5,
    },
    cameracontainerbg: {
        padding: 25,
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
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary,
    },


    Buttoncardfullwidth: {
        width: '100%'
    },
    cancelButtonContainer: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    containerbg: {
        paddingHorizontal: 15,
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 30,
            },
        }),
    },
    topDummy: {
        flex: 1,
        opacity: 0
    },
    profilepicactive2: {
        marginRight: 8,
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Tags: {
        borderColor: color.accent,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 4,
    },
    Card: {
        borderRadius: 10,
        marginTop: 4,
        marginBottom: 10,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: color.neutral[300],
        backgroundColor: color.white,
    },
    textAreaInterests: {
        marginVertical: 5,
        justifyContent: "flex-start",
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    textArea: {
        marginVertical: 5,
        height: 70,
        textAlignVertical: 'top',
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    btnPrimaryTextsize: {
        fontSize: 20,
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: color.neutral[100],
        paddingVertical: 18,
    },
    Buttoncard2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 18,
        marginVertical: 16,
    },
    Buttoncardinner: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: color.accent,
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardinner2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 16,
        marginTop: 5,
        marginBottom: 16,
    },
    Buttoncardwidth: {
        width: '48%'
    },
    modalcontainer: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    dropdownStyle: {
        padding: 6,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: '100%',
        marginBottom: 12
    },
    inputBox: {
        padding: 8,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: '100%',
        marginBottom: 12
    },
    flexrow: {
        flexDirection: "row",
        justifyContent: "center"
    },
    btnText: {
        alignSelf: 'center',
        fontSize: 18
    },
    btnPrimary: {
        padding: 15,
        marginVertical: 12,
        backgroundColor: color.primary,
        borderRadius: 8
    },
    Skip: {
        fontSize: 20,
        textDecorationLine: "underline"
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addinterests: {
        padding: 5,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    addinterests: {
        padding: 5,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    imageplusaddInterests: {
        padding: 5,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    imageplusadd: {
        padding: 20,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    imageplus: {
        padding: 30,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Cardadd: {
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: color.accent,
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderColor: color.accent,
    },
    subtext: {
        fontSize: 20,
    },
    image: {
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
    },
    emailimage: {
        width: 300,
        height: 300,
    },
    container: {
        paddingHorizontal: 15,
        // justifyContent: 'center',
    },
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary
    },

})