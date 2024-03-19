import React, { useState } from 'react'
import { View, StyleSheet, Image, Modal, TextInput, Pressable } from 'react-native'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { Foundation, AntDesign, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
export default function AddingKidsAndPets() {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [relationship, setRelationship] = useState([
        { label: 'Child', value: '1' },
        { label: 'Sibling', value: '2' },
        { label: 'Friend', value: '0' }
    ]);
    const onClose = () => {
        setOpen(false);
        setModalopen(false);
    };
    return (
        <View style={[styles.container, { marginTop: 20 }]}>
            <TextRegular >Good Evening! <TextBold>Madisson</TextBold></TextRegular>
            <TextBold style={[styles.Headingtext]}>Let’s Complete your Profile </TextBold>
            <TextRegular style={{ fontSize: 18 }}>To get started, create an account with Kids Connect below, </TextRegular>
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={[styles.childrenname]}>Lucy <TextRegular style={{ fontSize: 14, color: color.success }}>(Primary)</TextRegular></TextRegular>
                            <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={[styles.childrenname]}>Lucy <TextRegular style={{ fontSize: 14, color: color.success }}>(2nd)</TextRegular></TextRegular>
                            <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.Cardadd]}>
                <View style={{ alignItems: 'center', flexDirection: "row" }}>
                    <Pressable onPress={() => setOpen(!open)} style={[styles.imageplusadd]}>
                        <AntDesign name="plus" size={30} color={color.neutral[500]} />
                    </Pressable>
                    <TextBold>Add your Kids Profile</TextBold>
                    <Ionicons style={{ marginLeft: 5 }} name="hand-right" size={24} color={color.accent} />
                </View>
            </View>
            <View style={[styles.Cardadd]}>
                <View style={{ alignItems: 'center', flexDirection: "row" }}>
                    <Pressable style={[styles.imageplusadd]}>
                        <AntDesign name="plus" size={30} color={color.neutral[500]} />
                    </Pressable>
                    <TextBold>Add your Pets Profile</TextBold>
                    <FontAwesome style={{ marginLeft: 10 }} name="paw" size={24} color={color.accent} />
                </View>
            </View>
            <Pressable style={[styles.btnPrimary, styles.flexrow]}
                onPress={() => navigation.navigate('BottomNavigation')}
            >
                <TextMedium style={styles.btnText}>Proceed to Home Screen</TextMedium>
                <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
            </Pressable>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
                <TextRegular style={[styles.Skip,]}>Skip for now</TextRegular>
                <MaterialIcons name="keyboard-double-arrow-right" size={24} color={color.fontcolor} />
            </View>
            <Modal
                animationType='slide'
                // transparent={true}
                visible={open}>
                <View style={[styles.container]}>
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                    </View>
                    <TextBold>First Name</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your first name" onChangeText={(e) => setFirstName(e)} />
                    <TextBold>Last Name</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your last name" onChangeText={e => setLastName(e)} />
                    <TextBold>Relationship</TextBold>
                    <Dropdown
                        style={styles.dropdownStyle}
                        data={relationship}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Relationship"
                        searchPlaceholder="Search..."
                        onChange={(item) => {
                            setRelationship(item.value)
                        }}

                    />
                    <TextBold style={[styles.Headingtextinput]}>Description</TextBold>
                    <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Enter your Description" onChangeText={e => setAddress(e)} />
                </View>
                <View style={[styles.modalcontainer]}>
                    <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                        <View style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                            <Pressable
                                onPress={() => setModalopen(modalopen)}
                                style={[styles.flexrow]}>
                                <TextMedium style={[styles.btnPrimaryTextsize]}>Back</TextMedium>
                            </Pressable>
                        </View>
                        <View style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                            <Pressable
                                onPress={() => setModalopen(!modalopen)}
                                style={[styles.flexrow]}>
                                <TextMedium style={[styles.btnPrimaryTextsize]}>Next</TextMedium>
                                <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
const styles = StyleSheet.create({
    textArea: {
        marginVertical: 5,
        height: 100,
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
        marginVertical: 16,
    },
    Buttoncardwidth: {
        width: '48%'
    },
    modalcontainer: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    dropdownStyle: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
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
        marginVertical: 10,
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
        justifyContent: 'center',
    },
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary
    },

})