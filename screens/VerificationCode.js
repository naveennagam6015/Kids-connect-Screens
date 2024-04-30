import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View,TouchableOpacity,Text ,StyleSheet} from 'react-native';
// import { TouchableOpacity, Text } from 'react-native-gesture-handler';

export default function VerificationScreen(){
    const navigation = useNavigation();


  return (
   <View style={styles.container}>
    <TouchableOpacity  onPress={() => navigation.navigate('Passwordsetup')}>
        <Text>Verify</Text>
     </TouchableOpacity>
   </View>
  );

}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: "center",
        marginTop: 50
    },
})