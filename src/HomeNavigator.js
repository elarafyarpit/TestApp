import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const HomeNavigator = () => {
    return (
        <View style={styles.bottomTabContainer}>
            <TouchableOpacity style={styles.customBtn}>
                <Text style={styles.customTxt}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customBtn}>
                <Text style={styles.customTxt}>SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customBtn}>
                <Text style={styles.customTxt}>Group SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customBtn}>
                <Text style={styles.customTxt}>E-Fax</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customBtn}>
                <Text style={styles.customTxt}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};


export default HomeNavigator;

const styles = StyleSheet.create({
    bottomTabContainer: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: 'pink',
    },
    customBtn: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },
    customTxt: {
        color: '#000',
        fontSize: 10,
        fontWeight: '600',
    },
});
