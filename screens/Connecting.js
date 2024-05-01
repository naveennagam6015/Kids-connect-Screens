import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default function Connecting() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("BottomNavigation")} >
            <Text>next</Text>
        </TouchableOpacity>
    )
}
