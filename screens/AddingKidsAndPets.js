import React, { useEffect, useState } from "react";
// import React, { useState } from 'react'
import { View, StyleSheet, Platform, Image, Modal, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { color } from '../assets/colors/theme'
import { Foundation, AntDesign, FontAwesome, MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function AddingKidsAndPets() {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [openpets, setOpenpets] = useState(false);
    const [kidopen, setKidopen] = useState(false);
    const [petopen, setPetopen] = useState(false);
    const [modalopen, setModalopen] = useState(false);
    const [gender, setGender] = useState([
        { label: "Male", value: "1" },
        { label: "Female", value: "2" },
        { label: "Others", value: "0" },
      ]);
    const [relationship, setRelationship] = useState([
        { label: 'Child', value: '1' },
        { label: 'Sibling', value: '2' },
        { label: 'Friend', value: '0' }
    ]);
    const onClose = () => {
        setOpen(false);
        setOpenpets(false);
        setKidopen(false);
        setPetopen(false);
    };
    const [roles, setRoles] = useState([{ label: "", value: "" }]);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ssn, setSsn] = useState("");
    const [pwd, setPwd] = useState("");
    const [about, setAbout] = useState("");
    const [roleId, setRoleId] = useState("");
    const [dob, setDob] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [cameramodal, setCameraModal] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [relationshipError, setRelationshipError] = useState("");
    const [dobError, setDobError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [passwordErr, setPasswordErr] = useState("");





    /*============================================Validation Start===========================================*/

  // validation of form
  // done by Anita

  const validateEmail = (email, setMailError) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      setMailError("Email is required");
      return false;
    } else if (!regex.test(email)) {
      setMailError("Enter a valid email id");
      return false;
    } else {
      setMailError("");
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

  const validateMobileNumber = (mobile, setMobileError) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(mobile)) {
      setMobileError("Mobile number should be a 10-digit number");
      return false;
    } else if (mobile.trim() === "") {
      setMobileError("Mobile number is required");
      return false;
    } else {
      setMobileError("");
      return true;
    }
  };

  const validatePassword = (password, setPasswordErr) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    if (password.length < minLength) {
      setPasswordErr("Password should be at least 8 characters long");
      return false;
    } else if (!hasUppercase) {
      setPasswordErr("Password should contain at least one uppercase letter");
      return false;
    } else if (!hasLowercase) {
      setPasswordErr("Password should contain at least one lowercase letter");
      return false;
    } else if (!hasNumber) {
      setPasswordErr("Password should contain at least one number");
      return false;
    } else if (!hasSpecialChar) {
      setPasswordErr("Password should contain at least one special character");
      return false;
    } else {
      setPasswordErr("");
      return true;
    }
  };

  // const validateRole = (selectedRole, setRoleErr) => {
  //     if (!selectedRole) {
  //         setRoleErr('Role is required');
  //         return false;
  //     }
  //     else {
  //         setRoleErr('');
  //         return true;
  //     }
  // };

  const validateDob = (dob, setDobErr) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regex.test(dob)) {
      setDobErr("Please enter a valid date in the format DD/MM/YYYY");
      return false;
    } else {
      setDobErr("");
      return true;
    }
  };

  const validateGender = (selectedGender, setGenderErr) => {
    if (!selectedGender) {
      setGenderErr("Gender is required");
      return false;
    } else {
      setGenderErr("");
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

  /*============================================Validation End===========================================*/

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
    // if (!useLibrary) {
    await ImagePicker.getCameraPermissionsAsync();

    result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    // }

    if (!result.canceled) {
      // Extracting the filename from the local URI
      const filename =
        Platform.OS === "android"
          ? result.assets[0].uri.split("/").pop()
          : result.assets[0].uri.split("/").pop().split(".")[0];

      // console.log(result.assets[0].uri);
      // setImage(result.assets[0].uri);
      console.log(result);
      saveImage(result.assets[0].uri);
    }
  };

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

  function SubmitData() {
    axios({
      method: "post",
      url: `${BASEURL}`,
      data: {},
    });
  }

  

    return (
        <ScrollView style={[styles.container]}>
            {/* <TextRegular >Good Evening! <TextBold>Madisson</TextBold></TextRegular> */}
            <TextBold style={[styles.Headingtext]}>Let’s Complete your Profile </TextBold>
            <TextRegular style={{ fontSize: 18 }}>To get started, create an account with Kids Connect below, </TextRegular>
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={[styles.childrenname]}>Lucy <TextRegular style={{ fontSize: 14, color: color.success }}>(Primary)</TextRegular></TextRegular>
                            <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/man3.jpg')} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TextRegular style={[styles.childrenname]}>Lucy <TextRegular style={{ fontSize: 14, color: color.success }}>(2nd)</TextRegular></TextRegular>
                            <Foundation style={{ marginLeft: 8, marginTop: 2 }} name="info" size={16} color={color.neutral[500]} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.flexrow, { justifyContent: "flex-start", alignItems: "center" }]}>
                <TextBold style={{ marginTop: 10, marginBottom: 5, fontSize: 18 }}>Add your Kids Profile</TextBold>
                <Ionicons style={{ marginLeft: 5 }} name="hand-right" size={24} color={color.accent} />
            </View>
            <View style={[styles.Cardadd]}>
                {/* we need to show this Kid after profile added */}
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Image style={[styles.profilepicactive2]} source={require('../assets/images/KID.jpg')} />
                    </View>
                    <View>
                        <TextRegular style={[styles.childrenname]}>Samantha</TextRegular>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: "row", marginHorizontal: 10 }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => setOpen(!open)} style={[styles.imageplusadd]}>
                            <AntDesign name="plus" size={30} color={color.neutral[500]} />
                        </TouchableOpacity>
                        <TextBold>Add</TextBold>
                    </View>
                </View>

            </View>
            <View style={[styles.flexrow, { justifyContent: "flex-start", alignItems: "center" }]}>
                <TextBold style={{ marginTop: 10, marginBottom: 5, fontSize: 18 }}>Add your Pets Profile</TextBold>
                <FontAwesome style={{ marginLeft: 10 }} name="paw" size={24} color={color.accent} />
            </View>
            <View style={[styles.Cardadd]}>
                {/* we need to show this pet after profile added */}
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Image style={[styles.profilepicactive2]} source={require('../assets/images/dog.jpg')} />
                    </View>
                    <View>
                        <TextRegular style={[styles.childrenname]}>Puppy</TextRegular>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: "row", marginHorizontal: 10 }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => setOpenpets(!open)} style={[styles.imageplusadd]}>
                            <AntDesign name="plus" size={30} color={color.neutral[500]} />
                        </TouchableOpacity>
                        <TextBold>Add</TextBold>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={[styles.btnPrimary, styles.flexrow]}
                onPress={() => navigation.navigate('BottomNavigation')}
            >
                <TextMedium style={styles.btnText}>Proceed to Home Screen</TextMedium>
                <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BottomNavigation')} style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
                <TextRegular style={[styles.Skip,]}>Skip for now</TextRegular>
                <MaterialIcons name="keyboard-double-arrow-right" size={24} color={color.fontcolor} />
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.topDummy} />
        <View style={[styles.containerbg]}>
          <TouchableOpacity
            onPress={() => { setOpen(!open); }}
            style={[styles.cancelButtonContainer, { alignItems: "flex-end", }]}>
            <Icon name="cancel" size={30} color={color.neutral[300]} />
          </TouchableOpacity>
          <View
            style={{ alignItems: "center", marginVertical: 10 }}>
            <Image
              style={[styles.profilepic]}
              source={require("../assets/images/user_placeholder.png")}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: "2%",
                right: "38%",
                backgroundColor: "lightgray",
                borderRadius: 50,
                padding: 10,
              }}
              onPress={() => setCameraModal(!cameramodal)}
            >
              <Fontisto name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <Modal animationType="slide" transparent={true} visible={cameramodal}>
            <View style={styles.topCamera}>
              <View style={styles.cameracontainerbg}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <TextBold style={{ marginBottom: 20, fontSize: 18 }}>Upload Image</TextBold>
                  <TouchableOpacity
                    onPress={() => setCameraModal(!cameramodal)}
                    style={[styles.cancelButtonContainerpic, { alignItems: "flex-end", }]}>
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
          </Modal>
          <ScrollView>
            <TextBold>First Name</TextBold>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your first name"
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
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your last name"
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

            <TextBold>Phone Number</TextBold>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your phone number"
              keyboardType="numeric"
              onChangeText={(e) => {
                setPhone(e);
                validateMobileNumber(e, setPhoneError);
              }}
            />
            {phoneError !== "" && (
              <TextBold style={{ marginBottom: 16, color: "red" }}>
                {phoneError}
              </TextBold>
            )}

            <TextBold>Email Address</TextBold>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your mail"
              onChangeText={(e) => {
                setEmail(e);
                validateEmail(e, setEmailError);
              }}
            />
            {emailError !== "" && (
              <TextBold style={{ marginBottom: 16, color: "red" }}>
                {emailError}
              </TextBold>
            )}

            <TextBold>Password</TextBold>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your password"
              onChangeText={(e) => {
                setEmail(e);
                validatePassword(e, setPasswordErr);
              }}
            />
            {passwordErr !== "" && (
              <TextBold style={{ marginBottom: 16, color: "red" }}>
                {passwordErr}
              </TextBold>
            )}
            <View style={[styles.modalcontainer]}>
              <View
                style={[styles.flexrow, { justifyContent: "space-between" }]}
              >

                <TouchableOpacity
                  onPress={() => {
                    setModalopen(!modalopen);
                    setOpen(!open);
                  }}
                  style={[
                    styles.flexrow,
                    styles.Buttoncardinner2,
                    styles.Buttoncardfullwidth,
                  ]}
                >
                  <TextMedium style={[styles.btnPrimaryTextsize]}>
                    Next
                  </TextMedium>
                  <AntDesign
                    style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }}
                    name="right"
                    size={16}
                    color={color.fontcolor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalopen}
      >
        <View style={styles.topDummy} />
        <View style={[styles.containerbg]}>
          <TextBold style={{ marginTop: 15 }}>Relationship</TextBold>
          <Dropdown
            style={styles.dropdownStyle}
            data={relationship}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Relationship"
            searchPlaceholder="Search..."
            onChange={(item) => {
              setRelationship(item.value);
              validateRelationShip(item.value, setRelationshipError);
            }}
          />
          {relationshipError !== "" && (
            <TextBold style={{ marginBottom: 16, color: "red" }}>
              {relationshipError}
            </TextBold>
          )}

          <TextBold>Enter D.O.B</TextBold>
          <TextInput
            style={styles.inputBox}
            placeholderTextColor={styles.textinputcolor}
            placeholder="DD/MM/YYYY"
            onChangeText={(e) => {
              setDob(e);
              validateDob(e, setDobError);
            }}
          />
          {dobError !== "" && (
            <TextBold style={{ marginBottom: 16, color: "red" }}>
              {dobError}
            </TextBold>
          )}

          <TextBold>Gender</TextBold>
          <Dropdown
            style={styles.dropdownStyle}
            data={gender}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Gender"
            searchPlaceholder="Search..."
            onChange={(item) => {
              setSelectedGender(item.value);
              validateGender(item.value, setGenderError);
            }}
          />
          {genderError !== "" && (
            <TextBold style={{ marginBottom: 16, color: "red" }}>
              {genderError}
            </TextBold>
          )}
          <TextBold>Address</TextBold>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={5}
            placeholder="Enter your current address"
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
          <View style={[styles.flexrow, { justifyContent: "space-between" }]}>
            <TouchableOpacity onPress={() => {
              setModalopen(!modalopen);
              setOpen(!open);
            }} style={[styles.Buttoncardinner, styles.Buttoncardwidth]}>
              <View

                style={[styles.flexrow]}
              >
                <TextMedium style={[styles.btnPrimaryTextsize]}>
                  Back
                </TextMedium>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // setOpen(!open)
                setModalopen(!modalopen);
                navigation.navigate("AddingKidsAndPets");
              }}
              style={[
                styles.flexrow,
                styles.Buttoncardinner2,
                styles.Buttoncardwidth,
              ]}
            >
              <TextMedium style={[styles.btnPrimaryTextsize]}>
                Add Profile
              </TextMedium>
              <AntDesign
                style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }}
                name="right"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
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
        marginTop: 8,
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