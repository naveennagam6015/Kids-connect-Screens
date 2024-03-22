import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import Search from '../components/Search'
import { Image } from 'react-native';
import { color } from '../assets/colors/theme';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { TextBold, TextMedium, TextRegular } from '../assets/fonts/CustomText';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;
    return (
        <View>

            <ScrollView>

                <View style={[styles.container]}>
                    <View style={[styles.flexrow, { alignItems: "center", justifyContent: "center" }]}>
                        <View style={{ width: "85%" }}>
                            <Search />
                        </View>
                        <View style={[styles.flexrow, { alignItems: "center" }]}>
                            <FontAwesome style={{ marginLeft: 5 }} name="filter" size={20} color={color.accent} />
                            <TextBold>Filter</TextBold>
                        </View>
                    </View>
                    <View style={[styles.flexrow, { alignItems: "center", marginTop: 10, justifyContent: "space-between" }]}>
                        <View style={[styles.flexrow]}>
                            <View style={[styles.Buttoncard2]}>
                                <Pressable
                                    style={[styles.flexrow]}>
                                    <TextBold style={[styles.btnPrimaryTextsize]}>12 Groups</TextBold>
                                </Pressable>
                            </View>
                            <View style={[styles.Buttoncard]}>
                                <Pressable
                                    style={[styles.flexrow]}>
                                    <TextBold style={[styles.btnPrimaryTextsize]}>10 Primary</TextBold>
                                </Pressable>
                            </View>
                            <View style={[styles.Buttoncard]}>
                                <Pressable
                                    style={[styles.flexrow]}>
                                    <TextBold style={[styles.btnPrimaryTextsize]}>101 Individuals</TextBold>
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.flexrow, { alignItems: "center", justifyContent: "space-between" }]}>
                            <Ionicons name="call" size={16} color="black" />
                            <TextBold style={{ marginHorizontal: 5 }}>Calls</TextBold>
                            <View style={{ justifyContent: "center", alignItems: "center", borderRadius: 50, height: 17, width: 17, backgroundColor: color.primary }}>
                                <TextBold style={{ fontSize: 14, color: color.white }}>2</TextBold>
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
            <TouchableOpacity
                onPress={() => navigation.navigate('ChatAddingGroup')}
                style={{ position: 'absolute', bottom: 30, right: 30, padding: 10, borderRadius: 10, }}>
                <View style={{ alignItems: 'center' }}>
                    <AntDesign name="pluscircle" size={60} color={color.accent} />
                </View>
            </TouchableOpacity>
        </View>

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
        marginBottom: 80,
        padding: 15,
        justifyContent: 'center'
    },
});