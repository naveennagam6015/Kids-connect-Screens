

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

            {/* <Collapse>
                    <CollapseHeader>
                        <View style={[styles.accordionheader, styles.flexrow]}>
                            <TextBold style={[styles.headerfont]}>User on boarding related</TextBold>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={[styles.accordionbody]}>

                            <TextRegular>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</TextRegular>
                        </View>

                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <View style={[styles.accordionheader, styles.flexrow]}>
                            <TextBold style={[styles.headerfont]}>User related</TextBold>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={[styles.accordionbody]}>

                            <TextRegular>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</TextRegular>
                        </View>

                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <View style={[styles.accordionheader, styles.flexrow]}>
                            <TextBold style={[styles.headerfont]}>Kids connect related</TextBold>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={[styles.accordionbody]}>

                            <TextRegular>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</TextRegular>
                        </View>

                    </CollapseBody>
                </Collapse> */}

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








{/* <Modal
animationType='slide'
transparent={true}
visible={setOpenpets}
>
<View style={styles.topDummy} />
<View style={[styles.containerbg]}>
    <View style={[styles.container]}>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
        </View>
        <TextBold>Name</TextBold>
        <TextInput style={styles.inputBox} placeholder="Enter your first name" onChangeText={(e) => setFirstName(e)} />
        <TextBold>Interests</TextBold>

        <View style={[styles.Card]}>
            <TextRegular style={{ color: color.neutral[300] }}>Explain your kids interests and Hobbies which makes easier to connect with other Kids eg: </TextRegular>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                <View style={[styles.Tags]}>
                    <TextRegular>Introvert</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.Tags]}>
                    <TextRegular>Playstation</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.Tags]}>
                    <TextRegular>Programming</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.Tags]}>
                    <TextRegular>Enthusiastic</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: 8, }}>
                    <TextRegular style={{ fontSize: 14, marginHorizontal: 5 }}>Add</TextRegular>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.addinterests]}>
                            <AntDesign name="plus" size={10} color={color.neutral[500]} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    </View>
    <View style={[styles.modalcontainer]}>
        <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
            <TouchableOpacity onPress={() => {
                setOpen(!open);
                setKidopen(!kidopen);
            }} style={[styles.Buttoncardinner, styles.Buttoncardwidth, { marginTop: 5 }]}>
                <View
                    style={[styles.flexrow]}>
                    <TextMedium style={[styles.btnPrimaryTextsize]}>Back</TextMedium>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setKidopen(!kidopen);
            }} style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                <View
                    style={[styles.flexrow]}>
                    <TextMedium style={[styles.btnPrimaryTextsize]}>Add Kid</TextMedium>
                    <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
                </View>
            </TouchableOpacity>
        </View>
    </View>
</View>
</Modal> */}







// import { Image, SafeAreaView, TouchableOpacity, Platform, StyleSheet, Modal, ScrollView, View, TextInput } from 'react-native';
// import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText';
// import { Dropdown } from 'react-native-element-dropdown';
// import React, { useEffect, useState } from 'react'
// import { color } from '../assets/colors/theme'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import { Foundation, AntDesign, FontAwesome, MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import * as ImagePicker from "expo-image-picker";


// export default function ProfileEdit() {
//     const navigation = useNavigation();
//     const [userData, setUserData] = useState({});
//     const [month, setMonth] = useState('');
//     const [year, setYear] = useState('');
//     const [notifications, setNotifications] = useState(false);
//     const [darkmode, setDarkmode] = useState(false);
//     const [cameramodal, setCameraModal] = useState(false);
//     const [about, setabout] = useState('');
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [address, setAddress] = useState("");

//     const [aboutError, setaboutError] = useState('');
//     const [firstNameError, setFirstNameError] = useState("");
//     const [lastNameError, setLastNameError] = useState("");
//     const [addressError, setAddressError] = useState("");



//     useEffect(() => {
//         async function GetUserData() {
//             const userDetails = JSON.parse(await AsyncStorage.getItem('userDetails'));
//             console.log(userDetails);
//             const date_string = userDetails.created_at;
//             const date_object = new Date(date_string);

//             const month = date_object.toLocaleString('default', { month: 'long' });
//             const year = date_object.getUTCFullYear();
//             setMonth(month);
//             setYear(year);
//             setUserData(userDetails)
//         }

//         GetUserData();
//     }, [])

//     /*============================================Validation Start===========================================*/

//     // validation of form
//     // done by anita

//     const validateAbout = (description) => {
//         if (abouta.trim() === '') {
//             setaboutError('About is required');
//             return false;
//         } else {
//             setaboutError('');
//             return true;
//         }
//     };

//     const validateFirstName = (firstName, setFirstNameError) => {
//         const regex = /^[a-zA-Z ]+$/;
//         if (!regex.test(firstName)) {
//             setFirstNameError("Numbers are not allowed in the name field");
//             return false;
//         } else if (firstName.trim() === "") {
//             setFirstNameError("Name is required");
//             return false;
//         } else {
//             setFirstNameError("");
//             return true;
//         }
//     };

//     const validateLastName = (lastname, setLastNameErr) => {
//         const regex = /^[a-zA-Z ]+$/;
//         if (!regex.test(lastname)) {
//             setLastNameErr("Numbers are not allowed in the name field");
//             return false;
//         } else if (lastname.trim() === "") {
//             setLastNameErr("Name is required");
//             return false;
//         } else {
//             setLastNameErr("");
//             return true;
//         }
//     };

//     const validateAddress = (address, setAddressErr) => {
//         if (!address.trim()) {
//             setAddressErr("Address is required");
//             return false;
//         } else {
//             setAddressErr("");
//             return true;
//         }
//     };


//     /*=============================================Camera Permission========================================*/

//     useEffect(() => {
//         (async () => {
//             const galleryStatus =
//                 await ImagePicker.requestMediaLibraryPermissionsAsync();
//             setHasGalleryImagePermission(galleryStatus.status === "granted");
//         })();
//         loadImages();
//     }, []);

//     const loadImages = async () => {
//         await ensureDirExists();
//         const files = await FileSystem.readDirectoryAsync(imgDir);
//         if (files.length > 0) {
//             setImage(files.map((f) => imgDir + f));
//         }
//     };

//     const OpenCamera = async (useLibrary) => {
//         let result;
//         // if (!useLibrary) {
//         await ImagePicker.getCameraPermissionsAsync();

//         result = await ImagePicker.launchCameraAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             quality: 1,
//         });
//         // }

//         if (!result.canceled) {
//             // Extracting the filename from the local URI
//             const filename =
//                 Platform.OS === "android"
//                     ? result.assets[0].uri.split("/").pop()
//                     : result.assets[0].uri.split("/").pop().split(".")[0];

//             // console.log(result.assets[0].uri);
//             // setImage(result.assets[0].uri);
//             console.log(result);
//             saveImage(result.assets[0].uri);
//         }
//     };

//     /*==================================================Camera permission functionality end========================================= */

//     /*===================================================Upload Image functionality==================================================== */

//     const saveImage = async (uri) => {
//         await ensureDirExists();
//         const fileName = new Date().getTime() + ".jpg";
//         const dest = imgDir + fileName;
//         await FileSystem.copyAsync({ from: uri, to: dest });
//         setImage([...image, dest]);

//         try {
//             const fileName = uri.split("/").pop();
//             const base64Credentials = base64Encode(
//                 "glansaapi:MB9j xRKL jJSX CtmR nAC3 XBlL"
//             );
//             const formData = new FormData();
//             formData.append("file", {
//                 uri: uri,
//                 name: fileName,
//                 type: "image/jpeg",
//             });

//             setButtonLoading(true);
//             // setGalleryLoading(true)
//             const response = await fetch(`${BASEURL}wp-json/wp/v2/media`, {
//                 method: "POST",
//                 headers: {
//                     Authorization: `Basic ${base64Credentials}`,
//                     Accept: "application/json",
//                     "Content-Type": "multipart/form-data",
//                 },
//                 body: formData,
//             });

//             if (response.ok) {
//                 const responseData = await response.json();
//                 console.log("Upload to WordPress successful:", responseData);
//                 console.log(responseData.source_url);
//                 if (isPickingImage) {
//                     setUploadImage((prevUploadImage) => [
//                         ...prevUploadImage,
//                         responseData.source_url,
//                     ]);
//                 } else {
//                     setGalleryImages((prevUploadImage) => [
//                         ...prevUploadImage,
//                         responseData.source_url,
//                     ]);
//                 }
//             } else {
//                 console.error(
//                     "Upload to WordPress failed with status:",
//                     response.status
//                 );
//             }
//         } catch (error) {
//             console.error("Error uploading image to WordPress:", error);
//         } finally {
//             setButtonLoading(false);
//             // setGalleryLoading(false);
//             setIsPickingImage(false);
//         }
//     };

//     /*========================================================Image Upload Functionality end====================================== */
//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             // aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result);

//         if (!result.canceled) {
//             setImage(result.assets[0].uri);
//             const filePath = result.assets[0].uri;
//             const pathSegments = filePath.split("/");
//             const filename = pathSegments[pathSegments.length - 1];
//             setImageName(filename);
//         }
//     };


//     return (
//         <ScrollView style={{ flex: 1 }}>
//             <SafeAreaView style={styles.container}>
//                 <View style={{ alignItems: 'center' }}>
//                     <View style={{ alignItems: 'center', marginVertical: 10 }}>
//                         <Image style={[styles.profilepic]} source={require("../assets/images/user_placeholder.png")} />
//                         <TouchableOpacity
//                             style={{
//                                 position: "absolute",
//                                 bottom: "2%",
//                                 left: "20%",
//                                 backgroundColor: "lightgray",
//                                 borderRadius: 50,
//                                 padding: 8,
//                             }}
//                             onPress={() => setCameraModal(!cameramodal)}
//                         >
//                             <Fontisto name="camera" size={15} color="black" />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <Modal animationType="slide" transparent={true} visible={cameramodal}>
//                     <View style={styles.topCamera}>
//                         <View style={styles.cameracontainerbg}>
//                             <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
//                                 <TextBold style={{ marginBottom: 20, fontSize: 18 }}>Upload Image</TextBold>
//                                 <TouchableOpacity
//                                     onPress={() => setCameraModal(!cameramodal)}
//                                     style={[styles.cancelButtonContainerpic, { alignItems: "flex-end", }]}>
//                                     <Icon name="cancel" size={30} color={color.neutral[300]} />
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={styles.cameraModal}>
//                                 <View>
//                                     <TouchableOpacity
//                                         style={[{ alignSelf: "center" },]}
//                                         onPress={OpenCamera}
//                                     >
//                                         {/* <Fontisto name="camera" size={24} color="black" /> */}
//                                         <Image
//                                             source={require("../assets/images/Group 70.png")}
//                                             style={{ width: 50, height: 40 }}
//                                         />
//                                     </TouchableOpacity>
//                                     <TextRegular style={{ alignSelf: "center" }}>
//                                         Camera
//                                     </TextRegular>
//                                 </View>
//                                 <View>
//                                     <TouchableOpacity
//                                         style={[{ alignSelf: "center" },]}
//                                         onPress={pickImage}
//                                     >
//                                         {/* <Fontisto name="picture" size={24} color="black" /> */}
//                                         <Image
//                                             source={require("../assets/images/Group 71.png")}
//                                             style={{ width: 60, height: 40 }}
//                                         />
//                                     </TouchableOpacity>
//                                     <TextRegular style={{ alignSelf: "center" }}>
//                                         Gallery
//                                     </TextRegular>
//                                 </View>

//                             </View>

//                         </View>
//                     </View>
//                 </Modal>
//                 <TextBold>About</TextBold>
//                 <TextInput multiline={true} numberOfLines={5} placeholder="About your self"
//                     style={styles.textArea}
//                     value={userData.About}
//                     onChangeText={(e) => {
//                         setabout(e);
//                         validateAbout(e);
//                     }}
//                 />
//                 {aboutError !== '' && (
//                     <Text style={{ color: 'red' }}>{aboutError}</Text>
//                 )}

//                 {/* <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Hey there! I'm Madisson Arora, a passionate Motion Designer currently based in the bustling city of New York. In addition to my career, I'm also a proud mother of... more" /> */}
//                 <TextBold>First Name</TextBold>
//                 <TextInput placeholder="Enter your last name"
//                     style={styles.inputBox}
//                     value={userData.FirstName}
//                     onChangeText={(e) => {
//                         setFirstName(e);
//                         validateFirstName(e, setFirstNameError);
//                     }}
//                 />
//                 {firstNameError !== "" && (
//                     <TextBold style={{ marginBottom: 16, color: "red" }}>
//                         {firstNameError}
//                     </TextBold>
//                 )}
//                 <TextBold>Last Name</TextBold>
//                 <TextInput placeholder="Enter your last name"
//                     style={styles.inputBox}
//                     value={userData.LastName}
//                     onChangeText={(e) => {
//                         setLastName(e);
//                         validateLastName(e, setLastNameError);
//                     }}
//                 />
//                 {lastNameError !== "" && (
//                     <TextBold style={{ marginBottom: 16, color: "red" }}>
//                         {lastNameError}
//                     </TextBold>
//                 )}
//                 {/* <TextBold>Relationship</TextBold> */}
//                 {/* <Dropdown
//                     style={styles.dropdownStyle}
//                     data={relationship}
//                     search
//                     maxHeight={300}
//                     labelField="label"
//                     valueField="value"
//                     placeholder="Relationship"
//                     searchPlaceholder="Search..."
//                     onChange={(item) => {
//                         setRelationship(item.value)
//                     }}

//                 /> */}
//                 <TextBold>Address</TextBold>
//                 {/* <TextInput style={styles.inputBox}  /> */}
//                 <TextInput placeholder="Enter your address"
//                     style={styles.inputBox}
//                     value={userData.Address}
//                     onChangeText={(e) => {
//                         setAddress(e);
//                         validateAddress(e, setAddressError);
//                     }}
//                 />
//                 {addressError !== "" && (
//                     <TextBold style={{ marginBottom: 16, color: "red" }}>
//                         {addressError}
//                     </TextBold>
//                 )}
//                 <View style={[styles.modalcontainer]}>
//                     <View style={[styles.flexrow, { justifyContent: 'space-between', alignItems: "center" }]}>
//                         <TouchableOpacity style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
//                             <TextMedium style={[styles.btnPrimaryTextsize]}>Discard</TextMedium>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
//                             <TextMedium style={[styles.btnPrimaryTextsize]}>Save</TextMedium>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//             </SafeAreaView>
//         </ScrollView>
//     )

// }



// const styles = StyleSheet.create({
//     Buttoncardinner: {
//         borderRadius: 8,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         textAlign: 'center',
//         justifyContent: 'center',
//         borderWidth: 1.5,
//         borderColor: color.accent,
//         paddingVertical: 16,
//         marginVertical: 16,
//     },
//     Buttoncardinner2: {
//         borderRadius: 8,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         textAlign: 'center',
//         borderWidth: 1.5,
//         borderColor: color.primary,
//         justifyContent: 'center',
//         backgroundColor: color.primary,
//         paddingVertical: 16,
//         marginVertical: 16,
//     },
//     Buttoncardwidth: {
//         width: '48%'
//     },
//     btnPrimaryTextsize: {
//         fontSize: 20,
//     },
//     dropdownStyle: {
//         padding: 10,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 8,
//         width: '100%',
//         marginBottom: 16
//     },
//     inputBox: {
//         padding: 10,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 8,
//         width: '100%',
//         marginBottom: 16
//     },
//     textArea: {
//         marginVertical: 5,
//         height: 100,
//         textAlignVertical: 'top',
//         padding: 10,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 8,
//         width: '100%',
//         marginBottom: 16
//     },
//     container: {
//         padding: 15,
//         justifyContent: 'center',
//     },
//     profilepic: {
//         marginRight: 8,
//         width: 130,
//         height: 130,
//         borderRadius: 100,
//     },
//     flexrow: {
//         flexDirection: 'row',
//     },
//     topCamera: {
//         flex: 1,
//         justifyContent: "flex-end",
//         // alignItems: 'center',
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//     },
//     cameraModal: {
//         flexDirection: "row",
//         justifyContent: "space-evenly",
//         // padding:10
//     },
//     textArea: {
//         marginVertical: 5,
//         height: 100,
//         textAlignVertical: "top",
//         padding: 10,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 8,
//         width: "100%",
//         marginBottom: 16,
//     },
//     dropdownStyle: {
//         padding: 8,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 6,
//         width: "100%",
//         marginBottom: 12,
//     },
//     imageContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//     },
//     uploadButton: {
//         backgroundColor: color.primary,
//         justifyContent: "center",
//         padding: 10,
//         height: 50,
//         alignSelf: "center",
//         width: 140,
//         borderRadius: 8,
//     },
//     uploadButtonText: {
//         justifyContent: "center",
//         alignSelf: "center",
//     },
//     imageText: {
//         // justifyContent: 'center',
//         padding: 10,
//         height: 70,
//         alignSelf: "center",
//         width: 150,
//     },
//     flexrow: {
//         flexDirection: "row",
//     },
//     btnPrimaryTextsize: {
//         fontSize: 20,
//     },
//     Buttoncard: {
//         borderRadius: 8,
//         alignSelf: "center",
//         flexDirection: "row",
//         textAlign: "center",
//         justifyContent: "center",
//         backgroundColor: color.neutral[100],
//         paddingVertical: 18,
//     },
//     Buttoncard2: {
//         borderRadius: 8,
//         alignSelf: "center",
//         flexDirection: "row",
//         textAlign: "center",
//         borderWidth: 1.5,
//         borderColor: color.primary,
//         justifyContent: "center",
//         backgroundColor: color.primary,
//         paddingVertical: 18,
//         marginVertical: 16,
//     },
//     Buttoncardinner: {
//         borderRadius: 8,
//         alignSelf: "center",
//         flexDirection: "row",
//         textAlign: "center",
//         justifyContent: "center",
//         borderWidth: 1.5,
//         borderColor: color.accent,
//         paddingVertical: 16,
//         marginVertical: 16,
//     },
//     Buttoncardinner2: {
//         borderRadius: 8,
//         alignSelf: "center",
//         flexDirection: "row",
//         textAlign: "center",
//         borderWidth: 1.5,
//         borderColor: color.primary,
//         justifyContent: "center",
//         backgroundColor: color.primary,
//         paddingVertical: 16,
//         marginVertical: 16,
//     },
//     Buttoncardfullwidth: {
//         width: "100%",
//     },
//     Buttoncardwidth: {
//         width: "48%",
//     },
//     modalcontainer: {
//         paddingHorizontal: 20,
//         // marginTop: "auto",
//         // height: "50%",
//         justifyContent: "center",
//     },
//     inputBox: {
//         padding: 10,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 6,
//         width: "100%",
//         marginBottom: 12,
//     },
//     Skip: {
//         fontSize: 20,
//         textDecorationLine: "underline",
//     },
//     childrenname: {
//         fontSize: 18,
//         textAlign: "center",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "row",
//     },
//     imageplus: {
//         padding: 30,
//         justifyContent: "flex-end",
//         alignSelf: "flex-end",
//         borderRadius: 100,
//         marginRight: 10,
//         backgroundColor: color.accent,
//     },
//     profilepic: {
//         marginRight: 8,
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//     },
//     Card: {
//         borderRadius: 10,
//         marginVertical: 10,
//         borderWidth: 1,
//         paddingHorizontal: 10,
//         paddingVertical: 30,
//         borderColor: color.accent,
//     },
//     subtext: {
//         fontSize: 20,
//     },
//     image: {
//         justifyContent: "center",
//         marginVertical: 20,
//         alignItems: "center",
//     },
//     emailimage: {
//         width: 300,
//         height: 300,
//     },
//     container: {
//         padding: 15,
//         justifyContent: "center",
//     },
//     containerbg: {
//         paddingHorizontal: 15,
//         backgroundColor: color.white,
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         justifyContent: "center",
//         ...Platform.select({
//             ios: {
//                 shadowColor: "black",
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.2,
//                 shadowRadius: 4,
//             },
//             android: {
//                 elevation: 30,
//             },
//         }),
//     },
//     cameraBackground: {
//         // backgroundColor: "lightgray",
//         borderRadius: 50,
//         padding: 15,
//         marginBottom: 5,
//     },
//     cameracontainerbg: {
//         padding: 25,
//         backgroundColor: color.white,
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         justifyContent: "center",
//         ...Platform.select({
//             ios: {
//                 shadowColor: "black",
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.2,
//                 shadowRadius: 4,
//             },
//             android: {
//                 elevation: 30,
//             },
//         }),
//     },
//     Headingtext: {
//         fontSize: 24,
//         marginVertical: 5,
//         color: color.primary,
//     },


//     Buttoncardfullwidth: {
//         width: '100%'
//     },
//     cancelButtonContainer: {
//         position: 'absolute',
//         top: 15,
//         right: 15,
//     },
//     containerbg: {
//         paddingHorizontal: 15,
//         backgroundColor: color.white,
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         justifyContent: 'center',
//         ...Platform.select({
//             ios: {
//                 shadowColor: 'black',
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.2,
//                 shadowRadius: 4,
//             },
//             android: {
//                 elevation: 30,
//             },
//         }),
//     },
//     topDummy: {
//         flex: 1,
//         opacity: 0
//     },
//     profilepicactive2: {
//         marginRight: 8,
//         width: 70,
//         height: 70,
//         borderRadius: 50,
//     },
//     childrenname: {
//         fontSize: 18,
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row'
//     },
//     Tags: {
//         borderColor: color.accent,
//         borderWidth: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderRadius: 18,
//         paddingHorizontal: 10,
//         paddingVertical: 4,
//         marginRight: 4,
//     },
//     Card: {
//         borderRadius: 10,
//         marginTop: 4,
//         marginBottom: 10,
//         paddingHorizontal: 14,
//         borderWidth: 1,
//         borderColor: color.neutral[300],
//         backgroundColor: color.white,
//     },
//     textAreaInterests: {
//         marginVertical: 5,
//         justifyContent: "flex-start",
//         padding: 10,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 8,
//         width: '100%',
//         marginBottom: 16
//     },
//     textArea: {
//         marginVertical: 5,
//         height: 70,
//         textAlignVertical: 'top',
//         padding: 10,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 8,
//         width: '100%',
//         marginBottom: 16
//     },
//     btnPrimaryTextsize: {
//         fontSize: 20,
//     },
//     Buttoncard: {
//         borderRadius: 8,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         textAlign: 'center',
//         justifyContent: 'center',
//         backgroundColor: color.neutral[100],
//         paddingVertical: 18,
//     },
//     Buttoncard2: {
//         borderRadius: 8,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         textAlign: 'center',
//         borderWidth: 1.5,
//         borderColor: color.primary,
//         justifyContent: 'center',
//         backgroundColor: color.primary,
//         paddingVertical: 18,
//         marginVertical: 16,
//     },
//     Buttoncardinner: {
//         borderRadius: 8,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         textAlign: 'center',
//         justifyContent: 'center',
//         borderWidth: 1.5,
//         borderColor: color.accent,
//         paddingVertical: 16,
//         marginVertical: 16,
//     },
//     Buttoncardinner2: {
//         borderRadius: 8,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         textAlign: 'center',
//         borderWidth: 1.5,
//         borderColor: color.primary,
//         justifyContent: 'center',
//         backgroundColor: color.primary,
//         paddingVertical: 16,
//         marginTop: 5,
//         marginBottom: 16,
//     },
//     Buttoncardwidth: {
//         width: '48%'
//     },
//     modalcontainer: {
//         paddingHorizontal: 20,
//         justifyContent: 'center',
//     },
//     dropdownStyle: {
//         padding: 6,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 6,
//         width: '100%',
//         marginBottom: 12
//     },
//     inputBox: {
//         padding: 8,
//         borderColor: color.neutral[300],
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 6,
//         width: '100%',
//         marginBottom: 12
//     },
//     flexrow: {
//         flexDirection: "row",
//         justifyContent: "center"
//     },
//     btnText: {
//         alignSelf: 'center',
//         fontSize: 18
//     },
//     btnPrimary: {
//         padding: 15,
//         marginVertical: 12,
//         backgroundColor: color.primary,
//         borderRadius: 8
//     },
//     Skip: {
//         fontSize: 20,
//         textDecorationLine: "underline"
//     },
//     childrenname: {
//         fontSize: 18,
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row'
//     },
//     addinterests: {
//         padding: 5,
//         justifyContent: "flex-start",
//         alignSelf: "flex-start",
//         borderRadius: 100,
//         marginRight: 10,
//         backgroundColor: color.accent
//     },
//     addinterests: {
//         padding: 5,
//         justifyContent: "center",
//         alignSelf: "center",
//         borderRadius: 100,
//         marginRight: 10,
//         backgroundColor: color.accent
//     },
//     imageplusaddInterests: {
//         padding: 5,
//         justifyContent: "flex-end",
//         alignSelf: "flex-end",
//         borderRadius: 100,
//         marginRight: 10,
//         backgroundColor: color.accent
//     },
//     imageplusadd: {
//         padding: 20,
//         justifyContent: "flex-start",
//         alignSelf: "flex-start",
//         borderRadius: 100,
//         marginRight: 10,
//         backgroundColor: color.accent
//     },
//     imageplus: {
//         padding: 30,
//         justifyContent: "flex-end",
//         alignSelf: "flex-end",
//         borderRadius: 100,
//         marginRight: 10,
//         backgroundColor: color.accent
//     },
//     profilepic: {
//         marginRight: 8,
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//     },
//     Cardadd: {
//         borderRadius: 10,
//         marginBottom: 10,
//         flexDirection: "row",
//         borderWidth: 1,
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//         borderColor: color.accent,
//     },
//     Card: {
//         borderRadius: 10,
//         marginVertical: 10,
//         borderWidth: 1,
//         paddingHorizontal: 10,
//         paddingVertical: 30,
//         borderColor: color.accent,
//     },
//     subtext: {
//         fontSize: 20,
//     },
//     image: {
//         justifyContent: 'center',
//         marginVertical: 20,
//         alignItems: 'center',
//     },
//     emailimage: {
//         width: 300,
//         height: 300,
//     },
//     container: {
//         paddingHorizontal: 15,
//         // justifyContent: 'center',
//     },
//     Headingtext: {
//         fontSize: 24,
//         marginVertical: 5,
//         color: color.primary
//     },



// })