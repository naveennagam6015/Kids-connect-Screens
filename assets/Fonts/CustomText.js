
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextRegular = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.textRegular, style]} {...rest}>
            {children}
        </Text>
    );
};

const TextLight = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.textRegular, style]} {...rest}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: "RobotoRegular",
    },
    textLight: {
        fontFamily: "RobotoLight",
    },
});

export default (TextRegular, TextLight);

