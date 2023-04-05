import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeNavigator from './HomeNavigator'
import Header from './common/Header'

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeNavigator />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({})