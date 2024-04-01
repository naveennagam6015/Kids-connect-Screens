

import { StyleSheet, View } from 'react-native';
import { TextRegular } from './assets/fonts/CustomText'
import { useNavigation } from '@react-navigation/native';

export default function Test() {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { flexDirection: 'column', },]}>
            <TextRegular style={[styles.fontsize]}> ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away
                from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.
            </TextRegular>
            <TextRegular style={[styles.fontsize]}> ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away
                from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.
            </TextRegular>
        </View>
    );

}
const styles = StyleSheet.create({
    fontsize: {
        fontSize: 20,
        margin: 10
    },
    container: {
        flex: 1,
        // backgroundColor: 'green'
    },
    topDummy: {
        flex: 1,
        opacity: 0
    },
    bottomMain: {
        flex: 2, backgroundColor: 'darkorange',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },

});