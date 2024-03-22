import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { color } from '../assets/colors/theme';
export default function Search({ onSearchChange }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.searchContainer}>

            <TextInput
                style={styles.input}
                placeholder="Search eg: Playing, Outdoor"
            // value={searchQuery}
            // onChangeText={(text) => {
            //     setSearchQuery(text);
            //     onSearchChange(text);
            // }}
            />

            <TouchableOpacity style={styles.searchButton} >
                <Icon style={[styles.searchicon]} name="search" size={20} />
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    searchicon: {
        color: color.fontcolor
    },
    searchButton: {
        padding: 8,
        marginLeft: 8,
    },
    cancelButton: {
        padding: 8,
        marginLeft: 8,
    },
    searchContainer: {
        backgroundColor: color.neutral[100],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3,
        borderWidth: 1.5,
        borderColor: color.neutral[300],
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        color: '#000',
        paddingVertical: 8,
        fontSize: 16,
        width: '100%'
    },
})