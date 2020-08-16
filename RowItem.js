import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Text, 
    SafeAreaView, 
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.offBlue,
    },
    text: {
        fontSize: 16,
        color: colors.text,
    },
    separator: {
        backgroundColor:colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft:20,
    },
});

export const RowItem = ({ text, rightIcon, onPress, number }) => {
    return (
        <TouchableOpacity style={styles.row} onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
          {rightIcon}
        </TouchableOpacity>
    );
};

export const RowSeperator = () => <View style={styles.separator} />;