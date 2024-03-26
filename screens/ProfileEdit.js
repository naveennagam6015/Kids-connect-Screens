import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, ScrollView, View, TextInput } from 'react-native';
import { TextBold, TextMedium } from '../assets/fonts/CustomText';
import { color } from '../assets/colors/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from 'react-native';

export default function ProfileEdit() {
    const navigation = useNavigation();
    const [relationship, setRelationship] = useState([
        { label: 'Mother', value: '1' },
        { label: 'Father', value: '2' },
    ]);
    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                    </View>
                </View>
                <TextBold>About</TextBold>
                <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Hey there! I'm Madisson Arora, a passionate Motion Designer currently based in the bustling city of New York. In addition to my career, I'm also a proud mother of... more" />
                <TextBold>First Name</TextBold>
                <TextInput style={styles.inputBox} placeholder="Enter your first name" />
                <TextBold>Last Name</TextBold>
                <TextInput style={styles.inputBox} placeholder="Enter your last name" />
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
                <TextBold>Address</TextBold>
                <TextInput style={styles.inputBox} placeholder="Enter your address" />
                <TextBold>Kids connect since</TextBold>
                <TextInput style={styles.inputBox} editable={false}
                    placeholder="21,March 2023" />

                <View style={[styles.modalcontainer]}>
                    <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                        <TouchableOpacity style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                            <TextMedium style={[styles.btnPrimaryTextsize]}>Discard</TextMedium>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                            <TextMedium style={[styles.btnPrimaryTextsize]}>Save</TextMedium>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
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
    btnPrimaryTextsize: {
        fontSize: 20,
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
    container: {
        padding: 15,
        justifyContent: 'center',
    },
    profilepic: {
        marginRight: 8,
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    flexrow: {
        flexDirection: 'row',
    },


})