
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const TextRegular = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextRegular, style]} {...rest}>
            {children}
        </Text>
    );
};
export const TextLight = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextLight, style]} {...rest}>
            {children}
        </Text>
    );
};
export const TextMedium = ({ children, style, ...rest }) => {
    return (
        <Text style={[styles.TextMedium, style]} {...rest}>
            {children}
        </Text>
    );
};
export const TextBold = ({ children, style, ...rest }) => {
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
        fontFamily: "RobotoBold",
    },
});


