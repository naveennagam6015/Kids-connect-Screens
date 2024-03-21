import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native'
import Search from '../components/Search'
import { Image } from 'react-native';
import { color } from '../assets/colors/theme';
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText';
export default function ChatAddingGroup() {
    const windowWidth = Dimensions.get('window').width;
    return (
        <ScrollView>

            <View style={[styles.container, { marginTop: 20 }]}>
                <View style={{ paddingVertical: 30 }}>
                    <TextRegular>Selected members will appear here</TextRegular>
                </View>
                <View style={[styles.line]}></View>

                {/* main chat card */}
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>

                {/* dummy Start */}
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                <View style={[styles.flexrow, styles.justalinecenter, styles.mv10]}>
                    <View style={[styles.flexrow, styles.justalinecenter]}>
                        <View>
                            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
                        </View>
                        <View style={styles.jcfs}>
                            <View style={[styles.flexrow, styles.groupname]}>
                                <TextMedium style={[styles.childrenname]}>College Group</TextMedium>
                            </View>
                            <TextRegular style={[styles.textnetural,]}>Hi, I hope your good and we </TextRegular>
                        </View>
                    </View>
                    <View>
                        <TextBold style={[styles.date]}>14/03/24</TextBold>
                        <View style={[styles.flexrow, styles.datebtm]}>
                            <View style={[styles.messiagetop1]}>
                                <View style={styles.messiagetop2}>
                                    <TextBold style={styles.messiagecount}>10</TextBold>
                                </View>
                            </View>
                            <TextRegular style={[styles.time]}>16:15</TextRegular>
                        </View>
                    </View>
                </View>
                {/* dummy end */}


            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 0.8,
        borderBottomColor: color.neutral[300]
    },
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
    Buttoncard: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color.neutral[300],
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 5,
        marginRight: 5
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
        padding: 5,
        marginRight: 5
    },
    flexrow: {
        flexDirection: 'row',
    },
    textnetural: {
        color: color.neutral[500],
        marginVertical: 4,
        fontSize: 16,
    },
    childrenname: {
        fontSize: 18,
    },
    profilepic: {
        marginRight: 12,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    container: {
        padding: 15,
        justifyContent: 'center'
    },
});