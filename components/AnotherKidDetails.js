import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { TextBold, TextMedium, TextRegular } from "../assets/fonts/CustomText"
import { color } from "../assets/colors/theme"
import { FontAwesome, MaterialIcons, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import {
    Feather, FontAwesome6, FontAwesome5
} from "@expo/vector-icons";
import { TextInput } from "react-native";

export default function AnotherKidDetails({ close, name }) {
    const navigation = useNavigation();

    return (

        <ScrollView>
            <View style={[styles.container, styles.containermain]}>
                <TouchableOpacity
                    onPress={close}
                    style={[styles.cancelButtonContainer, { alignItems: "flex-end" }]}
                >
                    <Icon name="cancel" size={30} color={color.neutral[300]} />
                </TouchableOpacity>
                <View style={[styles.padding]}>
                    <View style={{ flexDirection: "row" }} >
                        <View style={[{ width: "30%" }, styles.profileName]}>
                            <Image style={[styles.profilepic]} source={require('../assets/images/KID.jpg')} />
                        </View>
                        <View style={[{ width: "70%", }, styles.profileName]}>
                            <TextBold style={{ fontSize: 12 }}>Fanwood HighSchool Aryan Profile Shreyas, 14 loves outdoor adventures, sports, art, and tech exploration. Each activity fuels his curiosity and passion for discovering the world's wonders.
                            </TextBold>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ marginTop: 10 }}>30+ Connections </Text>
                                <Feather name="arrow-up-right" size={20} color="black" />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.edithobbies]}>
                        <TextBold>Hobbies</TextBold>
                        <View style={[styles.designedit]}>
                            <TouchableOpacity>
                                <FontAwesome5 name="edit" size={13} color="#FFC107" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.flexrow, { flexWrap: "wrap" }]}>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Playstation </TextRegular>
                        </View>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Swimming</TextRegular>
                        </View>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Vlogging</TextRegular>
                        </View>
                        <View style={[styles.Tags2]}>
                            <TextRegular>Soccer</TextRegular>
                        </View>
                    </View>

                    <View style={[styles.border]}>
                        <TextBold style={{ marginBottom: 10, }}>
                            Open to Connections
                        </TextBold>
                        <View style={[styles.flexrow, { flexWrap: "wrap" }]}>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Tank Bund </TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Movie</TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>16th April, 2024</TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Shopping</TextRegular>
                            </View>
                            <View style={[styles.Tags1]}>
                                <TextRegular>Between 10am-5:30pm</TextRegular>
                            </View>
                        </View>

                    </View>
                </View>
                <TextBold style={{ fontSize: 20, }}>Family Profile</TextBold>
                <View style={[styles.flexrow, { marginTop: 5 }]}>
                    <View style={{ marginRight: 10, justifyContent: "center", alignItems: "center" }}>
                        <View>
                            <Image style={[styles.profilepicactive]} source={require('../assets/images/2women.jpg')} />
                        </View>

                    
                        <View style={{ flexDirection: "row"}}>
                            <TextRegular style={[styles.childrenname]}>Tulika</TextRegular><Feather name="arrow-up-right" size={15} color="black" />
                        </View>
                        <TextRegular style={{fontSize:12}}>Mather</TextRegular>
                    </View>
                    <View style={{ marginRight: 10, justifyContent: "center", alignItems: "center" }}>
                        <View>
                            <Image style={[styles.profilepicactive]} source={require('../assets/images/2men3.jpg')} />
                        </View>
                        <View style={{ flexDirection: "row"}}>
                            <TextRegular style={[styles.childrenname]}>Rakesh</TextRegular><Feather name="arrow-up-right" size={15} color="black" />
                        </View>
                        <TextRegular style={{fontSize:12}}>Father</TextRegular>
                    </View>
                    
                </View>
               <View>
               <TextBold style={{fontSize:18,marginTop:10}}>Meeting Location</TextBold>
                <Text>
                    199 Oakway Lane,Woodland Hills,CA
                </Text>
                <Text> 91303</Text>
               </View>

               <View style={{marginTop:15}}>
               <Text>We Selected based on </Text>
               </View>
               {/* <View style={[styles.bgfull,]}>
                <View style={{ marginHorizontal: 15 }}>
                    <TextRegular style={{ fontSize: 16 }}>Kids Available only on Weekends</TextRegular>
                </View>
            </View> */}
             <View style={[styles.border1]}>
                       
                        <View style={[styles.flexrow, { flexWrap: "wrap" }]}>
                            <View style={[styles.Tags3]}>
                                <TextRegular>Movies </TextRegular>
                            </View>
                            <View style={[styles.Tags3]}>
                                <TextRegular>10+ Connection</TextRegular>
                            </View>
                            <View style={[styles.Tags3]}>
                                <TextRegular>Age 11-17</TextRegular>
                            </View>
                            <View style={[styles.Tags3]}>
                                <TextRegular>3-5hrs</TextRegular>
                            </View>
                           
                        </View>

                    </View>
               <View>
                <Text style={{fontSize:15,marginTop:10}}>Modify Requests</Text>
                
            </View>
            </View>

           

           
            <View style={[styles.bgfull2, { paddingVertical: 5 }]}>
                <View style={[styles.container]}>
                </View>
            </View>
            <View style={[styles.bgfull2,]}>
                <View style={[styles.container]}>
                    <View style={[styles.flexrow, { paddingVertical: 5 }]}>
                        <Entypo name="block" style={{ marginRight: 10, }} size={20} color={color.secondaryOrange} />
                        <TextRegular style={{ fontSize: 18, color: color.secondaryOrange }}>Block Abay</TextRegular>
                    </View>
                    <View style={[styles.flexrow, { paddingVertical: 5 }]}>
                        <AntDesign style={{ marginRight: 10 }} name="dislike1" size={20} color={color.secondaryOrange} />
                        <TextRegular style={{ fontSize: 18, color: color.secondaryOrange }}>Report Abay</TextRegular>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    mv10: {
        marginVertical: 10,
    },
    justalinecenter: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    jcfs: {
        justifyContent: "flex-start"
    },
    bgfull2: {
        backgroundColor: color.white,
        paddingVertical: 10
    },
    bgfull: {
        backgroundColor: color.primary,
        paddingVertical: 20
    },
    profilepicactive: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    bgclr: {
        backgroundColor: color.primary,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8
    },
    textnetural: {
        color: color.neutral[500],
    },
    flexrow: {
        flexDirection: "row"
    },
    mobilrnumber: {
        fontSize: 14,
    },
    childrenname: {
        fontSize: 18,
    },
    profilepic: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
    },

    profilepicchat: {
        marginRight: 12,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    containermain: {
        padding: 25,
        marginTop: 20,
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
    container: {
        paddingHorizontal: 15,
        backgroundColor: color.white,
    },
    edithobbies: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",

    },
    
    flexrow: {
        flexDirection: "row",
    },
    Tags2: {
        backgroundColor: color.white,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4,
    },
    
    Tags1: {
        backgroundColor: color.primary,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4,
    },
    Tags3: {
        backgroundColor: color.white,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        margin: 4,
    },
    border: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.primary,
        backgroundColor: color.white,
        padding: 16,
        marginVertical: 20,
    },

    border1: {
        borderWidth: 1,
        borderRadius:1,
        borderColor: color.primary,
        backgroundColor: color.neutral[300],
        // padding: 16,
        marginVertical: 20,
    },

})