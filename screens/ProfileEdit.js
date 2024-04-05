import { Image, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, View, TextInput } from 'react-native';
import { TextBold, TextMedium } from '../assets/fonts/CustomText';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useEffect, useState } from 'react'
import { color } from '../assets/colors/theme'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ProfileEdit() {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [notifications, setNotifications] = useState(false);
    const [darkmode, setDarkmode] = useState(false);
    // const [year, setYear] = useState(''); const [relationship, setRelationship] = useState([
    //     { label: 'Mother', value: '1' },
    //     { label: 'Father', value: '2' },
    // ]);


    useEffect(() => {
        async function GetUserData() {
            const userDetails = JSON.parse(await AsyncStorage.getItem('userDetails'));
            console.log(userDetails);
            const date_string = userDetails.created_at;
            const date_object = new Date(date_string);

            const month = date_object.toLocaleString('default', { month: 'long' });
            const year = date_object.getUTCFullYear();
            setMonth(month);
            setYear(year);
            setUserData(userDetails)
        }

        GetUserData();
    }, [])
    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                    </View>
                </View>
                <TextBold>About</TextBold>
                <TextInput multiline={true} numberOfLines={5} placeholder="About your self"
                    style={styles.textArea}
                    value={userData.About}
                    onChangeText={(text) => {
                        setUserData(prevUserData => ({
                            ...prevUserData,
                            About: text
                        }));
                    }}
                />
                {/* <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Hey there! I'm Madisson Arora, a passionate Motion Designer currently based in the bustling city of New York. In addition to my career, I'm also a proud mother of... more" /> */}
                <TextBold>First Name</TextBold>
                <TextInput placeholder="Enter your last name"
                    style={styles.inputBox}
                    value={userData.FirstName}
                    onChangeText={(text) => {
                        setUserData(prevUserData => ({
                            ...prevUserData,
                            FirstName: text
                        }));
                    }}
                />
                <TextBold>Last Name</TextBold>
                <TextInput placeholder="Enter your last name"
                    style={styles.inputBox}
                    value={userData.LastName}
                    onChangeText={(text) => {
                        setUserData(prevUserData => ({
                            ...prevUserData,
                            LastName: text
                        }));
                    }}
                />
                <TextBold>Relationship</TextBold>
                {/* <Dropdown
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

                /> */}
                <TextBold>Address</TextBold>
                {/* <TextInput style={styles.inputBox}  /> */}
                <TextInput placeholder="Enter your address"
                    style={styles.inputBox}
                    value={userData.Address}
                    onChangeText={(text) => {
                        setUserData(prevUserData => ({
                            ...prevUserData,
                            Address: text
                        }));
                    }}
                />
                <TextBold>Kids connect since</TextBold>
                <TextBold style={{ color: color.neutral[300], fontSize: 12 }}>(Since {month} {year})</TextBold>

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