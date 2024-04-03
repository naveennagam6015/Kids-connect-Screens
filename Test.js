

import { StyleSheet, View } from 'react-native';
import { TextRegular } from './assets/fonts/CustomText'
import { useNavigation } from '@react-navigation/native';

export default function Test() {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { flexDirection: 'column', },]}>
            <TextRegular style={[styles.fontsize]}> ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away
                from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.
            </TextRegular>
            <TextRegular style={[styles.fontsize]}> ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away
                from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.
            </TextRegular>
        </View>
    );

}
const styles = StyleSheet.create({
    fontsize: {
        fontSize: 20,
        margin: 10
    },
    container: {
        flex: 1,
        // backgroundColor: 'green'
    },
    topDummy: {
        flex: 1,
        opacity: 0
    },
    bottomMain: {
        flex: 2, backgroundColor: 'darkorange',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },

});








{/* <Modal
animationType='slide'
transparent={true}
visible={setOpenpets}
>
<View style={styles.topDummy} />
<View style={[styles.containerbg]}>
    <View style={[styles.container]}>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Image style={[styles.profilepic]} source={require('../assets/images/women.png')} />
        </View>
        <TextBold>Name</TextBold>
        <TextInput style={styles.inputBox} placeholder="Enter your first name" onChangeText={(e) => setFirstName(e)} />
        <TextBold>Interests</TextBold>

        <View style={[styles.Card]}>
            <TextRegular style={{ color: color.neutral[300] }}>Explain your kids interests and Hobbies which makes easier to connect with other Kids eg: </TextRegular>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                <View style={[styles.Tags]}>
                    <TextRegular>Introvert</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.Tags]}>
                    <TextRegular>Playstation</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.Tags]}>
                    <TextRegular>Programming</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.Tags]}>
                    <TextRegular>Enthusiastic</TextRegular>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <MaterialIcons name="cancel" size={15} color={color.accent} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: 8, }}>
                    <TextRegular style={{ fontSize: 14, marginHorizontal: 5 }}>Add</TextRegular>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.addinterests]}>
                            <AntDesign name="plus" size={10} color={color.neutral[500]} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    </View>
    <View style={[styles.modalcontainer]}>
        <View style={[styles.flexrow, { justifyContent: 'space-between' }]}>
            <TouchableOpacity onPress={() => {
                setOpen(!open);
                setKidopen(!kidopen);
            }} style={[styles.Buttoncardinner, styles.Buttoncardwidth, { marginTop: 5 }]}>
                <View
                    style={[styles.flexrow]}>
                    <TextMedium style={[styles.btnPrimaryTextsize]}>Back</TextMedium>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setKidopen(!kidopen);
            }} style={[styles.Buttoncardinner2, styles.Buttoncardwidth,]}>
                <View
                    style={[styles.flexrow]}>
                    <TextMedium style={[styles.btnPrimaryTextsize]}>Add Kid</TextMedium>
                    <AntDesign style={{ marginTop: 5, marginLeft: 5, fontWeight: 500 }} name="right" size={16} color={color.fontcolor} />
                </View>
            </TouchableOpacity>
        </View>
    </View>
</View>
</Modal> */}