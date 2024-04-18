import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText';
import { color } from '../assets/colors/theme';
import Search from '../components/Search';
import { FontAwesome } from '@expo/vector-icons';

export default function GlobalSearch() {
    const navigation = useNavigation();

    return (
        <View>
            <ScrollView>
                <View style={[styles.container,]}>
                    <Search />
                    <View style={[styles.flexrow, styles.justiffsb]}>
                        <TouchableOpacity style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                            <View style={[styles.flexrow]}>
                                <TextBold style={[styles.btnPrimaryTextsize]}>Kids</TextBold>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Buttoncard2, styles.Buttoncardwidth,]}>
                            <View style={[styles.flexrow]}>
                                <TextBold style={[styles.btnPrimaryTextsize]}>Pets</TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TextBold style={[styles.Headingtext]}>Available Kids Around You </TextBold>
                    <TextBold style={[styles.Headingtext]}>Available Kids from your contacts</TextBold>

                    <View style={[styles.flexrow, styles.global, styles.justalinecenter, styles.mv10]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View style={{ alignItems: "center", width: "28%" }}>
                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                <View style={[styles.flexrow, { justifyContent: "center", alignItems: "center" }]}>
                                    <TextRegular>4.5</TextRegular>
                                    <FontAwesome style={[styles.mh5]} name="star" size={14} color={color.primary} />
                                </View>
                            </View>
                            <View style={[styles.jcfs, { width: "36%" }]}>
                                <View style={[styles.flexrow]}>
                                    <TextMedium style={[styles.childrenname]}>Shreyas,<TextMedium style={[styles.age]}>14yrs</TextMedium></TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>4130 Butternut Lane, IL 62002,New York </TextRegular>
                            </View>
                            <View style={[styles.jcfs, { width: "36%" }]}>
                                <View style={[styles.flexrow]}>
                                    <TextMedium style={[styles.childrenname]}>Shreyas,<TextMedium style={[styles.age]}>14yrs</TextMedium></TextMedium>
                                </View>
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    global: {
        borderWidth: 1,
        borderColor: color.accent,
        padding: 8,
        borderRadius: 8,
    },
    mh5: {
        marginHorizontal: 5,
    },
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
    age: {
        fontSize: 14,
    },
    childrenname: {
        fontSize: 18,
    },
    profilepic: {
        marginRight: 12,
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    textnetural: {
        color: color.neutral[500],
        marginVertical: 4,
        fontSize: 14,
    },

    subtext: {
        fontSize: 16,
    },
    Headingtext: {
        fontSize: 20,
        marginVertical: 5,
    },
    Buttoncard: {
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
    Buttoncard2: {
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
        fontSize: 16,
        // color: color.fontcolor
    },
    justiffsb: {
        justifyContent: 'space-between'
    },
    flexrow: {
        flexDirection: 'row',
    },
    container: {
        padding: 15,
        marginBottom: 40,
        justifyContent: 'center'
    },
})