import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Switch } from 'react-native'
import { TextBold } from '../assets/fonts/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from '../assets/colors/theme';

export default function DevicePermissions() {
    const navigation = useNavigation();
    const [location, setLocation] = useState(false);
    const [microphone, setMicrophone] = useState(false);
    const [contact, setContact] = useState(false);
    const [camera, setCamera] = useState(false);
    const [photos, setPhotos] = useState(false);


    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: color.white }}>
                <View>
                    <View style={[styles.flexrow, styles.container, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                            <MaterialIcons name="delete" size={24} color="black" />
                            <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Location Access</TextBold>
                        </View>
                        <Switch
                            trackColor={{ false: color.secondaryOrange, true: color.success }}
                            thumbColor={location ? color.white : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setLocation(previousState => !previousState)}
                            value={location}
                        />
                    </View>
                    <View style={{ borderBlockColor: color.neutral[200], borderWidth: 1 }}></View>
                    <View style={[styles.flexrow, styles.container, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                            <MaterialIcons name="delete" size={24} color="black" />
                            <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Microphone Access</TextBold>
                        </View>
                        <Switch
                            trackColor={{ false: color.secondaryOrange, true: color.success }}
                            thumbColor={microphone ? color.white : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setMicrophone(previousState => !previousState)}
                            value={microphone}
                        />
                    </View>
                    <View style={{ borderBlockColor: color.neutral[200], borderWidth: 1 }}></View>
                    <View style={[styles.flexrow, styles.container, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                            <MaterialIcons name="delete" size={24} color="black" />
                            <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Contact Access</TextBold>
                        </View>
                        <Switch
                            trackColor={{ false: color.secondaryOrange, true: color.success }}
                            thumbColor={contact ? color.white : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setContact(previousState => !previousState)}
                            value={contact}
                        />
                    </View>
                    <View style={{ borderBlockColor: color.neutral[200], borderWidth: 1 }}></View>
                    <View style={[styles.flexrow, styles.container, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                            <MaterialIcons name="delete" size={24} color="black" />
                            <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Camera Access</TextBold>
                        </View>
                        <Switch
                            trackColor={{ false: color.secondaryOrange, true: color.success }}
                            thumbColor={camera ? color.white : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setCamera(previousState => !previousState)}
                            value={camera}
                        />
                    </View>
                    <View style={{ borderBlockColor: color.neutral[200], borderWidth: 1 }}></View>
                    <View style={[styles.flexrow, styles.container, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View style={[styles.flexrow, { alignItems: "center", marginVertical: 8 }]}>
                            <MaterialIcons name="delete" size={24} color="black" />
                            <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Photos & Videos Access</TextBold>
                        </View>
                        <Switch
                            trackColor={{ false: color.secondaryOrange, true: color.success }}
                            thumbColor={photos ? color.white : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setPhotos(previousState => !previousState)}
                            value={photos}
                        />
                    </View>
                    <View style={{ borderBlockColor: color.neutral[200], borderWidth: 1 }}></View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    flexrow: {
        flexDirection: 'row',
    },
    container: {
        padding: 15,
        justifyContent: 'center',
    },
})
