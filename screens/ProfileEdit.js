import { Image, SafeAreaView, TouchableOpacity, Platform, StyleSheet, Modal, ScrollView, View, TextInput, Text } from 'react-native';
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useEffect, useState } from 'react'
import { color } from '../assets/colors/theme'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Foundation, AntDesign, FontAwesome, MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from "expo-image-picker";
import OpenCameraModal from '../components/OpenCameraModal';


export default function ProfileEdit() {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [notifications, setNotifications] = useState(false);
    const [darkmode, setDarkmode] = useState(false);
    const [cameramodal, setCameraModal] = useState(false);
    const [about, setabout] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");

    const [aboutError, setaboutError] = useState('');
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [addressError, setAddressError] = useState("");



    useEffect(() => {
        async function GetUserData() {
            const userDetails = JSON.parse(await AsyncStorage.getItem('userDetails'));
            console.log(userDetails);
            const date_string = userDetails.created_at;
            const date_object = new Date(date_string);

            const month = date_object.toLocaleString('default', { month: 'long' });
            const year = date_object.getUTCFullYear();
            setMonth(month);
            setYear(year);
            setUserData(userDetails);
            setabout(userDetails.About);
            setFirstName(userDetails.FirstName);
            setLastName(userDetails.LastName);
            setAddress(userDetails.Address);
        }

        GetUserData();
    }, [])

    /*============================================Validation Start===========================================*/

    // validation of form
    // done by anita

    const validateAbout = (description) => {
        if (about.trim() === '') {
            setaboutError('About is required');
            return false;
        } else {
            setaboutError('');
            return true;
        }
    };

    const validateFirstName = (firstName, setFirstNameError) => {
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(firstName)) {
            setFirstNameError("Numbers are not allowed in the name field");
            return false;
        } else if (firstName.trim() === "") {
            setFirstNameError("Name is required");
            return false;
        } else {
            setFirstNameError("");
            return true;
        }
    };

    const validateLastName = (lastname, setLastNameErr) => {
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(lastname)) {
            setLastNameErr("Numbers are not allowed in the name field");
            return false;
        } else if (lastname.trim() === "") {
            setLastNameErr("Name is required");
            return false;
        } else {
            setLastNameErr("");
            return true;
        }
    };

    const validateAddress = (address, setAddressErr) => {
        if (!address.trim()) {
            setAddressErr("Address is required");
            return false;
        } else {
            setAddressErr("");
            return true;
        }
    };



    const updateUserProfile = async () => {
        // Validate form fields before making the API call
        const isAboutValid = validateAbout(about);
        const isFirstNameValid = validateFirstName(firstName);
        const isLastNameValid = validateLastName(lastName);
        const isAddressValid = validateAddress(address);

        // If any validation fails, do not proceed with the API call
        if (!isAboutValid || !isFirstNameValid || !isLastNameValid || !isAddressValid) {
            return;
        }

        // Prepare the data to be sent in the request body
        const requestData = {
            About: about,
            FirstName: firstName,
            LastName: lastName,
            Address: address,
            // Add other fields as needed...
        };

        try {
            // Make the API call to update the user's profile
            const response = await fetch(`${BASEURL}api/subscriberlogins/${userData.id}/edit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers as needed...
                },
                body: JSON.stringify(requestData),
            });

            // Check if the API call was successful
            if (response.ok) {
                // Handle the successful response
                console.log('User profile updated successfully');
                // Optionally, provide feedback to the user and navigate to another screen
            } else {
                // Handle errors in the API response
                console.error('Failed to update user profile');
                // Optionally, display an error message to the user
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error updating user profile:', error);
            // Optionally, display an error message to the user
        }
    };

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

    const OpenCamera = async (useLibrary) => {
        let result;
        await ImagePicker.getCameraPermissionsAsync();

        result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const filename =
                Platform.OS === "android"
                    ? result.assets[0].uri.split("/").pop()
                    : result.assets[0].uri.split("/").pop().split(".")[0];
            console.log(result);
            saveImage(result.assets[0].uri);
        }
    };


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            const filePath = result.assets[0].uri;
            const pathSegments = filePath.split("/");
            const filename = pathSegments[pathSegments.length - 1];
            setImageName(filename);
        }
    };
    // ============================================ Camera Permission END=====================================

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Image style={[styles.profilepic]} source={require("../assets/images/user_placeholder.png")} />
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: "2%",
                                left: "20%",
                                backgroundColor: "lightgray",
                                borderRadius: 50,
                                padding: 8,
                            }}
                            onPress={() => setCameraModal(!cameramodal)}
                        >
                            <Fontisto name="camera" size={15} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal animationType="slide" transparent={true} visible={cameramodal}>
                    <View style={styles.topCamera}>
                        <OpenCameraModal OpenCamera={() => OpenCamera()} pickImage={() => pickImage()} close={() => setCameraModal(!cameramodal)} />
                    </View>
                </Modal>
                <TextBold>About</TextBold>
                <TextInput multiline={true} numberOfLines={5} placeholder="About your self"
                    style={styles.textArea}
                    value={about}
                    onChangeText={(e) => {
                        setabout(e);
                        validateAbout(e);
                    }}
                />
                {aboutError !== '' && (
                    <Text style={{ color: 'red' }}>{aboutError}</Text>
                )}

                {/* <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Hey there! I'm Madisson Arora, a passionate Motion Designer currently based in the bustling city of New York. In addition to my career, I'm also a proud mother of... more" /> */}
                <TextBold>First Name</TextBold>
                <TextInput placeholder="Enter your last name"
                    style={styles.inputBox}
                    value={firstName}
                    onChangeText={(e) => {
                        setFirstName(e);
                        validateFirstName(e, setFirstNameError);
                    }}
                />
                {firstNameError !== "" && (
                    <TextBold style={{ marginBottom: 16, color: "red" }}>
                        {firstNameError}
                    </TextBold>
                )}
                <TextBold>Last Name</TextBold>
                <TextInput placeholder="Enter your last name"
                    style={styles.inputBox}
                    value={lastName}
                    onChangeText={(e) => {
                        setLastName(e);
                        validateLastName(e, setLastNameError);
                    }}
                />
                {lastNameError !== "" && (
                    <TextBold style={{ marginBottom: 16, color: "red" }}>
                        {lastNameError}
                    </TextBold>
                )}
                {/* <TextBold>Relationship</TextBold> */}
                {/* <Dropdown
                    style={styles.dropdownStyle}
                    data={relationship}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Relationship"
                    searchPlaceholder="Search..."
                    onChange={(item) => {
                        setRelationship(item.value)
                    }}

                /> */}
                <TextBold>Address</TextBold>
                {/* <TextInput style={styles.inputBox}  /> */}
                <TextInput placeholder="Enter your address"
                    style={styles.inputBox}
                    value={address}
                    onChangeText={(e) => {
                        setAddress(e);
                        validateAddress(e, setAddressError);
                    }}
                />
                {addressError !== "" && (
                    <TextBold style={{ marginBottom: 16, color: "red" }}>
                        {addressError}
                    </TextBold>
                )}
                <View style={[styles.modalcontainer]}>
                    <View style={[styles.flexrow, { justifyContent: 'space-between', alignItems: "center" }]}>
                        <TouchableOpacity style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                            <TextMedium style={[styles.btnPrimaryTextsize]}>Discard</TextMedium>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                            <TextMedium style={[styles.btnPrimaryTextsize]}>Save</TextMedium>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </ScrollView>
    )

}



const styles = StyleSheet.create({
    // Buttoncardinner: {
    //     borderRadius: 8,
    //     alignSelf: 'center',
    //     flexDirection: 'row',
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     borderWidth: 1.5,
    //     borderColor: color.accent,
    //     paddingVertical: 16,
    //     marginVertical: 16,
    // },
    // Buttoncardinner2: {
    //     borderRadius: 8,
    //     alignSelf: 'center',
    //     flexDirection: 'row',
    //     textAlign: 'center',
    //     borderWidth: 1.5,
    //     borderColor: color.primary,
    //     justifyContent: 'center',
    //     backgroundColor: color.primary,
    //     paddingVertical: 16,
    //     marginVertical: 16,
    // },
    Buttoncardwidth: {
        width: '48%'
    },
    btnPrimaryTextsize: {
        fontSize: 20,
    },
    dropdownStyle: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    inputBox: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    textArea: {
        marginVertical: 5,
        height: 100,
        textAlignVertical: 'top',
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    container: {
        padding: 15,
        justifyContent: 'center',
    },
    profilepic: {
        marginRight: 8,
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    flexrow: {
        flexDirection: 'row',
    },
    topCamera: {
        flex: 1,
        justifyContent: "flex-end",
        // alignItems: 'center',
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    cameraModal: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        // padding:10
    },
    textArea: {
        marginVertical: 5,
        height: 100,
        textAlignVertical: "top",
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: "100%",
        marginBottom: 16,
    },
    dropdownStyle: {
        padding: 8,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: "100%",
        marginBottom: 12,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    uploadButton: {
        backgroundColor: color.primary,
        justifyContent: "center",
        padding: 10,
        height: 50,
        alignSelf: "center",
        width: 140,
        borderRadius: 8,
    },
    uploadButtonText: {
        justifyContent: "center",
        alignSelf: "center",
    },
    imageText: {
        // justifyContent: 'center',
        padding: 10,
        height: 70,
        alignSelf: "center",
        width: 150,
    },
    flexrow: {
        flexDirection: "row",
    },
    btnPrimaryTextsize: {
        fontSize: 20,
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: color.neutral[100],
        paddingVertical: 18,
    },
    Buttoncard2: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: "center",
        backgroundColor: color.primary,
        paddingVertical: 18,
        marginVertical: 16,
    },
    Buttoncardinner: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: color.accent,
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardinner2: {
        borderRadius: 8,
        alignSelf: "center",
        flexDirection: "row",
        textAlign: "center",
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: "center",
        backgroundColor: color.primary,
        paddingVertical: 16,
    },
    Buttoncardfullwidth: {
        width: "100%",
    },
    Buttoncardwidth: {
        width: "48%",
    },
    modalcontainer: {
        paddingHorizontal: 20,
        // marginTop: "auto",
        // height: "50%",
        justifyContent: "center",
    },
    inputBox: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: "100%",
        marginBottom: 12,
    },
    Skip: {
        fontSize: 20,
        textDecorationLine: "underline",
    },
    childrenname: {
        fontSize: 18,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    imageplus: {
        padding: 30,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent,
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderColor: color.accent,
    },
    subtext: {
        fontSize: 20,
    },
    image: {
        justifyContent: "center",
        marginVertical: 20,
        alignItems: "center",
    },
    emailimage: {
        width: 300,
        height: 300,
    },
    container: {
        padding: 15,
        justifyContent: "center",
    },
    containerbg: {
        paddingHorizontal: 15,
        backgroundColor: color.white,
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
    cameraBackground: {
        // backgroundColor: "lightgray",
        borderRadius: 50,
        padding: 15,
        marginBottom: 5,
    },
    cameracontainerbg: {
        padding: 25,
        backgroundColor: color.white,
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
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary,
    },


    Buttoncardfullwidth: {
        width: '100%'
    },
    cancelButtonContainer: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    containerbg: {
        paddingHorizontal: 15,
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 30,
            },
        }),
    },
    topDummy: {
        flex: 1,
        opacity: 0
    },
    profilepicactive2: {
        marginRight: 8,
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Tags: {
        borderColor: color.accent,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 4,
    },
    Card: {
        borderRadius: 10,
        marginTop: 4,
        marginBottom: 10,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: color.neutral[300],
        backgroundColor: color.white,
    },
    textAreaInterests: {
        marginVertical: 5,
        justifyContent: "flex-start",
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    textArea: {
        marginVertical: 5,
        height: 70,
        textAlignVertical: 'top',
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    btnPrimaryTextsize: {
        fontSize: 20,
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: color.neutral[100],
        paddingVertical: 18,
    },
    Buttoncard2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 18,
        marginVertical: 16,
    },
    Buttoncardinner: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: color.accent,
        paddingVertical: 16,
        marginVertical: 16,
    },
    Buttoncardinner2: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 16,
        marginTop: 5,
        marginBottom: 16,
    },
    Buttoncardwidth: {
        width: '48%'
    },
    modalcontainer: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    dropdownStyle: {
        padding: 6,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: '100%',
        marginBottom: 12
    },
    inputBox: {
        padding: 8,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 6,
        width: '100%',
        marginBottom: 12
    },
    flexrow: {
        flexDirection: "row",
        justifyContent: "center"
    },
    btnText: {
        alignSelf: 'center',
        fontSize: 18
    },
    btnPrimary: {
        padding: 15,
        marginVertical: 12,
        backgroundColor: color.primary,
        borderRadius: 8
    },
    Skip: {
        fontSize: 20,
        textDecorationLine: "underline"
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addinterests: {
        padding: 5,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    addinterests: {
        padding: 5,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    imageplusaddInterests: {
        padding: 5,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    imageplusadd: {
        padding: 20,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    imageplus: {
        padding: 30,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Cardadd: {
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: color.accent,
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderColor: color.accent,
    },
    subtext: {
        fontSize: 20,
    },
    image: {
        justifyContent: 'center',
        marginVertical: 20,
        alignItems: 'center',
    },
    emailimage: {
        width: 300,
        height: 300,
    },
    container: {
        paddingHorizontal: 15,
        // justifyContent: 'center',
    },
    Headingtext: {
        fontSize: 24,
        marginVertical: 5,
        color: color.primary
    },



})