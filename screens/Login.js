import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../assets/colors/theme";


export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>kids Connect</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        justifyContent:'center'
    },
    heading:{
        fontSize:60,
        alignSelf:'center',
        color:tokens.neutral[700]
    }
})