import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { TextBold, TextMedium, TextRegular } from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";
import {
  Foundation,
  AntDesign,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import { BASEURL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const imgDir = FileSystem.documentDirectory + "images/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

export default function ProfileSetupAfterAdminApproval() {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [modalopen, setModalopen] = useState(false);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [gender, setGender] = useState([
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
    { label: "Others", value: "0" },
  ]);
  const [relationship, setRelationship] = useState([
    { label: "Teacher", value: "1" },
    { label: "Sibling", value: "2" },
    { label: "Friend", value: "0" },
  ]);
  const [roles, setRoles] = useState([{ label: "", value: "" }]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const [userData, setUserData] = useState({});
  const [secondaryPersonData, setSecondaryPersonData] = useState([]);

  /*============================================Validation Start===========================================*/

  // validation of form
  // done by soumya

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

  useEffect(() => {
    const fetchData = async () => {
      // Get the login user info

      const userData = JSON.parse(await AsyncStorage.getItem("userDetails"));
      setUserData(userData);

      // Fetch secondary person data

      axios({
        method: "get",
        url: `${BASEURL}api/mainSecondary/${userData.id}`,
      })
        .then((res) => {
          console.log(res.data);
          setSecondaryPersonData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  const loadImages = async () => {
    console.log("hiiii");
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
    setCameraModal(!cameramodal);

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
      setImage(result.assets[0].uri);
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

  async function ClearData() {
    const keysBeforeRemove = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keysBeforeRemove);
    navigation.navigate("Login");
  }

  /*========================================================Image Upload Functionality end====================================== */

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    setCameraModal(!cameramodal);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const filePath = result.assets[0].uri;
      const pathSegments = filePath.split("/");
      const filename = pathSegments[pathSegments.length - 1];
      setImageName(filename);
    }
  };

  function SubmitData() {
    const formData = new FormData();
    console.log(userData.RoleId);

    // Append the image to formData
    formData.append("file", {
      uri: image, // URI of the image
      name: imageName, // Filename of the image
      type: "image/jpeg",
    });

    const data = {
      FirstName: firstName, // string field
      LastName: lastName, // string field
      Email: email, //string
      Dob: dob, // date format(yyyy-mm-dd)
      Gender: selectedGender, //number
      PhoneNumber: phone, //string
      SSN: ssn, //string
      Password: password, //string
      About: about, // string
      Address: address, // string
      // ProfileImage: image, // This line can be removed if you're already appending the image to formData
      SSNimage: imageName, // Corrected this to use imageName
      Keywords: "keywords", // string
      LoginType: 2, // Login type from google or direct
      RoleId: userData.RoleId, // number
      MainSubscriberId: userData.id, // number
    };

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    axios({
      method: "post",
      url: `${BASEURL}api/subscriberloginsCreateAccount/${userData.id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: formData, // Pass formData as data
    })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("AddingKidsAndPets");
      })
      .catch((error) => {
        console.error("Error occurred:", error); // Log any errors
      });
  }

  return (
    <View style={[styles.container]}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextBold style={[styles.Headingtext]}>
          Let’s Complete your Profile{" "}
        </TextBold>
        <View style={[styles.image]}>
          <Image
            style={[styles.emailimage]}
            source={require("../assets/images/Email-icon.jpeg")}
          />
          <TextRegular style={[styles.subtext, { marginTop: 10 }]}>
            Admin has verified your profile
          </TextRegular>
        </View>
        <TextBold>WELCOME! to Kids Connect</TextBold>
        <View style={[styles.Card]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ alignItems: "center" }}>
              <View>
                <Image
                  style={[styles.profilepic]}
                  source={{ uri: userData.ProfileImage }}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextRegular style={[styles.childrenname]}>
                  {userData.FirstName}
                  <TextRegular style={{ fontSize: 14, color: color.success }}>
                    ({userData.IsMain == 1 ? "Primary" : "Secondary"})
                  </TextRegular>
                </TextRegular>
                <Foundation
                  style={{ marginLeft: 8, marginTop: 2 }}
                  name="info"
                  size={16}
                  color={color.neutral[500]}
                />
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              {secondaryPersonData.length == 0 && (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen(!open);
                    }}
                    style={[styles.imageplus]}
                  >
                    <AntDesign
                      name="plus"
                      size={40}
                      color={color.neutral[500]}
                    />
                  </TouchableOpacity>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TextRegular style={{ fontSize: 14 }}>
                      Add Secondary Persons
                    </TextRegular>
                    <Foundation
                      style={{ marginLeft: 8, marginTop: 2 }}
                      name="info"
                      size={16}
                      color={color.neutral[500]}
                    />
                  </View>
                </>
              )}

              {secondaryPersonData.length > 0 && (
                <>
                  <View>
                    <Image
                      style={[styles.profilepic]}
                      source={{
                        uri: BASEURL + secondaryPersonData[0].ProfileImage,
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TextRegular style={[styles.childrenname]}>
                      {secondaryPersonData[0].FirstName}
                      <TextRegular
                        style={{ fontSize: 14, color: color.success }}
                      >
                        (
                        {secondaryPersonData[0].IsMain == 1
                          ? "Primary"
                          : "Secondary"}
                        )
                      </TextRegular>
                    </TextRegular>
                    <Foundation
                      style={{ marginLeft: 8, marginTop: 2 }}
                      name="info"
                      size={16}
                      color={color.neutral[500]}
                    />
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
        {/* <Button title="Clear" onPress={() => ClearData()} /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate("AddingKidsAndPets")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <TextRegular style={[styles.Skip]}>Skip for now</TextRegular>
          <MaterialIcons
            name="keyboard-double-arrow-right"
            size={24}
            color={color.fontcolor}
          />
        </TouchableOpacity>
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.topDummy} />
        <View style={[styles.containerbg]}>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            style={[styles.cancelButtonContainer, { alignItems: "flex-end" }]}
          >
            <Icon name="cancel" size={35} color={color.neutral[300]} />
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            {image && (
              <>
                <Image source={{ uri: image }} style={[styles.profilepic]} />
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
              </>
            )}
            {!image && (
              <>
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
              </>
            )}
          </View>
          <Modal animationType="slide" transparent={true} visible={cameramodal}>
            <View style={styles.topCamera}>
              <View style={styles.cameracontainerbg}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TextBold style={{ marginBottom: 20, fontSize: 18 }}>
                    Upload Image
                  </TextBold>
                  <TouchableOpacity
                    onPress={() => setCameraModal(!cameramodal)}
                    style={[
                      styles.cancelButtonContainerpic,
                      { alignItems: "flex-end" },
                    ]}
                  >
                    <Icon name="cancel" size={30} color={color.neutral[300]} />
                  </TouchableOpacity>
                </View>
                <View style={styles.cameraModal}>
                  <View>
                    <TouchableOpacity
                      style={[{ alignSelf: "center" }]}
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
                      style={[{ alignSelf: "center" }]}
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
                setPassword(e);
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
      <Modal animationType="slide" transparent={true} visible={modalopen}>
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
            <TouchableOpacity
              onPress={() => {
                setModalopen(!modalopen);
                setOpen(!open);
              }}
              style={[styles.Buttoncardinner, styles.Buttoncardwidth]}
            >
              <View style={[styles.flexrow]}>
                <TextMedium style={[styles.btnPrimaryTextsize]}>
                  Back
                </TextMedium>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // setOpen(!open)
                setModalopen(!modalopen);
                // navigation.navigate("AddingKidsAndPets");
                SubmitData();
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
    </View>
  );
}
const styles = StyleSheet.create({
  cancelButtonContainerpic: {
    position: "absolute",
    top: 1,
    right: 1,
  },
  cancelButtonContainer: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  topDummy: {
    flex: 1,
    opacity: 0,
  },
  topCamera: {
    flex: 1,
    justifyContent: "flex-end",
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
    marginVertical: 16,
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
    borderWidth: 0.8,
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
});
