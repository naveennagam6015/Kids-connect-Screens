import React, { useState } from 'react'
import { View, StyleSheet, Image, Modal, TextInput, Pressable } from 'react-native'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { Foundation, AntDesign, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
export default function AddingKidsAndPets() {
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
                    <View style={[styles.imageplusadd]}>
                        <AntDesign name="plus" size={30} color={color.neutral[500]} />
                    </View>
                    <TextBold>Add your Kids Profile</TextBold>
                    <Ionicons style={{ marginLeft: 5 }} name="hand-right" size={24} color={color.accent} />
                </View>
            </View>
            <View style={[styles.Cardadd]}>
                <View style={{ alignItems: 'center', flexDirection: "row" }}>
                    <Pressable onPress={() => setOpen(!open)} style={[styles.imageplusadd]}>
                        <AntDesign name="plus" size={30} color={color.neutral[500]} />
                    </Pressable>
                    <TextBold>Add your Pets Profile</TextBold>
                    <FontAwesome style={{ marginLeft: 10 }} name="paw" size={24} color={color.accent} />
                </View>
            </View>
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
                    <TextBold>Phone Number</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your phone number" onChangeText={e => setPhone(e)} />
                    <TextBold>Email Address</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter your mail" onChangeText={(e) => setEmail(e)} />
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