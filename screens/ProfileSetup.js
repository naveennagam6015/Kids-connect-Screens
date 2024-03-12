import React from 'react'
import { ScrollView, View, StyleSheet, Text, Image, Pressable, Platform } from 'react-native'
import { TextBold, TextLight, TextRegular } from '../assets/fonts/CustomText'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { color } from '../assets/colors/theme';
import { AntDesign, MaterialIcons, Foundation, Ionicons } from '@expo/vector-icons';


export default function ProfileSetup() {
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
                        // completedStepIconBorderColor="red"
                        completedStepIconColor={color.secondaryOrange}
                        completedProgressBarColor={color.secondaryOrange}
                        activeStepNumColor="yourActiveStepNumColor"
                        completedStepNumColor="yourCompletedStepNumColor"
                    >
                        <ProgressStep label="Profile Setup">
                            <TextBold style={[styles.Headingtext]}>Active Profiles</TextBold>

                            <View style={[styles.Card]}>
                                <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                                    <View style={[styles.flexrow, { alignItems: 'center' }]}>
                                        <View>
                                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                        </View>
                                        <View style={{ alignItems: 'flex-start' }}>
                                            <TextBold style={[styles.childrenname]}>Samanthaa</TextBold>
                                            <TextBold style={{ color: color.neutral[300] }}>by Shreyas (Father)</TextBold>
                                        </View>
                                    </View>
                                    <View>
                                        <TextBold>
                                            10am - 12pm
                                        </TextBold>
                                        <TextLight style={[styles.endtime]}>
                                            Ends in: <TextLight style={[styles.endtime]}>1hr 15min</TextLight>
                                        </TextLight>
                                    </View>
                                </View>
                                <View style={[styles.flexrow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                                    <View style={{ padding: 5, marginHorizontal: 10 }}>
                                        <View>
                                            <MaterialIcons name="message" size={20} color="black" />
                                        </View>
                                        <View>
                                            <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
                                        </View>
                                    </View>
                                    <View style={{ padding: 5, marginHorizontal: 10 }}>
                                        <View>
                                            <Ionicons name="call" size={20} color="black" />
                                        </View>
                                        <View>
                                            <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
                                        </View>
                                    </View>
                                    <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                                        <Pressable
                                            style={[styles.flexrow]}>
                                            <TextBold style={[styles.childrenname]}>Know more details </TextBold>
                                            <AntDesign style={[styles.arrow]} name="right" size={16} color={color.fontcolor} />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.Card]}>
                                <View>
                                    <TextBold style={[styles.Headingtext]}>Choose Kids Profiles </TextBold>
                                    <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                                        <View style={{ alignItems: 'center' }}>
                                            <View>
                                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                            </View>
                                            <View>
                                                <TextRegular style={[styles.childrenname]}>Samanthaa</TextRegular>
                                            </View>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <View>
                                                <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                            </View>
                                            <View>
                                                <TextRegular style={[styles.childrenname]}>Pratheek</TextRegular>
                                            </View>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <View>
                                                <AntDesign name="pluscircle" size={75} color={color.accent} />
                                            </View>
                                            <View>
                                                <TextRegular style={[styles.childrenname]}>Add</TextRegular>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <TextBold style={[styles.Headingtext]}>Choose Pets Profiles</TextBold>
                                        <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
                                            <View style={{ alignItems: 'center' }}>
                                                <View>
                                                    <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                                </View>
                                                <View>
                                                    <TextRegular style={[styles.childrenname]}>Lucy</TextRegular>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center' }}>
                                                <View>
                                                    <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                                                </View>
                                                <View>
                                                    <TextRegular style={[styles.childrenname]}>Trippy</TextRegular>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center' }}>
                                                <View>
                                                    <AntDesign name="pluscircle" size={75} color={color.accent} />
                                                </View>
                                                <View>
                                                    <TextRegular style={[styles.childrenname]}>Add</TextRegular>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TextRegular>You have selected Jay.jr</TextRegular>
                                <View style={[styles.flexrow]}>
                                    <View style={{ alignItems: 'center' }}>
                                        <View>
                                            <Image style={[styles.profilepicactive]} source={require('../assets/images/women.png')} />
                                        </View>
                                        <View>
                                            <TextRegular style={[styles.childrenname]}>Samanthaa</TextRegular>
                                        </View>
                                    </View>
                                    <View>

                                    </View>
                                </View>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Tags Setup">
                            <View>
                                {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}> */}
                                <View style={{ alignItems: 'center' }}>
                                    <View>
                                        <Image style={[styles.profilepicactive2]} source={require('../assets/images/women.png')} />
                                    </View>
                                    <View>
                                        <TextRegular style={[styles.childrenname]}>Samanthaa</TextRegular>
                                    </View>
                                </View>
                                <View style={styles.Card1}>
                                    <View style={{ justifyContent: "flex-end" }}>
                                        <Foundation name="info" size={24} color="black" />
                                    </View>
                                    <View style={[styles.Tags]}>
                                        <TextRegular>Introvert</TextRegular>
                                    </View>
                                </View>
                                <View style={styles.Card1}>
                                    <View style={{ justifyContent: "space-between" }}>
                                        <TextRegular>Based on these tags you will get Kids suggestions.</TextRegular>
                                        <Foundation name="info" size={24} color="black" />
                                    </View>
                                    <View style={[styles.Tags]}>
                                        <TextRegular>Introvert</TextRegular>
                                    </View>
                                </View>
                                <TextBold style={[styles.Headingtext]}>Choose from...</TextBold>
                                <View>
                                    <View style={[styles.Tags]}>
                                        <TextRegular>Extrovert</TextRegular>
                                    </View>
                                    <View style={[styles.flexrow]}>
                                        <TextRegular>View All</TextRegular>
                                        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                                    </View>
                                </View>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Third Step">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>

            </View>

        </ScrollView >
    )
}
const styles = StyleSheet.create({
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
    }, Card1: {
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
        marginTop: 50,
        padding: 15,
        justifyContent: 'center'
    },
});