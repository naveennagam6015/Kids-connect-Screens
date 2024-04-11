import { Image, TouchableOpacity, Platform, StyleSheet, Modal, ScrollView, View, TextInput } from 'react-native';
import { TextBold, TextRegular } from '../assets/fonts/CustomText';
import React, { useEffect, useState } from 'react'
import { color } from '../assets/colors/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from "expo-image-picker";

export default function OpenCameraModal({ close, pickImage, OpenCamera }) {

    /*=============================================Camera Permission========================================*/

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

    // const OpenCamera = async (useLibrary) => {
    //     let result;
    //     // if (!useLibrary) {
    //     await ImagePicker.getCameraPermissionsAsync();

    //     result = await ImagePicker.launchCameraAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         quality: 1,
    //     });
    //     // }

    //     if (!result.canceled) {
    //         // Extracting the filename from the local URI
    //         const filename =
    //             Platform.OS === "android"
    //                 ? result.assets[0].uri.split("/").pop()
    //                 : result.assets[0].uri.split("/").pop().split(".")[0];

    //         // console.log(result.assets[0].uri);
    //         // setImage(result.assets[0].uri);
    //         console.log(result);
    //         saveImage(result.assets[0].uri);
    //     }
    // };

    /*==================================================Camera permission functionality end========================================= */

    /*===================================================Upload Image functionality==================================================== */

    const saveImage = async (uri) => {
        await ensureDirExists();
        const fileName = new Date().getTime() + ".jpg";
        const dest = imgDir + fileName;
        await FileSystem.copyAsync({ from: uri, to: dest });
        setImage([...image, dest]);

        try {
            const fileName = uri.split("/").pop();
            const base64Credentials = base64Encode(
                "glansaapi:MB9j xRKL jJSX CtmR nAC3 XBlL"
            );
            const formData = new FormData();
            formData.append("file", {
                uri: uri,
                name: fileName,
                type: "image/jpeg",
            });

            setButtonLoading(true);
            // setGalleryLoading(true)
            const response = await fetch(`${BASEURL}wp-json/wp/v2/media`, {
                method: "POST",
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Upload to WordPress successful:", responseData);
                console.log(responseData.source_url);
                if (isPickingImage) {
                    setUploadImage((prevUploadImage) => [
                        ...prevUploadImage,
                        responseData.source_url,
                    ]);
                } else {
                    setGalleryImages((prevUploadImage) => [
                        ...prevUploadImage,
                        responseData.source_url,
                    ]);
                }
            } else {
                console.error(
                    "Upload to WordPress failed with status:",
                    response.status
                );
            }
        } catch (error) {
            console.error("Error uploading image to WordPress:", error);
        } finally {
            setButtonLoading(false);
            // setGalleryLoading(false);
            setIsPickingImage(false);
        }
    };

    /*========================================================Image Upload Functionality end====================================== */
    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         // aspect: [4, 3],
    //         quality: 1,
    //     });

    //     console.log(result);

    //     if (!result.canceled) {
    //         setImage(result.assets[0].uri);
    //         const filePath = result.assets[0].uri;
    //         const pathSegments = filePath.split("/");
    //         const filename = pathSegments[pathSegments.length - 1];
    //         setImageName(filename);
    //     }
    // };


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