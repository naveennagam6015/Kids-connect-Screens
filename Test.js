

import React, { useState } from 'react'
import { StyleSheet, View, Modal, } from 'react-native';
import { TextRegular } from './assets/fonts/CustomText'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { color } from './assets/colors/theme';

export default function Test() {
    const navigation = useNavigation();
    const [ModalVisible, setModalVisible] = useState(false);

    return (

        <View style={[styles.container, { flexDirection: 'column', },]}>
            <Button title='Open' onPress={() => { setModalVisible(true); }} />

            <TextRegular style={[styles.fontsize]}> ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away
                from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.
            </TextRegular>
            <TextRegular style={[styles.fontsize]}> ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away
                from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.
            </TextRegular>
            <Modal
                animationType="slide"
                visible={ModalVisible}
                backdropTransitionOutTiming={1000}
                useNativeDriver={true}
                transparent={true}>
                <View style={styles.topDummy} />
                <View style={styles.bottomMain} >
                    <Button title='Close' onPress={() => { setModalVisible(false); }} />
                </View>
            </Modal>
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