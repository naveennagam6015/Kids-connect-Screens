import React, { useState } from 'react'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { Image, TextInput, View, StyleSheet, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native'
import { color } from '../assets/colors/theme'
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function GroupSettings() {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [openmessiage, setOpenmessiage] = useState(false);
    const [opendelete, setOpendelete] = useState(false);

    const onClose = () => {
        setOpen(false);
        setOpenmessiage(false);
        setOpendelete(false);
    };
    return (
        <View>
            <ScrollView>
                <View style={[styles.container]}>
                    <View style={{ alignItems: 'center', justifyContent: "center", marginVertical: 10 }}>
                        <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        <TextBold style={[styles.childrenname]}>This is group name</TextBold>
                    </View>
                    <TextBold>Group Name</TextBold>
                    <TextInput style={styles.inputBox} placeholder="Enter Group Name" />
                    <TextBold>Group Description</TextBold>
                    <TextInput style={styles.textArea} multiline={true} numberOfLines={5} placeholder="Enter Description" onChangeText={e => setAddress(e)} />
                    <TextRegular style={[styles.textnetural,]}>List of members in group</TextRegular>

                    {/* Main chat */}
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>

                            <TouchableOpacity>
                                <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                            </TouchableOpacity>
                        </View>

                    </View>


                    {/* Dummy chat start */}
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    <View style={[styles.flexrow, styles.justalinecenter, styles.mv10, styles.pb5, styles.line]}>
                        <View style={[styles.flexrow, styles.justalinecenter]}>
                            <View>
                                <Image style={[styles.profilepicchat]} source={require('../assets/images/women.png')} />
                            </View>
                            <View style={styles.jcfs}>
                                <View style={[styles.flexrow, styles.groupname]}>
                                    <TextMedium style={[styles.childrenname]}>Naveen</TextMedium>
                                </View>
                                <TextRegular style={[styles.textnetural,]}>Kids available Only on weekends </TextRegular>
                            </View>
                        </View>
                        <View>
                            <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
                        </View>
                    </View>
                    {/* Dummy chat end */}
                </View>

            </ScrollView >
            <TouchableOpacity style={[styles.btnPrimary, styles.flexrow, { position: 'absolute', bottom: 15, borderRadius: 10, }]}
                onPress={() => setOpen(!open)}
            >
                <TextMedium style={styles.btnText}>Delete this group</TextMedium>
                <AntDesign style={{ marginTop: 2, marginLeft: 5 }} name="arrowright" size={20} color={color.white} />
            </TouchableOpacity>

            {/* modal for skip */}
            <Modal
                animationType='slide'
                visible={open}
            >
                <View style={styles.containermodal}>
                    <TextRegular style={{ fontSize: 18, marginBottom: 5, color: color.white }}>Would you like to add a message to the group members? before deleting the group!</TextRegular>
                    <View style={[styles.btnPrimarymodal, styles.Buttoncardwidth]}>
                        <TouchableOpacity
                            onPress={() => setOpen(!openmessiage)}>
                            <TextMedium style={styles.btnText}>Yes, I would like to Inform members</TextMedium>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                        <TouchableOpacity
                            onPress={() => setOpen(!opendelete)}
                            style={[styles.flexrow, { justifyContent: "center", alignItems: "center" }]}>
                            <TextBold style={[styles.btnPrimaryTextsize]}>Skip</TextBold>
                            <MaterialIcons style={[styles.arrow, { marginLeft: 5 }]} name="arrow-forward-ios" size={12} color={color.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* modal for messiage */}
            <Modal
                animationType='slide'
                visible={openmessiage}
            >
                <View style={styles.containermodal}>
                    <TextRegular style={{ fontSize: 18, marginBottom: 5, color: color.white }}>Would you like to add a message to the group members? before deleting the group!</TextRegular>
                    <TextInput style={[styles.textArea, { backgroundColor: color.neutral[100] }]} multiline={true} numberOfLines={5} placeholder="Write a message to group members" onChangeText={e => setAddress(e)} />
                    <View style={[styles.btnPrimarymodal, styles.Buttoncardwidth]}>
                        <TouchableOpacity
                            style={[styles.flexrow, { justifyContent: "center", alignItems: "center" }]}
                            onPress={() => setOpen(!opendelete)}>
                            <TextMedium style={styles.btnText}>Next</TextMedium>
                            <MaterialIcons style={[styles.arrow, { marginLeft: 5 }]} name="arrow-forward-ios" size={12} color={color.fontcolor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* modal for delete */}
            <Modal
                animationType='slide'
                visible={open}
            >
                <View style={styles.containermodal}>
                    <TextRegular style={{ fontSize: 18, marginBottom: 5, color: color.white }}>Confirm if you want to delete the group!</TextRegular>
                    <View style={[styles.btnPrimarymodal, styles.Buttoncardwidth]}>
                        <TouchableOpacity
                        // onPress={() => setOpen(!open)}
                        >
                            <TextMedium style={styles.btnText}>Delete the group</TextMedium>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.Buttoncard, styles.Buttoncardwidth,]}>
                        <TouchableOpacity

                            style={[styles.flexrow, { justifyContent: "center", alignItems: "center" }]}>
                            <AntDesign style={[styles.arrow, { marginRight: 5 }]} name="left" size={14} color={color.white} />
                            <TextBold style={[styles.btnPrimaryTextsize]}>Back</TextBold>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}
const styles = StyleSheet.create({
    Buttoncard: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: color.accent,
        paddingVertical: 14,
        marginVertical: 10,
    },
    Buttoncardwidth: {
        width: '100%'
    },
    btnPrimaryTextsize: {
        fontSize: 18,
        color: color.white
    },
    btnPrimarymodal: {
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        marginVertical: 10,
        backgroundColor: color.primary,
    },
    btnPrimary: {
        padding: 15,
        margin: 12,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.primary,
        borderRadius: 8
    },
    btnText: {
        alignSelf: 'center',
        fontSize: 18
    },
    pb5: {
        paddingBottom: 5
    },
    line: {
        borderBottomWidth: 0.5,
        borderBottomColor: color.neutral[500]
    },
    textnetural: {
        color: color.neutral[500],
        marginVertical: 4,
        fontSize: 16,
    },
    childrenname: {
        fontSize: 18,
    },
    mv10: {
        marginVertical: 8,
    },
    justalinecenter: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    jcfs: {
        justifyContent: "flex-start"
    },
    datebtm: {
        justifyContent: "center",
        alignItems: "center"
    },
    messiagetop1: {
        justifyContent: "center",
        alignItems: "flex-start"
    },
    messiagetop2: {
        borderRadius: 100,
        padding: 2,
        backgroundColor: color.primary
    },
    messiagecount: {
        fontSize: 14,
        color: color.white
    },
    time: {
        fontSize: 12,
        marginLeft: 2,
        color: color.success
    },
    date: {
        color: color.success,
        fontSize: 12
    },
    flexrow: {
        flexDirection: 'row',
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
    inputBox: {
        padding: 10,
        borderColor: color.neutral[300],
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
        width: '100%',
        marginBottom: 16
    },
    profilepic: {
        marginRight: 8,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profilepicchat: {
        marginRight: 12,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    containermodal: {
        // marginHorizontal: 10,
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: color.neutral[500],
        justifyContent: 'center',
    },
    container: {
        marginBottom: 90,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
})