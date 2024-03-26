import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { TextBold } from '../assets/fonts/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from '../assets/colors/theme';

export default function MyAccount() {
    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: color.white }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountDeletion')} style={[styles.flexrow, styles.container, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                            <MaterialIcons name="delete" size={24} color="black" />
                            <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Account Deletion</TextBold>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                    </TouchableOpacity>
                    <View style={{ borderBlockColor: color.neutral[200], borderWidth: 1 }}></View>
                    <View style={[styles.flexrow, styles.container, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                            <MaterialIcons name="delete" size={24} color="black" />
                            <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Account Retrieval</TextBold>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={16} color={color.fontcolor} />
                    </View>
                    <View style={{ borderBlockColor: color.neutral[200], borderWidth: 1 }}></View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    flexrow: {
        flexDirection: 'row',
    },
    container: {
        padding: 15,
        justifyContent: 'center',
    },
})
