import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Modal,
  Platform, Alert
} from "react-native";
import {
  TextBold,
  TextLight,
  TextMedium,
  TextRegular,
} from "../assets/fonts/CustomText";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../assets/colors/theme";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { BASEURL } from "@env";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";
import OpenCameraModal from "../components/OpenCameraModal";
import Login from "./Login";

const imgDir = FileSystem.documentDirectory + "images/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

export default function ProfileVerification({ route, navigation }) {
  // const navigation = useNavigation();

  const [img, setImg] = useState(null);

  const [image, setImage] = useState('');
  const [imageName, setImageName] = useState("");
  const [gender, setGender] = useState([
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
    { label: "Others", value: "0" },
  ]);
  const [roles, setRoles] = useState([{ label: "", value: "" }]);
  // const [email, setEmail] = useState('');
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
  const [mailError, setMailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [aboutErr, setAboutErr] = useState("");
  const [ssnErr, setSsnErr] = useState("");
  const [roleErr, setRoleErr] = useState("");
  const [dobErr, setDobErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [cameramodal, setCameraModal] = useState(false);

  // Validation of form
  // Done by soumya
  /*=================================== Validation Start=================================*/



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

  const validateAbout = (about, setAboutErr) => {
    if (about.trim() === "") {
      setAboutErr("About section is required");
      return false;
    } else {
      setAboutErr("");
      return true;
    }
  };

  const validateSsn = (ssn, setSsnErr) => {
    const regex = /^\d{3}-\d{2}-\d{4}$/;
    if (!regex.test(ssn)) {
      setSsnErr("Please enter a valid SSN (###-##-####)");
      return false;
    } else {
      setSsnErr("");
      return true;
    }
  };

  const validateRole = (selectedRole, setRoleErr) => {
    if (!selectedRole) {
      setRoleErr("Role is required");
      return false;
    } else {
      setRoleErr("");
      return true;
    }
  };

  const validateDob = (dob, setDobErr) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(dob)) {
      setDobErr("Please enter a valid date in the format YYYY-MM-DD");
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

  /*======================================Validation End======================================*/

  // Fetching user roles
  // Done by Soumya
  /* =====================================Fetching user roles start=========================================*/

  useEffect(() => {
    axios({
      method: "get",
      url: `${BASEURL}api/roles`,
    })
      .then((res) => {
        const roleData = res.data.data.map((role) => ({
          label: role.role.charAt(0).toUpperCase() + role.role.slice(1),
          value: role.id,
        }));
        setRoles(roleData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  /* =====================================Fetching user roles end=========================================*/

  /*=======================================Open camera================================================== */

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
    console.log(files);
    // if (files.length > 0) {
    //   setImage(files.map((f) => imgDir + f));
    // }
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

    setCameraModal(!cameramodal);
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
      // saveImage(result.assets[0].uri);
    }
  };

  /*============================================Access camera end============================================= */

  /*============================================Image pick from gallery start ================================== */

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result, "vzsvs");
    //   img = result.assets[0].uri;
    //   console.log(img, "img")
    //   setImage(img)
    setCameraModal(!cameramodal);
    if (!result.canceled && result.assets.length > 0) {
      console.log("hiiii");
      const selectedImage = result.assets[0];
      // console.log(selectedImage.uri);
      setImg(result.assets[0].uri);
      // setImage(result);

      const fileName =
        Platform.OS === "ios"
          ? selectedImage.uri.split("/").pop()
          : selectedImage.uri.split("\\").pop();
      console.log(fileName, "jxhjxgj");
      // Get the file extension from the fileName
      const fileExtension = fileName.split(".").pop().toLowerCase();

      // Determine the MIME type based on the file extension
      let mimetype = "";
      if (fileExtension === "jpg" || fileExtension === "jpeg") {
        mimetype = "image/jpeg";
      } else if (fileExtension === "png") {
        mimetype = "image/png";
      }

      setImageName(fileName); // Use fileName directly
      setMimeType(mimetype);
      console.log(mimetype);
    }
  };



  /*============================================Image pick from gallery end ================================== */

  function SubmitData() {
    console.log(img);
    console.log(imageName);
    console.log(mimeType);
    const formData = new FormData();

    // Append the image to formData
    formData.append("ProfileImage", {
      uri: img,
      name: imageName,
      type: mimeType,
    });

    let susbsriberdata = {};

    susbsriberdata = {
      RoleId: roleId,
      FirstName: firstName,
      LastName: lastName,
      Dob: dob,
      Gender: selectedGender,
      PhoneNumber: phone,
      SSN: ssn,
      Password: pwd,
      About: about,
      Address: address,
    };

    Object.keys(susbsriberdata).forEach((key) => {
      formData.append(key, susbsriberdata[key]);
    });

    axios({
      method: "post",
      url: `${BASEURL}api/subscriberlogins`,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
        alert("Form submitted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function alertregister() {
    Alert.alert(
      "Successfully Registered",
      "You have successfully registered!",
      [
        { text: 'OK', onPress: () => navigation.navigate("ProfileSetupAfterAdminApproval") },
      ]
    );
  }

  return (
    <ScrollView
      style={styles.containertop}
      showsVerticalScrollIndicator={false}
    >

      <View style={[styles.flexrow, styles.mb10]}>
        {/* <AntDesign
          style={[styles.mr10, styles.arrowback]}
          name="arrowleft"
          size={24}
        /> */}
        <TextBold style={[styles.back, { marginLeft: 20 }]}>Step 3 of 3</TextBold>
      </View>

      <View style={[styles.container]}>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
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
                  padding: 8,
                }}
                onPress={() => setCameraModal(!cameramodal)}
              >
                <Fontisto name="camera" size={15} color="black" />
              </TouchableOpacity>
            </>
          )}
          {image && (
            <>
              <Image
                source={{ uri: image }}
                style={[styles.profilepic]}
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
        <TextBold style={[styles.Headingtextinput]}>About</TextBold>
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={5}
          placeholder="Write about yourself"
          onChangeText={(e) => {
            setAbout(e);
            validateAbout(e, setAboutErr);
          }}
        />
        {aboutErr !== "" && (
          <TextBold style={{ marginBottom: 16, color: "red" }}>
            {aboutErr}
          </TextBold>
        )}
        <TextBold style={[styles.Headingtextinput]}>First Name</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
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
        <TextBold style={[styles.Headingtextinput]}>Last Name</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="Enter your last name"
          onChangeText={(e) => {
            setLastName(e);
            validateLastName(e, setLastNameErr);
          }}
        />

        <TextBold style={[styles.Headingtextinput]}>Email Address</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="Enter your mail"
        />


        <TextBold style={[styles.Headingtextinput]}>Phone Number</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="Enter your phone number"
        // onChangeText={(e) => {
        //   setPhone(e);
        //   validateMobileNumber(e, setMobileError);
        // }}
        />

        {/* <TextBold style={{ marginBottom: 16, color: "red" }}>{dobErr}</TextBold> */}
        <TextBold style={[styles.Headingtextinput]}>Gender</TextBold>
        <Dropdown
          style={styles.dropdownStyle}
          data={gender}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Gender"
          searchPlaceholder="Search..."
        // onChange={(item) => {
        //   setSelectedGender(item.value);
        //   validateGender(item.value, setGenderErr);
        // }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color="#3D833F"
        //     name="Safety"
        //     size={20}
        //   />
        // )}
        />


        {/* <TextBold style={{ marginBottom: 16, color: 'red' }}>{lastNameErr}</TextBold> */}
        <TextBold style={[styles.Headingtextinput]}>Select Relationship</TextBold>
        <Dropdown
          style={styles.dropdownStyle}
          data={roles}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select role"
          searchPlaceholder="Search..."
          onChange={(item) => {
            setRoleId(item.value);
            validateRole(item.value, setRoleErr);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="#3D833F"
              name="Safety"
              size={20}
            />
          )}
        />

        <TextBold style={[styles.Headingtextinput]}>Enter D.O.B</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="DD/MM/YYYY"
          onChangeText={(e) => {
            setDob(e);
            validateDob(e, setDobErr);
          }}
        />

        <TextBold style={[styles.Headingtextinput]}>Street Address</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="Enter your phone number"
          onChangeText={(e) => {
            setPhone(e);
            validateMobileNumber(e, setMobileError);
          }}
        />

        <TextBold style={[styles.Headingtextinput]}>City</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="Enter your phone number"
          onChangeText={(e) => {
            setPhone(e);
            validateMobileNumber(e, setMobileError);
          }}
        />

        <TextBold style={[styles.Headingtextinput]}>State</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="Enter your phone number"
          onChangeText={(e) => {
            setPhone(e);
            validateMobileNumber(e, setMobileError);
          }}
        />

        <TextBold style={[styles.Headingtextinput]}>Zipcode</TextBold>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor={styles.textinputcolor}
          placeholder="Enter your phone number"
          onChangeText={(e) => {
            setPhone(e);
            validateMobileNumber(e, setMobileError);
          }}
        />






        <TouchableOpacity
          style={[styles.submitButton, { marginBottom: 15, marginTop: 20 }]}
          onPress={alertregister}
        // onPress={SubmitData}
        >
          <TextMedium style={styles.submitButtonText}>Register</TextMedium>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={cameramodal}>
        <View style={styles.topCamera}>
          <OpenCameraModal
            OpenCamera={() => OpenCamera()}
            pickImage={() => pickImage()}
            close={() => setCameraModal(!cameramodal)}
          />
        </View>
      </Modal>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
  },
  Headingtextinput:
  {

    marginTop: 10,
  },
  inputBox: {
    padding: 10,
    borderColor: color.neutral[300],
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    width: "100%",
  },
  profilepic: {
    marginRight: 8,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  back: {
    fontSize: 18,
    // color: color.primary,
  },
  ml50: {
    marginLeft: 50,
  },
  mr10: {
    marginRight: 10,
  },
  arrowback: {
    // color: color.primary,
    marginLeft: 15,
  },

  justiffsb: {
    justifyContent: "space-between",
  },
  mb10: {
    marginBottom: 10,
  },
  flexrow: {
    flexDirection: "row",
  },
  container: {
    padding: 15,
    justifyContent: "center",
  },
  containertop: {
    marginTop: 10,
    // justifyContent: 'center'
    flex: 1,
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
  topCamera: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: 'center',
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    padding: 10,
    borderColor: color.neutral[300],
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    width: "100%",
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: color.primary,
    padding: 15,
    alignSelf: "center",
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
  },
  submitButtonText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20
  },
});