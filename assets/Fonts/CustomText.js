
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.text, style]} {...rest}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "LexendRegular",
    },
});

export default CustomText;
