import React, {useState, useEffect} from 'react';
import globalStyles from './globalStyles';
import { Text, View, Image } from 'react-native';

export default function Header() {

    return (
        <View style={globalStyles.logoContainer}>
            <Image 
                source={require("../logo.png")}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.logoText}>Comic Book Roster</Text>
        </View>
        
    )
}