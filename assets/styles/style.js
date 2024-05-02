import { StyleSheet } from "react-native";
import { color } from "../colors/theme";


export const styles = StyleSheet.create({
    inputBox: {

        paddingHorizontal: 16,
        paddingVertical:8,
        borderColor: color.neutral[500],
        borderWidth: 1,
        marginBottom:10,
        marginLeft:10,
        borderRadius: 8
    },
    font: {
        fontWeight: "600",
        marginLeft:15,

    },
    container: {
        padding: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: "row",

        marginVertical: 30,
    },
    headertxt: {
        fontWeight: "bold",
    },
    eyeIcon: {
        marginLeft: -50,
    },
    btnPrimary: {
        padding: 15,
        margin: 1,
        backgroundColor: color.primary,
        borderRadius: 8,
        marginVertical: 50,
    },
    comment: {
        flexDirection: "row",

    },

    cmtfont: {
        color: color.neutral[300],
        fontSize: 11,

    },
    input: {
        flex: 1,
        padding: 5,
    },
    fullwidth: {
        width: "95%"
    },

})