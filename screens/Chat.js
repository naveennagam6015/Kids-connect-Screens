import React from 'react'
import { View, StyleSheet, Platform, ScrollView, Pressable } from 'react-native'
import Search from '../components/Search'
import { Image } from 'react-native';
import { color } from '../assets/colors/theme';
import { TextBold, TextLight, TextMedium, TextRegular } from '../assets/fonts/CustomText';

export default function Chat() {
    return (
        <ScrollView>

            <View style={[styles.container]}>
                <Search />
                <View style={[styles.flexrow, { justifyContent: "space-between" }]}>
                    <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                        <Pressable

                            style={[styles.flexrow]}>
                            <TextBold style={[styles.btnPrimaryTextsize]}>Circle Requests</TextBold>
                        </Pressable>
                    </View>
                    <View style={[styles.Buttoncard2, styles.Buttoncardwidth,]}>
                        <Pressable

                            style={[styles.flexrow]}>

                            <TextBold style={[styles.btnPrimaryTextsize]}>All Requests</TextBold>
                        </Pressable>
                    </View>
                </View>
                <View style={[styles.flexrow, { alignItems: "center", marginVertical: 10, justifyContent: "space-between" }]}>
                    <View style={[styles.flexrow, { alignItems: "center", justifyContent: "flex-start" }]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={{ justifyContent: "flex-start" }}>
                            <View style={[styles.flexrow, { alignItems: "center", justifyContent: "space-between" }]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <TextRegular style={{ color: color.success }}>14/03/24</TextRegular>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    flexrow: {
        flexDirection: 'row',
    },
    textnetural: {
        color: color.neutral[500],
        marginVertical: 4,
        fontSize: 16,
    },
    childrenname: {
        fontSize: 22,
    },
    profilepic: {
        marginRight: 8,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
});