import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: "row", height: 60 }}>
                <TouchableOpacity><Text>Remote Contacts</Text></TouchableOpacity>
                <TouchableOpacity><Text>Phone Contacts</Text></TouchableOpacity>
                <TouchableOpacity><Text>Central Contacts</Text></TouchableOpacity>
                <TouchableOpacity><Text>My Contacts</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})