import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import axios from "axios";
import { BASEURL } from "@env";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextBold, TextRegular } from '../assets/fonts/CustomText';
import { MaterialIcons } from '@expo/vector-icons';

import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { color } from '../assets/colors/theme';


export default function FAQs() {
    const navigation = useNavigation();
    const [authData, setAuthData] = useState({});
    const [pagecontent, setPagecontent] = useState('');
    const [pagetitle, setPagetitle] = useState('');

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState);
    };

    useEffect(() => {




        const AboutUsData = async () => {
            const authData = JSON.parse(await AsyncStorage.getItem('authData'))

            axios({
                method: 'get',
                url: `${BASEURL}api/allPages/3`,
                // headers: {
                //     Authorization: `Bearer ${authData.token}`
                // }
            }).then(res => {
                console.log(res, "Naveen")
                setPagecontent(res.data.data.Pagecontent);
                setPagetitle(res.data.data.Pagetitle);
            }).catch(err => {
                console.log(err)
            });
        }

        AboutUsData();


    }, []);
    const formattedContent = pagecontent.replace(/<\/?p>/g, '');
    console.log(formattedContent)
    return (
        <ScrollView>
            <View style={[styles.container]}>

                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <TextRegular style={{ textAlign: 'justify', fontSize: 16 }}>{formattedContent}</TextRegular>
                </View>

                <Collapse isCollapsed={isCollapsed}>
                    <CollapseHeader>
                        <View style={[styles.accordionheader, styles.flexrow]}>
                            <TextBold style={[styles.headerfont]}>Company related</TextBold>
                            <MaterialIcons
                                name={isCollapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"}
                                size={24}
                                color="black"
                            />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={[styles.accordionbody]}>

                            <TextRegular>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</TextRegular>
                        </View>

                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <View style={[styles.accordionheader, styles.flexrow]}>
                            <TextBold style={[styles.headerfont]}>User on boarding related</TextBold>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={[styles.accordionbody]}>

                            <TextRegular>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</TextRegular>
                        </View>

                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <View style={[styles.accordionheader, styles.flexrow]}>
                            <TextBold style={[styles.headerfont]}>User related</TextBold>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={[styles.accordionbody]}>

                            <TextRegular>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</TextRegular>
                        </View>

                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <View style={[styles.accordionheader, styles.flexrow]}>
                            <TextBold style={[styles.headerfont]}>Kids connect related</TextBold>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={[styles.accordionbody]}>

                            <TextRegular>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.</TextRegular>
                        </View>

                    </CollapseBody>
                </Collapse>


                <AccordionList
                // list={this.state.list}
                // header={this._head}
                // body={this._body}
                // keyExtractor={item => item.key}
                />

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    flexrow: {
        flexDirection: "row"
    },
    headerfont: {
        fontSize: 18
    },
    accordionbody: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: color.neutral[200],
        borderRadius: 8
    },
    accordionheader: {
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        backgroundColor: color.accent,
        borderRadius: 8
    },
    container: {
        padding: 15,
        justifyContent: "center",
    },
})
