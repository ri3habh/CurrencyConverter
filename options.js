import React from 'react';
import { 
    SafeAreaView, ScrollView, Linking, Alert
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

import { RowItem, RowSeperator } from '../components/RowItem';

const openURL = (url) => {
    return Linking.openURL(url).catch(() => { 
        Alert.alert('Sorry, something went wrong!', 'Please try again!');
    });
}

export default () => {
    return (
        <SafeAreaView style={ { backgroundColor: colors.skyBlue, flex:1}}>
            <ScrollView> 
            <RowItem 
            text = "Themes"
            onPress={() => alert("todo!")}
            rightIcon={
                <Entypo name="chevron-right" size={20} color = {colors.blue}/>
                } 
            />
         <RowSeperator/>

            <RowItem 
            text = "React Native Basics"
            onPress={() => openURL("https://www.youtube.com")}
            rightIcon={
            <Entypo name="export" size={20} color = {colors.blue}/>
        }
        />
        <RowSeperator/>
            
             <RowItem 
            text = "React Native By Example"
            onPress={() => openURL("https://www.reddit.com")}
            rightIcon={
            <Entypo name="export" size={20} color = {colors.blue}/>
        }
        />
            </ScrollView>
        </SafeAreaView>
    );
};