import { Image, TouchableOpacity, Platform, StyleSheet, Modal, ScrollView, View, TextInput } from 'react-native';
import { TextBold, TextRegular } from '../assets/fonts/CustomText';
import React, { useEffect, useState } from 'react'
import { color } from '../assets/colors/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from "expo-image-picker";

export default function OpenCameraModal({ close, pickImage, OpenCamera }) {



    useEffect(() => {
        (async () => {
            const galleryStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryImagePermission(galleryStatus.status === "granted");
        })();
        loadImages();
    }, []);

    const loadImages = async () => {
        await ensureDirExists();
        const files = await FileSystem.readDirectoryAsync(imgDir);
        if (files.length > 0) {
            setImage(files.map((f) => imgDir + f));
        }
    };





    return (
        <View>
            <View style={styles.cameracontainerbg}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TextBold style={{ marginBottom: 20, fontSize: 18 }}>Upload Image</TextBold>
                    <TouchableOpacity
                        onPress={close}
                        style={{ alignItems: "flex-end", }}>
                        <Icon name="cancel" size={30} color={color.neutral[300]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.cameraModal}>
                    <View>
                        <TouchableOpacity
                            style={[{ alignSelf: "center" },]}
                            onPress={OpenCamera}
                        >
                            {/* <Fontisto name="camera" size={24} color="black" /> */}
                            <Image
                                source={require("../assets/images/Group 70.png")}
                                style={{ width: 50, height: 40 }}
                            />
                        </TouchableOpacity>
                        <TextRegular style={{ alignSelf: "center" }}>
                            Camera
                        </TextRegular>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[{ alignSelf: "center" },]}
                            onPress={pickImage}
                        >
                            {/* <Fontisto name="picture" size={24} color="black" /> */}
                            <Image
                                source={require("../assets/images/Group 71.png")}
                                style={{ width: 60, height: 40 }}
                            />
                        </TouchableOpacity>
                        <TextRegular style={{ alignSelf: "center" }}>
                            Gallery
                        </TextRegular>
                    </View>

                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cameraModal: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    cameracontainerbg: {
        padding: 25,
        backgroundColor: color.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 30,
            },
        }),
    },
})