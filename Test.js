import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Test() {
    const navigation = useNavigation();

    return (
        <View style={{ width: 1920, height: 1080, position: 'relative', backgroundColor: 'white' }}>
            <View style={{ width: 1920, height: 100, left: 0, top: 0, position: 'absolute', backgroundColor: 'white' }}>
                <Image style={{ width: 130, height: 68, left: 37, top: 16, position: 'absolute' }} source={{ uri: 'https://via.placeholder.com/130x68' }} />
            </View>
            <View style={{ width: 678, height: 618, left: 621, top: 231, position: 'absolute' }}>
                <Text style={{ width: 443.99, height: 37.45, left: 116.56, top: 0, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', flexWrap: 'wrap' }}>Welcome Back! Login to CRM</Text>
                <Text style={{ width: 179.73, height: 24.69, left: 249.13, top: 482.65, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', flexWrap: 'wrap' }}>Or Connect Using</Text>
                <View style={{ width: 678, height: 380.31, left: 0, top: 70, position: 'absolute' }}>
                    <View style={{ width: 678, height: 78.31, left: 0, top: 29.60, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 10 }} />
                    <View style={{ width: 678, height: 78.31, left: 0, top: 165.79, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 10 }} />
                    <View style={{ width: 678, height: 78.31, left: 0, top: 301.99, position: 'absolute', backgroundColor: '#F3AF00', borderRadius: 10 }} />
                    <Text style={{ width: 104, height: 34, left: 282, top: 328, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', flexWrap: 'wrap' }}>Login</Text>
                    <Text style={{ width: 175, height: 20, left: 490, top: 253, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', flexWrap: 'wrap' }}>Forget Password</Text>
                    <Text style={{ width: 240, height: 24, left: 9, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', flexWrap: 'wrap' }}>Username or Email</Text>
                    <Text style={{ width: 189, height: 25, left: 9, top: 136, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', flexWrap: 'wrap' }}>Password</Text>
                </View>
                <View style={{ width: 678, height: 78.31, left: 0, top: 539.69, position: 'absolute' }}>
                    <View style={{ width: 678, height: 78.31, left: 0, top: 0, position: 'absolute', backgroundColor: '#658FFC', borderRadius: 10 }} />
                    <Text style={{ width: 474.24, height: 33.20, left: 132.57, top: 22.13, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', flexWrap: 'wrap' }}>Login with <Text style={{ fontWeight: '700' }}>Glansa Google Account</Text></Text>
                    <View style={{ width: 70.29, height: 67.25, left: 5.34, top: 5.11, position: 'absolute' }}>
                        <View style={{ width: 70.29, height: 67.25, left: 0, top: 0, position: 'absolute', backgroundColor: 'white', borderRadius: 10 }} />
                        <Image style={{ width: 50.72, height: 48.52, left: 9.79, top: 9.36, position: 'absolute' }} source={{ uri: 'https://via.placeholder.com/51x49' }} />
                    </View>
                </View>
            </View>
        </View>
    );
}