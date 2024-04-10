import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Text, Image, Pressable, Platform, TouchableOpacity, Modal, TextInput, Switch, TouchableWithoutFeedback } from 'react-native'
import { TextBold, TextLight, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { color } from '../assets/colors/theme';
import { AntDesign, MaterialIcons, Foundation, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tickIcon from '../assets/images/tick.png';


export default function ProfileSetup() {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [kidopen, setKidopen] = useState(false);
    const [petopen, setPetopen] = useState(false);
    const [circle, setCircle] = useState(false);
    const [openRequest, setOpenRequest] = useState(false);
    const [requests, setRequests] = useState(false);
    const [selected, setSelected] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [dogSelect, setDogSelect] = useState(false);

    const onClose = () => {
        setOpen(false);
        setKidopen(false);
        setPetopen(false);
    };
    const handleLongPress = () => {
        setSelected(!selected);
    };

    const handlepressdog = () => {
        setDogSelect(!dogSelect);
    };
    const handlePress = () => {
        setIsSelected(!isSelected);
    };
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <TextRegular style={[styles.subtext]}><TextBold style={[styles.Headingtext]}>Madisson, </TextBold>
                    Let’s set up perfect connection for you lovable ones</TextRegular>

                <View>
                    <ProgressSteps
                        activeStepIconBorderColor={color.secondaryOrange}
                        activeStepIconColor="yourDesiredColor"
                        activeStepIconBorderWidth={1}
                        completedStepIconColor={color.secondaryOrange}
                        completedProgressBarColor={color.secondaryOrange}
                        activeStepNumColor="yourActiveStepNumColor"
                        completedStepNumColor="yourCompletedStepNumColor"
                    >
                        <ProgressStep label="Profile Setup"

                            nextBtnStyle={styles.customNextButton}
                            nextBtnTextStyle={styles.customNextButtonText}
                            nextBtnText="Proceed"
                            renderNextButton={() => (

                                <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                                    <TouchableOpacity
                                        // onPress={() => { setModalopen(!modalopen); setOpen(!open); }}
                                        style={[styles.Buttoncardinner, styles.Buttoncardwidth,]}>
                                        <View
                                            style={[styles.flexrow]}>
                                            <TextMedium style={[styles.btnPrimaryTextsize]}>Back</TextMedium>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        // onPress={() => {
                                        //     setModalopen(!modalopen)
                                        //     navigation.navigate('AddingKidsAndPets');
                                        // }}
                                        style={[styles.flexrow, styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                                        <TextMedium style={[styles.btnPrimaryTextsize]}>Add Profile</TextMedium>
                                        <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
                                    </TouchableOpacity>
                                </View>
                            )}>
                            <View style={[styles.Card]}>
                                <View>
                                    <TextBold style={[styles.Headingtext]}>Choose Your Kids </TextBold>
                                    <View style={[styles.flexrow, { justifyContent: 'space-around' }]}>
                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={handlePress}>
                                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                                {isSelected && <Image style={styles.tickIcon2} source={tickIcon} />}
                                            </TouchableOpacity>
                                            <View>
                                                <TextRegular style={[styles.childrenname]}>Samanthaa</TextRegular>
                                            </View>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity>
                                                <AntDesign name="pluscircle" size={75} color={color.accent} />
                                            </TouchableOpacity>
                                            <View>
                                                <TextRegular style={[styles.childrenname]}>Add</TextRegular>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <TextBold style={[styles.Headingtext]}>Choose Pets Profiles</TextBold>
                                        <View style={[styles.flexrow, { justifyContent: 'space-around' }]}>

                                            <View style={{ alignItems: 'center' }}>
                                                <TouchableOpacity onPress={handlepressdog}>
                                                    <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                                    {dogSelect && <Image style={styles.tickIcon2} source={tickIcon} />}
                                                </TouchableOpacity>
                                                <View>
                                                    <TextRegular style={[styles.childrenname]}>Trippy</TextRegular>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center' }}>
                                                <TouchableOpacity>
                                                    <AntDesign name="pluscircle" size={75} color={color.accent} />
                                                </TouchableOpacity>
                                                <View>
                                                    <TextRegular style={[styles.childrenname]}>Add</TextRegular>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TextBold style={[styles.Headingtext]}>Description about Jay.jr</TextBold>
                                <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Explain your kids interests and Hobbies which makes easier to connect with other Kids."
                                />
                                <TextRegular style={{ textAlign: 'right', color: color.neutral[500], marginRight: 5 }}>70 words</TextRegular>
                                <TextBold style={[styles.Headingtext]}>Jay’s Interest, Hobbies here</TextBold>

                                <View style={styles.textAreaInterests} >
                                    <View style={[styles.flexrow, { alignItems: "center" }]}>
                                        <View style={[styles.Tags2, { alignItems: "center" }]}>
                                            <TextRegular style={{ fontSize: 16 }}>3-5hrs</TextRegular>
                                            <MaterialIcons style={{ marginLeft: 5 }} name="cancel" size={18} color={color.accent} />
                                        </View>
                                        <View style={[styles.Tags2, { alignItems: "center" }]}>
                                            <TextRegular style={{ fontSize: 16 }}>3-5hrs</TextRegular>
                                            <MaterialIcons style={{ marginLeft: 5 }} name="cancel" size={18} color={color.accent} />
                                        </View>

                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", marginLeft: 10 }}>
                                            <TextRegular style={{ fontSize: 16, paddingRight: 5 }}>Add</TextRegular>

                                            <View style={{ alignItems: 'center' }}>
                                                <View style={[styles.imageplusaddInterests]}>
                                                    <AntDesign name="plus" size={12} color={color.neutral[500]} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={[styles.flexrow, { alignItems: "center" }]}>
                                    <Ionicons name="attach" size={24} color="black" />
                                    <TextBold style={[styles.Headingtext]}>Attachments</TextBold>
                                </View>
                                <View style={styles.textAreaadd}>
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <AntDesign name="pluscircle" size={75} color={color.neutral[500]} />
                                        </TouchableOpacity>
                                        <View>
                                            <TextRegular style={[styles.childrenname]}>Upload from Mobile</TextRegular>
                                        </View>
                                    </View>
                                </View>
                                <TextBold style={{ fontSize: 16, marginBottom: 50 }}>Note: <TextRegular style={{ color: color.secondaryOrange }}>Upload documents name less than 10 characters</TextRegular></TextBold>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Tags Setup" >
                            <View>


                                <TextBold style={[styles.Headingtext]}>Choose from...</TextBold>

                                <TouchableOpacity onPress={() => {
                                    setOpen(!open);
                                    setKidopen(!kidopen);
                                }}
                                    style={[styles.Buttoncardinner, styles.Buttoncardfullwidth,]}>
                                    <View
                                        style={[styles.flexrow]}>
                                        <TextMedium style={[styles.btnPrimaryTextsize]}>Open Modal</TextMedium>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </ProgressStep>
                    </ProgressSteps>
                </View>
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={kidopen}>
                <View style={styles.topDummy} />

                <View style={[styles.containerbg]}>
                    <TouchableOpacity
                        onPress={() => { setOpen(!open); setKidopen(!kidopen); }}
                        style={[styles.cancelButtonContainer, { alignItems: "flex-end", }]}>
                        <Icon name="cancel" size={30} color={color.neutral[300]} />
                    </TouchableOpacity>
                    <TextRegular style={{ textAlign: "center", color: color.secondaryOrange }}>You have selected 8:00 PM, on March 2024</TextRegular>
                    <TextInput style={{ fontSize: 24, marginTop: 20, marginBottom: 5 }}
                        placeholder="Request Title" />
                    <View style={styles.line} />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ alignItems: "flex-end" }}>
                            <TextRegular>/50 Characters</TextRegular>
                        </View>
                        <View style={[styles.flexrow, { justifyContent: "space-between", marginTop: 12 }]}>
                            <View>
                                <TextRegular style={{ fontSize: 20 }}>Start Date</TextRegular>
                                <TextInput style={styles.inputBox}
                                    placeholder="23/02/2024" />
                            </View>
                            <View>
                                <TextRegular style={{ fontSize: 20 }}>End Date</TextRegular>
                                <TextInput style={styles.inputBox}
                                    placeholder="23/02/2024" />
                                <View style={{ alignItems: "center" }}>
                                    <TextRegular>Same as start date</TextRegular>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.line, { marginTop: 20 }]} />
                        <View style={[styles.flexrow, { marginTop: 5, alignItems: "center" }]}>
                            <Feather name="arrow-up-right" size={20} color={color.neutral[300]} />
                            <TextRegular style={{ fontSize: 20, marginLeft: 8 }}>Post Request on </TextRegular>
                        </View>
                        <View style={[styles.flexrow, { justifyContent: "space-between" }]}>
                            <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                                <View >
                                    <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Circle</TextBold>
                                </View>
                                <Switch
                                    trackColor={{ false: color.secondaryOrange, true: color.success }}
                                    thumbColor={circle ? color.white : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setCircle(previousState => !previousState)}
                                    value={circle}
                                />
                            </View>
                            <View style={[styles.flexrow, { justifyContent: "space-between", alignItems: "center" }]}>
                                <View >
                                    <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Open Request </TextBold>
                                </View>
                                <Switch
                                    trackColor={{ false: color.secondaryOrange, true: color.success }}
                                    thumbColor={openRequest ? color.white : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setOpenRequest(previousState => !previousState)}
                                    value={openRequest}
                                />
                            </View>
                        </View>
                        <View style={[styles.flexrow, { justifyContent: "flex-start", alignItems: "center" }]}>
                            <View >
                                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>Individual Bulk Requests</TextBold>
                            </View>
                            <Switch
                                trackColor={{ false: color.secondaryOrange, true: color.success }}
                                thumbColor={requests ? color.white : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setRequests(previousState => !previousState)}
                                value={requests}
                            />
                        </View>

                        {/* contacts */}
                        <TextRegular style={{ fontSize: 18, marginBottom: 10 }}>Select People to send bulk requets </TextRegular>
                        <View style={styles.line} />
                        {/* main start */}
                        <TouchableWithoutFeedback onLongPress={handleLongPress}>
                            <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                                <View style={[styles.flexrow, styles.justalinecenter]}>
                                    <View>
                                        <Image style={[styles.profilepicselect, selected && styles.selected]} source={require('../assets/images/women.png')} />
                                        {selected && <MaterialIcons name="check-circle" size={24} color="green" style={styles.tickIcon} />}
                                    </View>
                                    <View style={styles.jcfs}>
                                        <View style={[styles.flexrow,]}>
                                            <TextMedium style={[styles.childrenname]}>College Naveen</TextMedium>
                                        </View>
                                        <TextRegular style={[styles.textnetural]}>Hi, I hope you're good and well.</TextRegular>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        {/* main end */}

                        {/* dummy start */}

                        <TouchableWithoutFeedback onLongPress={handleLongPress}>
                            <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                                <View style={[styles.flexrow, styles.justalinecenter]}>
                                    <View>
                                        <Image style={[styles.profilepicselect, selected && styles.selected]} source={require('../assets/images/women.png')} />
                                        {selected && <MaterialIcons name="check-circle" size={24} color="green" style={styles.tickIcon} />}
                                    </View>
                                    <View style={styles.jcfs}>
                                        <View style={[styles.flexrow,]}>
                                            <TextMedium style={[styles.childrenname]}>College Naveen</TextMedium>
                                        </View>
                                        <TextRegular style={[styles.textnetural]}>Hi, I hope you're good and well.</TextRegular>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onLongPress={handleLongPress}>
                            <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                                <View style={[styles.flexrow, styles.justalinecenter]}>
                                    <View>
                                        <Image style={[styles.profilepicselect, selected && styles.selected]} source={require('../assets/images/women.png')} />
                                        {selected && <MaterialIcons name="check-circle" size={24} color="green" style={styles.tickIcon} />}
                                    </View>
                                    <View style={styles.jcfs}>
                                        <View style={[styles.flexrow,]}>
                                            <TextMedium style={[styles.childrenname]}>College Naveen</TextMedium>
                                        </View>
                                        <TextRegular style={[styles.textnetural]}>Hi, I hope you're good and well.</TextRegular>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onLongPress={handleLongPress}>
                            <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                                <View style={[styles.flexrow, styles.justalinecenter]}>
                                    <View>
                                        <Image style={[styles.profilepicselect, selected && styles.selected]} source={require('../assets/images/women.png')} />
                                        {selected && <MaterialIcons name="check-circle" size={24} color="green" style={styles.tickIcon} />}
                                    </View>
                                    <View style={styles.jcfs}>
                                        <View style={[styles.flexrow,]}>
                                            <TextMedium style={[styles.childrenname]}>College Naveen</TextMedium>
                                        </View>
                                        <TextRegular style={[styles.textnetural]}>Hi, I hope you're good and well.</TextRegular>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        {/* dummy end */}

                    </ScrollView>
                    <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                        <TouchableOpacity
                            style={[styles.Buttoncardinner, styles.Buttoncardwidthhalf,]}>
                            <View
                                style={[styles.flexrow]}>
                                <TextMedium style={[styles.btnPrimaryTextsize]}>Save</TextMedium>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Confirmation")}
                            style={[styles.Buttoncardinner2, styles.Buttoncardwidthhalf,]}>
                            <TextMedium style={[styles.btnPrimaryTextsize]}>Upload Request</TextMedium>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ScrollView >
    )
}
const styles = StyleSheet.create({
    imageplusaddInterests: {
        padding: 3,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 100,
        marginRight: 10,
        backgroundColor: color.accent
    },
    textAreaInterests: {
        marginVertical: 5,
        flexWrap: 'wrap',
        justifyContent: "flex-start",
        padding: 10,
        borderColor: color.accent,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 16
    },
    customNextButton: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: color.primary,
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 16,
        marginVertical: 16,
    },
    textAreaadd: {
        marginVertical: 5,
        textAlignVertical: 'top',
        paddingVertical: 20,
        borderColor: color.primary,
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
    },
    textArea: {
        marginVertical: 5,
        textAlignVertical: 'top',
        padding: 10,
        borderColor: color.primary,
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
    },
    customNextButtonText: {
        fontSize: 20,
        color: color.fontcolor
    },
    jcfs: {
        justifyContent: "flex-start"
    },
    textnetural: {
        color: color.neutral[500],
        marginVertical: 4,
        fontSize: 16,
    },
    mv10: {
        marginVertical: 10,
    },
    justalinecenter: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    profilepicselect: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },

    tickIcon2: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 100,
        width: 30,
        height: 30,
    },
    tickIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    btnPrimaryTextsize: {
        fontSize: 20,
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
        marginVertical: 16,
    },
    Buttoncardwidthhalf: {
        width: '48%'
    },
    inputBox: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        fontSize: 18,
        width: '100%',
    },
    cancelButtonContainer: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: color.neutral[300],
    },
    containerbg: {
        padding: 15,
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
    Buttoncardfullwidth: {
        width: '100%'
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
    Tags2: {
        // backgroundColor: color.neutral[100],
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        borderColor: color.accent,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 4
    },
    Tags: {
        backgroundColor: color.neutral[100],
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 4
    },
    endtime: {
        color: color.secondaryOrange,
        fontSize: 12
    },
    profilepic: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    Card1: {
        borderRadius: 10,
        marginVertical: 10,
        padding: 14,
        backgroundColor: color.white,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    profilepicactive2: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: color.accent,
        borderWidth: 3
    },
    profilepicactive: {
        marginRight: 8,
        width: 80,
        height: 80,
        borderRadius: 50,
        borderColor: color.accent,
        borderWidth: 2
    },
    childrenname: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    arrow: {
        marginLeft: 2,
        marginTop: 3
    },
    flexrow: {
        flexDirection: 'row',
    },
    dot: {
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    Buttoncardwidth: {
        width: '60%'
    },
    Buttoncard: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary,
        paddingVertical: 16,
    },
    Card: {
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: color.accent,
        backgroundColor: color.white,
        // ...Platform.select({
        //     ios: {
        //         shadowColor: '#000',
        //         shadowOffset: { width: 0, height: 2 },
        //         shadowOpacity: 0.25,
        //         shadowRadius: 3.84,
        //     },
        //     android: {
        //         elevation: 5,
        //     },
        // }),
    },
    subtext: {
        fontSize: 16,
    },
    Headingtext: {
        fontSize: 20,
        marginVertical: 5,
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
});