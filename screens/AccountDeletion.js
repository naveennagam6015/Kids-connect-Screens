import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, ScrollView, View, TextInput } from 'react-native';
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText';
import { color } from '../assets/colors/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from 'react-native';

export default function AccountDeletion() {
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
                <Dropdown
                    style={styles.dropdownStyle}
                    data={relationship}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Please choose from  "
                    searchPlaceholder="Search..."
                    onChange={(item) => {
                        setRelationship(item.value)
                    }}
                />
                <TextInput style={[styles.textArea, { backgroundColor: color.neutral[200] }]} multiline={true} numberOfLines={5} placeholder="Others, please specify" />
                <TextRegular>To confirm this, please type ‘DELETE’</TextRegular>
                <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                    <TextInput style={[styles.delete, styles.Buttoncardwidth]} />
                    <TouchableOpacity style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                        <TextMedium style={[styles.btnPrimaryTextsize]}>Delete Account</TextMedium>
                    </TouchableOpacity>
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
    delete: {
        // padding: 5,
        height: 60,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 15,
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