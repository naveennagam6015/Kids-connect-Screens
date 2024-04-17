import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, } from 'react-native'
import axios from "axios";
import { BASEURL } from "@env";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextBold, TextRegular } from '../assets/fonts/CustomText';
export default function ContactUs() {
    const navigation = useNavigation();
    const [authData, setAuthData] = useState({});
    const [pagecontent, setPagecontent] = useState('');
    const [pagetitle, setPagetitle] = useState('');


    useEffect(() => {




        const AboutUsData = async () => {
            const authData = JSON.parse(await AsyncStorage.getItem('authData'))

            axios({
                method: 'get',
                url: `${BASEURL}api/allPages/5`,
                // headers: {
                //     Authorization: `Bearer ${authData.token}`
                // }
            }).then(res => {
                console.log(res, "Naveen")
                setPagecontent(res.data.data.Pagecontent);
                setPagetitle(res.data.data.Pagetitle);
            }).catch(err => {
                console.log(err)
            });
        }

        AboutUsData();


    }, []);
    const formattedContent = pagecontent.replace(/<\/?p>/g, '');
    console.log(formattedContent)
    return (
        <ScrollView>
            <View style={[styles.container]}>
                {/* <TextBold>{pagetitle}</TextBold> */}
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <TextRegular style={{ textAlign: 'justify', fontSize: 16 }}>{formattedContent}</TextRegular>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: "center",
    },
})
