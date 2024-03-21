import React from 'react'
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText'
import { Image, TextInput, View, StyleSheet, ScrollView } from 'react-native'
import { color } from '../assets/colors/theme'
import { Entypo } from '@expo/vector-icons';
export default function GroupSettings() {
    return (
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
                        <Entypo name="dots-three-vertical" size={20} color={color.neutral[300]} />
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
    )
}
const styles = StyleSheet.create({
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
    container: {
        marginTop: 50,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
})