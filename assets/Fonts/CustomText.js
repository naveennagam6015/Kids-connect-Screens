
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextRegular = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextRegular, style]} {...rest}>
            {children}
        </Text>
    );
};
const TextLight = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextLight, style]} {...rest}>
            {children}
        </Text>
    );
};
const TextMedium = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextMedium, style]} {...rest}>
            {children}
        </Text>
    );
};
const TextBold = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextBold, style]} {...rest}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    TextRegular: {
        fontFamily: "RobotoRegular",
    },
    TextLight: {
        fontFamily: "RobotoLight",
    },
    TextMedium: {
        fontFamily: "RobotoMedium",
    },
    TextBold: {
        fontFamily: "RobotoMedium",
    },
});

export default (TextRegular, TextLight, TextMedium, TextBold);
