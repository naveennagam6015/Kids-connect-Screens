import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'

export default function ProfileSetupAfterAdminApproval() {
    return (
        <View style={styles.container}>
            <TextRegular >Good Evening! Madisson</TextRegular>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },

})