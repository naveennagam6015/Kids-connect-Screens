import { View, StyleSheet, Image, Text, } from "react-native";
import { TextBold, TextRegular } from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";

export default function Retry() {

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.Contaner]}>
                <Image style={[styles.connectionimg]} source={require('../assets/images/Nointernet.png')} />
                <TextBold style={[styles.oops]}>OOPS<TextBold style={[styles.singleword]}>!</TextBold></TextBold>
                <TextBold style={[styles.oops2]}>NO INTERNET</TextBold>
                {/* <CustomText style={[styles.connection]}>Please check your network connection and try again.</CustomText> */}
                <TextRegular style={[styles.connection]}>Seems like you are not connected to internet.</TextRegular>
                {/* <View style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#7D7C7C",
                    alignSelf: 'center',
                    marginTop: 25,
                    marginBottom: 10,
                    backgroundColor: '#fff',
                    elevation: 5,
                    padding: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 2,
                    shadowRadius: 4,
                }}>
                    <Pressable style={{
                        justifyContent: 'center',
                    }}>
                        <CustomText style={{
                            textAlign: 'center',
                            color: '#3D833F',
                            fontSize: subHeading.fontSize,
                        }}>Try again</CustomText>
                    </Pressable>
                </View> */}

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    singleword: {
        fontSize: 18,
        color: color.secondaryOrange,
    },
    connectionimg: {
        width: 200,
        height: 200,
    },

    connection: {
        color: '#7D7C7C'
    },
    oops: {
        fontSize: 18,
    },
    oops2: {
        fontSize: 18,
        marginBottom: 10,
    },
    Contaner: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        alignSelf: "center",
        padding: 10
    }
});